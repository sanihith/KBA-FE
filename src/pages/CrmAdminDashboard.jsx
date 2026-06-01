import React, { useState } from 'react';
import CrmRequestListing from '@/components/dashboard/crm/CrmRequestListing';
import VendorAllocation from '@/components/dashboard/crm/VendorAllocation';
import VendorAcknowledgment from '@/components/dashboard/crm/VendorAcknowledgment';
import CrmVendorRequests from '@/components/dashboard/crm/VendorRequests';
import VendorTable from '@/components/dashboard/crm/VendorTable';
import DoctorDocuments from '@/components/dashboard/crm/DoctorDocuments';
import { LayoutDashboard, Users, FileText, CheckSquare, List, File } from "lucide-react";

const CrmAdminDashboard = () => {
    const [activeTab, setActiveTab] = useState('listing');

    const NAV_ITEMS = [
        { id: 'listing', label: 'Request Listing', icon: List },
        { id: 'allocation', label: 'Vendor Allocation', icon: Users },
        { id: 'acknowledgement', label: 'Acknowledgement', icon: CheckSquare },
        { id: 'requests', label: 'Vendor Requests', icon: FileText },
        { id: 'vendors', label: 'Vendors', icon: Users },
        { id: 'documents', label: 'Doctor Documents', icon: File },
    ];

    return (
        <div className="min-h-screen bg-background text-foreground">
            {/* Header */}
            <header className="border-b bg-card">
                <div className="container mx-auto px-4 py-4 flex items-center gap-3">
                    <div className="h-10 w-10 bg-white rounded-lg flex items-center justify-center shadow-lg overflow-hidden">
                        <img src="/pulselogo.jpeg" alt="Logo" className="w-full h-full object-cover" />
                    </div>
                    <h1 className="text-2xl font-bold">CRM Admin Dashboard</h1>
                </div>

                {/* Tabs */}
                <div className="container mx-auto px-4 mt-4 overflow-x-auto">
                    <div className="flex gap-6 border-b min-w-max">
                        {NAV_ITEMS.map((item) => (
                            <button
                                key={item.id}
                                onClick={() => setActiveTab(item.id)}
                                className={`pb-3 px-1 text-sm font-medium transition-all flex items-center gap-2 relative ${activeTab === item.id
                                    ? 'text-primary'
                                    : 'text-muted-foreground hover:text-foreground'
                                    }`}
                            >
                                <item.icon size={16} />
                                {item.label}
                                {activeTab === item.id && (
                                    <span className="absolute bottom-0 left-0 w-full h-0.5 bg-primary rounded-t-full" />
                                )}
                            </button>
                        ))}
                    </div>
                </div>
            </header>

            {/* Main Content */}
            <main className="container mx-auto px-4 py-8">
                <div className="animate-in fade-in slide-in-from-bottom-2 duration-300">
                    {activeTab === 'listing' && <CrmRequestListing />}
                    {activeTab === 'allocation' && <VendorAllocation />}
                    {activeTab === 'acknowledgement' && <VendorAcknowledgment />}
                    {activeTab === 'requests' && <CrmVendorRequests />}
                    {activeTab === 'vendors' && <VendorTable />}
                    {activeTab === 'documents' && <DoctorDocuments />}
                </div>
            </main>
        </div>
    );
};

export default CrmAdminDashboard;
