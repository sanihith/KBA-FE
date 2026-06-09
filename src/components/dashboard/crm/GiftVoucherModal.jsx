import React from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { X } from "lucide-react";

const GiftVoucherModal = ({ onClose, onSave }) => {
    const [voucherData, setVoucherData] = React.useState({
        name: '',
        amount: '0.00'
    });

    const handleSave = (closeAfter = true) => {
        if (!voucherData.name) return;
        if (onSave) onSave(voucherData);
        if (closeAfter) {
            onClose();
        } else {
            setVoucherData({ name: '', amount: '0.00' });
        }
    };

    return (
        <div className="fixed inset-0 z-[60] flex items-center justify-center bg-black/40 backdrop-blur-sm animate-in fade-in duration-200">
            <div className="bg-white w-full max-w-2xl rounded-sm shadow-2xl border border-gray-100 animate-in zoom-in-95 duration-200 flex flex-col">
                {/* Header */}
                <div className="flex items-center justify-between border-b px-6 py-4 bg-white z-10">
                    <h2 className="text-xs font-bold text-gray-800 uppercase tracking-widest">Create GIFT VOUCHERS</h2>
                    <Button variant="ghost" size="icon" onClick={onClose} className="text-gray-400 hover:text-gray-600">
                        <X className="h-5 w-5" />
                    </Button>
                </div>

                {/* Content */}
                <div className="p-10 space-y-8">
                    <div className="space-y-6">
                        <div>
                            <Input
                                value={voucherData.name}
                                onChange={(e) => setVoucherData(p => ({...p, name: e.target.value}))}
                                placeholder="Voucher Name..."
                                className="text-2xl border-0 border-b rounded-none px-0 focus-visible:ring-0 focus-visible:border-teal-600 border-teal-600/30 bg-transparent placeholder:text-gray-300 h-auto py-2 font-light uppercase"
                            />
                        </div>

                        <div className="grid grid-cols-[120px_1fr] items-center gap-4">
                            <Label className="uppercase text-[11px] font-bold text-gray-500 tracking-wider">AMOUNT</Label>
                            <div>
                                <Input
                                    type="number"
                                    value={voucherData.amount}
                                    onChange={(e) => setVoucherData(p => ({...p, amount: e.target.value}))}
                                    className="border-0 border-b rounded-none px-0 focus-visible:ring-0 focus-visible:border-teal-600 border-border/50 bg-transparent max-w-[200px] text-[13px] font-bold"
                                />
                            </div>
                        </div>
                    </div>
                </div>

                {/* Footer */}
                <div className="border-t p-6 px-10 flex gap-2">
                    <Button 
                        onClick={() => handleSave(true)}
                        className="bg-[#6b4260] hover:bg-[#5a3751] text-white uppercase font-bold text-[10px] px-8 h-8 rounded-sm shadow-sm transition-all active:scale-95"
                    >
                        Save & Close
                    </Button>
                    <Button 
                        onClick={() => handleSave(false)}
                        className="bg-[#6b4260] hover:bg-[#5a3751] text-white uppercase font-bold text-[10px] px-8 h-8 rounded-sm shadow-sm transition-all active:scale-95"
                    >
                        Save & New
                    </Button>
                    <Button 
                        variant="secondary" 
                        onClick={onClose}
                        className="bg-[#e9ecef] hover:bg-[#dee2e6] text-gray-700 border-0 uppercase font-bold text-[10px] px-8 h-8 rounded-sm transition-all active:scale-95"
                    >
                        Discard
                    </Button>
                </div>
            </div>
        </div>
    );
};

export default GiftVoucherModal;
