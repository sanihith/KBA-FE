import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { ChevronLeft, Search, Paperclip, UserCircle } from "lucide-react";

/**
 * CustomerProfilePage Component
 * Displays detailed information about a customer/
 * as requested.
 */
const CustomerProfilePage = ({ customerData, onBack }) => {
    const navigate = useNavigate();
    // Mapping the data to match the screenshot fields
    const details = [
        { label: 'DOCTOR NAME', value: customerData.customerName || 'N/A' },
        { label: 'SPECIALITY', value: customerData.speciality || 'N/A' },
        { label: 'DIVISION', value: customerData.division || 'N/A' },
        { label: 'CUSTOMER CODE', value: customerData.customerCode || 'N/A' },
        { label: 'REGION', value: customerData.region || 'N/A' },
        { label: 'TERRITORY', value: customerData.territory || 'IMP-PATNA-2' }, // Mock territory
        { label: 'TYPE', value: customerData.type || 'New' },
        { label: 'SBUH TERRITORY', value: customerData.sbuhTerritory || '' },
        { label: 'BL LOCATION', value: customerData.location || 'IMP-PATNA-BM' },
        { label: 'BH TERRITORY', value: customerData.bhTerritory || 'ZEN-HYDERABAD-BH' },
    ];

    return (
        <div className="space-y-6 animate-in fade-in duration-300">
            {/* Navigation & Actions */}
            <div className="flex justify-between items-center">
                <button
                    onClick={() => navigate('/crm-admin-dashboard')}
                    className="inline-flex items-center gap-1.5 text-gray-500 hover:text-gray-900 text-[13px] font-medium transition-colors group"
                >
                    <ChevronLeft size={18} className="transition-transform group-hover:-translate-x-0.5" />
                    <span>Back to Request</span>
                </button>
            </div>

            {/* Main Profile Card */}
            <div className="bg-white rounded-sm shadow-sm border border-gray-100 p-12 min-h-[400px]">
                <div className="space-y-4 max-w-3xl">
                    {details.map((item, index) => (
                        <div key={index} className="grid grid-cols-[200px_1fr] items-baseline">
                            <span className="text-[11px] font-bold text-gray-500 tracking-wider">
                                {item.label}
                            </span>
                            <span className="text-[13px] font-medium text-gray-800 uppercase">
                                {item.value}
                            </span>
                        </div>
                    ))}
                </div>
            </div>

            {/* Footer Buttons & Icons */}
            <div className="flex justify-between items-center border-t border-gray-100 pt-6 mt-12 bg-gray-50/30 -mx-8 px-8 pb-4">
                <div className="flex gap-1.5">
                    <Button 
                        variant="secondary" 
                        className="bg-[#a38995] hover:bg-[#927a85] text-white rounded-sm px-6 py-1.5 h-auto text-[11px] uppercase font-bold shadow-sm"
                    >
                        Send message
                    </Button>
                    <Button 
                        variant="secondary" 
                        className="bg-white hover:bg-gray-50 text-gray-500 rounded-sm px-6 py-1.5 h-auto text-[11px] uppercase font-bold border border-gray-200 shadow-sm transition-all"
                    >
                        Log note
                    </Button>
                    <Button 
                        variant="secondary" 
                        className="bg-white hover:bg-gray-50 text-gray-500 rounded-sm px-6 py-1.5 h-auto text-[11px] uppercase font-bold border border-gray-200 shadow-sm transition-all"
                    >
                        Activity
                    </Button>
                </div>
                
                <div className="flex items-center gap-6 text-gray-400">
                    <Search size={18} className="cursor-pointer hover:text-gray-600 transition-colors" />
                    <Paperclip size={18} className="cursor-pointer hover:text-gray-600 transition-colors" />
                    <div className="relative cursor-pointer hover:text-gray-600 transition-colors flex items-center">
                        <UserCircle size={18} />
                        <span className="absolute -top-2 -right-3 bg-white text-[9px] font-bold h-4 w-4 rounded-full border border-gray-200 flex items-center justify-center text-gray-800 shadow-sm">0</span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CustomerProfilePage;
