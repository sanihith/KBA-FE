import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { FileText, CreditCard, Users, FileBarChart, LayoutDashboard, Settings } from 'lucide-react';

const NavCard = ({ title, description, icon: Icon }) => (
    <Card className="hover:bg-accent/50 transition-colors cursor-pointer group h-full">
        <CardHeader className="pb-2">
            <CardTitle className="text-base flex items-center group-hover:text-primary transition-colors">
                <div className="mr-3 p-2 bg-primary/10 rounded-lg group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                    <Icon className="h-5 w-5" />
                </div>
                {title}
            </CardTitle>
        </CardHeader>
        <CardContent>
            <p className="text-sm text-muted-foreground">{description}</p>
        </CardContent>
    </Card>
);

const NavigationCards = ({ userRole }) => {
    const getAllModules = () => {
        const baseModules = [
            { title: "CRM Requests", description: "Manage and track all customer requests", icon: LayoutDashboard },
            { title: "Reports & Analytics", description: "View detailed performance reports", icon: FileBarChart },
        ];

        if (userRole === 'Finance Manager') {
            return [
                ...baseModules,
                { title: "Budget Management", description: "Allocate and monitor division budgets", icon: CreditCard },
                { title: "Vendor Management", description: "Manage vendor registrations and agreements", icon: Users },
            ];
        } else if (userRole === 'Vendor') {
            return [
                { title: "My Assigned Services", description: "View and update assigned service requests", icon: LayoutDashboard },
                { title: "Vendor Statement", description: "View financial statements and payments", icon: FileText },
            ];
        }

        // Default for others
        return [
            ...baseModules,
            { title: "Vendor Statement", description: "View vendor payment history", icon: FileText },
        ];
    };

    const modules = getAllModules();

    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 mb-8">
            {modules.map((module, index) => (
                <NavCard
                    key={index}
                    title={module.title}
                    description={module.description}
                    icon={module.icon}
                />
            ))}
        </div>
    );
};

export default NavigationCards;
