import React, { useState } from 'react';
import AdvancedSearchBar from './AdvancedSearchBar';
import RequestDetails from './RequestDetails';
import { Button } from "@/components/ui/button";
import { MoreHorizontal } from "lucide-react";

// Mock Data
const MOCK_DATA = [
    { id: 'REQ-001', customerName: 'City Hospital', division: 'Pharma', customerExpectation: 80, requestDate: '2024-01-25', region: 'North', speciality: 'Cardiology', location: 'New York', msp: 50000, status: 'Pending', dueDate: '2024-02-01' },
    { id: 'REQ-002', customerName: 'Metro Clinic', division: 'Surgical', customerExpectation: 95, requestDate: '2024-01-28', region: 'South', speciality: 'Neurology', location: 'Los Angeles', msp: 75000, status: 'Approved', dueDate: '2024-02-02' },
    { id: 'REQ-003', customerName: 'General Med', division: 'Diagnostics', customerExpectation: 60, requestDate: '2024-01-30', region: 'East', speciality: 'General', location: 'Chicago', msp: 30000, status: 'Rejected', dueDate: '2024-02-03' },
];

const RequestListing = () => {
    const [filter, setFilter] = useState(null);
    const [selectedRequest, setSelectedRequest] = useState(null);

    const handleSearch = (searchParams) => {
        console.log("Searching with:", searchParams);
        setFilter(searchParams);
    };

    return (
        <div className="space-y-6">
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
                <AdvancedSearchBar onSearch={handleSearch} />
                <div className="flex gap-2">
                    {/* Additional filters or export buttons could go here */}
                </div>
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
                            {MOCK_DATA.map((row) => (
                                <tr
                                    key={row.id}
                                    className="hover:bg-muted/50 transition-colors cursor-pointer"
                                    onClick={() => setSelectedRequest(row)}
                                >
                                    <td className="px-4 py-3 font-medium">{row.id}</td>
                                    <td className="px-4 py-3">C-00{row.id.split('-')[1]}</td>
                                    <td className="px-4 py-3">{row.customerName}</td>
                                    <td className="px-4 py-3">{row.division}</td>
                                    <td className="px-4 py-3">{row.region}</td>
                                    <td className="px-4 py-3">{row.speciality}</td>
                                    <td className="px-4 py-3">{row.location}</td>
                                    <td className="px-4 py-3 text-right">₹{row.msp.toLocaleString()}</td>
                                    <td className="px-4 py-3 text-right">{row.customerExpectation}%</td>
                                    <td className="px-4 py-3">{row.requestDate}</td>
                                    <td className="px-4 py-3">{row.dueDate}</td>
                                    <td className="px-4 py-3">
                                        <span className={`inline-flex items-center px-2 py-1 rounded-full text-xs font-medium 
                                            ${row.status === 'Approved' ? 'bg-green-100 text-green-700' :
                                                row.status === 'Rejected' ? 'bg-red-100 text-red-700' :
                                                    'bg-yellow-100 text-yellow-700'}`}>
                                            {row.status}
                                        </span>
                                    </td>
                                    <td className="px-4 py-3 text-center">
                                        <Button variant="ghost" size="icon" className="h-8 w-8">
                                            <MoreHorizontal className="h-4 w-4" />
                                        </Button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>

            <RequestDetails
                request={selectedRequest}
                onClose={() => setSelectedRequest(null)}
            />
        </div>
    );
};

export default RequestListing;
