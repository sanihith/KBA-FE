import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { X, Upload } from "lucide-react";
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";

// Modal Component
const SalesPlanModal = ({ isOpen, onClose, onSave, brands = [] }) => {
    const [formData, setFormData] = useState({
        brandName: '',
        pts: '',
        units: '',
        rxStatus: '',
        amount: 0
    });
    const [error, setError] = useState('');

    const rxStatusOptions = ['Null', 'Non Prescriber', 'Trial User', 'Occasional', 'Frequent', 'Brand loyal'];

    const validateForm = () => {
        if (!formData.brandName) {
            setError('Please select a Brand Name');
            return false;
        }
        if (!formData.pts) {
            setError('Please enter PTS');
            return false;
        }
        if (!formData.units) {
            setError('Please enter Units');
            return false;
        }
        if (!formData.rxStatus) {
            setError('Please select Rx Status');
            return false;
        }
        setError('');
        return true;
    };

    const handleInputChange = (field, value) => {
        let updatedData = { ...formData, [field]: value };

        // Calculate amount when pts or units changes
        if (field === 'pts' || field === 'units') {
            const pts = parseFloat(updatedData.pts) || 0;
            const units = parseFloat(updatedData.units) || 0;
            updatedData.amount = (pts * units).toFixed(2);
        }

        setFormData(updatedData);
        setError(''); // Clear error when user starts typing
    };

    const handleSaveAndClose = () => {
        if (validateForm()) {
            onSave(formData, false);
            setFormData({ brandName: '', pts: '', units: '', rxStatus: '', amount: 0 });
        }
    };

    const handleSaveAndNew = () => {
        if (validateForm()) {
            onSave(formData, true);
            setFormData({ brandName: '', pts: '', units: '', rxStatus: '', amount: 0 });
        }
    };

    const handleDiscard = () => {
        setFormData({ brandName: '', pts: '', units: '', rxStatus: '', amount: 0 });
        setError('');
        onClose();
    };

    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
            <div className="bg-white rounded-lg shadow-lg p-6 w-full max-w-md">
                <div className="flex justify-between items-center mb-6">
                    <h2 className="text-lg font-semibold">Create MONTHLY SALES PLAN</h2>
                    <button
                        onClick={handleDiscard}
                        className="text-muted-foreground hover:text-foreground"
                    >
                        <X className="h-5 w-5" />
                    </button>
                </div>

                {error && (
                    <div className="mb-4 p-3 bg-red-100 border border-red-400 text-red-700 rounded text-sm">
                        {error}
                    </div>
                )}

                <div className="space-y-4">
                    <div className="space-y-2">
                        <Label htmlFor="brandName">Brand Name</Label>
                        <Select value={formData.brandName} onValueChange={(value) => handleInputChange('brandName', value)}>
                            <SelectTrigger id="brandName">
                                <SelectValue placeholder="Select brand..." />
                            </SelectTrigger>
                            <SelectContent>
                                {brands.map((brand, index) => (
                                    <SelectItem key={index} value={brand}>
                                        {brand}
                                    </SelectItem>
                                ))}
                            </SelectContent>
                        </Select>
                    </div>

                    <div className="space-y-2">
                        <Label htmlFor="pts">PTS</Label>
                        <Input
                            id="pts"
                            type="number"
                            placeholder="0.00"
                            value={formData.pts}
                            onChange={(e) => handleInputChange('pts', e.target.value)}
                        />
                    </div>

                    <div className="space-y-2">
                        <Label htmlFor="units">Units</Label>
                        <Input
                            id="units"
                            type="number"
                            placeholder="0"
                            value={formData.units}
                            onChange={(e) => handleInputChange('units', e.target.value)}
                        />
                    </div>

                    <div className="space-y-2">
                        <Label htmlFor="rxStatus">Rx Status</Label>
                        <Select value={formData.rxStatus} onValueChange={(value) => handleInputChange('rxStatus', value)}>
                            <SelectTrigger id="rxStatus">
                                <SelectValue placeholder="Select status..." />
                            </SelectTrigger>
                            <SelectContent>
                                {rxStatusOptions.map((status, index) => (
                                    <SelectItem key={index} value={status}>
                                        {status}
                                    </SelectItem>
                                ))}
                            </SelectContent>
                        </Select>
                    </div>

                    <div className="space-y-2">
                        <Label htmlFor="amount">Amount</Label>
                        <Input
                            id="amount"
                            type="number"
                            placeholder="0.00"
                            value={formData.amount}
                            readOnly
                            className="bg-muted"
                        />
                    </div>
                </div>

                <div className="flex gap-3 mt-8 justify-start">
                    <Button
                        onClick={handleSaveAndClose}
                        className="bg-purple-600 hover:bg-purple-700 text-white"
                    >
                        Save & Close
                    </Button>
                    <Button
                        onClick={handleSaveAndNew}
                        className="bg-purple-600 hover:bg-purple-700 text-white"
                    >
                        Save & New
                    </Button>
                    <Button
                        onClick={handleDiscard}
                        variant="outline"
                    >
                        Discard
                    </Button>
                </div>
            </div>
        </div>
    );
};

