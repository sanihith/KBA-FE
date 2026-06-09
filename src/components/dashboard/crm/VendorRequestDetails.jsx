import React from 'react';
import { Button } from "@/components/ui/button";
import { ArrowUpDown, MessageSquare, ChevronLeft } from "lucide-react";

const VendorRequestDetails = ({ onClose, vendorRequest }) => {
    if (!vendorRequest) {
        return null;
    }

    return (
        <div className="bg-background animate-in slide-in-from-right duration-300">
            {/* Header / Back nav */}
            <div className="flex items-center gap-2 mb-6">
                <button
                    onClick={onClose}
                    className="inline-flex items-center gap-1.5 text-gray-500 hover:text-gray-900 text-[13px] font-medium transition-colors group"
                >
                    <ChevronLeft size={18} className="transition-transform group-hover:-translate-x-0.5" />
                    <span>Vendor Requests</span>
                </button>
                <span className="text-gray-300 text-sm">/</span>
                <span className="text-gray-800 text-sm font-semibold">{vendorRequest.description}</span>
            </div>

            {/* Title Section */}
            <div className="flex items-center justify-between mb-8">
                <h1 className="text-2xl font-bold text-foreground">{vendorRequest.description}</h1>
            </div>

            <div className="grid grid-cols-2 gap-x-16 gap-y-6 max-w-5xl">
                {/* Left Column */}
                <div className="space-y-4">
                    <div className="grid grid-cols-[140px_1fr] items-baseline">
                        <span className="text-xs font-bold text-muted-foreground uppercase flex gap-1">
                            Request ID <span className="text-blue-500">?</span>
                        </span>
                        <span className="text-sm">{vendorRequest.requestId}</span>
                    </div>
                    <div className="grid grid-cols-[140px_1fr] items-baseline">
                        <span className="text-xs font-bold text-muted-foreground uppercase flex gap-1">
                            Doctor Name <span className="text-blue-500">?</span>
                        </span>
                        <span className="text-sm font-medium text-teal-600 hover:underline cursor-pointer">{vendorRequest.customerName}</span>
                    </div>
                    <div className="grid grid-cols-[140px_1fr] items-baseline">
                        <span className="text-xs font-bold text-muted-foreground uppercase flex gap-1">
                            Request Date <span className="text-blue-500">?</span>
                        </span>
                        <span className="text-sm">{vendorRequest.requestDate}</span>
                    </div>
                    <div className="grid grid-cols-[140px_1fr] items-baseline">
                        <span className="text-xs font-bold text-muted-foreground uppercase flex gap-1">
                            Vendor Email <span className="text-blue-500">?</span>
                        </span>
                        <span className="text-sm">{vendorRequest.email || '-'}</span>
                    </div>
                    <div className="grid grid-cols-[140px_1fr] items-baseline">
                        <span className="text-xs font-bold text-muted-foreground uppercase flex gap-1">
                            Type of Service <span className="text-blue-500">?</span>
                        </span>
                        <span className="text-sm">{vendorRequest.typeOfService}</span>
                    </div>
                    <div className="grid grid-cols-[140px_1fr] items-baseline">
                        <span className="text-xs font-bold text-muted-foreground uppercase flex gap-1">
                            Value <span className="text-blue-500">?</span>
                        </span>
                        <span className="text-sm">{vendorRequest.value}</span>
                    </div>
                </div>

                {/* Right Column */}
                <div className="space-y-4">
                    <div className="grid grid-cols-[140px_1fr] items-baseline">
                        <span className="text-xs font-bold text-muted-foreground uppercase flex gap-1">
                            Remarks <span className="text-blue-500">?</span>
                        </span>
                        <span className="text-sm">{vendorRequest.remarks || '-'}</span>
                    </div>
                    <div className="grid grid-cols-[140px_1fr] items-baseline">
                        <span className="text-xs font-bold text-muted-foreground uppercase flex gap-1">
                            Details of Service <span className="text-blue-500">?</span>
                        </span>
                        <span className="text-sm">{vendorRequest.detailsOfService || '-'}</span>
                    </div>
                    <div className="grid grid-cols-[140px_1fr] items-baseline">
                        <span className="text-xs font-bold text-muted-foreground uppercase flex gap-1">
                            Due Date <span className="text-blue-500">?</span>
                        </span>
                        <span className="text-sm">{vendorRequest.dueDate}</span>
                    </div>
                    <div className="grid grid-cols-[140px_1fr] items-baseline">
                        <span className="text-xs font-bold text-muted-foreground uppercase flex gap-1">
                            Mobile <span className="text-blue-500">?</span>
                        </span>
                        <div className="flex items-center gap-2">
                            <span className="text-sm text-teal-600">{vendorRequest.mobile || '-'}</span>
                            {vendorRequest.mobile && (
                                <span className="text-xs font-bold text-teal-600 uppercase flex items-center gap-0.5"><MessageSquare size={10} /> SMS</span>
                            )}
                        </div>
                    </div>
                    <div className="grid grid-cols-[140px_1fr] items-baseline">
                        <span className="text-xs font-bold text-muted-foreground uppercase flex gap-1">
                            Other Documents <span className="text-blue-500">?</span>
                        </span>
                        <span className="text-sm">{vendorRequest.otherDocuments || '-'}</span>
                    </div>

                    <div className="flex gap-2 pt-4">
                        <Button className="bg-[#7e4f7e] hover:bg-[#6a426a] text-white uppercase font-bold text-xs h-8">
                            Fulfill
                        </Button>
                        <Button className="bg-[#7e4f7e] hover:bg-[#6a426a] text-white uppercase font-bold text-xs h-8">
                            Cancel
                        </Button>
                    </div>
                </div>
            </div>

            {/* Gift Vouchers Table */}
            {vendorRequest.giftVouchers && (
                <div className="mt-8">
                    <div className="flex items-center gap-1 mb-2 text-xs font-bold text-muted-foreground uppercase">
                        Gift Vouchers <span className="text-blue-500">?</span>
                    </div>
                    <div className="border rounded-md overflow-hidden bg-card max-w-3xl">
                        <div className="overflow-x-auto">
                            <table className="w-full text-sm text-left">
                                <thead className="bg-muted text-muted-foreground uppercase text-xs font-medium">
                                    <tr>
                                        <th className="px-4 py-3 font-bold text-black w-2/3">Gift card number</th>
                                        <th className="px-4 py-3 font-bold text-black flex items-center justify-end gap-1 text-right">
                                            Amount <ArrowUpDown size={12} />
                                        </th>
                                    </tr>
                                </thead>
                                <tbody className="divide-y divide-border">
                                    <tr className="hover:bg-muted/50 transition-colors">
                                        <td className="px-4 py-3 flex items-center gap-2">
                                            <div className="grid grid-cols-2 gap-0.5 w-3 opacity-50">
                                                <div className="w-0.5 h-0.5 bg-current rounded-full"></div>
                                                <div className="w-0.5 h-0.5 bg-current rounded-full"></div>
                                                <div className="w-0.5 h-0.5 bg-current rounded-full"></div>
                                                <div className="w-0.5 h-0.5 bg-current rounded-full"></div>
                                                <div className="w-0.5 h-0.5 bg-current rounded-full"></div>
                                                <div className="w-0.5 h-0.5 bg-current rounded-full"></div>
                                            </div>
                                            <span className="text-teal-600">{vendorRequest.giftVouchers}</span>
                                        </td>
                                        <td className="px-4 py-3 text-right">{vendorRequest.value}</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default VendorRequestDetails;