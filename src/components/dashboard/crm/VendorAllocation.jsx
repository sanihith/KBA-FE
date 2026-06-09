import React, { useState } from 'react';
import AddVendorModal from './AddVendorModal';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { ArrowUpDown, Upload } from "lucide-react";

const VendorAllocation = () => {
    const [showAddVendor, setShowAddVendor] = useState(false);
    const [vendors, setVendors] = useState([]);
    const [formData, setFormData] = useState({
        customerName: '',
        speciality: '',
        customerCode: '',
        location: '',
        region: '',
        division: '',
        remarks: '',
        requestCode: 'REQ' + Math.floor(Math.random() * 10000),
        requestedDate: new Date().toLocaleDateString('en-GB'),
        dueDate: '',
        email: '',
        mobile: ''
    });

    const [files, setFiles] = useState({
        aadharCard: null,
        panCard: null,
        blankCheque: null
    });

    const handleInputChange = (field, value) => {
        setFormData(prev => ({ ...prev, [field]: value }));
    };

    const handleFileChange = (field, event) => {
        const file = event.target.files[0];
        if (file) {
            setFiles(prev => ({ ...prev, [field]: { name: file.name, size: (file.size / 1024).toFixed(2) + ' Kb' } }));
        }
    };

    const handleAddVendor = (newVendor) => {
        setVendors(prev => [...prev, newVendor]);
    };

    const handleDeleteVendor = (index) => {
        setVendors(prev => prev.filter((_, i) => i !== index));
    };

    const calculatedAmount = vendors.reduce((sum, v) => sum + (parseFloat(v.amount) || 0), 0);
    const [overrideTotal, setOverrideTotal] = useState(null);

    const displayAmount = overrideTotal !== null ? overrideTotal : calculatedAmount.toFixed(2);

    return (
        <div className="space-y-8 max-w-6xl pb-12">
            {/* Top Form Section */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-6">
                {/* Left Column */}
                <div className="space-y-4">
                    <div className="space-y-2">
                        <Label className="uppercase text-[11px] font-bold text-gray-500 tracking-wider font-semibold">Customer Name</Label>
                        <Input
                            value={formData.customerName}
                            onChange={(e) => handleInputChange('customerName', e.target.value)}
                            className="border-0 border-b rounded-none px-0 h-8 focus-visible:ring-0 focus-visible:border-teal-600 border-gray-200 bg-transparent text-[13px] uppercase"
                            placeholder="Enter Customer Name..."
                        />
                    </div>
                    {[
                        { label: 'Speciality', field: 'speciality' },
                        { label: 'Customer Code', field: 'customerCode' },
                        { label: 'Location', field: 'location' },
                        { label: 'Region', field: 'region' },
                        { label: 'Division', field: 'division' },
                        { label: 'Admin Remarks', field: 'remarks' },
                    ].map(field => (
                        <div key={field.field} className="space-y-2">
                            <Label className="uppercase text-[11px] font-bold text-gray-400 tracking-wider">{field.label}</Label>
                            <div className="h-8 flex items-center border-b border-gray-100 text-[13px] text-gray-800 font-medium font-semibold uppercase">
                                {/* Empty static value */}
                            </div>
                        </div>
                    ))}
                </div>

                {/* Right Column */}
                <div className="space-y-6">
                    <div className="space-y-2 text-right md:text-left">
                        <Label className="uppercase text-[11px] font-bold text-gray-400">Request Status</Label>
                        <div className="text-xs font-bold text-teal-600">IN PROGRESS</div>
                    </div>

                    {[
                        { label: 'Request Code', field: 'requestCode' },
                        { label: 'Requested Date', field: 'requestedDate' },
                        { label: 'Due Date', field: 'dueDate' },
                        { label: 'Type of Service', field: 'typeOfService' },
                    ].map(field => (
                        <div key={field.field} className="space-y-2">
                            <Label className="uppercase text-[11px] font-bold text-gray-400 tracking-wider">{field.label}</Label>
                            <div className="h-8 flex items-center border-b border-gray-100 text-[13px] text-gray-800 font-medium font-semibold uppercase">
                                {/* Empty static value */}
                            </div>
                        </div>
                    ))}

                    {/* Uploads */}
                    <div className="space-y-4 pt-4">
                        {[
                            { label: 'Aadhar Card', field: 'aadharCard' },
                            { label: 'Pan Card', field: 'panCard' },
                            { label: 'Blank Cheque', field: 'blankCheque' },
                        ].map(file => (
                            <div key={file.field} className="grid grid-cols-[140px_1fr] items-center gap-4">
                                <Label className="uppercase text-[11px] font-bold text-gray-500 tracking-wider font-semibold">{file.label}</Label>
                                <div className="flex items-center justify-between">
                                    {files[file.field] ? (
                                        <div className="flex items-center gap-2 text-xs text-teal-600 font-medium">
                                            <span className="truncate max-w-[120px]">{files[file.field].name}</span>
                                            <span className="text-gray-400 text-[10px]">({files[file.field].size})</span>
                                            <button onClick={() => setFiles(prev => ({ ...prev, [file.field]: null }))} className="text-red-400 hover:text-red-500">×</button>
                                        </div>
                                    ) : (
                                        <div className="relative">
                                            <Button
                                                variant="secondary"
                                                className="bg-[#7e4f7e] text-white hover:bg-[#6a426a] w-fit h-7 text-[10px] uppercase font-bold px-4 rounded-sm shadow-sm"
                                                onClick={() => document.getElementById(`file-${file.field}`).click()}
                                            >
                                                Upload your file
                                            </Button>
                                            <input
                                                id={`file-${file.field}`}
                                                type="file"
                                                className="hidden"
                                                onChange={(e) => handleFileChange(file.field, e)}
                                            />
                                        </div>
                                    )}
                                </div>
                            </div>
                        ))}
                    </div>

                    <div className="grid grid-cols-2 gap-8 pt-4">
                        <div className="space-y-2">
                            <Label className="uppercase text-[11px] font-bold text-gray-500 tracking-wider font-semibold">Email</Label>
                            <Input
                                value={formData.email}
                                onChange={(e) => handleInputChange('email', e.target.value)}
                                className="border-0 border-b rounded-none px-0 h-8 focus-visible:ring-0 border-gray-200 bg-transparent text-[13px]"
                            />
                        </div>
                        <div className="space-y-2">
                            <Label className="uppercase text-[11px] font-bold text-gray-500 tracking-wider font-semibold">Mobile</Label>
                            <Input
                                value={formData.mobile}
                                onChange={(e) => handleInputChange('mobile', e.target.value)}
                                className="border-0 border-b rounded-none px-0 h-8 focus-visible:ring-0 border-gray-200 bg-transparent text-[13px]"
                            />
                        </div>
                    </div>
                </div>
            </div>

            {/* Vendor Table Section */}
            <div className="pt-8">
                <div className="flex items-start gap-8 mb-4">
                    <h3 className="uppercase text-[11px] font-bold text-gray-500 tracking-wider min-w-[140px] pt-2">Add Vendor</h3>
                    <div className="flex-1">
                        <div className="border rounded-sm overflow-hidden border-gray-100 shadow-sm">
                            <table className="w-full text-sm">
                                <thead className="bg-[#f8f9fa] border-b border-gray-100">
                                    <tr>
                                        <th className="text-left px-6 py-3 font-bold text-gray-600 uppercase text-[10px] tracking-widest">Vendor Name</th>
                                        <th className="text-left px-6 py-3 font-bold text-gray-600 uppercase text-[10px] tracking-widest">Type of Service</th>
                                        <th className="text-right px-6 py-3 font-bold text-gray-600 uppercase text-[10px] tracking-widest flex items-center justify-end gap-1">
                                            Amount <ArrowUpDown size={12} className="text-gray-400" />
                                        </th>
                                    </tr>
                                </thead>
                                <tbody className="divide-y divide-gray-50">
                                    {vendors.map((vendor, idx) => (
                                        <tr key={idx} className="hover:bg-gray-50 transition-colors group">
                                            <td className="px-6 py-3 text-[13px] text-gray-800 font-medium uppercase">{vendor.name}</td>
                                            <td className="px-6 py-3 text-[13px] text-gray-600 uppercase">{vendor.type}</td>
                                            <td className="px-6 py-3 text-right text-[13px] text-gray-800 font-mono font-semibold">
                                                {parseFloat(vendor.amount).toFixed(2)}
                                                <button
                                                    onClick={() => handleDeleteVendor(idx)}
                                                    className="ml-4 opacity-0 group-hover:opacity-100 text-red-400 hover:text-red-500 transition-opacity"
                                                >
                                                    ×
                                                </button>
                                            </td>
                                        </tr>
                                    ))}
                                    <tr className="bg-white">
                                        <td colSpan={3} className="px-6 py-3">
                                            <button
                                                className="text-teal-600 hover:text-teal-700 text-[11px] font-bold uppercase tracking-wider"
                                                onClick={() => setShowAddVendor(true)}
                                            >
                                                Add a line
                                            </button>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>

            {/* Bottom Totals */}
            <div className="flex justify-end pt-6 border-t border-gray-100">
                <div className="w-80 space-y-4">
                    <div className="flex justify-between items-center text-gray-600">
                        <span className="uppercase text-[11px] font-bold tracking-widest text-gray-400">Service Amount</span>
                        <Input
                            type="number"
                            value={displayAmount}
                            onChange={(e) => setOverrideTotal(e.target.value)}
                            className="w-32 text-right border-0 border-b rounded-none px-0 h-6 focus-visible:ring-0 focus-visible:border-teal-600 border-gray-200 bg-transparent text-sm font-semibold text-gray-800 shadow-none"
                        />
                    </div>
                    <div className="flex justify-between items-center pt-2 border-t border-gray-200">
                        <span className="uppercase text-[11px] font-bold tracking-widest text-gray-800">Total Amount</span>
                        <Input
                            type="number"
                            value={displayAmount}
                            onChange={(e) => setOverrideTotal(e.target.value)}
                            className="w-32 text-right border-0 border-b rounded-none px-0 h-8 focus-visible:ring-0 focus-visible:border-teal-600 border-gray-200 bg-transparent text-lg font-bold text-teal-600 shadow-none"
                        />
                    </div>
                </div>
            </div>

            <div className="pt-8">
                <Button className="bg-[#7e4f7e] hover:bg-[#6a426a] text-white uppercase font-bold text-xs px-10 h-10 rounded-sm shadow-md transition-all active:scale-95">
                    Add Vendors
                </Button>
            </div>

            {showAddVendor && (
                <AddVendorModal
                    onClose={() => setShowAddVendor(false)}
                    onSave={handleAddVendor}
                />
            )}
        </div>
    );
};

export default VendorAllocation;
