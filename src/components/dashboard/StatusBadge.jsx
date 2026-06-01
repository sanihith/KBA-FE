import React from 'react';
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";

const statusColors = {
    Requested: "bg-status-requested text-white hover:bg-status-requested/90",
    Enrolled: "bg-status-enrolled text-white hover:bg-status-enrolled/90",
    Approved: "bg-status-approved text-white hover:bg-status-approved/90",
    Processed: "bg-status-processed text-white hover:bg-status-processed/90",
    Fulfilled: "bg-status-fulfilled text-white hover:bg-status-fulfilled/90",
    Confirmed: "bg-status-confirmed text-white hover:bg-status-confirmed/90",
    Cancelled: "bg-status-cancelled text-white hover:bg-status-cancelled/90",
    Rejected: "bg-status-rejected text-white hover:bg-status-rejected/90",
};

const StatusBadge = ({ status, className }) => {
    const colorClass = statusColors[status] || "bg-gray-500 text-white";

    return (
        <Badge className={cn("font-medium px-2 py-0.5", colorClass, className)}>
            {status}
        </Badge>
    );
};

export default StatusBadge;
