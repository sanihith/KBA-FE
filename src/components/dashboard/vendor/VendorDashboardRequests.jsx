import React from 'react';
import AdvancedSearchBar from '@/components/dashboard/AdvancedSearchBar';
import { ArrowUpDown } from "lucide-react";

const VendorDashboardRequests = () => {
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
                                <th className="px-4 py-3">Fulfilled Date</th>
                                <th className="px-4 py-3">Gift Vouchers</th>
                                <th className="px-4 py-3 flex items-center gap-1">
                                    Status <ArrowUpDown size={12} />
                                </th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-border">
                            {/* Empty state or mock rows */}
                            <tr className="hover:bg-muted/50 transition-colors">
                                <td className="px-4 py-3">
                                    <input type="checkbox" className="rounded border-gray-300" />
                                </td>
                                <td className="px-4 py-3" colSpan="6">
                                    <div className="flex flex-col items-center justify-center py-10 text-center space-y-4">
                                        <div className="w-12 h-12 bg-muted rounded-full flex items-center justify-center">
                                            <span className="text-2xl">📄</span>
                                        </div>
                                        <h3 className="text-sm font-bold">This is your new action.</h3>
                                        <p className="text-muted-foreground max-w-sm text-xs">
                                            By default, it contains a list and a form view and possibly other view types depending on the options you chose for your model.
                                        </p>
                                        <p className="text-muted-foreground max-w-sm text-xs">
                                            You can start customizing these screens by clicking on the Studio icon on the top right corner (you can also customize this help message there).
                                        </p>
                                    </div>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default VendorDashboardRequests;
