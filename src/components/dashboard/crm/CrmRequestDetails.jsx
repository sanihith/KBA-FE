import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { X, Download, Trash2, Edit } from "lucide-react";
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";

// Mock data for dropdowns
const CUSTOMER_OPTIONS = [
    'DATTAPRASAD V GIZARE',
    'ROHIT KHURANA',
    'NUTAN GUPTA',
    'ASHWINI YADAV',
    'PRIYA SHARMA',
    'RAJESH KUMAR'
];

const SERVICE_TYPES = [
    'Cheque',
    'Gift-Card',
    'Travel-Flight',
    'Travel-train',
    'Travel-Car',
    'Purchase',
    'Cash'
];

const CrmRequestDetails = ({ request, onClose }) => {
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        id: request?.id || '',
        customerName: request?.customerName || '',
        customerCode: request?.customerCode || '',
        speciality: request?.speciality || '',
        division: request?.division || '',
        region: request?.region || '',
        location: request?.location || '',
        customerExpectation: request?.customerExpectation || '',
        monthlySalesPlanAmount: request?.monthlySalesPlanAmount || '',
        fromDate: request?.fromDate || '',
        toDate: request?.toDate || '',
        totalMsp: request?.totalMsp || '',
        requestDate: request?.requestDate || '',
        dueDate: request?.dueDate || '',
        expectedDueDate: request?.expectedDueDate || '',
        typeOfService: request?.typeOfService || '',
        description: request?.description || '',
        remarks: request?.remarks || '',
        status: request?.status || ''
    });

    const [attachments, setAttachments] = useState({
        attachment1: request?.attachments?.[0] || { name: 'sample_1.pdf', size: '103.94 Kb' },
        attachment2: request?.attachments?.[1] || { name: 'sample_2.pdf', size: '256.58 Kb' },
        attachment3: request?.attachments?.[2] || null
    });

    const handleInputChange = (field, value) => {
        setFormData(prev => ({
            ...prev,
            [field]: value
        }));
    };

    const handleAttachmentUpload = (attachmentKey, file) => {
        if (file) {
            setAttachments(prev => ({
                ...prev,
                [attachmentKey]: { name: file.name, size: `${(file.size / 1024).toFixed(2)} Kb` }
            }));
        }
    };

    const removeAttachment = (attachmentKey) => {
        setAttachments(prev => ({
            ...prev,
            [attachmentKey]: null   
        }));
    };

    if (!request) return null;

    return (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
            <div className="bg-white rounded-lg shadow-lg w-full max-w-4xl max-h-[90vh] overflow-y-auto">
                {/* Header */}
                <div className="sticky top-0 bg-white border-b flex justify-between items-center p-6 z-10">
                    <h2 className="text-2xl font-bold">REQUEST FORM</h2>
                    <button
                        onClick={() => navigate('/crm-admin-dashboard')}
                        className="text-muted-foreground hover:text-foreground transition-colors"
                    >
                        <X className="h-6 w-6" />
                    </button>
                </div>

                {/* Content */}
                <div className="p-6 space-y-8">
                    {/* Basic Information Section */}
                    <div className="space-y-4">
                        <div className="grid grid-cols-2 gap-6">
                            <div>
                                <Label className="text-muted-foreground text-sm font-semibold">REQUEST ID</Label>
                                <p className="text-lg font-medium mt-1">{formData.id}</p>
                            </div>
                            <div>
                                <Label htmlFor="customerName" className="text-muted-foreground text-sm font-semibold">CUSTOMER-NAME</Label>
                                <Select value={formData.customerName} onValueChange={(value) => handleInputChange('customerName', value)}>
                                    <SelectTrigger id="customerName" className="mt-2">
                                        <SelectValue placeholder="Select customer..." />
                                    </SelectTrigger>
                                    <SelectContent>
                                        {CUSTOMER_OPTIONS.map((customer) => (
                                            <SelectItem key={customer} value={customer}>
                                                {customer}
                                            </SelectItem>
                                        ))}
                                    </SelectContent>
                                </Select>
                            </div>
                            <div>
                                <Label className="text-muted-foreground text-sm font-semibold">CUSTOMER-CODE</Label>
                                <p className="text-lg font-medium mt-1">{formData.customerCode}</p>
                            </div>
                            <div>
                                <Label className="text-muted-foreground text-sm font-semibold">SPECIALITY</Label>
                                <p className="text-lg font-medium mt-1">{formData.speciality}</p>
                            </div>
                            <div>
                                <Label className="text-muted-foreground text-sm font-semibold">DIVISION</Label>
                                <p className="text-lg font-medium mt-1">{formData.division}</p>
                            </div>
                            <div>
                                <Label className="text-muted-foreground text-sm font-semibold">REGION</Label>
                                <p className="text-lg font-medium mt-1">{formData.region}</p>
                            </div>
                            <div>
                                <Label className="text-muted-foreground text-sm font-semibold">LOCATION</Label>
                                <p className="text-lg font-medium mt-1">{formData.location}</p>
                            </div>
                            <div>
                                <Label className="text-muted-foreground text-sm font-semibold">CUSTOMER EXPECTATION</Label>
                                <p className="text-lg font-medium mt-1">{parseFloat(formData.customerExpectation).toLocaleString()}</p>
                            </div>
                        </div>
                    </div>

                    {/* Monthly Sales Plan */}
                    <div className="space-y-4">
                        <Label className="text-lg font-semibold">MONTHLY SALES PLAN</Label>
                        {request.monthlySalesPlan && request.monthlySalesPlan.length > 0 ? (
                            <div className="border rounded-lg overflow-hidden">
                                <table className="w-full text-sm">
                                    <thead className="bg-muted text-muted-foreground uppercase text-xs font-medium">
                                        <tr>
                                            <th className="px-4 py-3 text-left">Brand</th>
                                            <th className="px-4 py-3 text-left">PTS</th>
                                            <th className="px-4 py-3 text-left">Units</th>
                                            <th className="px-4 py-3 text-left">Amount</th>
                                            <th className="px-4 py-3 text-left">RX Status</th>
                                        </tr>
                                    </thead>
                                    <tbody className="divide-y divide-border">
                                        {request.monthlySalesPlan.map((item, index) => (
                                            <tr key={index}>
                                                <td className="px-4 py-3">{item.brandName}</td>
                                                <td className="px-4 py-3">{item.pts}</td>
                                                <td className="px-4 py-3">{item.units}</td>
                                                <td className="px-4 py-3">{parseFloat(item.amount).toLocaleString()}</td>
                                                <td className="px-4 py-3">{item.rxStatus}</td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                        ) : (
                            <div className="border rounded-lg p-4 text-center text-muted-foreground">
                                No sales plan items
                            </div>
                        )}
                    </div>

                    {/* Additional Fields */}
                    <div className="grid grid-cols-2 gap-6">
                        <div>
                            <Label className="text-muted-foreground text-sm font-semibold">MONTHLY SALES PLAN AMOUNT</Label>
                            <p className="text-lg font-medium mt-1">{parseFloat(formData.monthlySalesPlanAmount).toLocaleString()}</p>
                        </div>
                        <div>
                            <Label className="text-muted-foreground text-sm font-semibold">FROM DATE</Label>
                            <p className="text-lg font-medium mt-1">{formData.fromDate}</p>
                        </div>
                        <div>
                            <Label className="text-muted-foreground text-sm font-semibold">TO DATE</Label>
                            <p className="text-lg font-medium mt-1">{formData.toDate}</p>
                        </div>
                        <div>
                            <Label className="text-muted-foreground text-sm font-semibold">TOTAL MSP</Label>
                            <p className="text-lg font-medium mt-1">{parseFloat(formData.totalMsp).toLocaleString()}</p>
                        </div>
                        <div>
                            <Label className="text-muted-foreground text-sm font-semibold">REQUEST DATE</Label>
                            <p className="text-lg font-medium mt-1">{formData.requestDate}</p>
                        </div>
                        <div>
                            <Label className="text-muted-foreground text-sm font-semibold">DUE DATE</Label>
                            <p className="text-lg font-medium mt-1">{formData.dueDate}</p>
                        </div>
                        <div>
                            <Label className="text-muted-foreground text-sm font-semibold">EXPECTED DUE DATE</Label>
                            <p className="text-lg font-medium mt-1">{formData.expectedDueDate}</p>
                        </div>
                        <div>
                            <Label htmlFor="typeOfService" className="text-muted-foreground text-sm font-semibold">TYPE OF SERVICE</Label>
                            <Select value={formData.typeOfService} onValueChange={(value) => handleInputChange('typeOfService', value)}>
                                <SelectTrigger id="typeOfService" className="mt-2">
                                    <SelectValue placeholder="Select service type..." />
                                </SelectTrigger>
                                <SelectContent>
                                    {SERVICE_TYPES.map((service) => (
                                        <SelectItem key={service} value={service}>
                                            {service}
                                        </SelectItem>
                                    ))}
                                </SelectContent>
                            </Select>
                        </div>
                    </div>

                    {/* Status and Description */}
                    <div className="space-y-4">
                        <div>
                            <Label className="text-muted-foreground text-sm font-semibold">STATUS</Label>
                            <Input
                                className="mt-2"
                                value={formData.status}
                                disabled
                            />
                        </div>

                        <div>
                            <Label className="text-muted-foreground text-sm font-semibold">DESCRIPTION</Label>
                            <Textarea
                                className="mt-2"
                                value={formData.description}
                                onChange={(e) => handleInputChange('description', e.target.value)}
                                rows={3}
                            />
                        </div>

                        <div>
                            <Label className="text-muted-foreground text-sm font-semibold">REMARKS</Label>
                            <Textarea
                                className="mt-2"
                                value={formData.remarks}
                                onChange={(e) => handleInputChange('remarks', e.target.value)}
                                rows={3}
                            />
                        </div>
                    </div>

                    {/* Attachments */}
                    <div className="space-y-4 border-t pt-6">
                        <h3 className="text-lg font-semibold">ATTACHMENTS</h3>
                        <div className="space-y-3">
                            {['attachment1', 'attachment2', 'attachment3'].map((key, index) => (
                                <div key={key} className="flex items-center justify-between p-3 border rounded-lg bg-muted/30">
                                    <div>
                                        <Label className="font-semibold">ATTACHMENT {index + 1}</Label>
                                    </div>
                                    <div className="flex items-center gap-3">
                                        {attachments[key] ? (
                                            <>
                                                <span className="text-sm text-muted-foreground">{attachments[key].name} - {attachments[key].size}</span>
                                                <button className="text-blue-600 hover:text-blue-700 p-1">
                                                    <Edit className="h-4 w-4" />
                                                </button>
                                                <button className="text-blue-600 hover:text-blue-700 p-1">
                                                    <Download className="h-4 w-4" />
                                                </button>
                                                <button
                                                    onClick={() => removeAttachment(key)}
                                                    className="text-red-600 hover:text-red-700 p-1"
                                                >
                                                    <Trash2 className="h-4 w-4" />
                                                </button>
                                            </>
                                        ) : (
                                            <label className="cursor-pointer">
                                                <input
                                                    type="file"
                                                    hidden
                                                    onChange={(e) => {
                                                        if (e.target.files?.[0]) {
                                                            handleAttachmentUpload(key, e.target.files[0]);
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
                </div>

                {/* Footer */}
                <div className="sticky bottom-0 bg-white border-t p-6 flex justify-end gap-3">
                    <Button variant="outline" onClick={onClose}>
                        Close
                    </Button>
                    <Button className="bg-blue-600 hover:bg-blue-700 text-white">
                        Save
                    </Button>
                </div>
            </div>
        </div>
    );
};

export default CrmRequestDetails;
