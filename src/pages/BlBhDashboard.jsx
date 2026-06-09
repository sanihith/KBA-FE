import React from 'react';
import { useSearchParams, useNavigate } from 'react-router-dom';
import RequestForm from '@/components/dashboard/RequestForm';
import BlBhRequestListing from '@/components/dashboard/BlBhRequestListing';
import { Layers, FileText, List, ChevronLeft } from "lucide-react";
import { BL_BH_REQUESTS } from '@/lib/mockData';

const BlBhDashboard = () => {
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

    // Extract customer names from requests
    const customerNames = BL_BH_REQUESTS.map(request => request.customerName);

    return (
        <div className="min-h-screen bg-background text-foreground">
            {/* Header */}
            <header className="border-b bg-card">
                <div className="container mx-auto px-4 py-4 flex items-center justify-between">
                    <div className="flex items-center gap-4">
                        {/* Back Navigation to Home */}
                        <button
                            onClick={() => navigate('/')}
                            className="inline-flex items-center gap-1.5 text-gray-500 hover:text-gray-900 text-[13px] font-medium transition-colors group"
                        >
                            <ChevronLeft size={18} className="transition-transform group-hover:-translate-x-0.5" />
                            <span>Home</span>
                        </button>
                        <div className="h-4 w-px bg-gray-200" />
                        <div className="flex items-center gap-3">
                            <div className="h-10 w-10 bg-white rounded-lg flex items-center justify-center shadow-lg overflow-hidden">
                                <img src="/pulselogo.jpeg" alt="Logo" className="w-full h-full object-cover" />
                            </div>
                            <h1 className="text-2xl font-bold">BL/BH Dashboard</h1>
                        </div>
                    </div>
                </div>

                {/* Tabs */}
                <div className="container mx-auto px-4 mt-4">
                    <div className="flex gap-6 border-b">
                        <button
                            onClick={() => setActiveTab('listing')}
                            className={`pb-3 px-1 text-sm font-medium transition-all flex items-center gap-2 relative ${activeTab === 'listing'
                                ? 'text-primary'
                                : 'text-muted-foreground hover:text-foreground'
                                }`}
                        >
                            <List size={16} />
                            Request Listing
                            {activeTab === 'listing' && (
                                <span className="absolute bottom-0 left-0 w-full h-0.5 bg-primary rounded-t-full" />
                            )}
                        </button>
                        <button
                            onClick={() => setActiveTab('form')}
                            className={`pb-3 px-1 text-sm font-medium transition-all flex items-center gap-2 relative ${activeTab === 'form'
                                ? 'text-primary'
                                : 'text-muted-foreground hover:text-foreground'
                                }`}
                        >
                            <FileText size={16} />
                            Request Form
                            {activeTab === 'form' && (
                                <span className="absolute bottom-0 left-0 w-full h-0.5 bg-primary rounded-t-full" />
                            )}
                        </button>
                    </div>
                </div>
            </header>

            {/* Main Content */}
            <main className="container mx-auto px-4 py-8">
                {activeTab === 'listing' ? (
                    <div className="animate-in fade-in slide-in-from-bottom-2 duration-300">
                        <BlBhRequestListing />
                    </div>
                ) : (
                    <div className="animate-in fade-in slide-in-from-bottom-2 duration-300 max-w-5xl mx-auto">
                        <RequestForm customerNames={customerNames} />
                    </div>
                )}
            </main>
        </div>
    );
};

export default BlBhDashboard;
