import React from 'react';
import { useSearchParams, useNavigate } from 'react-router-dom';
import HeroSection from '@/components/dashboard/HeroSection';
import StatsCards from '@/components/dashboard/StatsCards';
import QuickActions from '@/components/dashboard/QuickActions';
import ActivityFeed from '@/components/dashboard/ActivityFeed';
import BudgetOverview from '@/components/dashboard/BudgetOverview';
import NavigationCards from '@/components/dashboard/NavigationCards';
import { ChevronLeft } from 'lucide-react';
import { USERS } from '@/lib/mockData';

const Dashboard = () => {
    const navigate = useNavigate();
    const [searchParams, setSearchParams] = useSearchParams();
    const userId = searchParams.get('userId');

    // Default to first user (Admin)
    const currentUser = USERS.find(u => u.id === userId) || USERS[0];

    const handleRoleChange = (newUserId) => {
        setSearchParams((prev) => {
            const next = new URLSearchParams(prev);
            next.set('userId', newUserId);
            return next;
        });
    };

    return (
        <div className="min-h-screen bg-gray-50 dark:bg-gray-950 p-4 md:p-8 font-sans text-gray-900 dark:text-gray-100">
            <div className="max-w-7xl mx-auto space-y-6">
                
                {/* Back to Landing Page (Root navigation) */}
                <div className="flex items-center gap-2 mb-2">
                    <button
                        onClick={() => navigate('/')}
                        className="inline-flex items-center gap-1.5 text-gray-500 hover:text-gray-900 text-[13px] font-medium transition-colors group"
                    >
                        <ChevronLeft size={18} className="transition-transform group-hover:-translate-x-0.5" />
                        <span>Home</span>
                    </button>
                </div>

                {/* Header & Role Selector */}
                <HeroSection
                    currentUser={currentUser}
                    onRoleChange={handleRoleChange}
                />

                {/* Key Metrics */}
                <StatsCards userRole={currentUser.role} />

                {/* Primary Actions */}
                <QuickActions userRole={currentUser.role} />

                <div className="grid grid-cols-1 lg:grid-cols-7 gap-6">
                    {/* Main Content Area */}
                    <div className="col-span-1 lg:col-span-4 space-y-6">
                        <BudgetOverview userRole={currentUser.role} />
                        <NavigationCards userRole={currentUser.role} />
                    </div>

                    {/* Sidebar / Feed Area */}
                    <div className="col-span-1 lg:col-span-3">
                        <ActivityFeed />
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Dashboard;
