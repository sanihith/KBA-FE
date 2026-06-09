import React, { useState } from 'react';
import { ChevronLeft, ArrowUpDown } from 'lucide-react';
import VendorDetailsModal from './VendorDetailsModal';

const AcknowledgementDetails = ({ onClose, acknowledgement }) => {
    const [showVendorModal, setShowVendorModal] = useState(false);

    // Use passed data or fallback to empty object
    const data = acknowledgement || {
        id: '',
        requestId: '',
        customerName: '',
        customerCode: '',
        speciality: '',
        location: '',
        region: '',
        division: '',
        requestDate: '',
        dueDate: '',
        value: 0,
        status: '',
        vendors: []
    };

    const handleBack = () => {
        // Call onClose to return to the acknowledgement table
        onClose();
    };

    return (
        <div className="bg-background animate-in slide-in-from-right duration-300">
            {/* Header / Back nav */}
            <div className="flex items-center gap-2 mb-6">
                <button
                    onClick={handleBack}
                    className="inline-flex items-center gap-1.5 text-gray-500 hover:text-gray-900 text-[13px] font-medium transition-colors group"
                >
                    <ChevronLeft size={18} className="transition-transform group-hover:-translate-x-0.5" />
                    <span>Back</span>
                </button>
                <span className="text-gray-300 text-sm">/</span>
                <span className="text-gray-800 text-sm font-semibold">{data.requestId || 'Back'}</span>
            </div>

            {/* Title Section */}
            <div className="flex items-center justify-between mb-8">
                <h1 className="text-3xl font-bold text-foreground">{data.requestId}</h1>
            </div>

            <div className="grid grid-cols-2 gap-x-16 gap-y-6 max-w-5xl">
                {/* Left Column */}
                <div className="space-y-4">
                    <div className="grid grid-cols-[140px_1fr] items-baseline">
                        <span className="text-xs font-bold text-muted-foreground uppercase flex gap-1">
                            Customer Name <span className="text-blue-500">?</span>
                        </span>
                        <span className="text-sm font-medium text-blue-600 hover:underline cursor-pointer">{data.customerName}</span>
                    </div>
                    <div className="grid grid-cols-[140px_1fr] items-baseline">
                        <span className="text-xs font-bold text-muted-foreground uppercase flex gap-1">
                            Speciality <span className="text-blue-500">?</span>
                        </span>
                        <span className="text-sm">{data.speciality}</span>
                    </div>
                    <div className="grid grid-cols-[140px_1fr] items-baseline">
                        <span className="text-xs font-bold text-muted-foreground uppercase flex gap-1">
                            Customer Code <span className="text-blue-500">?</span>
                        </span>
                        <span className="text-sm">{data.customerCode}</span>
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
                            Division <span className="text-blue-500">?</span>
                        </span>
                        <span className="text-sm">{data.division}</span>
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
                            Value <span className="text-blue-500">?</span>
                        </span>
                        <span className="text-sm">{typeof data.value === 'number' ? data.value.toFixed(2) : data.value}</span>
                    </div>
                    <div className="grid grid-cols-[140px_1fr] items-baseline">
                        <span className="text-xs font-bold text-muted-foreground uppercase flex gap-1">
                            Status <span className="text-blue-500">?</span>
                        </span>
                        <span className="text-sm uppercase">{data.status}</span>
                    </div>
                </div>
            </div>

            {/* Vendor List Table */}
            {data.vendors && data.vendors.length > 0 && (
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
                                {data.vendors.map((vendor, idx) => (
                                    <tr
                                        key={idx}
                                        className="hover:bg-muted/50 cursor-pointer transition-colors"
                                        onClick={() => setShowVendorModal(true)}
                                    >
                                        <td className="px-4 py-3 font-medium">{vendor.name}</td>
                                        <td className="px-4 py-3">{vendor.typeOfService}</td>
                                        <td className="px-4 py-3">{typeof vendor.value === 'number' ? vendor.value.toFixed(2) : vendor.value}</td>
                                        <td className="px-4 py-3 uppercase">{vendor.status}</td>
                                        <td className="px-4 py-3">{vendor.adminRemarks}</td>
                                        <td className="px-4 py-3">{vendor.vendorRemarks}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            )}

            {showVendorModal && (
                <VendorDetailsModal onClose={() => setShowVendorModal(false)} />
            )}
        </div>
    );
};

export default AcknowledgementDetails;