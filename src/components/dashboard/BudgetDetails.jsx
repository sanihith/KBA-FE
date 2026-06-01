import React from 'react';
import { Button } from "@/components/ui/button";
import { X, Settings, ArrowUpDown } from "lucide-react";

// Mock data for the region table
const REGION_DATA = [
    { name: 'ODISHA', amount: 0.00 },
    { name: 'TELANGANA', amount: 300000.00 },
    { name: 'KERALA', amount: 250000.00 },
    { name: 'KARNATAKA', amount: 0.00 },
    { name: 'BIHAR', amount: 0.00 },
    { name: 'JHARKHAND', amount: 0.00 },
    { name: 'ANDHRA PRADESH', amount: 100000.00 },
    { name: 'WEST BENGAL', amount: 250000.00 },
];

const BudgetDetails = ({ budget, onClose }) => {
    if (!budget) return null;

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm animate-in fade-in duration-200">
            <div className="bg-background w-full max-w-4xl max-h-[90vh] overflow-y-auto rounded-lg shadow-xl border animate-in zoom-in-95 duration-200 flex flex-col">
                {/* Header */}
                <div className="flex items-center justify-between border-b px-6 py-4 sticky top-0 bg-background z-10">
                    <div>
                        <h2 className="text-sm font-medium text-teal-600 font-semibold uppercase tracking-wider">Budget</h2>
                        <div className="flex items-center gap-2 mt-1">
                            <h3 className="text-xl font-bold text-orange-400 italic">Unnamed</h3>
                            <Button variant="ghost" size="icon" className="h-6 w-6 text-muted-foreground">
                                <Settings size={14} />
                            </Button>
                        </div>
                    </div>
                    <Button variant="ghost" size="icon" onClick={onClose}>
                        <X className="h-5 w-5" />
                    </Button>
                </div>

                {/* Content */}
                <div className="p-8 space-y-8 flex-1">
                    {/* Top Details Section */}
                    <div className="space-y-4">
                        <DetailRow label="BUDGET ID" value={budget.id} />
                        <DetailRow label="FINANCIAL YEAR" value={budget.financialYear} />
                        <DetailRow label="DIVISION" value={budget.division} />
                        <DetailRow label="QUARTER" value={budget.quarter} />
                        <DetailRow label="BUDGET AMOUNT" value={budget.amount.toLocaleString(undefined, { minimumFractionDigits: 2 })} />
                        <DetailRow label="REGIONAL BUDGET" value="9,00,000.00" /> {/* Mock value as per image */}
                    </div>

                    {/* Region Table Section */}
                    <div>
                        <div className="flex items-start gap-12">
                            <span className="text-sm font-bold text-muted-foreground uppercase min-w-[150px]">REGION</span>
                            <div className="flex-1">
                                <table className="w-full text-sm">
                                    <thead>
                                        <tr className="border-b">
                                            <th className="text-left py-2 font-bold text-muted-foreground uppercase">REGION</th>
                                            <th className="text-right py-2 font-bold text-muted-foreground uppercase flex items-center justify-end gap-1">
                                                AMOUNT <ArrowUpDown size={12} />
                                            </th>
                                        </tr>
                                    </thead>
                                    <tbody className="divide-y">
                                        {REGION_DATA.map((region) => (
                                            <tr key={region.name} className="group hover:bg-muted/50">
                                                <td className="py-3 text-muted-foreground uppercase">{region.name}</td>
                                                <td className="py-3 text-right font-medium">
                                                    {region.amount.toLocaleString(undefined, { minimumFractionDigits: 2 })}
                                                </td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                                <button className="text-teal-600 hover:text-teal-700 text-sm mt-3 font-medium">
                                    Add a line
                                </button>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Footer */}
                <div className="border-t p-4 px-8 sticky bottom-0 bg-background z-10">
                    <Button className="bg-[#7e4f7e] hover:bg-[#6a426a] text-white px-6">
                        Save
                    </Button>
                </div>
            </div>
        </div>
    );
};

const DetailRow = ({ label, value }) => (
    <div className="grid grid-cols-[200px_1fr] items-baseline">
        <span className="text-sm font-bold text-muted-foreground uppercase">{label}</span>
        <span className="text-sm font-medium text-foreground">{value}</span>
    </div>
);

export default BudgetDetails;
