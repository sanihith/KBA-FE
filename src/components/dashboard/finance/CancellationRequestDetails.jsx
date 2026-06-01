import React from 'react';
import { Button } from "@/components/ui/button";

const CancellationRequestDetails = ({ onClose }) => {
    return (
        <div className="bg-background animate-in slide-in-from-right duration-300">
            {/* Header / Breadcrumb */}
            <div className="flex items-center gap-2 mb-6 text-sm text-muted-foreground">
                <button onClick={onClose} className="hover:text-foreground text-teal-600">Cancellation Requests</button>
                <span>/</span>
                <span className="text-foreground font-medium">2-NUC-0107</span>
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
                        <span className="text-sm font-medium text-blue-600 hover:underline cursor-pointer">M K KAKOTI</span>
                    </div>
                    <div className="grid grid-cols-[140px_1fr] items-baseline">
                        <span className="text-xs font-bold text-muted-foreground uppercase flex gap-1">
                            Division <span className="text-blue-500">?</span>
                        </span>
                        <span className="text-sm">NUCLEUS</span>
                    </div>
                    <div className="grid grid-cols-[140px_1fr] items-baseline">
                        <span className="text-xs font-bold text-muted-foreground uppercase flex gap-1">
                            Location <span className="text-blue-500">?</span>
                        </span>
                        <span className="text-sm">NUC-BONGAIGAON</span>
                    </div>
                    <div className="grid grid-cols-[140px_1fr] items-baseline">
                        <span className="text-xs font-bold text-muted-foreground uppercase flex gap-1">
                            Region <span className="text-blue-500">?</span>
                        </span>
                        <span className="text-sm">ASSAM</span>
                    </div>
                    <div className="grid grid-cols-[140px_1fr] items-baseline">
                        <span className="text-xs font-bold text-muted-foreground uppercase flex gap-1">
                            Customer Code <span className="text-blue-500">?</span>
                        </span>
                        <span className="text-sm">2</span>
                    </div>
                    <div className="grid grid-cols-[140px_1fr] items-baseline">
                        <span className="text-xs font-bold text-muted-foreground uppercase flex gap-1">
                            Status <span className="text-blue-500">?</span>
                        </span>
                        <span className="text-sm uppercase">CANCELLATION INITIATED</span>
                    </div>
                    <div className="grid grid-cols-[140px_1fr] items-baseline">
                        <span className="text-xs font-bold text-muted-foreground uppercase flex gap-1">
                            Service Amount <span className="text-blue-500">?</span>
                        </span>
                        <span className="text-sm">1.0</span>
                    </div>
                    <div className="grid grid-cols-[140px_1fr] items-baseline">
                        <span className="text-xs font-bold text-muted-foreground uppercase flex gap-1">
                            Remarks <span className="text-blue-500">?</span>
                        </span>
                        <span className="text-sm"></span>
                    </div>
                </div>

                {/* Right Column */}
                <div className="space-y-4">
                    <div className="grid grid-cols-[140px_1fr] items-baseline">
                        <span className="text-xs font-bold text-muted-foreground uppercase flex gap-1">
                            Request ID <span className="text-blue-500">?</span>
                        </span>
                        <span className="text-sm">2-NUC-0107</span>
                    </div>
                    <div className="grid grid-cols-[140px_1fr] items-baseline">
                        <span className="text-xs font-bold text-muted-foreground uppercase flex gap-1">
                            Request Date <span className="text-blue-500">?</span>
                        </span>
                        <span className="text-sm">05/02/2026</span>
                    </div>
                    <div className="grid grid-cols-[140px_1fr] items-baseline">
                        <span className="text-xs font-bold text-muted-foreground uppercase flex gap-1">
                            Due Date <span className="text-blue-500">?</span>
                        </span>
                        <span className="text-sm">25/02/2026</span>
                    </div>
                    <div className="grid grid-cols-[140px_1fr] items-baseline">
                        <span className="text-xs font-bold text-muted-foreground uppercase flex gap-1">
                            Speciality <span className="text-blue-500">?</span>
                        </span>
                        <span className="text-sm">GENERAL PRACTITIONER</span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CancellationRequestDetails;
