import React, { useState } from 'react';
import HeroSection from '@/components/dashboard/HeroSection';
import StatsCards from '@/components/dashboard/StatsCards';
import QuickActions from '@/components/dashboard/QuickActions';
import ActivityFeed from '@/components/dashboard/ActivityFeed';
import BudgetOverview from '@/components/dashboard/BudgetOverview';
import NavigationCards from '@/components/dashboard/NavigationCards';
import { USERS } from '@/lib/mockData';

const Dashboard = () => {
    // Default to first user (Admin)
    const [currentUser, setCurrentUser] = useState(USERS[0]);

    const handleRoleChange = (userId) => {
        const newUser = USERS.find(u => u.id === userId);
        if (newUser) {
            setCurrentUser(newUser);
        }
    };

    return (
        <div className="min-h-screen bg-gray-50 dark:bg-gray-950 p-4 md:p-8 font-sans text-gray-900 dark:text-gray-100">
            <div className="max-w-7xl mx-auto space-y-6">

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