const RequestForm = ({ customerNames = [] }) => {
    const [selectedCustomer, setSelectedCustomer] = useState('');
    const [salesPlanRows, setSalesPlanRows] = useState([]);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [attachments, setAttachments] = useState({
        attachment1: null,
        attachment2: null,
        attachment3: null
    });

    const brands = ['Aspirin', 'Ibuprofen', 'Paracetamol', 'Omeprazole', 'Metformin'];

    const addSalesPlanRow = () => {
        setIsModalOpen(true);
    };

    const handleSalePlanSave = (formData, openNew) => {
        const newRow = {
            id: Date.now(),
            brandName: formData.brandName,
            pts: formData.pts,
            units: formData.units,
            amount: formData.amount,
            rxStatus: formData.rxStatus
        };
        setSalesPlanRows([...salesPlanRows, newRow]);

        if (!openNew) {
            setIsModalOpen(false);
        }
    };

    const removeSalesPlanRow = (id) => {
        setSalesPlanRows(salesPlanRows.filter(row => row.id !== id));
    };


    const handleAttachmentChange = (attachmentKey, file) => {
        if (file) {
            setAttachments(prev => ({
                ...prev,
                [attachmentKey]: file
            }));
        }
    };

    const removeAttachment = (attachmentKey) => {
        setAttachments(prev => ({
            ...prev,
            [attachmentKey]: null
        }));
    };
    const updateSalesPlanRow = (id, field, value) => {
        setSalesPlanRows(salesPlanRows.map(row =>
            row.id === id ? { ...row, [field]: value } : row
        ));
    };

    return (
        <div className="bg-card border rounded-xl p-6 shadow-sm">
            <h2 className="text-xl font-semibold mb-6">New Request</h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                    <Label htmlFor="customerName">Customer Name</Label>
                    <Select value={selectedCustomer} onValueChange={setSelectedCustomer}>
                        <SelectTrigger id="customerName">
                            <SelectValue placeholder="Select customer..." />
                        </SelectTrigger>
                        <SelectContent>
                            {customerNames.map((name, index) => (
                                <SelectItem key={index} value={name}>
                                    {name}
                                </SelectItem>
                            ))}
                        </SelectContent>
                    </Select>
                </div>

                <div className="space-y-2">
                    <Label htmlFor="customerCode">Customer Code</Label>
                </div>

                <div className="space-y-2">
                    <Label htmlFor="region">Region</Label>
                </div>

                <div className="space-y-2">
                    <Label htmlFor="speciality">Speciality</Label>
                </div>

                <div className="space-y-2">
                    <Label htmlFor="location">Location</Label>
                </div>

                <div className="space-y-2">
                    <Label htmlFor="blLocation">BL Location</Label>
                </div>

                <div className="space-y-2">
                    <Label htmlFor="customerExpectation">Customer Expectation</Label>
                    <Input id="customerExpectation" type="number" placeholder="0.00" />
                </div>

                <div className="space-y-2">
                    <Label htmlFor="monthlySalesPlanAmount">Monthly Sales Plan</Label>
                    <Input id="monthlySalesPlanAmount" type="number" placeholder="0.00" />
                </div>

                <div className="space-y-2">
                    <Label htmlFor="fromDate">From Date</Label>
                    <Input id="fromDate" type="date" />
                </div>

                <div className="space-y-2">
                    <Label htmlFor="toDate">To Date</Label>
                    <Input id="toDate" type="date" />
                </div>

                <div className="space-y-2">
                    <Label htmlFor="totalMsp">Total MSP</Label>
                    <Input id="totalMsp" type="number" placeholder="0.00" readOnly className="bg-muted" />
                </div>

                <div className="space-y-2">
                    <Label htmlFor="dueDate">Due Date</Label>
                    <Input id="dueDate" type="date" />
                </div>
            </div>

            {/* Monthly Sales Plan Table */}
            <div className="mt-8">
                <div className="flex justify-between items-center mb-4">
                    <h3 className="text-lg font-semibold">Monthly Sales Plan</h3>
                    <button
                        onClick={addSalesPlanRow}
                        className="text-blue-600 hover:text-blue-700 text-sm font-medium"
                    >
                        Add a line
                    </button>
                </div>

                {salesPlanRows.length > 0 ? (
                    <div className="border rounded-lg overflow-hidden">
                        <div className="overflow-x-auto">
                            <table className="w-full text-sm">
                                <thead className="bg-muted text-muted-foreground uppercase text-xs font-medium">
                                    <tr>
                                        <th className="px-4 py-3 text-left">Brand Name</th>
                                        <th className="px-4 py-3 text-left">PTS</th>
                                        <th className="px-4 py-3 text-left">Units</th>
                                        <th className="px-4 py-3 text-left">Amount</th>
                                        <th className="px-4 py-3 text-left">Rx Status</th>
                                        <th className="px-4 py-3 text-center">Actions</th>
                                    </tr>
                                </thead>
                                <tbody className="divide-y divide-border">
                                    {salesPlanRows.map((row) => (
                                        <tr key={row.id} className="hover:bg-muted/50">
                                            <td className="px-4 py-3">
                                                <Input
                                                    placeholder="Brand name"
                                                    value={row.brandName}
                                                    onChange={(e) => updateSalesPlanRow(row.id, 'brandName', e.target.value)}
                                                    className="h-8"
                                                    readOnly
                                                />
                                            </td>
                                            <td className="px-4 py-3">
                                                <Input
                                                    placeholder="PTS"
                                                    type="number"
                                                    value={row.pts}
                                                    onChange={(e) => updateSalesPlanRow(row.id, 'pts', e.target.value)}
                                                    className="h-8"
                                                    readOnly
                                                />
                                            </td>
                                            <td className="px-4 py-3">
                                                <Input
                                                    placeholder="Units"
                                                    type="number"
                                                    value={row.units}
                                                    onChange={(e) => updateSalesPlanRow(row.id, 'units', e.target.value)}
                                                    className="h-8"
                                                    readOnly
                                                />
                                            </td>
                                            <td className="px-4 py-3">
                                                <Input
                                                    placeholder="Amount"
                                                    type="number"
                                                    value={row.amount}
                                                    onChange={(e) => updateSalesPlanRow(row.id, 'amount', e.target.value)}
                                                    className="h-8"
                                                    readOnly
                                                />
                                            </td>
                                            <td className="px-4 py-3">
                                                <Input
                                                    placeholder="Rx Status"
                                                    value={row.rxStatus}
                                                    onChange={(e) => updateSalesPlanRow(row.id, 'rxStatus', e.target.value)}
                                                    className="h-8"
                                                    readOnly
                                                />
                                            </td>
                                            <td className="px-4 py-3 text-center">
                                                <button
                                                    onClick={() => removeSalesPlanRow(row.id)}
                                                    className="inline-flex items-center justify-center h-8 w-8 rounded hover:bg-muted transition-colors"
                                                >
                                                    <X className="h-4 w-4 text-destructive" />
                                                </button>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>
                ) : (
                    <div className="border rounded-lg p-8 text-center text-muted-foreground bg-muted/30">
                        <p className="text-sm">No sales plan items added yet</p>
                    </div>
                )}
            </div>

            {/* Attachments Section */}
            <div className="mt-8">
                <h3 className="text-lg font-semibold mb-4">Attachments</h3>
                <div className="space-y-4">
                    {['attachment1', 'attachment2', 'attachment3'].map((key, index) => (
                        <div key={key} className="flex items-center justify-between">
                            <Label className="font-medium">ATTACHMENT {index + 1}</Label>
                            <div className="flex items-center gap-2">
                                {attachments[key] ? (
                                    <div className="flex items-center gap-2">
                                        <span className="text-sm text-muted-foreground">{attachments[key].name}</span>
                                        <button
                                            onClick={() => removeAttachment(key)}
                                            className="text-destructive hover:text-destructive/80"
                                        >
                                            <X className="h-4 w-4" />
                                        </button>
                                    </div>
                                ) : (
                                    <label className="cursor-pointer">
                                        <input
                                            type="file"
                                            hidden
                                            onChange={(e) => {
                                                if (e.target.files?.[0]) {
                                                    handleAttachmentChange(key, e.target.files[0]);
                                                }
                                            }}
                                        />
                                        <Button
                                            asChild
                                            className="bg-purple-600 hover:bg-purple-700 text-white cursor-pointer"
                                        >
                                            <span>Upload your file</span>
                                        </Button>
                                    </label>
                                )}
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            <div className="space-y-2 mt-8">
                <Label htmlFor="description">Description</Label>
                <Textarea id="description" placeholder="Enter description..." className="min-h-[100px]" />
            </div>

            <div className="mt-8 flex justify-end">
                <Button className="bg-primary text-primary-foreground hover:bg-primary/90">
                    Raise Form
                </Button>
            </div>

            {/* Modal */}
            <SalesPlanModal
                isOpen={isModalOpen}
                onClose={() => setIsModalOpen(false)}
                onSave={handleSalePlanSave}
                brands={brands}
            />
        </div>
    );
};

export default RequestForm;
