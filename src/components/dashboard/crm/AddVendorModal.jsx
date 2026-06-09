import React from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { X, ArrowUpDown } from "lucide-react";
import GiftVoucherModal from './GiftVoucherModal';
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";

const EXISTING_VENDORS = [
    'BLUEDART EXPRESS',
    'DHL LOGISTICS',
    'FEDEX INDIA',
    'DTDC COURIER',
    'ECOM EXPRESS LTD'
];

const EXISTING_SERVICES = [
    'TRAVEL - FLIGHT',
    'TRAVEL - TRAIN',
    'TRAVEL - CAR',
    'GIFT CARD',
    'PURCHASE',
    'CHEQUE',
    'CASH'
];

const AddVendorModal = ({ onClose, onSave }) => {
    const [showGiftVoucherModal, setShowGiftVoucherModal] = React.useState(false);
    const [vendorData, setVendorData] = React.useState({
        name: '',
        email: '',
        type: '',
        amount: '0.00'
    });

    const handleSave = (closeAfter = true) => {
        if (!vendorData.name) return;
        onSave(vendorData);
        if (closeAfter) {
            onClose();
        } else {
            setVendorData({ name: '', email: '', type: '', amount: '0.00' });
        }
    };

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-sm animate-in fade-in duration-200">
            <div className="bg-white w-full max-w-4xl max-h-[90vh] overflow-y-auto rounded-sm shadow-2xl border border-gray-100 animate-in zoom-in-95 duration-200 flex flex-col">
                {/* Header */}
                <div className="flex items-center justify-between border-b px-6 py-4 sticky top-0 bg-white z-10">
                    <h2 className="text-xs font-bold text-gray-800 uppercase tracking-widest">Create ADD VENDOR</h2>
                    <Button variant="ghost" size="icon" onClick={onClose} className="text-gray-400 hover:text-gray-600">
                        <X className="h-5 w-5" />
                    </Button>
                </div>

                {/* Content */}
                <div className="p-10 space-y-8 flex-1">
                    <div className="grid grid-cols-[180px_1fr] gap-12 items-center">
                        <Label className="uppercase text-[11px] font-bold text-gray-700 tracking-wider">Vendor Name</Label>
                        <Select value={vendorData.name} onValueChange={(val) => setVendorData(p => ({...p, name: val}))}>
                            <SelectTrigger className="border-0 border-b rounded-none px-0 h-8 focus:ring-0 focus:border-teal-600 border-teal-600/30 bg-transparent text-teal-600 font-medium uppercase text-[13px] shadow-none">
                                <SelectValue placeholder="Select vendor..." />
                            </SelectTrigger>
                            <SelectContent className="z-[110]">
                                {EXISTING_VENDORS.map(v => <SelectItem key={v} value={v}>{v}</SelectItem>)}
                            </SelectContent>
                        </Select>
                    </div>

                    <div className="grid grid-cols-[180px_1fr] gap-12 items-center">
                        <Label className="uppercase text-[11px] font-bold text-gray-700 tracking-wider">Balance</Label>
                        <div className="text-[13px] text-gray-800 font-bold">0.00</div>
                    </div>

                    <div className="grid grid-cols-[180px_1fr] gap-12 items-center">
                        <Label className="uppercase text-[11px] font-bold text-gray-700 tracking-wider">Vendor Email</Label>
                        <div>
                            <Input 
                                value={vendorData.email}
                                onChange={(e) => setVendorData(p => ({...p, email: e.target.value}))}
                                className="border-0 border-b rounded-none px-0 h-8 focus-visible:ring-0 focus-visible:border-teal-600 border-gray-200 bg-transparent text-[13px]" 
                                placeholder="vendor@example.com"
                            />
                        </div>
                    </div>

                    <div className="grid grid-cols-[180px_1fr] gap-12 items-center">
                        <Label className="uppercase text-[11px] font-bold text-gray-700 tracking-wider">Type of Service</Label>
                        <Select value={vendorData.type} onValueChange={(val) => setVendorData(p => ({...p, type: val}))}>
                            <SelectTrigger className="border-0 border-b rounded-none px-0 h-8 focus:ring-0 focus:border-teal-600 border-gray-200 bg-transparent uppercase text-[13px] shadow-none">
                                <SelectValue placeholder="Select service type..." />
                            </SelectTrigger>
                            <SelectContent className="z-[110]">
                                {EXISTING_SERVICES.map(s => <SelectItem key={s} value={s}>{s}</SelectItem>)}
                            </SelectContent>
                        </Select>
                    </div>

                    <div className="grid grid-cols-[180px_1fr] gap-12 items-center">
                        <Label className="uppercase text-[11px] font-bold text-gray-700 tracking-wider">Voucher Amount</Label>
                        <div>
                            <Input 
                                type="number"
                                value={vendorData.amount}
                                onChange={(e) => setVendorData(p => ({...p, amount: e.target.value}))}
                                className="border-0 border-b rounded-none px-0 h-8 focus-visible:ring-0 focus-visible:border-teal-600 border-gray-200 bg-transparent text-[13px] font-bold" 
                            />
                        </div>
                    </div>

                    {/* Sub Table (Static for now as per design) */}
                    <div className="grid grid-cols-[180px_1fr] gap-12 pt-4">
                        <Label className="uppercase text-[11px] font-bold text-gray-500 tracking-wider">Gift Vouchers</Label>
                        <div className="border rounded-sm overflow-hidden border-gray-100">
                            <table className="w-full text-sm">
                                <thead className="bg-[#f8f9fa]">
                                    <tr className="border-b border-gray-100">
                                        <th className="text-left px-6 py-3 font-bold text-gray-600 uppercase text-[10px] tracking-widest">Gift Card Number</th>
                                        <th className="text-right px-6 py-3 font-bold text-gray-600 uppercase text-[10px] tracking-widest flex items-center justify-end gap-1">
                                            Amount <ArrowUpDown size={12} className="text-gray-400" />
                                        </th>
                                    </tr>
                                </thead>
                                <tbody className="divide-y divide-gray-50">
                                    <tr className="hover:bg-gray-50">
                                        <td className="px-6 py-3">
                                            <button
                                                className="text-teal-600 hover:text-teal-700 text-[11px] font-bold uppercase tracking-wider"
                                                onClick={() => setShowGiftVoucherModal(true)}
                                            >
                                                Add a line
                                            </button>
                                        </td>
                                        <td></td>
                                    </tr>
                                </tbody>
                            </table>
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
            {showGiftVoucherModal && (
                <GiftVoucherModal onClose={() => setShowGiftVoucherModal(false)} />
            )}
        </div>
    );
};

export default AddVendorModal;
