import React, { useState } from 'react';
import AdvancedSearchBar from '../AdvancedSearchBar';
import { ArrowUpDown } from "lucide-react";

const VENDOR_DATA = [
    { name: 'WESTON MEDICAL EDUCATION FOUNDATION OF INDIA', alias: 'WESTON', pending: 0, serviceVal: 0.00, balance: 0.00, transactions: 'No records' }
];

const VendorTable = () => {
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
                                <th className="px-4 py-3">Vendor Name</th>
                                <th className="px-4 py-3">Alias Name</th>
                                <th className="px-4 py-3 text-right">Pending...</th>
                                <th className="px-4 py-3 text-right">Service Va...</th>
                                <th className="px-4 py-3 text-right">Balance</th>
                                <th className="px-4 py-3">Vendor Transactions</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-border">
                            {VENDOR_DATA.map((row, idx) => (
                                <tr key={idx} className="hover:bg-muted/50 transition-colors">
                                    <td className="px-4 py-3 font-medium">{row.name}</td>
                                    <td className="px-4 py-3">{row.alias}</td>
                                    <td className="px-4 py-3 text-right">{row.pending}</td>
                                    <td className="px-4 py-3 text-right">{row.serviceVal.toFixed(2)}</td>
                                    <td className="px-4 py-3 text-right">{row.balance.toFixed(2)}</td>
                                    <td className="px-4 py-3">{row.transactions}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default VendorTable;
