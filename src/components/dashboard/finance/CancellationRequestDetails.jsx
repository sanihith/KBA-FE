import React from 'react';
import { Button } from "@/components/ui/button";
import { ChevronLeft } from "lucide-react";

const CancellationRequestDetails = ({ onClose, cancellationRequest }) => {
    if (!cancellationRequest) {
        return null;
    }

    const data = cancellationRequest;

    return (
        <div className="bg-background animate-in slide-in-from-right duration-300">
            {/* Header / Back nav */}
            <div className="flex items-center gap-2 mb-6">
                <button
                    onClick={onClose}
                    className="inline-flex items-center gap-1.5 text-gray-500 hover:text-gray-900 text-[13px] font-medium transition-colors group"
                >
                    <ChevronLeft size={18} className="transition-transform group-hover:-translate-x-0.5" />
                    <span>Back</span>
                </button>
                <span className="text-gray-300 text-sm"></span>
                <span className="text-gray-800 text-sm font-semibold"></span>
            </div>

            {/* Title Section */}
            <div className="flex items-center justify-between mb-8">
                {/* No main title in screenshot, usually ID or Name */}
            </div>

            <div className="grid grid-cols-2 gap-x-16 gap-y-6 max-w-5xl">
                {/* Left Column */}
                <div className="space-y-4">
                    <div className="grid grid-cols-[140px_1fr] items-baseline">
                        <span className="text-xs font-bold text-muted-foreground uppercase flex gap-1">
                            Description <span className="text-blue-500">?</span>
                        </span>
                        <span className="text-sm font-medium text-blue-600 hover:underline cursor-pointer">{data.description}</span>
                    </div>
                    <div className="grid grid-cols-[140px_1fr] items-baseline">
                        <span className="text-xs font-bold text-muted-foreground uppercase flex gap-1">
                            Division <span className="text-blue-500">?</span>
                        </span>
                        <span className="text-sm">{data.division}</span>
                    </div>
                    <div className="grid grid-cols-[140px_1fr] items-baseline">
                        <span className="text-xs font-bold text-muted-foreground uppercase flex gap-1">
                            Location <span className="text-blue-500">?</span>
                        </span>
                        <span className="text-sm">{data.location}</span>
                    </div>
                    <div className="grid grid-cols-[140px_1fr] items-baseline">
                        <span className="text-xs font-bold text-muted-foreground uppercase flex gap-1">
                            Region <span className="text-blue-500">?</span>
                        </span>
                        <span className="text-sm">{data.region}</span>
                    </div>
                    <div className="grid grid-cols-[140px_1fr] items-baseline">
                        <span className="text-xs font-bold text-muted-foreground uppercase flex gap-1">
                            Customer Code <span className="text-blue-500">?</span>
                        </span>
                        <span className="text-sm">{data.customerCode}</span>
                    </div>
                    <div className="grid grid-cols-[140px_1fr] items-baseline">
                        <span className="text-xs font-bold text-muted-foreground uppercase flex gap-1">
                            Status <span className="text-blue-500">?</span>
                        </span>
                        <span className="text-sm uppercase">{data.status}</span>
                    </div>
                    <div className="grid grid-cols-[140px_1fr] items-baseline">
                        <span className="text-xs font-bold text-muted-foreground uppercase flex gap-1">
                            Service Amount <span className="text-blue-500">?</span>
                        </span>
                        <span className="text-sm">{typeof data.serviceAmount === 'number' ? data.serviceAmount.toFixed(2) : data.serviceAmount}</span>
                    </div>
                    <div className="grid grid-cols-[140px_1fr] items-baseline">
                        <span className="text-xs font-bold text-muted-foreground uppercase flex gap-1">
                            Remarks <span className="text-blue-500">?</span>
                        </span>
                        <span className="text-sm">{data.remarks || '-'}</span>
                    </div>
                </div>

                {/* Right Column */}
                <div className="space-y-4">
                    <div className="grid grid-cols-[140px_1fr] items-baseline">
                        <span className="text-xs font-bold text-muted-foreground uppercase flex gap-1">
                            Request ID <span className="text-blue-500">?</span>
                        </span>
                        <span className="text-sm">{data.requestId}</span>
                    </div>
                    <div className="grid grid-cols-[140px_1fr] items-baseline">
                        <span className="text-xs font-bold text-muted-foreground uppercase flex gap-1">
                            Request Date <span className="text-blue-500">?</span>
                        </span>
                        <span className="text-sm">{data.requestDate}</span>
                    </div>
                    <div className="grid grid-cols-[140px_1fr] items-baseline">
                        <span className="text-xs font-bold text-muted-foreground uppercase flex gap-1">
                            Due Date <span className="text-blue-500">?</span>
                        </span>
                        <span className="text-sm">{data.dueDate}</span>
                    </div>
                    <div className="grid grid-cols-[140px_1fr] items-baseline">
                        <span className="text-xs font-bold text-muted-foreground uppercase flex gap-1">
                            Speciality <span className="text-blue-500">?</span>
                        </span>
                        <span className="text-sm">{data.speciality}</span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CancellationRequestDetails;