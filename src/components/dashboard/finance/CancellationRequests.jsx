import React, { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import AdvancedSearchBar from '../AdvancedSearchBar';
import { MoreHorizontal, ArrowUpDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import CancellationRequestDetails from './CancellationRequestDetails';
import { cancellationApi } from '@/services/api';

const CancellationRequests = () => {
    const [searchParams, setSearchParams] = useSearchParams();
    const requestIdParam = searchParams.get('request');
    const [selectedRequestId, setSelectedRequestId] = useState(requestIdParam);
    const [cancellationRequests, setCancellationRequests] = useState([]);
    const [loading, setLoading] = useState(true);

    // Load cancellation requests from API
    useEffect(() => {
        loadCancellationRequests();
    }, []);

    const loadCancellationRequests = async () => {
        try {
            setLoading(true);
            const { data, success } = await cancellationApi.getAll();
            if (success) {
                setCancellationRequests(data);
            }
        } catch (error) {
            console.error('Failed to load cancellation requests:', error);
        } finally {
            setLoading(false);
        }
    };

    // Get the selected request object
    const selectedRequest = selectedRequestId 
        ? cancellationRequests.find(cr => cr.id === selectedRequestId)
        : null;

    useEffect(() => {
        setSearchParams((prev) => {
            const next = new URLSearchParams(prev);
            if (selectedRequestId) {
                next.set('request', selectedRequestId);
            } else {
                next.delete('request');
            }
            return next;
        }, { replace: true });
    }, [selectedRequestId]);

    if (selectedRequest) {
        return <CancellationRequestDetails onClose={() => setSelectedRequestId(null)} cancellationRequest={selectedRequest} />;
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
                                <th className="px-4 py-3 font-bold text-black">Request ID</th>
                                <th className="px-4 py-3 font-bold text-black">Request Date</th>
                                <th className="px-4 py-3 font-bold text-black">Due Date</th>
                                <th className="px-4 py-3 font-bold text-black">Division</th>
                                <th className="px-4 py-3 font-bold text-black">Customer Code</th>
                                <th className="px-4 py-3 font-bold text-black">Customer Name</th>
                                <th className="px-4 py-3 font-bold text-black">Speciality</th>
                                <th className="px-4 py-3 font-bold text-black">Location</th>
                                <th className="px-4 py-3 font-bold text-black">Region</th>
                                <th className="px-4 py-3 font-bold text-black">Value</th>
                                <th className="px-4 py-3 font-bold text-black flex items-center gap-1">
                                    Status <ArrowUpDown size={12} />
                                </th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-border">
                            {loading ? (
                                <tr>
                                    <td colSpan={12} className="px-4 py-8 text-center text-muted-foreground">
                                        Loading cancellation requests...
                                    </td>
                                </tr>
                            ) : cancellationRequests.length === 0 ? (
                                <tr>
                                    <td colSpan={12} className="px-4 py-8 text-center text-muted-foreground">
                                        No cancellation requests found
                                    </td>
                                </tr>
                            ) : (
                                cancellationRequests.map((cr) => (
                                    <tr
                                        key={cr.id}
                                        className="hover:bg-muted/50 transition-colors cursor-pointer"
                                        onClick={() => setSelectedRequestId(cr.id)}
                                    >
                                        <td className="px-4 py-3">
                                            <input type="checkbox" className="rounded border-gray-300" onClick={(e) => e.stopPropagation()} />
                                        </td>
                                        <td className="px-4 py-3 text-teal-600 font-medium">{cr.requestId}</td>
                                        <td className="px-4 py-3">{cr.requestDate}</td>
                                        <td className="px-4 py-3">{cr.dueDate}</td>
                                        <td className="px-4 py-3">{cr.division}</td>
                                        <td className="px-4 py-3">{cr.customerCode}</td>
                                        <td className="px-4 py-3">{cr.description}</td>
                                        <td className="px-4 py-3">{cr.speciality}</td>
                                        <td className="px-4 py-3">{cr.location}</td>
                                        <td className="px-4 py-3">{cr.region}</td>
                                        <td className="px-4 py-3">{typeof cr.serviceAmount === 'number' ? cr.serviceAmount.toFixed(2) : cr.serviceAmount}</td>
                                        <td className="px-4 py-3 uppercase text-xs font-bold text-muted-foreground">{cr.status}</td>
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

export default CancellationRequests;