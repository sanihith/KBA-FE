import React from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

const VendorTransactions = () => {
    return (
        <div className="max-w-6xl">
            <h2 className="text-2xl font-bold mb-6">Transaction Details</h2>

            <div className="flex gap-8">
                {/* Left Form */}
                <div className="flex-1 space-y-6">
                    <div className="grid grid-cols-[100px_1fr] items-center gap-4">
                        <Label className="uppercase text-xs font-bold text-muted-foreground">Vendor ID</Label>
                        <div className="border-b border-teal-600/50 w-full h-8"></div>
                    </div>
                    <div className="grid grid-cols-[100px_1fr] items-center gap-4">
                        <Label className="uppercase text-xs font-bold text-muted-foreground">Date</Label>
                        <div className="h-8"></div>
                    </div>
                    <div className="grid grid-cols-[100px_1fr] items-center gap-4">
                        <Label className="uppercase text-xs font-bold text-muted-foreground">Amount</Label>
                        <div className="text-sm">0.00</div>
                    </div>

                    <div className="pt-4">
                        <Button className="bg-[#7e4f7e] hover:bg-[#6a426a] text-white">
                            Send Amount
                        </Button>
                    </div>
                </div>

                {/* Right Chat/Activity Area */}
                <div className="w-[350px] border-l pl-8">
                    <div className="flex items-center gap-2 mb-6 text-sm text-muted-foreground">
                        <span className="font-medium text-foreground">Send message</span>
                        <span>Log note</span>
                        <span>Activity</span>
                    </div>

                    <div className="space-y-6 relative">
                        {/* Timeline line */}
                        <div className="absolute left-2 top-2 bottom-0 w-px bg-border"></div>

                        {/* Activity Item */}
                        <div className="relative pl-8">
                            <div className="absolute left-0 top-0 h-4 w-4 rounded-full bg-purple-600 flex items-center justify-center text-[10px] text-white font-bold z-10">
                                F
                            </div>
                            <div className="space-y-1">
                                <div className="flex items-center gap-2 text-xs">
                                    <span className="font-bold text-foreground">FINANCE</span>
                                    <span className="text-muted-foreground">12:38 pm</span>
                                </div>
                                <p className="text-sm text-muted-foreground">Creating a new record...</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default VendorTransactions;
