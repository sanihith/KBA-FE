import React, { useState } from 'react';
import RequestForm from '@/components/dashboard/RequestForm';
import RequestListing from '@/components/dashboard/RequestListing';
import { Layers, FileText, List } from "lucide-react";

const BlBhDashboard = () => {
    const [activeTab, setActiveTab] = useState('form');

    return (
        <div className="min-h-screen bg-background text-foreground">
            {/* Header */}
            <header className="border-b bg-card">
                <div className="container mx-auto px-4 py-4 flex items-center gap-3">
                    <div className="h-10 w-10 bg-white rounded-lg flex items-center justify-center shadow-lg overflow-hidden">
                        <img src="/pulselogo.jpeg" alt="Logo" className="w-full h-full object-cover" />
                    </div>
                    <h1 className="text-2xl font-bold">BL/BH Dashboard</h1>
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
                        <RequestListing />
                    </div>
                ) : (
                    <div className="animate-in fade-in slide-in-from-bottom-2 duration-300 max-w-5xl mx-auto">
                        <RequestForm />
                    </div>
                )}
            </main>
        </div>
    );
};

export default BlBhDashboard;
