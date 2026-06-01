import React, { useState } from 'react';
import CancellationRequests from '@/components/dashboard/finance/CancellationRequests';
import VendorTransactions from '@/components/dashboard/finance/VendorTransactions';
import VendorTable from '@/components/dashboard/crm/VendorTable';
import BudgetListing from '@/components/dashboard/BudgetListing';
import { LayoutDashboard, FileX, CreditCard, Users, PieChart } from "lucide-react";

const FinanceDashboard = () => {
    const [activeTab, setActiveTab] = useState('cancellation');

    const NAV_ITEMS = [
        { id: 'cancellation', label: 'Cancellation Requests', icon: FileX },
        { id: 'transactions', label: 'Vendor Transactions', icon: CreditCard },
        { id: 'vendors', label: 'Vendors', icon: Users },
        { id: 'budget', label: 'Budget', icon: PieChart },
    ];

    return (
        <div className="min-h-screen bg-background text-foreground">
            {/* Header */}
            <header className="border-b bg-card">
                <div className="container mx-auto px-4 py-4 flex items-center gap-3">
                    <div className="h-10 w-10 bg-white rounded-lg flex items-center justify-center shadow-lg overflow-hidden">
                        <img src="/pulselogo.jpeg" alt="Logo" className="w-full h-full object-cover" />
                    </div>
                    <h1 className="text-2xl font-bold">Finance Dashboard</h1>
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
