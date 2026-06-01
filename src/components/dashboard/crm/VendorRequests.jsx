import React, { useState } from 'react';
import AdvancedSearchBar from '../AdvancedSearchBar';
import { MoreHorizontal, ArrowUpDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import VendorRequestDetails from './VendorRequestDetails';

const CrmVendorRequests = () => {
    const [selectedRequest, setSelectedRequest] = useState(null);

    if (selectedRequest) {
        return <VendorRequestDetails onClose={() => setSelectedRequest(null)} />;
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
                                <th className="px-4 py-3 font-bold text-black">Description</th>
                                <th className="px-4 py-3 font-bold text-black">REQUEST ID</th>
                                <th className="px-4 py-3 font-bold text-black">CUSTOMER NAME</th>
                                <th className="px-4 py-3 font-bold text-black">FULFILLED...</th>
                                <th className="px-4 py-3 font-bold text-black">GIFT VOUCHERS</th>
                                <th className="px-4 py-3 font-bold text-black flex items-center gap-1">
                                    STATUS <ArrowUpDown size={12} />
                                </th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-border">
                            <tr
                                className="hover:bg-muted/50 transition-colors cursor-pointer"
                                onClick={() => setSelectedRequest('2-NUC-0107')}
                            >
                                <td className="px-4 py-3">
                                    <input type="checkbox" className="rounded border-gray-300" onClick={(e) => e.stopPropagation()} />
                                </td>
                                <td className="px-4 py-3 text-teal-600 font-medium">WESTON MEDICAL EDUCATION FOUNDATION OF INDIA</td>
                                <td className="px-4 py-3">2-NUC-0107</td>
                                <td className="px-4 py-3">M K KAKOTI</td>
                                <td className="px-4 py-3">1 record</td>
                                <td className="px-4 py-3"></td>
                                <td className="px-4 py-3 uppercase text-xs font-bold text-muted-foreground">PROCESSED BY ADMIN</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default CrmVendorRequests;
