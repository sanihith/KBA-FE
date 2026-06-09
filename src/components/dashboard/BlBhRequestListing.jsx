import React, { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import AdvancedSearchBar from './AdvancedSearchBar';
import RequestDetails from './RequestDetails';
import { Button } from "@/components/ui/button";
import { MoreHorizontal } from "lucide-react";
import { crmApi } from '@/services/api';

const BlBhRequestListing = () => {
    const [searchParams, setSearchParams] = useSearchParams();
    const requestIdParam = searchParams.get('requestId');
    const [filter, setFilter] = useState(null);
    const [requests, setRequests] = useState([]);
    const [loading, setLoading] = useState(true);

    // Load requests from API
    useEffect(() => {
        loadRequests();
    }, []);

    const loadRequests = async () => {
        try {
            setLoading(true);
            const { data, success } = await crmApi.getAll();
            if (success) {
                setRequests(data);
            }
        } catch (error) {
            console.error('Failed to load requests:', error);
        } finally {
            setLoading(false);
        }
    };

    const selectedRequest = requestIdParam ? requests.find(r => r.id === requestIdParam) : null;

    const setSelectedRequest = (request) => {
        setSearchParams((prev) => {
            const next = new URLSearchParams(prev);
            if (request) {
                next.set('requestId', request.id);
            } else {
                next.delete('requestId');
            }
            return next;
        });
    };

    const handleSearch = (searchParams) => {
        console.log("Searching with:", searchParams);
        setFilter(searchParams);
    };

    // Filter requests based on active filter
    const filteredRequests = filter ? requests.filter(r => {
        const fieldValue = r[filter.field]?.toString().toLowerCase() || '';
        return fieldValue.includes(filter.value.toLowerCase());
    }) : requests;

    // Show detail page when a request is selected
    if (selectedRequest) {
        return (
            <RequestDetails
                request={selectedRequest}
                onBack={() => setSelectedRequest(null)}
            />
        );
    }

    return (
        <div className="space-y-6">
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
                <AdvancedSearchBar onSearch={handleSearch} />
            </div>

            {filter && (
                <div className="bg-muted/50 p-2 rounded text-sm text-muted-foreground">
                    Active Filter: <span className="font-medium text-foreground">{filter.field}</span> contains <span className="font-medium text-foreground">"{filter.value}"</span>
                </div>
            )}

            <div className="border rounded-md overflow-hidden bg-card">
                <div className="overflow-x-auto">
                    <table className="w-full text-sm text-left">
                        <thead className="bg-muted text-muted-foreground uppercase text-xs font-medium">
                            <tr>
                                <th className="px-4 py-3">Request ID</th>
                                <th className="px-4 py-3">Customer Code</th>
                                <th className="px-4 py-3">Customer Name</th>
                                <th className="px-4 py-3">Division</th>
                                <th className="px-4 py-3">Region</th>
                                <th className="px-4 py-3">Speciality</th>
                                <th className="px-4 py-3">Location</th>
                                <th className="px-4 py-3 text-right">MSP</th>
                                <th className="px-4 py-3 text-right">Cust. Exp.</th>
                                <th className="px-4 py-3">Request Date</th>
                                <th className="px-4 py-3">Due Date</th>
                                <th className="px-4 py-3">Status</th>
                                <th className="px-4 py-3 text-center">Actions</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-border">
                            {loading ? (
                                <tr>
                                    <td colSpan={13} className="px-4 py-8 text-center text-muted-foreground">
                                        Loading requests...
                                    </td>
                                </tr>
                            ) : filteredRequests.length === 0 ? (
                                <tr>
                                    <td colSpan={13} className="px-4 py-8 text-center text-muted-foreground">
                                        No requests found
                                    </td>
                                </tr>
                            ) : (
                                filteredRequests.map((row) => (
                                    <tr
                                        key={row.id}
                                        className="hover:bg-muted/50 transition-colors cursor-pointer"
                                        onClick={() => setSelectedRequest(row)}
                                    >
                                        <td className="px-4 py-3 font-medium">{row.id}</td>
                                        <td className="px-4 py-3">{row.customerCode || row.id}</td>
                                        <td className="px-4 py-3">{row.customerName}</td>
                                        <td className="px-4 py-3">{row.division}</td>
                                        <td className="px-4 py-3">{row.region}</td>
                                        <td className="px-4 py-3">{row.speciality}</td>
                                        <td className="px-4 py-3">{row.location}</td>
                                        <td className="px-4 py-3 text-right">₹{row.msp?.toLocaleString() || 0}</td>
                                        <td className="px-4 py-3 text-right">{typeof row.customerExpectation === 'number' ? row.customerExpectation.toLocaleString('en-IN', { minimumFractionDigits: 2 }) : row.customerExpectation}</td>
                                        <td className="px-4 py-3">{row.requestDate}</td>
                                        <td className="px-4 py-3">{row.dueDate}</td>
                                        <td className="px-4 py-3">
                                            <span className={`inline-flex items-center px-2 py-1 rounded-full text-xs font-medium
                                                ${row.status === 'APPROVED' || row.status === 'Approved' ? 'bg-green-100 text-green-700' :
                                                    row.status === 'REJECTED' || row.status === 'Rejected' ? 'bg-red-100 text-red-700' :
                                                        row.status === 'IN PROCESS' ? 'bg-blue-100 text-blue-700' :
                                                            'bg-yellow-100 text-yellow-700'}`}>
                                                {row.status}
                                            </span>
                                        </td>
                                        <td className="px-4 py-3 text-center">
                                            <Button variant="ghost" size="icon" className="h-8 w-8" onClick={(e) => e.stopPropagation()}>
                                                <MoreHorizontal className="h-4 w-4" />
                                            </Button>
                                        </td>
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

export default BlBhRequestListing;