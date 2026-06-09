import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Search, Paperclip, User, X } from "lucide-react";

const VendorTransactions = () => {
    const [formData, setFormData] = useState({
    });

    const [messages, setMessages] = useState([
    ]);

    const handleInputChange = (field, value) => {
        setFormData(prev => ({ ...prev, [field]: value }));
    };

    const handleSendAmount = () => {
        const currentTime = new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }).toLowerCase();
        setMessages(prev => [
            { id: Date.now(), user: 'SYSTEM', time: currentTime, text: `Amount of ₹${formData.amount} sent successfully.` },
            ...prev
        ]);
    };

    return (
        <div className="bg-white min-h-screen flex flex-col animate-in fade-in duration-300 font-sans">
            {/* Header / Toolbar */}
            <div className="border-b border-gray-100 px-8 py-3 flex items-center justify-between sticky top-0 bg-white z-10 h-14">
                <div className="flex items-center gap-3">
                    <Button className="bg-[#714b67] hover:bg-[#5a3c52] text-white text-[11px] font-bold h-7 px-4 rounded-sm shadow-sm uppercase tracking-tight">
                        Discard
                    </Button>
                    <div className="flex items-center gap-1">
                        <span className="text-gray-400 text-sm font-medium">Finance /</span>
                        <span className="text-gray-800 text-sm font-semibold">Transactions</span>
                    </div>
                </div>
            </div>

            <div className="flex flex-1 overflow-hidden">
                {/* Main Content Area */}
                <div className="flex-1 overflow-y-auto p-12 bg-white flex flex-col">
                    <div className="max-w-4xl space-y-12">
                        <div className="space-y-1">
                            <h2 className="text-[11px] font-bold text-gray-400 uppercase tracking-widest mb-6">Transaction Details</h2>

                            <div className="space-y-1">
                                <TransactionField
                                    label="Vendor ID"
                                    value={formData.vendorId}
                                    onChange={(val) => handleInputChange('vendorId', val)}
                                />
                                <TransactionField
                                    label="Date"
                                    value={formData.date}
                                    type="date"
                                    onChange={(val) => handleInputChange('date', val)}
                                />
                                <TransactionField
                                    label="Amount" text
                                    value={formData.amount}
                                    type="number"
                                    onChange={(val) => handleInputChange('amount', val)}
                                />
                            </div>

                            <div className="pt-10">
                                <Button
                                    onClick={handleSendAmount}
                                    className="bg-[#714b67] hover:bg-[#5a3c52] text-white uppercase font-bold text-[11px] px-8 h-8 rounded-sm shadow-sm transition-all active:scale-95"
                                >
                                    Send Amount
                                </Button>
                            </div>
                        </div>
                    </div>

                    {/* Chatter / Activity Section */}
                    <div className="mt-auto pt-16">
                        <div className="flex items-center gap-2 pb-4 border-b border-gray-100 mb-8">
                            <Button variant="ghost" className="h-8 px-4 text-[13px] font-medium bg-[#714b67] text-white hover:bg-[#5a3c52] rounded-sm transition-all active:scale-95">
                                Send message
                            </Button>
                            <Button variant="ghost" className="h-8 px-4 text-[13px] font-medium text-gray-600 hover:bg-gray-100 rounded-sm">
                                Log note
                            </Button>
                            <Button variant="ghost" className="h-8 px-4 text-[13px] font-medium text-gray-600 hover:bg-gray-100 rounded-sm">
                                Activity
                            </Button>
                            <div className="flex-1"></div>
                            <div className="flex items-center gap-4 text-gray-400">
                                <Search className="h-4 w-4 cursor-pointer hover:text-gray-600" />
                                <Paperclip className="h-4 w-4 cursor-pointer hover:text-gray-600" />
                                <div className="flex items-center gap-1 cursor-pointer hover:text-gray-600 relative group">
                                    <User className="h-4 w-4" />
                                    <span className="absolute -top-1 -right-1 flex h-3 w-3 items-center justify-center rounded-full bg-teal-500 text-[8px] font-bold text-white group-hover:scale-110 transition-transform shadow-sm">
                                        1
                                    </span>
                                </div>
                            </div>
                        </div>

                        <div className="space-y-6 relative ml-4 px-8 border-l border-gray-100">
                            <div className="absolute -left-3 top-0 bottom-0 w-[1px] bg-gray-100"></div>
                            {messages.map((msg) => (
                                <div key={msg.id} className="relative group animate-in slide-in-from-top-2 duration-300">
                                    <div className="absolute -left-[45px] top-1 h-8 w-8 rounded-sm bg-teal-600 flex items-center justify-center text-[11px] text-white font-bold shadow-sm z-10">
                                        {msg.user[0]}
                                    </div>
                                    <div className="space-y-1">
                                        <div className="flex items-center gap-2">

                                            <span className="text-[12px] font-bold text-gray-800 uppercase">{msg.user}</span>
                                            <span className="text-[11px] text-gray-400 font-medium">{msg.time}</span>
                                        </div>
                                        <p className="text-[13px] text-gray-600 font-medium tracking-tight">{msg.text}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

const TransactionField = ({ label, value, onChange, type = "text" }) => (
    <div className="grid grid-cols-[150px_1fr] items-center py-2 group">
        <label className="text-[11px] font-bold text-gray-800 uppercase tracking-tight">
            {label}
        </label>
        <div className="max-w-md">
            <input
                type={type}
                value={value}
                onChange={(e) => onChange(e.target.value)}
                className="w-full bg-transparent border-0 border-b border-teal-600/20 focus:border-teal-600 focus:ring-0 px-0 py-1 text-[13px] font-medium text-gray-800 transition-colors placeholder:text-gray-300"
                placeholder={`Enter ${label.toLowerCase()}...`}
            />
        </div>
    </div>
);

export default VendorTransactions;
