import React from 'react';
import { useSearchParams, useNavigate } from 'react-router-dom';
import CancellationRequests from '@/components/dashboard/finance/CancellationRequests';
import VendorTransactions from '@/components/dashboard/finance/VendorTransactions';
import VendorTable from '@/components/dashboard/crm/VendorTable';
import BudgetListing from '@/components/dashboard/BudgetListing';
import { LayoutDashboard, FileX, CreditCard, Users, PieChart, ChevronLeft, ChevronRight } from "lucide-react";

const FinanceDashboard = () => {
    const navigate = useNavigate();
    const [searchParams, setSearchParams] = useSearchParams();
    const activeTab = searchParams.get('tab') || 'cancellation';

    const setActiveTab = (tabId) => {
        setSearchParams((prev) => {
            const next = new URLSearchParams(prev);
            next.set('tab', tabId);
            return next;
        });
    };

    const NAV_ITEMS = [
        { id: 'cancellation', label: 'Cancellation Requests', icon: FileX },
        { id: 'transactions', label: 'Vendor Transactions', icon: CreditCard },
        { id: 'vendors', label: 'Vendors', icon: Users },
        { id: 'budget', label: 'Budget', icon: PieChart },
    ];

    const activeTabLabel = NAV_ITEMS.find(item => item.id === activeTab)?.label;
    const subItemId = searchParams.get('budget') || searchParams.get('request') || searchParams.get('vendorId');

    return (
        <div className="min-h-screen bg-background text-foreground">
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
                                            next.delete('budget');
                                            next.delete('request');
                                            next.delete('vendorId');
                                            return next;
                                        });
                                    }}
                                    className={`${!subItemId ? 'text-gray-900 font-bold' : 'text-gray-400 hover:text-gray-900'} transition-colors`}
                                >
                                    Finance
                                </button>
                                {activeTabLabel && (
                                    <>
                                        <ChevronRight size={14} className="mx-1.5 text-gray-300" />
                                        <span className={`${!subItemId ? 'text-gray-900' : 'text-gray-400'}`}>
                                            {activeTabLabel}
                                        </span>
                                    </>
                                )}
                                {subItemId && (
                                    <>
                                        <ChevronRight size={14} className="mx-1.5 text-gray-300" />
                                        <span className="text-gray-900 font-bold max-w-[200px] truncate">
                                            {subItemId}
                                        </span>
                                    </>
                                )}
                            </nav>
                        </div>

                        <div className="h-4 w-px bg-gray-200 mx-2" />
                        <div className="flex items-center gap-3">
                            <div className="h-10 w-10 bg-white rounded-lg flex items-center justify-center shadow-md overflow-hidden border border-gray-100">
                                <img src="/pulselogo.jpeg" alt="Logo" className="w-full h-full object-cover" />
                            </div>
                            <h1 className="text-xl font-bold hidden sm:block">Finance</h1>
                        </div>
                    </div>
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
                    {activeTab === 'cancellation' && <CancellationRequests />}
                    {activeTab === 'transactions' && <VendorTransactions />}
                    {activeTab === 'vendors' && <VendorTable />}
                    {activeTab === 'budget' && <BudgetListing />}
                </div>
            </main>
        </div>
    );
};

export default FinanceDashboard;
