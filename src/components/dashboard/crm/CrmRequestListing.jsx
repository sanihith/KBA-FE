import React, { useState } from 'react';
import AdvancedSearchBar from '../AdvancedSearchBar';
import { Button } from "@/components/ui/button";
import { MoreHorizontal } from "lucide-react";

// Mock Data based on screenshot
const MOCK_DATA = [
    { id: '5343-NUC-0047', customerCode: '5343', customerName: 'DATTAPRASAD V GIZARE', region: 'KARNATAKA', speciality: 'GYNECOLOGIST', division: 'NUCLEUS', customerExpectation: 33000, msp: 30000, requestDate: '28/01/2026', location: 'BELAGAVI', dueDate: '07/02/2026', status: 'REQUESTED' },
    { id: '37911-NUC-0048', customerCode: '37911', customerName: 'ROHIT KHURANA', region: 'WESTERN UP', speciality: 'PAEDIATRICIAN', division: 'NUCLEUS', customerExpectation: 20000, msp: 10000, requestDate: '28/01/2026', location: 'MORADABAD', dueDate: '31/01/2026', status: 'REQUESTED' },
    { id: '37874-NUC-0049', customerCode: '37874', customerName: 'NUTAN GUPTA', region: 'WESTERN UP', speciality: 'PAEDIATRICIAN', division: 'NUCLEUS', customerExpectation: 10000, msp: 10000, requestDate: '28/01/2026', location: 'MORADABAD', dueDate: '31/01/2026', status: 'REQUESTED' },
    { id: '391-NUC-0050', customerCode: '391', customerName: 'ASHWINI YADAV', region: 'WESTERN UP', speciality: 'PAEDIATRICIAN', division: 'NUCLEUS', customerExpectation: 50000, msp: 40000, requestDate: '28/01/2026', location: 'AGRA', dueDate: '31/01/2026', status: 'REQUESTED' },
];

const CrmRequestListing = () => {
    const [filter, setFilter] = useState(null);

    const handleSearch = (searchParams) => {
        console.log("Searching CRM requests with:", searchParams);
        setFilter(searchParams);
    };

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
                            {MOCK_DATA.map((row) => (
                                <tr key={row.id} className="hover:bg-muted/50 transition-colors">
                                    <td className="px-4 py-3 font-medium">{row.id}</td>
                                    <td className="px-4 py-3">{row.customerCode}</td>
                                    <td className="px-4 py-3">{row.customerName}</td>
                                    <td className="px-4 py-3">{row.region}</td>
                                    <td className="px-4 py-3">{row.speciality}</td>
                                    <td className="px-4 py-3">{row.division}</td>
                                    <td className="px-4 py-3 text-right">{row.customerExpectation.toLocaleString(undefined, { minimumFractionDigits: 2 })}</td>
                                    <td className="px-4 py-3 text-right">{row.msp.toLocaleString(undefined, { minimumFractionDigits: 2 })}</td>
                                    <td className="px-4 py-3">{row.requestDate}</td>
                                    <td className="px-4 py-3">{row.location}</td>
                                    <td className="px-4 py-3">{row.dueDate}</td>
                                    <td className="px-4 py-3">{row.status}</td>
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
        </div>
    );
};

export default CrmRequestListing;
