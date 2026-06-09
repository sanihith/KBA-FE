import React, { useState, useEffect } from 'react';
import AdvancedSearchBar from '../AdvancedSearchBar';
import { MoreHorizontal, ArrowUpDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import AcknowledgementDetails from './AcknowledgementDetails';
import { acknowledgementsApi } from '@/services/api';

const VendorAcknowledgment = () => {
    const [selectedRequest, setSelectedRequest] = useState(null);
    const [acknowledgements, setAcknowledgements] = useState([]);
    const [loading, setLoading] = useState(true);

    // Load acknowledgements from API
    useEffect(() => {
        loadAcknowledgements();
    }, []);

    const loadAcknowledgements = async () => {
        try {
            setLoading(true);
            const { data, success } = await acknowledgementsApi.getAll();
            if (success) {
                setAcknowledgements(data);
            }
        } catch (error) {
            console.error('Failed to load acknowledgements:', error);
        } finally {
            setLoading(false);
        }
    };

    if (selectedRequest) {
        return <AcknowledgementDetails onClose={() => setSelectedRequest(null)} acknowledgement={selectedRequest} />;
    }

    return (
        <div className="space-y-6">
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
                <AdvancedSearchBar />
            </div>

            <div className="border rounded-md overflow-hidden bg-card">
                <div className="overflow-x-auto">
                    <table className="w-full text-sm text-left">
                        <thead className="bg-muted text-muted-foreground uppercase text-xs font-medium">
                            <tr>
                                <th className="px-4 py-3 min-w-[30px]"></th>
                                <th className="px-4 py-3">Request ID</th>
                                <th className="px-4 py-3">Request Date</th>
                                <th className="px-4 py-3">Due Date</th>
                                <th className="px-4 py-3">Division</th>
                                <th className="px-4 py-3">Customer Name</th>
                                <th className="px-4 py-3">Customer Code</th>
                                <th className="px-4 py-3">Fulfiller</th>
                                <th className="px-4 py-3">Speciality</th>
                                <th className="px-4 py-3">Vendor Details</th>
                                <th className="px-4 py-3">Location</th>
                                <th className="px-4 py-3">Region</th>
                                <th className="px-4 py-3">Value</th>
                                <th className="px-4 py-3 flex items-center gap-1">
                                    Status <ArrowUpDown size={12} />
                                </th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-border">
                            {loading ? (
                                <tr>
                                    <td colSpan={14} className="px-4 py-8 text-center text-muted-foreground">
                                        Loading acknowledgements...
                                    </td>
                                </tr>
                            ) : acknowledgements.length === 0 ? (
                                <tr>
                                    <td colSpan={14} className="px-4 py-8 text-center text-muted-foreground">
                                        No acknowledgements found
                                    </td>
                                </tr>
                            ) : (
                                acknowledgements.map((ack) => (
                                    <tr
                                        key={ack.id}
                                        className="hover:bg-muted/50 transition-colors cursor-pointer"
                                        onClick={() => setSelectedRequest(ack)}
                                    >
                                        <td className="px-4 py-3">
                                            <input type="checkbox" className="rounded border-gray-300" onClick={(e) => e.stopPropagation()} />
                                        </td>
                                        <td className="px-4 py-3 text-teal-600 font-medium">{ack.requestId}</td>
                                        <td className="px-4 py-3">{ack.requestDate}</td>
                                        <td className="px-4 py-3">{ack.dueDate}</td>
                                        <td className="px-4 py-3">{ack.division}</td>
                                        <td className="px-4 py-3">{ack.customerName}</td>
                                        <td className="px-4 py-3">{ack.customerCode}</td>
                                        <td className="px-4 py-3"></td>
                                        <td className="px-4 py-3">{ack.speciality?.substring(0, 20)}...</td>
                                        <td className="px-4 py-3 text-teal-600">{ack.vendors?.length || 0} record{ack.vendors?.length !== 1 ? 's' : ''}</td>
                                        <td className="px-4 py-3">{ack.location?.substring(0, 15)}...</td>
                                        <td className="px-4 py-3">{ack.region}</td>
                                        <td className="px-4 py-3">{ack.value?.toFixed(2)}</td>
                                        <td className="px-4 py-3 uppercase text-xs font-bold text-muted-foreground">{ack.status?.substring(0, 20)}...</td>
                                    </tr>
                                ))
                            )}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default VendorAcknowledgment;