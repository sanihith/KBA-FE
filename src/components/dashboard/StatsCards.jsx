import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { FINANCE_STATS, VENDOR_STATS, ADMIN_STATS, BL_STATS } from "@/lib/mockData";
import { CreditCard, Users, FileText, Activity, AlertCircle, DollarSign, Briefcase } from 'lucide-react';

const StatCard = ({ title, value, subtext, icon: Icon, colorClass }) => (
    <Card className="hover:shadow-md transition-shadow">
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">
                {title}
            </CardTitle>
            {Icon && <Icon className={`h-4 w-4 ${colorClass}`} />}
        </CardHeader>
        <CardContent>
            <div className="text-2xl font-bold">{value}</div>
            <p className="text-xs text-muted-foreground mt-1">
                {subtext}
            </p>
        </CardContent>
    </Card>
);

const StatsCards = ({ userRole }) => {
    // Config for each role
    const getStatsForRole = () => {
        switch (userRole) {
            case 'Finance Manager':
                return [
                    { title: "Total Budget", value: `₹${(FINANCE_STATS.totalBudget / 10000000).toFixed(2)} Cr`, subtext: "For Current FY", icon: DollarSign, color: "text-blue-500" },
                    { title: "Budget Utilized", value: `${FINANCE_STATS.budgetUtilizedPercentage}%`, subtext: `₹${(FINANCE_STATS.budgetUtilized / 10000000).toFixed(2)} Cr used`, icon: Activity, color: "text-orange-500" },
                    { title: "Pending Cancellations", value: FINANCE_STATS.pendingCancellations, subtext: "Requires approval", icon: AlertCircle, color: "text-red-500" },
                    { title: "Active Vendors", value: FINANCE_STATS.activeVendors, subtext: "Registered vendors", icon: Users, color: "text-green-500" }
                ];

            case 'Vendor':
                return [
                    { title: "Available Balance", value: `₹${(VENDOR_STATS.balance / 100000).toFixed(2)} L`, subtext: "Credit balance", icon: DollarSign, color: "text-green-500" },
                    { title: "Pending Services", value: VENDOR_STATS.pendingServices, subtext: "To be fulfilled", icon: Briefcase, color: "text-blue-500" },
                    { title: "Fulfilled (This Month)", value: VENDOR_STATS.fulfilledThisMonth, subtext: "Completed services", icon: Activity, color: "text-purple-500" },
                    { title: "Pending Value", value: `₹${(VENDOR_STATS.pendingValue / 100000).toFixed(2)} L`, subtext: "Invoiced amount", icon: CreditCard, color: "text-orange-500" }
                ];

            case 'Business Lead (BL)':
                return [
                    { title: "Submitted Requests", value: BL_STATS.submittedRequests, subtext: "Total requests", icon: FileText, color: "text-blue-500" },
                    { title: "Fulfilled Requests", value: BL_STATS.fulfilledRequests, subtext: "Completed", icon: Activity, color: "text-green-500" },
                    { title: "Pending Confirmations", value: BL_STATS.pendingConfirmations, subtext: "Action required", icon: AlertCircle, color: "text-orange-500" },
                    { title: "Approval Ratio", value: "85%", subtext: "Requests approved", icon: Activity, color: "text-purple-500" }
                ];

            // CRM Admin, BH, SBUH share similar stats
            default:
                return [
                    { title: "Pending Approvals", value: ADMIN_STATS.pendingApprovals, subtext: "Awaiting action", icon: AlertCircle, color: "text-orange-500" },
                    { title: "Total Requests", value: ADMIN_STATS.totalRequestsQuarter, subtext: "This Quarter", icon: FileText, color: "text-blue-500" },
                    { title: "Available Budget", value: `₹${(ADMIN_STATS.availableBudget / 100000).toFixed(2)} L`, subtext: "Remaining balance", icon: DollarSign, color: "text-green-500" },
                    { title: "Fulfilled Services", value: ADMIN_STATS.fulfilledServicesMonth, subtext: "This Month", icon: Activity, color: "text-purple-500" }
                ];
        }
    };

    const stats = getStatsForRole();

    return (
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4 mb-8">
            {stats.map((stat, index) => (
                <StatCard
                    key={index}
                    title={stat.title}
                    value={stat.value}
                    subtext={stat.subtext}
                    icon={stat.icon}
                    colorClass={stat.color}
                />
            ))}
        </div>
    );
};

export default StatsCards;
