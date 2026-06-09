import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { ChevronLeft, ArrowUpDown, ChevronDown, Trash2 } from "lucide-react";
import { Input } from "@/components/ui/input";

const VendorProfilePage = ({ vendor, onBack }) => {
    const navigate = useNavigate();
    const [isEditing, setIsEditing] = useState(vendor?.isNew || false);
    const [formData, setFormData] = useState({
        name: vendor?.name || '',
        alias: vendor?.alias || '',
        email: vendor?.email || '',
        pending: vendor?.pending || 0,
        balance: vendor?.balance || 0.00,
        serviceVal: vendor?.serviceVal || 0.00
    });

    const [transactions, setTransactions] = useState([
        { id: 1, date: '', amount: '' },
        { id: 2, date: '', amount: '' }
    ]);

    const handleInputChange = (field, value) => {
        setFormData(prev => ({ ...prev, [field]: value }));
    };

    const handleTransactionChange = (index, field, value) => {
        const updatedTransactions = [...transactions];
        updatedTransactions[index][field] = value;
        setTransactions(updatedTransactions);
    };

    const addTransaction = () => {
        setTransactions([...transactions, { id: Date.now(), date: '', amount: '' }]);
    };

    const removeTransaction = (index) => {
        if (transactions.length <= 1) return;
        setTransactions(transactions.filter((_, i) => i !== index));
    };

    const DetailField = ({ label, value, field, type = "text" }) => (
        <div className="grid grid-cols-[200px_1fr] items-center py-1.5">
            <span className="text-[11px] font-bold text-gray-800 uppercase tracking-tight">
                {label}
            </span>
            <div className="max-w-md">
                {isEditing ? (
                    <input
                        type={type}
                        value={value}
                        onChange={(e) => handleInputChange(field, e.target.value)}
                        className="w-full bg-transparent border-0 border-b border-teal-600/30 focus:border-teal-600 focus:ring-0 px-0 py-0.5 text-[13px] font-medium text-gray-800 transition-colors uppercase"
                        placeholder=""
                    />
                ) : (
                    <span className="text-[13px] text-gray-800 font-medium uppercase">
                        {value || (type === "number" ? "0.00" : "")}
                    </span>
                )}
            </div>
        </div>
    );

    return (
        <div className="bg-white min-h-screen flex flex-col animate-in fade-in duration-300">
            {/* Toolbar / Header */}
            <div className="border-b border-gray-100 flex flex-col">
                <div className="px-8 py-3 flex items-center justify-between sticky top-0 bg-white z-10">
                    <div className="flex items-center gap-4">
                        <button
                            onClick={() => navigate('?tab=vendors')}
                            className="inline-flex items-center gap-1.5 text-gray-500 hover:text-gray-900 text-[13px] font-medium transition-colors group"
                        >
                            <ChevronLeft size={18} className="transition-transform group-hover:-translate-x-0.5" />
                            <span>{isEditing && !vendor?.isNew ? 'Discard' : 'Vendors'}</span>
                        </button>
                        <div className="flex items-center gap-1 text-sm">
                            <span className="text-gray-300">/</span>
                            <span className="text-gray-800 font-semibold">{formData.name || 'New'}</span>
                        </div>
                    </div>

                    <div className="flex items-center gap-2">
                        {!isEditing && (
                            <Button
                                variant="outline"
                                onClick={() => setIsEditing(true)}
                                className="text-gray-600 uppercase font-bold text-[11px] px-6 h-7 rounded-sm border-gray-300 hover:bg-gray-50 shadow-sm transition-all active:scale-95"
                            >
                                Edit
                            </Button>
                        )}
                        <Button
                            className="bg-[#714b67] hover:bg-[#5a3c52] text-white uppercase font-bold text-[11px] px-6 h-7 rounded-sm shadow-sm transition-all active:scale-95"
                            onClick={() => {
                                setFormData({ name: '', alias: '', email: '', pending: 0, balance: 0.00, serviceVal: 0.00 });
                                setIsEditing(true);
                            }}
                        >
                            New
                        </Button>
                    </div>
                </div>
            </div>

            {/* Main Content */}
            <div className="max-w-6xl w-full mx-auto p-8 space-y-12">

                {/* Vendor Details Section */}
                <div className="space-y-8">
                    <div className="border-b border-gray-200 pb-2 mb-8">
                        <h2 className="text-[11px] font-bold text-gray-400 uppercase tracking-widest px-1">Vendor Details</h2>
                    </div>

                    <div className="space-y-1">
                        <DetailField label="Vendor Name" value={formData.name} field="name" />
                        <DetailField label="Alias Name" value={formData.alias} field="alias" />
                        <DetailField label="Email" value={formData.email} field="email" />
                        <DetailField label="Pending Services" value={formData.pending} field="pending" type="number" />
                        <DetailField label="Balance" value={formData.balance} field="balance" type="number" />
                        <DetailField label="Service Value Pending" value={formData.serviceVal} field="serviceVal" type="number" />
                    </div>
                </div>

                {/* Transactions Section */}
                <div className="space-y-8">
                    <div className="border-b border-gray-200 pb-2 mb-8">
                        <h2 className="text-[11px] font-bold text-gray-400 uppercase tracking-widest px-1">Transactions</h2>
                    </div>

                    <div className="grid grid-cols-[200px_1fr] items-start">
                        <span className="text-[11px] font-bold text-gray-500 uppercase tracking-tight pt-3">
                            Vendor Transactions
                        </span>
                        <div className="">
                            <table className="w-full text-[13px] text-left">
                                <thead className="border-b border-gray-200">
                                    <tr className="text-[11px] font-bold text-gray-800 uppercase tracking-wider">
                                        <th className="py-4 px-4 font-bold">DATE</th>
                                        <th className="py-4 px-4 text-right font-bold">
                                            <div className="flex items-center justify-end gap-1">
                                                AMOUNT <ArrowUpDown size={12} className="text-gray-400" />
                                            </div>
                                        </th>
                                    </tr>
                                </thead>
                                <tbody className="divide-y divide-gray-100 border-b border-gray-100">
                                    {transactions.map((t, i) => (
                                        <tr key={t.id} className="hover:bg-gray-50/50 transition-colors h-10 group">
                                            <td className="px-4 py-2">
                                                {isEditing ? (
                                                    <input
                                                        type="date"
                                                        value={t.date}
                                                        onChange={(e) => handleTransactionChange(i, 'date', e.target.value)}
                                                        className="w-full bg-transparent border-0 focus:ring-0 p-0 text-[13px] placeholder-gray-300"
                                                    />
                                                ) : (
                                                    t.date
                                                )}
                                            </td>
                                            <td className="px-4 py-2 text-right relative">
                                                {isEditing ? (
                                                    <div className="flex items-center justify-end gap-2">
                                                        <input
                                                            type="number"
                                                            value={t.amount}
                                                            onChange={(e) => handleTransactionChange(i, 'amount', e.target.value)}
                                                            className="w-full bg-transparent border-0 focus:ring-0 p-0 text-[13px] text-right placeholder-gray-300"
                                                            placeholder="0.00"
                                                        />
                                                        <button
                                                            onClick={() => removeTransaction(i)}
                                                            className="opacity-0 group-hover:opacity-100 text-gray-400 hover:text-red-500 transition-all p-1"
                                                        >
                                                            <Trash2 size={14} />
                                                        </button>
                                                    </div>
                                                ) : (
                                                    t.amount ? Number(t.amount).toLocaleString(undefined, { minimumFractionDigits: 2 }) : "0.00"
                                                )}
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                                <tfoot>
                                    <tr>
                                        <td colSpan={2} className="px-4 py-2">
                                            <button
                                                onClick={addTransaction}
                                                className="text-teal-600 hover:text-teal-700 text-[11px] font-bold uppercase tracking-tight"
                                            >
                                                Add a line
                                            </button>
                                        </td>
                                    </tr>
                                </tfoot>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default VendorProfilePage;
