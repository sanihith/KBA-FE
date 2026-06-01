import React, { useState } from 'react';
import AdvancedSearchBar from '../AdvancedSearchBar';
import { MoreHorizontal, ArrowUpDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import AcknowledgementDetails from './AcknowledgementDetails';

const VendorAcknowledgment = () => {
    const [selectedRequest, setSelectedRequest] = useState(null);

    if (selectedRequest) {
        return <AcknowledgementDetails onClose={() => setSelectedRequest(null)} />;
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
                                <th className="px-4 py-3">Request ID</th>
                                <th className="px-4 py-3">Request...</th>
                                <th className="px-4 py-3">Due Date</th>
                                <th className="px-4 py-3">Division</th>
                                <th className="px-4 py-3">Customer Name</th>
                                <th className="px-4 py-3">Customer Code</th>
                                <th className="px-4 py-3">Fulfiller...</th>
                                <th className="px-4 py-3">Speciality</th>
                                <th className="px-4 py-3">Vendor Details</th>
                                <th className="px-4 py-3">Location</th>
                                <th className="px-4 py-3">Region</th>
                                <th className="px-4 py-3">Value</th>
                                <th className="px-4 py-3 flex items-center gap-1">
                                    Status <ArrowUpDown size={12} />
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
                                <td className="px-4 py-3 text-teal-600 font-medium">2-NUC-0107</td>
                                <td className="px-4 py-3">05/02/2026</td>
                                <td className="px-4 py-3">25/02/2026</td>
                                <td className="px-4 py-3">NUCLEUS</td>
                                <td className="px-4 py-3">M K KAKOTI</td>
                                <td className="px-4 py-3">2</td>
                                <td className="px-4 py-3"></td>
                                <td className="px-4 py-3">GENERAL PRACTITIO...</td>
                                <td className="px-4 py-3 text-teal-600">1 record</td>
                                <td className="px-4 py-3">NUC-BONGAIGA...</td>
                                <td className="px-4 py-3">ASSAM</td>
                                <td className="px-4 py-3">1.00</td>
                                <td className="px-4 py-3 uppercase text-xs font-bold text-muted-foreground">PROCESSED BY AD...</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default VendorAcknowledgment;
