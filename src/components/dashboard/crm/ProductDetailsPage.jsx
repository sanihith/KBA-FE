import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Search, Paperclip, User, MessageSquare, StickyNote, Activity as ActivityIcon, ChevronLeft } from "lucide-react";

/**
 * ProductDetailsPage Component
 * 
 * Renders the detail view and creation form for a product.
 * Matches the provided UI images (Image 1 for view, Image 2 for new/edit).
 */
const ProductDetailsPage = ({ product, onBack }) => {
    // Determine if we are in "New" mode or "View" mode
    const isNew = !product;
    const [isEditing, setIsEditing] = useState(isNew);

    const [formData, setFormData] = useState({
        division: product?.division || '',
        brand: product?.brand || '',
        rate: product?.rate || '0.00'
    });

    const handleInputChange = (field, value) => {
        setFormData(prev => ({
            ...prev,
            [field]: value
        }));
    };

    const DetailField = ({ label, value, field, type = "text" }) => {
        return (
            <div className="grid grid-cols-[200px_1fr] items-center gap-4 py-2">
                <Label className="uppercase text-[11px] font-bold text-gray-800 tracking-wider">
                    {label}
                </Label>
                <div className="flex-1 max-w-md">
                    {(!isEditing) ? (
                        <span className="text-[14px] font-medium text-gray-800">
                            {value || '-'}
                        </span>
                    ) : (
                        <div className="relative group">
                            <input
                                type={type}
                                value={value}
                                onChange={(e) => handleInputChange(field, e.target.value)}
                                className="w-full bg-transparent border-0 border-b border-teal-600/30 focus:border-teal-600 focus:ring-0 px-0 py-1 text-[14px] font-medium text-gray-800 transition-colors"
                                placeholder={field === 'division' ? '' : (field === 'brand' ? '' : '0.00')}
                            />
                        </div>
                    )}
                </div>
            </div>
        );
    };

    return (
        <div className="bg-white min-h-screen flex flex-col animate-in fade-in duration-300">
            {/* Header / Actions Bar */}
            <div className="max-w-6xl w-full mx-auto px-8 pt-6 pb-2 flex items-center justify-between border-b border-gray-100">
                <div className="flex items-center gap-4">
                    <button
                        onClick={() => {
                            if (isEditing && !isNew) {
                                setIsEditing(false);
                            } else {
                                onBack();
                            }
                        }}
                        className="inline-flex items-center gap-1.5 text-gray-500 hover:text-gray-900 text-[13px] font-medium transition-colors group"
                    >
                        <ChevronLeft size={18} className="transition-transform group-hover:-translate-x-0.5" />
                        <span>{isEditing && !isNew ? 'Discard' : 'Products'}</span>
                    </button>
                    <div className="flex items-center gap-1 text-sm">
                        <span className="text-gray-300">/</span>
                        <span className="text-gray-800 font-semibold">{isNew ? 'New' : formData.brand}</span>
                    </div>
                </div>

                {!isEditing && (
                    <Button
                        variant="outline"
                        onClick={() => setIsEditing(true)}
                        className="text-gray-600 uppercase font-bold text-[11px] px-6 h-7 rounded-sm border-gray-300 hover:bg-gray-50 flex items-center gap-2"
                    >
                        Edit
                    </Button>
                )}
            </div>

            {/* Main Form Content */}
            <div className="flex-1 max-w-6xl w-full mx-auto px-8 py-12">
                <div className="space-y-4 max-w-2xl">
                    <DetailField
                        label="DIVISION"
                        value={formData.division}
                        field="division"
                    />
                    <DetailField
                        label="BRAND NAME"
                        value={formData.brand}
                        field="brand"
                    />
                    <DetailField
                        label="RATE"
                        value={formData.rate}
                        field="rate"
                        type="number"
                    />
                </div>
            </div>

            {/* Odoo Style Bottom Navbar */}
            <div className="border-t border-gray-200 bg-gray-50/50 py-3 px-8 mt-auto">
                <div className="max-w-6xl mx-auto flex items-center justify-between">
                    <div className="flex items-center gap-2">
                        <Button
                            variant="ghost"
                            className={`h-9 px-4 rounded-sm text-[13px] font-medium transition-all ${isEditing ? 'bg-[#714b67] text-white hover:bg-[#5a3c52]' : 'bg-transparent text-gray-600 hover:bg-gray-200'}`}
                        >
                            Send message
                        </Button>
                        <Button
                            variant="ghost"
                            className="h-9 px-4 rounded-sm text-[13px] font-medium text-gray-600 hover:bg-white hover:shadow-sm border border-transparent hover:border-gray-200 transition-all"
                        >
                            Log note
                        </Button>
                        <Button
                            variant="ghost"
                            className="h-9 px-4 rounded-sm text-[13px] font-medium text-gray-600 hover:bg-white hover:shadow-sm border border-transparent hover:border-gray-200 transition-all"
                        >
                            Activity
                        </Button>
                    </div>

                    <div className="flex items-center gap-4 text-gray-400">
                        <Search className="h-4 w-4 cursor-pointer hover:text-gray-600 transition-colors" />
                        <Paperclip className="h-4 w-4 cursor-pointer hover:text-gray-600 transition-colors" />
                        <div className="flex items-center gap-1 cursor-pointer hover:text-gray-600 transition-colors group">
                            <User className="h-4 w-4" />
                            <span className="text-[11px] font-bold">0</span>
                        </div>
                    </div>
                </div>
            </div>

            {/* Timeline Placeholder (Odoo Style) */}
            <div className="bg-white px-8 py-4 border-t border-gray-100 flex flex-col items-center justify-center min-h-[60px]">
                <div className="w-full flex items-center gap-4 justify-center">
                    <div className="h-[1px] flex-1 bg-gray-100"></div>
                    <span className="text-[10px] font-bold text-gray-300 uppercase tracking-widest">Today</span>
                    <div className="h-[1px] flex-1 bg-gray-100"></div>
                </div>
            </div>
        </div>
    );
};

export default ProductDetailsPage;
