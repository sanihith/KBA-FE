import React from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { X } from "lucide-react";

const GiftVoucherModal = ({ onClose }) => {
    return (
        <div className="fixed inset-0 z-[60] flex items-center justify-center bg-black/50 backdrop-blur-sm animate-in fade-in duration-200">
            <div className="bg-background w-full max-w-2xl rounded-lg shadow-xl border animate-in zoom-in-95 duration-200 flex flex-col">
                {/* Header */}
                <div className="flex items-center justify-between border-b px-6 py-4">
                    <h2 className="text-sm font-bold text-foreground uppercase tracking-wider">Create GIFT VOUCHERS</h2>
                    <Button variant="ghost" size="icon" onClick={onClose}>
                        <X className="h-5 w-5" />
                    </Button>
                </div>

                {/* Content */}
                <div className="p-8 space-y-6">
                    <div className="space-y-4">
                        <div>
                            <Input
                                placeholder="Name..."
                                className="text-2xl border-0 border-b rounded-none px-0 focus-visible:ring-0 focus-visible:border-teal-600 border-teal-600/50 bg-transparent placeholder:text-muted-foreground/50 h-auto py-2"
                            />
                        </div>

                        <div className="grid grid-cols-[100px_1fr] items-center gap-4">
                            <Label className="uppercase text-xs font-bold text-muted-foreground">AMOUNT <span className="text-blue-500">?</span></Label>
                            <div>
                                <Input
                                    defaultValue="0.00"
                                    className="border-0 border-b rounded-none px-0 focus-visible:ring-0 focus-visible:border-primary border-border/50 bg-transparent max-w-[200px]"
                                />
                            </div>
                        </div>
                    </div>
                </div>

                {/* Footer */}
                <div className="border-t p-4 px-8 bg-background flex gap-2 rounded-b-lg">
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
        </div>
    );
};

export default GiftVoucherModal;
