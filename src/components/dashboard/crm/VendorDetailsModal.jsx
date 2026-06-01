import React from 'react';
import { Button } from "@/components/ui/button";
import { X, ArrowUpDown, Maximize2 } from "lucide-react";

const VendorDetailsModal = ({ onClose }) => {
    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm animate-in fade-in duration-200">
            <div className="bg-background w-full max-w-4xl max-h-[90vh] overflow-y-auto rounded-lg shadow-xl border animate-in zoom-in-95 duration-200 flex flex-col">
                {/* Header */}
                <div className="flex items-center justify-between border-b px-6 py-4 sticky top-0 bg-background z-10">
                    <h2 className="text-sm font-bold text-foreground">Open: VENDOR DETAILS</h2>
                    <div className="flex items-center gap-2">
                        <Button variant="ghost" size="icon" className="h-8 w-8">
                            <Maximize2 className="h-4 w-4" />
                        </Button>
                        <Button variant="ghost" size="icon" onClick={onClose} className="h-8 w-8">
                            <X className="h-5 w-5" />
                        </Button>
                    </div>
                </div>

                {/* Content */}
                <div className="p-8 space-y-8 flex-1">
                    <div className="grid grid-cols-2 gap-x-12 gap-y-6">
                        {/* Vendor Name */}
                        <div className="grid grid-cols-[140px_1fr] items-start">
                            <span className="text-xs font-bold text-muted-foreground uppercase flex gap-1">
                                Vendor Name <span className="text-blue-500">?</span>
                            </span>
                            <span className="text-sm font-medium text-teal-600">WESTON MEDICAL EDUCATION FOUNDATIO...</span>
                        </div>

                        {/* Type of Service */}
                        <div className="grid grid-cols-[140px_1fr] items-start">
                            <span className="text-xs font-bold text-muted-foreground uppercase flex gap-1">
                                Type of Service <span className="text-blue-500">?</span>
                            </span>
                            <span className="text-sm">Gift-Card</span>
                        </div>

                        {/* Value */}
                        <div className="grid grid-cols-[140px_1fr] items-start">
                            <span className="text-xs font-bold text-muted-foreground uppercase flex gap-1">
                                Value <span className="text-blue-500">?</span>
                            </span>
                            <span className="text-sm">1</span>
                        </div>

                        {/* Admin Remarks */}
                        <div className="grid grid-cols-[140px_1fr] items-start">
                            <span className="text-xs font-bold text-muted-foreground uppercase flex gap-1">
                                Admin Remarks <span className="text-blue-500">?</span>
                            </span>
                            <span className="text-sm">n</span>
                        </div>

                        {/* Vendor Remarks */}
                        <div className="grid grid-cols-[140px_1fr] items-start">
                            <span className="text-xs font-bold text-muted-foreground uppercase flex gap-1">
                                Vendor Remarks <span className="text-blue-500">?</span>
                            </span>
                            <span className="text-sm border-b border-gray-200 min-h-[20px] w-full block"></span>
                        </div>

                        {/* Status */}
                        <div className="grid grid-cols-[140px_1fr] items-start">
                            <span className="text-xs font-bold text-muted-foreground uppercase flex gap-1">
                                Status <span className="text-blue-500">?</span>
                            </span>
                            <span className="text-sm uppercase">PROCESSED BY ADMIN</span>
                        </div>
                    </div>

                    {/* Gift Vouchers Section */}
                    <div className="space-y-4">
                        <div className="flex items-center gap-1 text-xs font-bold text-muted-foreground uppercase">
                            Gift Vouchers <span className="text-blue-500">?</span>
                        </div>

                        <div className="border rounded-md overflow-hidden">
                            <table className="w-full text-sm text-left">
                                <thead className="bg-muted text-muted-foreground uppercase text-xs font-medium">
                                    <tr>
                                        <th className="px-4 py-2 w-[40px]"></th>
                                        <th className="px-4 py-2 font-bold text-black">GIFT CARD NUMBER</th>
                                        <th className="px-4 py-2 font-bold text-black flex items-center gap-1">
                                            AMOUNT <ArrowUpDown size={12} />
                                        </th>
                                    </tr>
                                </thead>
                                <tbody className="divide-y divide-border">
                                    <tr className="hover:bg-muted/50">
                                        <td className="px-4 py-3 text-center">
                                            <div className="grid grid-cols-2 gap-0.5 w-4 mx-auto opacity-50">
                                                <div className="w-1 h-1 bg-current rounded-full"></div>
                                                <div className="w-1 h-1 bg-current rounded-full"></div>
                                                <div className="w-1 h-1 bg-current rounded-full"></div>
                                                <div className="w-1 h-1 bg-current rounded-full"></div>
                                                <div className="w-1 h-1 bg-current rounded-full"></div>
                                                <div className="w-1 h-1 bg-current rounded-full"></div>
                                            </div>
                                        </td>
                                        <td className="px-4 py-3">giftcard</td>
                                        <td className="px-4 py-3">1.00</td>
                                    </tr>
                                    {/* Empty rows to match style */}
                                    <tr className="h-10 hover:bg-muted/50"><td colSpan={3}></td></tr>
                                    <tr className="h-10 hover:bg-muted/50"><td colSpan={3}></td></tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>

                {/* Footer */}
                <div className="border-t p-4 px-8 sticky bottom-0 bg-background z-10 flex gap-2">
                    <Button variant="outline" className="bg-[#7e4f7e] hover:bg-[#6a426a] text-white border-0" onClick={onClose}>
                        Close
                    </Button>
                </div>
            </div>
        </div>
    );
};

export default VendorDetailsModal;
