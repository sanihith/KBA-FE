import React, { useState } from 'react';
import { useSearchParams } from 'react-router-dom';
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
    const [searchParams, setSearchParams] = useSearchParams();
    const budgetIdParam = searchParams.get('budget');
    const [filter, setFilter] = useState(null);

    const selectedBudget = React.useMemo(() => {
        if (!budgetIdParam) return null;
        if (budgetIdParam === 'new') return { isNew: true };
        return MOCK_BUDGETS.find(b => b.id === budgetIdParam) || null;
    }, [budgetIdParam]);

    const setSelectedBudget = (budget) => {
        setSearchParams((prev) => {
            const next = new URLSearchParams(prev);
            if (budget) {
                next.set('budget', budget.isNew ? 'new' : budget.id);
            } else {
                next.delete('budget');
            }
            return next;
        });
    };

    const handleSearch = (searchParams) => {
        console.log("Searching budget with:", searchParams);
        setFilter(searchParams);
    };

    if (selectedBudget) {
        return (
            <BudgetDetails
                budget={selectedBudget}
                onClose={() => setSelectedBudget(null)}
            />
        );
    }

    return (
        <div className="space-y-6 animate-in fade-in duration-300">
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 px-2">
                <AdvancedSearchBar onSearch={handleSearch} />
                <div className="flex gap-2">
                    <Button 
                        className="bg-[#714b67] hover:bg-[#5a3c52] text-white uppercase font-bold text-[11px] px-6 h-8 rounded-sm shadow-sm transition-all active:scale-95"
                        onClick={() => setSelectedBudget({ isNew: true })}
                    >
                        New
                    </Button>
                </div>
            </div>

            {filter && (
                <div className="bg-muted/50 p-2 rounded text-sm text-muted-foreground mx-2">
                    Active Filter: <span className="font-medium text-foreground">{filter.field}</span> contains <span className="font-medium text-foreground">"{filter.value}"</span>
                </div>
            )}

            <div className="border rounded-md overflow-hidden bg-card shadow-sm border-gray-100 mx-2">
                <div className="overflow-x-auto">
                    <table className="w-full text-sm text-left">
                        <thead className="bg-[#f8f9fa] text-gray-800 uppercase text-[11px] font-bold tracking-tight">
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
                        <tbody className="divide-y divide-gray-50 bg-white">
                            {MOCK_BUDGETS.map((row) => (
                                <tr
                                    key={row.id}
                                    className="hover:bg-gray-50/80 transition-colors cursor-pointer"
                                    onClick={() => setSelectedBudget(row)}
                                >
                                    <td className="px-4 py-3 font-medium text-teal-600">{row.id}</td>
                                    <td className="px-4 py-3 text-gray-600">{row.financialYear}</td>
                                    <td className="px-4 py-3 text-gray-600">{row.quarter}</td>
                                    <td className="px-4 py-3 text-gray-600">{row.division}</td>
                                    <td className="px-4 py-3 text-gray-600">{row.region}</td>
                                    <td className="px-4 py-3 text-gray-600">{row.type}</td>
                                    <td className="px-4 py-3 text-right font-medium text-gray-800">₹{row.amount.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}</td>
                                    <td className="px-4 py-3 text-center">
                                        <Button variant="ghost" size="icon" className="h-8 w-8 text-gray-400">
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

export default BudgetListing;
