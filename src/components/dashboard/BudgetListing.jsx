import React, { useState } from 'react';
import AdvancedSearchBar from './AdvancedSearchBar';
import BudgetDetails from './BudgetDetails';
import { Button } from "@/components/ui/button";
import { MoreHorizontal } from "lucide-react";

// Mock Data
const MOCK_BUDGETS = [
    { id: 'BUD-2025-Quarter 4-GLADIUS-New', financialYear: '2025', quarter: 'Quarter 4', division: 'GLADIUS', region: '8 records', type: 'New', amount: 1050000.00 },
    { id: 'BUD-2025-Quarter 4-GLASTIMUS-New', financialYear: '2025', quarter: 'Quarter 4', division: 'GLASTIMUS', region: '6 records', type: 'New', amount: 250000.00 },
    { id: 'BUD-2025-Quarter 4-IMPETUS-New', financialYear: '2025', quarter: 'Quarter 4', division: 'IMPETUS', region: '12 records', type: 'New', amount: 3145000.00 },
    { id: 'BUD-2025-Quarter 4-MAXIMUS-New', financialYear: '2025', quarter: 'Quarter 4', division: 'MAXIMUS', region: '17 records', type: 'New', amount: 1125000.00 },
    { id: 'BUD-2025-Quarter 4-NUCLEUS-New', financialYear: '2025', quarter: 'Quarter 4', division: 'NUCLEUS', region: '15 records', type: 'New', amount: 4400000.00 },
    { id: 'BUD-2025-Quarter 4-NUTRIUS-New', financialYear: '2025', quarter: 'Quarter 4', division: 'NUTRIUS', region: '13 records', type: 'New', amount: 0.00 },
    { id: 'BUD-2025-Quarter 4-STIMULUS-New', financialYear: '2025', quarter: 'Quarter 4', division: 'STIMULUS', region: '9 records', type: 'New', amount: 963319.00 },
];

const BudgetListing = () => {
    const [filter, setFilter] = useState(null);
    const [selectedBudget, setSelectedBudget] = useState(null);

    const handleSearch = (searchParams) => {
        console.log("Searching budget with:", searchParams);
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
                                <th className="px-4 py-3">Budget ID</th>
                                <th className="px-4 py-3">Financial Year</th>
                                <th className="px-4 py-3">Quarter</th>
                                <th className="px-4 py-3">Division</th>
                                <th className="px-4 py-3">Region</th>
                                <th className="px-4 py-3">Type</th>
                                <th className="px-4 py-3 text-right">Amount</th>
                                <th className="px-4 py-3 text-center">Actions</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-border">
                            {MOCK_BUDGETS.map((row) => (
                                <tr
                                    key={row.id}
                                    className="hover:bg-muted/50 transition-colors cursor-pointer"
                                    onClick={() => setSelectedBudget(row)}
                                >
                                    <td className="px-4 py-3 font-medium">{row.id}</td>
                                    <td className="px-4 py-3">{row.financialYear}</td>
                                    <td className="px-4 py-3">{row.quarter}</td>
                                    <td className="px-4 py-3">{row.division}</td>
                                    <td className="px-4 py-3">{row.region}</td>
                                    <td className="px-4 py-3">{row.type}</td>
                                    <td className="px-4 py-3 text-right">₹{row.amount.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}</td>
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

            <BudgetDetails
                budget={selectedBudget}
                onClose={() => setSelectedBudget(null)}
            />
        </div>
    );
};

export default BudgetListing;
