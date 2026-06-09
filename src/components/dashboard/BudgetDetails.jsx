import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { X, Settings, ArrowUpDown, Search, Paperclip, User, MessageSquare, StickyNote, Activity as ActivityIcon, ChevronLeft } from "lucide-react";

// Mock data for the region table
const REGION_DATA = [
    { name: 'ODISHA', amount: 0.00 },
    { name: 'TELANGANA', amount: 300000.00 },
    { name: 'KERALA', amount: 250000.00 },
    { name: 'KARNATAKA', amount: 0.00 },
    { name: 'BIHAR', amount: 0.00 },
    { name: 'JHARKHAND', amount: 0.00 },
    { name: 'ANDHRA PRADESH', amount: 100000.00 },
    { name: 'WEST BENGAL', amount: 250000.00 },
];

const BudgetDetails = ({ budget, onClose }) => {
    const navigate = useNavigate();
    // Initial messages for existing budgets to match screenshot
    const [messages, setMessages] = useState(() => {
        if (budget && !budget.isNew) {
            return [];
        }
        return [];
    });
    const [fileUploaded, setFileUploaded] = useState(false);

    if (!budget) return null;

    const isNew = budget.isNew;

    const handleFileUpload = () => {
        setFileUploaded(true);
        const currentTime = new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }).toLowerCase();
        setMessages(prev => [
            { id: Date.now(), user: 'FINANCE', time: currentTime, text: 'Budget created' },
            ...prev
        ]);
    };

    return (
        <div className="bg-white min-h-screen flex flex-col border border-gray-100 animate-in fade-in duration-300">
            {/* Header / Back nav */}
            <div className="flex items-center gap-3 border-b border-gray-100 px-6 py-4 sticky top-0 bg-white z-10">
                <button
                    onClick={() => navigate('?tab=budget')}
                    className="inline-flex items-center gap-1.5 text-gray-500 hover:text-gray-900 text-[13px] font-medium transition-colors group"
                >
                    <ChevronLeft size={18} className="transition-transform group-hover:-translate-x-0.5" />
                    <span>{isNew ? 'Budget' : 'Budget'}</span>
                </button>
                <div className="h-4 w-px bg-gray-200" />
                <div className="flex items-center gap-1">
                    <span className="text-gray-400 text-sm font-medium">Budget /</span>
                    <span className="text-gray-800 text-sm font-semibold">{isNew ? 'New' : budget.id}</span>
                </div>
            </div>

            <div className="flex flex-1 overflow-hidden">
                {/* Main Content Area */}
                <div className="flex-1 overflow-y-auto p-12 bg-white flex flex-col">

                    {isNew ? (
                        <div className="space-y-8 animate-in slide-in-from-left duration-300 font-sans">
                            <div className="flex items-center gap-12">
                                <label className="text-[13px] font-bold text-gray-800 w-24 tracking-tight uppercase">Budget File</label>
                                <div className="flex flex-col gap-4">
                                    <div className="flex items-center gap-2">
                                        <input
                                            type="file"
                                            id="budget-upload"
                                            className="hidden"
                                            onChange={handleFileUpload}
                                        />
                                        <Button
                                            onClick={() => document.getElementById('budget-upload').click()}
                                            className="bg-[#714b67] hover:bg-[#5a3c52] text-white text-[11px] font-bold h-7 px-4 rounded-sm shadow-sm"
                                        >
                                            Upload your file
                                        </Button>
                                        {fileUploaded && <span className="text-xs text-green-600 font-medium tracking-tight">File selected</span>}
                                    </div>
                                    <Button
                                        onClick={handleFileUpload}
                                        className="bg-[#714b67] hover:bg-[#5a3c52] text-white text-[11px] font-bold h-7 px-4 rounded-sm shadow-sm w-fit"
                                    >
                                        Upload data
                                    </Button>
                                </div>
                            </div>
                        </div>
                    ) : (
                        <div className="space-y-4 animate-in slide-in-from-left duration-300 font-sans">
                            {/* Top Details Section - Matching Image Columns */}
                            <DetailRow label="BUDGET ID" value={budget.id} />
                            <DetailRow label="FINANCIAL YEAR" value={budget.financialYear} />
                            <DetailRow label="DIVISION" value={budget.division} />
                            <DetailRow label="QUARTER" value={budget.quarter} />
                            <DetailRow label="BUDGET AMOUNT" value={budget.amount.toLocaleString(undefined, { minimumFractionDigits: 2 })} />
                        </div>
                    )}

                    {/* Chatter / Activity Section */}
                    <div className="mt-auto pt-12">
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

                            {/* Date Divider as per image */}
                            <div className="flex items-center gap-4 py-8 justify-center relative -ml-8">
                                <div className="h-[1px] flex-1 bg-gray-50"></div>
                                <span className="text-[10px] font-bold text-gray-300 uppercase tracking-widest px-4 bg-white z-10">27 Jan 2026</span>
                                <div className="h-[1px] flex-1 bg-gray-50"></div>
                            </div>

                            {messages.length === 0 ? (
                                <div className="text-center py-4 text-xs text-gray-300 font-medium">No recent activity</div>
                            ) : (
                                messages.map((msg) => (
                                    <div key={msg.id} className="relative group animate-in slide-in-from-top-2 duration-300">
                                        {/* Avatar node */}
                                        <div className="absolute -left-[45px] top-1 h-8 w-8 rounded-sm bg-teal-600 flex items-center justify-center text-[11px] text-white font-bold shadow-sm z-10">
                                            {msg.user[0]}
                                        </div>
                                        <div className="space-y-1">
                                            <div className="flex items-center gap-2">
                                                <span className="text-[12px] font-bold text-gray-800">{msg.email || msg.user}</span>
                                                <span className="text-[11px] text-gray-400 font-medium">{msg.date || ''}{msg.time}</span>
                                            </div>
                                            <p className="text-[13px] text-gray-600 font-medium tracking-tight">{msg.text}</p>
                                        </div>
                                    </div>
                                ))
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

const DetailRow = ({ label, value }) => (
    <div className="grid grid-cols-[200px_1fr] items-center py-1.5">
        <span className="text-[11px] font-bold text-gray-800 uppercase tracking-tight">{label}</span>
        <span className="text-[13px] font-medium text-gray-800 uppercase">{value}</span>
    </div>
);


export default BudgetDetails;
