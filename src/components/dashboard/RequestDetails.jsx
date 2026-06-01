import React from 'react';
import { Button } from "@/components/ui/button";
import { X } from "lucide-react";

const RequestDetails = ({ request, onClose }) => {
    if (!request) return null;

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm animate-in fade-in duration-200">
            <div className="bg-background w-full max-w-4xl max-h-[90vh] overflow-y-auto rounded-lg shadow-xl border animate-in zoom-in-95 duration-200">
                {/* Header */}
                <div className="flex items-center justify-between border-b px-6 py-4 sticky top-0 bg-background z-10">
                    <div>
                        <h2 className="text-sm font-medium text-muted-foreground uppercase tracking-wider">sbuh requests</h2>
                        <div className="flex items-center gap-2 mt-1">
                            <h3 className="text-xl font-bold uppercase text-primary">{request.customerName}</h3>
                            <span className="text-muted-foreground">•</span>
                            <span className="text-sm text-muted-foreground">Settings Icon Placeholder</span>
                        </div>
                    </div>
                    <Button variant="ghost" size="icon" onClick={onClose}>
                        <X className="h-5 w-5" />
                    </Button>
                </div>

                {/* Content */}
                <div className="p-8">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-6">
                        {/* Left Column */}
                        <div className="space-y-6">
                            <DetailRow label="Doctor Name" value={request.customerName} />
                            <DetailRow label="Speciality" value={request.speciality} />
                            <DetailRow label="Customer Code" value={request.customerCode || "18094"} />
                            <DetailRow label="Location" value={request.location || "NUC-ELURU"} />
                            <DetailRow label="Region" value={request.region || "ANDHRA PRADESH"} />
                            <DetailRow label="Division" value={request.division || "NUCLEUS"} />
                            <DetailRow label="Available Budget Amount" value="43,55,000.00" />
                            <DetailRow label="Regional Available Budget" value="3,00,000.00" />
                            <DetailRow label="Admin Remarks" value="will be processed" />
                            <DetailRow label="Doctor's Reference" value={request.customerName} />
                        </div>

                        {/* Right Column */}
                        <div className="space-y-6">
                            <DetailRow label="Request ID" value={request.id} />
                            <DetailRow label="Request Date" value={request.requestDate || "29/01/2026"} />
                            <DetailRow label="Due Date" value={request.dueDate || "10/02/2026"} />
                            <DetailRow label="Expected Due Date" value={request.expectedDueDate || "09/02/2026"} />

                            <div className="grid grid-cols-2 gap-4">
                                <span className="text-sm font-semibold text-muted-foreground uppercase">Status</span>
                                <span className="text-sm font-medium uppercase">{request.status || "ENROLLED"}</span>
                            </div>

                            <div className="grid grid-cols-2 gap-4">
                                <span className="text-sm font-bold text-foreground uppercase">Customer Expectation</span>
                                <span className="text-sm font-medium">{request.customerExpectation ? request.customerExpectation.toLocaleString() : "25,000.00"}</span>
                            </div>

                            <div className="grid grid-cols-2 gap-4">
                                <span className="text-sm font-semibold text-muted-foreground uppercase">Commitment Amount</span>
                                <span className="text-sm font-medium">23,000.00</span>
                            </div>

                            <div className="pt-8 flex gap-4">
                                <Button className="bg-[#7e4f7e] hover:bg-[#6a426a] text-white uppercase px-6">
                                    Approve
                                </Button>
                                <Button className="bg-[#7e4f7e] hover:bg-[#6a426a] text-white uppercase px-6" onClick={onClose}>
                                    Reject
                                </Button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

const DetailRow = ({ label, value }) => (
    <div className="grid grid-cols-2 gap-4 items-start">
        <span className="text-sm font-semibold text-muted-foreground uppercase">{label}</span>
        <span className="text-sm font-medium uppercase break-words">{value}</span>
    </div>
);

export default RequestDetails;
