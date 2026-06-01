import React from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { X, ArrowUpDown } from "lucide-react";
import GiftVoucherModal from './GiftVoucherModal';

const AddVendorModal = ({ onClose }) => {
    const [showGiftVoucherModal, setShowGiftVoucherModal] = React.useState(false);

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm animate-in fade-in duration-200">
            <div className="bg-background w-full max-w-4xl max-h-[90vh] overflow-y-auto rounded-lg shadow-xl border animate-in zoom-in-95 duration-200 flex flex-col">
                {/* Header */}
                <div className="flex items-center justify-between border-b px-6 py-4 sticky top-0 bg-background z-10">
                    <h2 className="text-sm font-bold text-foreground uppercase tracking-wider">Create ADD VENDOR</h2>
                    <Button variant="ghost" size="icon" onClick={onClose}>
                        <X className="h-5 w-5" />
                    </Button>
                </div>

                {/* Content */}
                <div className="p-8 space-y-8 flex-1">
                    <div className="grid grid-cols-[150px_1fr] gap-6">
                        <Label className="uppercase text-xs font-bold text-muted-foreground pt-3">Vendor Name</Label>
                        <div>
                            <Input className="border-0 border-b rounded-none px-0 focus-visible:ring-0 focus-visible:border-teal-600 border-teal-600/50 bg-transparent text-teal-600" />
                        </div>
                    </div>

                    <div className="grid grid-cols-[150px_1fr] gap-6">
                        <Label className="uppercase text-xs font-bold text-muted-foreground pt-3">Balance</Label>
                        <div className="pt-2 text-sm text-foreground">0.00</div>
                    </div>

                    <div className="grid grid-cols-[150px_1fr] gap-6">
                        <Label className="uppercase text-xs font-bold text-muted-foreground pt-3">Vendor Email</Label>
                        <div>
                            <Input className="border-0 border-b rounded-none px-0 focus-visible:ring-0 focus-visible:border-primary border-primary/50 bg-transparent" />
                        </div>
                    </div>

                    <div className="grid grid-cols-[150px_1fr] gap-6">
                        <Label className="uppercase text-xs font-bold text-muted-foreground pt-3">Type of Service</Label>
                        <div>
                            <Input className="border-0 border-b rounded-none px-0 focus-visible:ring-0 focus-visible:border-primary border-primary/50 bg-transparent" />
                        </div>
                    </div>

                    <div className="grid grid-cols-[150px_1fr] gap-6">
                        <Label className="uppercase text-xs font-bold text-muted-foreground pt-3">Voucher Amount</Label>
                        <div className="pt-2 text-sm text-foreground">0.00</div>
                    </div>

                    {/* Sub Table */}
                    <div className="grid grid-cols-[150px_1fr] gap-6 pt-4">
                        <Label className="uppercase text-xs font-bold text-muted-foreground pt-3">Gift Vouchers</Label>
                        <div>
                            <table className="w-full text-sm">
                                <thead>
                                    <tr className="border-b">
                                        <th className="text-left py-2 font-bold text-muted-foreground uppercase text-xs">Gift Card Number</th>
                                        <th className="text-right py-2 font-bold text-muted-foreground uppercase text-xs flex items-center justify-end gap-1">
                                            Amount <ArrowUpDown size={12} />
                                        </th>
                                    </tr>
                                </thead>
                                <tbody className="divide-y">
                                    <tr className="hover:bg-muted/50">
                                        <td className="py-2">
                                            <button
                                                className="text-teal-600 hover:text-teal-700 text-sm font-medium"
                                                onClick={() => setShowGiftVoucherModal(true)}
                                            >
                                                Add a line
                                            </button>
                                        </td>
                                        <td></td>
                                    </tr>
                                </tbody>
                            </table>
                            {/* Empty rows as per screenshot */}
                            <div className="border-b h-10"></div>
                            <div className="border-b h-10"></div>
                        </div>
                    </div>
                </div>

                {/* Footer */}
                <div className="border-t p-4 px-8 sticky bottom-0 bg-background z-10 flex gap-2">
                    <Button className="bg-[#7e4f7e] hover:bg-[#6a426a] text-white">
                        Save & Close
                    </Button>
                    <Button className="bg-[#7e4f7e] hover:bg-[#6a426a] text-white">
                        Save & New
                    </Button>
                    <Button variant="outline" onClick={onClose}>
                        Discard
                    </Button>
                </div>
            </div>
            {showGiftVoucherModal && (
                <GiftVoucherModal onClose={() => setShowGiftVoucherModal(false)} />
            )}
        </div>
    );
};

export default AddVendorModal;
