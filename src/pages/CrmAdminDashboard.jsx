import React from 'react';
import { useSearchParams, useNavigate } from 'react-router-dom';
import CrmRequestListing from '@/components/dashboard/crm/CrmRequestListing';
import VendorAllocation from '@/components/dashboard/crm/VendorAllocation';
import VendorAcknowledgment from '@/components/dashboard/crm/VendorAcknowledgment';
import CrmVendorRequests from '@/components/dashboard/crm/VendorRequests';
import VendorTable from '@/components/dashboard/crm/VendorTable';
import DoctorDocuments from '@/components/dashboard/crm/DoctorDocuments';
import ProductsTable from '@/components/dashboard/crm/ProductsTable';
import { LayoutDashboard, Users, FileText, CheckSquare, List, File, Package, Plus, ChevronLeft, ChevronRight } from "lucide-react";

const CrmAdminDashboard = () => {
    const navigate = useNavigate();
    const [searchParams, setSearchParams] = useSearchParams();
    const activeTab = searchParams.get('tab') || 'listing';

    const setActiveTab = (tabId) => {
        setSearchParams((prev) => {
            const next = new URLSearchParams(prev);
            next.set('tab', tabId);
            return next;
        });
    };

    const NAV_ITEMS = [
        { id: 'listing', label: 'Request Listing', icon: List },
        { id: 'allocation', label: 'Vendor Allocation', icon: Users },
        { id: 'acknowledgement', label: 'Acknowledgement', icon: CheckSquare },
        { id: 'requests', label: 'Vendor Requests', icon: FileText },
        { id: 'vendors', label: 'Vendors', icon: Users },
        { id: 'documents', label: 'Doctor Documents', icon: File },
        { id: 'products', label: 'Products', icon: Package },
    ];

    const requestId = searchParams.get('requestId') || searchParams.get('vendorId') || searchParams.get('productId');
    const activeTabLabel = NAV_ITEMS.find(item => item.id === activeTab)?.label;

    return (
        <div className="miAcknowledn-h-screen bg-background text-foreground">
            {/* Header */}
            <header className="border-b bg-card">
                <div className="container mx-auto px-4 py-4 flex items-center justify-between">
                    <div className="flex items-center gap-4">
                        {/* Interactive Breadcrumbs for Better UX */}
                        <div className="flex items-center gap-2">
                            <button
                                onClick={() => navigate('/')}
                                className="h-8 w-8 flex items-center justify-center rounded-full hover:bg-gray-100 transition-colors text-gray-500 hover:text-gray-900 group"
                                title="Back to Home"
                            >
                                <ChevronLeft size={20} className="transition-transform group-hover:-translate-x-0.5" />
                            </button>

                            <nav className="flex items-center text-[13px] font-medium tracking-tight">
                                <button
                                    onClick={() => navigate('/')}
                                    className="text-gray-400 hover:text-gray-900 transition-colors"
                                >
                                    Home
                                </button>
                                <ChevronRight size={14} className="mx-1.5 text-gray-300" />
                                <button
                                    onClick={() => {
                                        setSearchParams(prev => {
                                            const next = new URLSearchParams(prev);
                                            next.delete('requestId');
                                            next.delete('vendorId');
                                            next.delete('productId');
                                            return next;
                                        });
                                    }}
                                    className={`${!requestId ? 'text-gray-900 font-bold' : 'text-gray-400 hover:text-gray-900'} transition-colors`}
                                >
                                    CRM
                                </button>
                                
                                 
                            </nav>
                        </div>

                        <div className="h-4 w-px bg-gray-200 mx-2" />
                        <div className="flex items-center gap-3">
                            <div className="h-10 w-10 bg-white rounded-lg flex items-center justify-center shadow-md overflow-hidden border border-gray-100">
                                <img src="/pulselogo.jpeg" alt="Logo" className="w-full h-full object-cover" />
                            </div>
                            <h1 className="text-xl font-bold hidden sm:block">CRM Admin</h1>
                        </div>
                    </div>
                </div>

                {/* Tabs */}
                <div className="container mx-auto px-4 mt-4 overflow-x-auto">
                    <div className="flex gap-6 border-b min-w-max items-center">
                        {NAV_ITEMS.map((item) => (
                            <button
                                key={item.id}
                                onClick={() => setActiveTab(item.id)}
                                className={`pb-3 px-1 text-sm font-medium transition-all flex items-center gap-2 relative uppercase tracking-tight ${activeTab === item.id
                                    ? 'text-primary'
                                    : 'text-muted-foreground hover:text-foreground'
                                    }`}
                            >
                                <item.icon size={15} />
                                {item.label}
                                {activeTab === item.id && (
                                    <span className="absolute bottom-0 left-0 w-full h-0.5 bg-primary rounded-t-full" />
                                )}
                            </button>
                        ))}
                        <button className="pb-3 px-1 text-muted-foreground hover:text-foreground">
                            <Plus size={16} />
                        </button>
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
                    {activeTab === 'products' && <ProductsTable />}
                </div>
            </main>
        </div>
    );
};

export default CrmAdminDashboard;
