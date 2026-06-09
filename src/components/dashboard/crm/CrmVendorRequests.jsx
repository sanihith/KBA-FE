import React, { useState, useEffect } from 'react';
import AdvancedSearchBar from '../AdvancedSearchBar';
import { MoreHorizontal, ArrowUpDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import VendorRequestDetails from './VendorRequestDetails';
import { vendorRequestsApi } from '@/services/api';

const CrmVendorRequests = () => {
    const [selectedRequest, setSelectedRequest] = useState(null);
    const [vendorRequests, setVendorRequests] = useState([]);
    const [loading, setLoading] = useState(true);

    // Load vendor requests from API
    useEffect(() => {
        loadVendorRequests();
    }, []);

    const loadVendorRequests = async () => {
        try {
            setLoading(true);
            const { data, success } = await vendorRequestsApi.getAll();
            if (success) {
                setVendorRequests(data);
            }
        } catch (error) {
            console.error('Failed to load vendor requests:', error);
        } finally {
            setLoading(false);
        }
    };

    if (selectedRequest) {
        return <VendorRequestDetails onClose={() => setSelectedRequest(null)} vendorRequest={selectedRequest} />;
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
                                <th className="px-4 py-3">Description</th>
                                <th className="px-4 py-3">Request ID</th>
                                <th className="px-4 py-3">Customer Name</th>
                                <th className="px-4 py-3">Fulfilled</th>
                                <th className="px-4 py-3">Gift Vouchers</th>
                                <th className="px-4 py-3 flex items-center gap-1">
                                    Status <ArrowUpDown size={12} />
                                </th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-border">
                            {loading ? (
                                <tr>
                                    <td colSpan={7} className="px-4 py-8 text-center text-muted-foreground">
                                        Loading vendor requests...
                                    </td>
                                </tr>
                            ) : vendorRequests.length === 0 ? (
                                <tr>
                                    <td colSpan={7} className="px-4 py-8 text-center text-muted-foreground">
                                        No vendor requests found
                                    </td>
                                </tr>
                            ) : (
                                vendorRequests.map((vr) => (
                                    <tr
                                        key={vr.id}
                                        className="hover:bg-muted/50 transition-colors cursor-pointer"
                                        onClick={() => setSelectedRequest(vr)}
                                    >
                                        <td className="px-4 py-3">
                                            <input type="checkbox" className="rounded border-gray-300" onClick={(e) => e.stopPropagation()} />
                                        </td>
                                        <td className="px-4 py-3 text-teal-600 font-medium">{vr.description}</td>
                                        <td className="px-4 py-3">{vr.requestId}</td>
                                        <td className="px-4 py-3">{vr.customerName}</td>
                                        <td className="px-4 py-3">{vr.fulfilledCount} record{vr.fulfilledCount !== 1 ? 's' : ''}</td>
                                        <td className="px-4 py-3">{vr.giftVouchers || '-'}</td>
                                        <td className="px-4 py-3 uppercase text-xs font-bold text-muted-foreground">{vr.status}</td>
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

export default CrmVendorRequests;