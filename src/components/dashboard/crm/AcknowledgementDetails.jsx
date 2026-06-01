import React, { useState } from 'react';
import { ArrowLeft, ArrowUpDown } from 'lucide-react';
import VendorDetailsModal from './VendorDetailsModal';

const AcknowledgementDetails = ({ onClose }) => {
    const [showVendorModal, setShowVendorModal] = useState(false);

    return (
        <div className="bg-background animate-in slide-in-from-right duration-300">
            {/* Header / Breadcrumb */}
            <div className="flex items-center gap-2 mb-6 text-sm text-muted-foreground">
                <button onClick={onClose} className="hover:text-foreground">Request Listing</button>
                <span>/</span>
                <span className="text-foreground font-medium">2-NUC-0107</span>
            </div>

            {/* Title Section */}
            <div className="flex items-center justify-between mb-8">
                <h1 className="text-3xl font-bold text-foreground">2-NUC-0107</h1>
            </div>

            <div className="grid grid-cols-2 gap-x-16 gap-y-6 max-w-5xl">
                {/* Left Column */}
                <div className="space-y-4">
                    <div className="grid grid-cols-[140px_1fr] items-baseline">
                        <span className="text-xs font-bold text-muted-foreground uppercase flex gap-1">
                            Customer Name <span className="text-blue-500">?</span>
                        </span>
                        <span className="text-sm font-medium text-blue-600 hover:underline cursor-pointer">M K KAKOTI</span>
                    </div>
                    <div className="grid grid-cols-[140px_1fr] items-baseline">
                        <span className="text-xs font-bold text-muted-foreground uppercase flex gap-1">
                            Speciality <span className="text-blue-500">?</span>
                        </span>
                        <span className="text-sm">GENERAL PRACTITIONER</span>
                    </div>
                    <div className="grid grid-cols-[140px_1fr] items-baseline">
                        <span className="text-xs font-bold text-muted-foreground uppercase flex gap-1">
                            Customer Code <span className="text-blue-500">?</span>
                        </span>
                        <span className="text-sm">2</span>
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
                            Division <span className="text-blue-500">?</span>
                        </span>
                        <span className="text-sm">NUCLEUS</span>
                    </div>
                    <div className="grid grid-cols-[140px_1fr] items-baseline">
                        <span className="text-xs font-bold text-muted-foreground uppercase flex gap-1">
                            Vendor Details <span className="text-blue-500">?</span>
                        </span>
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
                            Value <span className="text-blue-500">?</span>
                        </span>
                        <span className="text-sm">1.00</span>
                    </div>
                    <div className="grid grid-cols-[140px_1fr] items-baseline">
                        <span className="text-xs font-bold text-muted-foreground uppercase flex gap-1">
                            Status <span className="text-blue-500">?</span>
                        </span>
                        <span className="text-sm uppercase">PROCESSED BY ADMIN</span>
                    </div>
                </div>
            </div>

            {/* Vendor List Table */}
            <div className="mt-8 border rounded-md overflow-hidden bg-card">
                <div className="overflow-x-auto">
                    <table className="w-full text-sm text-left">
                        <thead className="bg-muted text-muted-foreground uppercase text-xs font-medium">
                            <tr>
                                <th className="px-4 py-3 font-bold text-black w-1/3">VENDOR NAME</th>
                                <th className="px-4 py-3 font-bold text-black">TYPE OF SERVICE</th>
                                <th className="px-4 py-3 font-bold text-black">VALUE</th>
                                <th className="px-4 py-3 font-bold text-black">STATUS</th>
                                <th className="px-4 py-3 font-bold text-black">ADMIN REMARKS</th>
                                <th className="px-4 py-3 font-bold text-black flex items-center gap-1">
                                    VENDOR REMARKS <ArrowUpDown size={12} />
                                </th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-border">
                            <tr
                                className="hover:bg-muted/50 cursor-pointer transition-colors"
                                onClick={() => setShowVendorModal(true)}
                            >
                                <td className="px-4 py-3 font-medium">WESTON MEDICAL EDUCATION FOUNDATION OF INDIA</td>
                                <td className="px-4 py-3">Gift-Card</td>
                                <td className="px-4 py-3">1</td>
                                <td className="px-4 py-3 uppercase">PROCESSED BY ADMIN</td>
                                <td className="px-4 py-3">n</td>
                                <td className="px-4 py-3"></td>
                            </tr>
                            {/* Empty rows filler */}
                            <tr className="h-10 border-b border-border/50 hover:bg-muted/50"><td colSpan={6}></td></tr>
                            <tr className="h-10 border-b border-border/50 hover:bg-muted/50"><td colSpan={6}></td></tr>
                        </tbody>
                    </table>
                </div>
            </div>

            {showVendorModal && (
                <VendorDetailsModal onClose={() => setShowVendorModal(false)} />
            )}
        </div>
    );
};

export default AcknowledgementDetails;
