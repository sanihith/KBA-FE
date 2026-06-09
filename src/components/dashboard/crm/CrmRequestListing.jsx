import React, { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import AdvancedSearchBar from '../AdvancedSearchBar';
import CrmRequestFormPage from './CrmRequestFormPage';
import { Button } from "@/components/ui/button";
import { MoreHorizontal } from "lucide-react";
import { crmApi } from '@/services/api';

const CrmRequestListing = () => {
    const [searchParams, setSearchParams] = useSearchParams();
    const requestIdParam = searchParams.get('requestId');
    const [filter, setFilter] = useState(null);
    const [requests, setRequests] = useState([]);
    const [loading, setLoading] = useState(true);
    const [newRequestData, setNewRequestData] = useState(null);

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

    // Handle new request - check URL param or locally created new request
    const isNewRequest = requestIdParam?.startsWith('NEW-');
    const activeRequest = isNewRequest ? newRequestData : selectedRequest;

    const setSelectedRequest = (request) => {
        if (request && request.id?.startsWith('NEW-')) {
            // New request - store in local state and update URL
            setNewRequestData(request);
            setSearchParams((prev) => {
                const next = new URLSearchParams(prev);
                next.set('requestId', request.id);
                return next;
            });
        } else if (request) {
            // Existing request - update URL only
            setNewRequestData(null);
            setSearchParams((prev) => {
                const next = new URLSearchParams(prev);
                next.set('requestId', request.id);
                return next;
            });
        } else {
            // Clear selection
            setNewRequestData(null);
            setSearchParams((prev) => {
                const next = new URLSearchParams(prev);
                next.delete('requestId');
                return next;
            });
        }
    };

    const handleSearch = (searchParams) => {
        console.log("Searching CRM requests with:", searchParams);
        setFilter(searchParams);
    };

    // If a request is selected (existing or new), show the form page instead of listing
    if (activeRequest) {
        return (
            <CrmRequestFormPage 
                request={activeRequest}
                onBack={() => setSelectedRequest(null)}
            />
        );
    }

    // Filter requests based on active filter
    const filteredRequests = filter ? requests.filter(r => {
        const fieldValue = r[filter.field]?.toString().toLowerCase() || '';
        return fieldValue.includes(filter.value.toLowerCase());
    }) : requests;

    return (
        <div className="space-y-6">
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
                <AdvancedSearchBar onSearch={handleSearch} />
                <Button 
                    className="bg-[#6b4260] hover:bg-[#5a3751] text-white uppercase font-bold text-[11px] px-6 h-8 rounded-sm shadow-sm transition-all active:scale-95"
                    onClick={() => setSelectedRequest({
                        id: 'NEW-' + Math.floor(Math.random() * 10000),
                        status: 'NEW',
                        customerName: '',
                        customerCode: '',
                        region: '',
                        speciality: '',
                        division: '',
                        customerExpectation: 0,
                        msp: 0,
                        requestDate: new Date().toLocaleDateString('en-GB'),
                        location: '',
                        dueDate: '',
                        fromDate: '',
                        toDate: '',
                        monthlySalesPlanAmount: 0,
                        totalMsp: 0,
                        expectedDueDate: '',
                        typeOfService: '',
                        description: '',
                        remarks: '',
                        monthlySalesPlan: [],
                        attachments: { 1: null, 2: null, 3: null }
                    })}
                >
                    New
                </Button>
            </div>

            {filter && (
                <div className="bg-muted/50 p-2 rounded text-sm text-muted-foreground">
                    Active Filter: <span className="font-medium text-foreground">{filter.field}</span> contains <span className="font-medium text-foreground">"{filter.value}"</span>
                </div>
            )}

            {/* Request Listing Table */}
            <div className="border rounded-md overflow-hidden bg-card">
                <div className="overflow-x-auto">
                    <table className="w-full text-sm text-left">
                        <thead className="bg-muted text-muted-foreground uppercase text-xs font-medium">
                            <tr>
                                <th className="px-4 py-3 min-w-[140px]">Request ID</th>
                                <th className="px-4 py-3">Customer Code</th>
                                <th className="px-4 py-3 min-w-[180px]">Customer Name</th>
                                <th className="px-4 py-3">Region</th>
                                <th className="px-4 py-3">Speciality</th>
                                <th className="px-4 py-3">Division</th>
                                <th className="px-4 py-3 text-right">Customer Exp.</th>
                                <th className="px-4 py-3 text-right">MSP</th>
                                <th className="px-4 py-3">Request Date</th>
                                <th className="px-4 py-3">Location</th>
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
                                        className="hover:bg-muted/50 transition-colors"
                                        onClick={() => setSelectedRequest(row)}
                                    >
                                        <td className="px-4 py-3 font-medium">{row.id}</td>
                                        <td className="px-4 py-3">{row.customerCode}</td>
                                        <td className="px-4 py-3">
                                            <span
                                                className="text-blue-600 cursor-pointer hover:underline font-medium"
                                                onClick={(e) => {
                                                    e.stopPropagation();
                                                    setSelectedRequest(row);
                                                }}
                                            >
                                                {row.customerName}
                                            </span>
                                        </td>
                                        <td className="px-4 py-3">{row.region}</td>
                                        <td className="px-4 py-3">{row.speciality}</td>
                                        <td className="px-4 py-3">{row.division}</td>
                                        <td className="px-4 py-3 text-right">{row.customerExpectation?.toLocaleString(undefined, { minimumFractionDigits: 2 })}</td>
                                        <td className="px-4 py-3 text-right">{row.msp?.toLocaleString(undefined, { minimumFractionDigits: 2 })}</td>
                                        <td className="px-4 py-3">{row.requestDate}</td>
                                        <td className="px-4 py-3">{row.location}</td>
                                        <td className="px-4 py-3">{row.dueDate}</td>
                                        <td className="px-4 py-3">
                                            <span className={`inline-flex items-center px-2 py-1 rounded-full text-xs font-medium 
                                                ${row.status === 'Approved' ? 'bg-green-100 text-green-700' :
                                                    row.status === 'REQUESTED' ? 'bg-yellow-100 text-yellow-700' :
                                                        'bg-gray-100 text-gray-700'}`}>
                                                {row.status}
                                            </span>
                                        </td>
                                        <td className="px-4 py-3 text-center">
                                            <Button variant="ghost" size="icon" className="h-8 w-8">
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

export default CrmRequestListing;