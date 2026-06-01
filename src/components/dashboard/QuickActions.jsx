import React from 'react';
import { Button } from "@/components/ui/button";
import { PlusCircle, FileText, Upload, Users, FileBarChart, ListChecks } from 'lucide-react';

const QuickActions = ({ userRole }) => {
    const getActionsForRole = () => {
        switch (userRole) {
            case 'Finance Manager':
                return [
                    { label: "Upload Budget", icon: Upload, variant: "default" },
                    { label: "Manage Vendors", icon: Users, variant: "outline" },
                    { label: "View Statements", icon: FileBarChart, variant: "ghost" }
                ];

            case 'Vendor':
                return [
                    { label: "View Assigned Services", icon: ListChecks, variant: "default" },
                    { label: "Vendor Statement", icon: FileText, variant: "outline" }
                ];

            default: // Admin, BL, BH, SBUH
                return [
                    { label: "New Request", icon: PlusCircle, variant: "default" },
                    { label: "View All Requests", icon: FileText, variant: "outline" }
                ];
        }
    };

    const actions = getActionsForRole();

    return (
        <div className="flex flex-wrap gap-3 mb-8">
            {actions.map((action, index) => (
                <Button key={index} variant={action.variant} className={action.variant === 'default' ? 'bg-primary' : ''}>
                    <action.icon className="mr-2 h-4 w-4" />
                    {action.label}
                </Button>
            ))}
        </div>
    );
};

export default QuickActions;
