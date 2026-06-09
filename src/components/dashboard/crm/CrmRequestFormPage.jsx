import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { HelpCircle, Trash2, Edit, Download, X, ChevronLeft } from "lucide-react";
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";
import CustomerProfilePage from './CustomerProfilePage';

const SERVICE_TYPES = [
    'Cheque',
    'Gift-Card',
    'Travel-Flight',
    'Travel-train',
    'Travel-Car',
    'Purchase',
    'Cash'
];

const CUSTOMER_OPTIONS = [
    'DATTAPRASAD V GIZARE',
    'ROHIT KHURANA',
    'NUTAN GUPTA',
    'ASHWINI YADAV',
    'PRIYA SHARMA',
    'RAJESH KUMAR'
];

const BRAND_OPTIONS = [
    'DEKSEL CD',
    'CALCIUM+ VIT D3',
    'IRON SUPPLEMENT',
    'B-COMPLEX FORTE',
    'OMEGA-3 CAPSULES',
    'PROBIOTIC CARE',
    'MULTIVITAMIN DAILY'
];

const CrmRequestFormPage = ({ request, onBack }) => {
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        id: request?.id || 'NEW-' + Math.floor(Math.random() * 10000),
        customerName: request?.customerName || '',
        customerCode: request?.customerCode || '',
        speciality: request?.speciality || '',
        division: request?.division || '',
        region: request?.region || '',
        location: request?.location || '',
        customerExpectation: request?.customerExpectation || '0.00',
        monthlySalesPlanAmount: request?.monthlySalesPlanAmount || '0.00',
        fromDate: request?.fromDate || '',
        toDate: request?.toDate || '',
        totalMsp: request?.totalMsp || '0.00',
        requestDate: request?.requestDate || new Date().toLocaleDateString('en-GB'),
        dueDate: request?.dueDate || '',
        expectedDueDate: request?.expectedDueDate || '',
        typeOfService: request?.typeOfService || '',
        description: request?.description || '',
        remarks: request?.remarks || '',
        status: request?.status || 'NEW',
        monthlySalesPlan: request?.monthlySalesPlan || [],
        attachments: request?.attachments || { 1: null, 2: null, 3: null }
    });

    const isNew = formData.status === 'NEW' || formData.status === '';

    const [viewingProfile, setViewingProfile] = React.useState(() => {
        if (typeof window !== 'undefined') {
            const params = new URLSearchParams(window.location.search);
            return params.get('viewProfile') === 'true';
        }
        return false;
    });

    React.useEffect(() => {
        const url = new URL(window.location);
        if (viewingProfile) {
            url.searchParams.set('viewProfile', 'true');
        } else {
            url.searchParams.delete('viewProfile');
        }
        window.history.replaceState({}, '', url);
    }, [viewingProfile]);

    const [isEditing, setIsEditing] = useState(isNew);
    const [isMspModalOpen, setIsMspModalOpen] = useState(false);
    const [mspEntry, setMspEntry] = useState({ brandName: '', pts: '0.00', units: '0', amount: '0.00', rxStatus: '' });

    const handleDeleteMsp = (index) => {
        setFormData(prev => ({
            ...prev,
            monthlySalesPlan: prev.monthlySalesPlan.filter((_, i) => i !== index)
        }));
    };

    const handleOpenMspModal = () => {
        setMspEntry({ brandName: '', pts: '0.00', units: '0', amount: '0.00', rxStatus: '' });
        setIsMspModalOpen(true);
    };

    const handleSaveMsp = (close = true) => {
        const amount = (parseFloat(mspEntry.pts) || 0) * (parseInt(mspEntry.units) || 0);
        const newLine = {
            brandName: mspEntry.brandName,
            pts: mspEntry.pts,
            units: mspEntry.units,
            amount: amount.toFixed(2),
            rxStatus: mspEntry.rxStatus || 'Pending'
        };

        setFormData(prev => ({
            ...prev,
            monthlySalesPlan: [...prev.monthlySalesPlan, newLine]
        }));

        if (close) {
            setIsMspModalOpen(false);
        } else {
            setMspEntry({ brandName: '', pts: '0.00', units: '0', amount: '0.00', rxStatus: '' });
        }
    };

    const handleFileChange = (num, event) => {
        const file = event.target.files[0];
        if (file) {
            setFormData(prev => ({
                ...prev,
                attachments: {
                    ...prev.attachments,
                    [num]: {
                        name: file.name,
                        size: (file.size / 1024).toFixed(2) + ' Kb'
                    }
                }
            }));
        }
    };

    const handleFileDelete = (num) => {
        setFormData(prev => ({
            ...prev,
            attachments: {
                ...prev.attachments,
                [num]: null
            }
        }));
    };

    const handleInputChange = (field, value) => {
        setFormData(prev => ({
            ...prev,
            [field]: value
        }));
    };

    if (viewingProfile) {
        return (
            <CustomerProfilePage
                customerData={formData}
                onBack={() => setViewingProfile(false)}
            />
        );
    }

    const DetailField = ({ label, value, field, type = "text", isSelect = false, options = [], isLink = false }) => {
        const displayValue = value || (type === "number" ? "0.00" : "-");

        return (
            <div className="grid grid-cols-[180px_1fr] items-center gap-4 py-1.5">
                <Label className="uppercase text-[11px] font-bold text-gray-500 tracking-wider">
                    {label}
                </Label>
                <div className="flex-1">
                    {!isEditing ? (
                        <span
                            onClick={isLink ? () => setViewingProfile(true) : undefined}
                            className={`text-[13px] font-medium uppercase ${isLink ? 'text-[#00a19a] cursor-pointer hover:underline' : 'text-gray-800'}`}
                        >
                            {displayValue}
                        </span>
                    ) : (
                        isSelect ? (
                            <Select value={value} onValueChange={(val) => handleInputChange(field, val)}>
                                <SelectTrigger className="h-8 border-0 border-b rounded-none px-0 focus:ring-0 shadow-none border-gray-200 uppercase text-[13px]">
                                    <SelectValue placeholder={`Select ${label.toLowerCase()}...`} />
                                </SelectTrigger>
                                <SelectContent>
                                    {options.map(opt => (
                                        <SelectItem key={opt} value={opt}>{opt}</SelectItem>
                                    ))}
                                </SelectContent>
                            </Select>
                        ) : (
                            <Input
                                type={type}
                                value={value}
                                onChange={(e) => handleInputChange(field, e.target.value)}
                                className="h-8 border-0 border-b rounded-none px-0 focus-visible:ring-0 shadow-none border-gray-200 bg-transparent text-[13px] uppercase"
                                placeholder={type === "number" ? "0.00" : ""}
                            />
                        )
                    )}
                </div>
            </div>
        );
    };

    return (
        <div className="bg-white min-h-screen animate-in fade-in duration-300">
            {/* Main Container */}
            <div className="max-w-6xl mx-auto p-8 space-y-12">

                {/* Header Actions */}
                <div className="flex justify-between items-center border-b pb-4">
                    <button
                        onClick={() => navigate('/crm-admin-dashboard')}
                        className="inline-flex items-center gap-1.5 text-gray-500 hover:text-gray-900 text-[13px] font-medium transition-colors group"
                    >
                        <ChevronLeft size={18} className="transition-transform group-hover:-translate-x-0.5" />
                        <span>Back</span>
                    </button>
                    <h2 className="text-xs font-bold text-gray-400 uppercase tracking-widest">Request Form</h2>
                </div>

                {/* New Creation Action */}
                <div className="flex items-center gap-2 pt-4 pb-2">
                    <Button
                        className="bg-[#6b4260] hover:bg-[#5a3751] text-white uppercase font-bold text-[11px] px-6 h-8 rounded-sm shadow-sm transition-all active:scale-95"
                        onClick={() => {
                            setFormData({
                                id: 'NEW-' + Math.floor(Math.random() * 10000),
                                customerName: '',
                                customerCode: '',
                                speciality: '',
                                division: '',
                                region: '',
                                location: '',
                                customerExpectation: '0.00',
                                monthlySalesPlanAmount: '0.00',
                                fromDate: '',
                                toDate: '',
                                totalMsp: '0.00',
                                requestDate: new Date().toLocaleDateString('en-GB'),
                                dueDate: '',
                                expectedDueDate: '',
                                typeOfService: '',
                                description: '',
                                remarks: '',
                                status: 'NEW',
                                monthlySalesPlan: [],
                                attachments: { 1: null, 2: null, 3: null }
                            });
                            setIsEditing(true);
                        }}
                    >
                        New
                    </Button>
                    {!isEditing && (
                        <Button
                            variant="outline"
                            className="text-gray-600 uppercase font-bold text-[11px] px-6 h-8 rounded-sm border-gray-300 hover:bg-gray-50 transition-all active:scale-95"
                            onClick={() => setIsEditing(true)}
                        >
                            Edit
                        </Button>
                    )}
                </div>

                {/* Form Body */}
                <div className="grid grid-cols-1 gap-y-6">

                    {/* Basic Info */}
                    <div className="space-y-1">
                        {!isEditing && <DetailField label="Request ID" value={formData.id} field="id" />}
                        <DetailField label="Customer-Name" value={formData.customerName} field="customerName" isSelect options={CUSTOMER_OPTIONS} isLink />
                        <DetailField label="Customer-Code" value={formData.customerCode} field="customerCode" />
                        <DetailField label="Speciality" value={formData.speciality} field="speciality" />
                        <DetailField label="Division" value={formData.division} field="division" />
                        <DetailField label="Region" value={formData.region} field="region" />
                        <DetailField label="Customer Expectation" value={formData.customerExpectation} field="customerExpectation" type="number" />
                    </div>

                    {/* Sales Plan Table */}
                    <div className="space-y-4 pt-4">
                        <div className="grid grid-cols-[180px_1fr] items-start gap-4">
                            <Label className="uppercase text-[11px] font-bold text-gray-700 pt-2">Monthly Sales Plan</Label>
                            <div className="border rounded-sm overflow-hidden border-gray-200">
                                <table className="w-full text-xs text-left">
                                    <thead className="bg-gray-50 border-b border-gray-200 uppercase text-[10px] font-bold text-gray-600">
                                        <tr>
                                            <th className="px-4 py-2">Brand</th>
                                            <th className="px-4 py-2 text-right">PTS</th>
                                            <th className="px-4 py-2 text-right">Units</th>
                                            <th className="px-4 py-2 text-right">Amount</th>
                                            <th className="px-4 py-2">RX Status</th>
                                            {isEditing && <th className="px-4 py-2 w-10"></th>}
                                        </tr>
                                    </thead>
                                    <tbody className="divide-y divide-gray-100">
                                        {formData.monthlySalesPlan.map((item, idx) => (
                                            <tr key={idx} className="hover:bg-gray-50/50">
                                                <td className="px-4 py-2">{item.brandName}</td>
                                                <td className="px-4 py-2 text-right">{item.pts}</td>
                                                <td className="px-4 py-2 text-right">{item.units}</td>
                                                <td className="px-4 py-2 text-right">{item.amount}</td>
                                                <td className="px-4 py-2">{item.rxStatus}</td>
                                                {isEditing && (
                                                    <td className="px-4 py-2 text-right">
                                                        <Trash2
                                                            size={14}
                                                            className="text-gray-400 hover:text-red-500 cursor-pointer transition-colors inline"
                                                            onClick={() => handleDeleteMsp(idx)}
                                                        />
                                                    </td>
                                                )}
                                            </tr>
                                        ))}
                                        <tr>
                                            <td colSpan={isEditing ? 6 : 5} className="px-4 py-2">
                                                <button
                                                    onClick={handleOpenMspModal}
                                                    className="text-teal-600 hover:text-teal-700 font-medium text-[11px]"
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

                    {/* More Info */}
                    <div className="space-y-1 pt-4 border-t border-gray-50">
                        <DetailField label="Monthly Sales Plan" value={formData.monthlySalesPlanAmount} field="monthlySalesPlanAmount" type="number" />
                        <DetailField label="From Date" value={formData.fromDate} field="fromDate" type="date" />
                        <DetailField label="To Date" value={formData.toDate} field="toDate" type="date" />
                        <DetailField label="Total MSP" value={formData.totalMsp} field="totalMsp" type="number" />
                        <DetailField label="Request Date" value={formData.requestDate} field="requestDate" />
                        <DetailField label="Due Date" value={formData.dueDate} field="dueDate" type="date" />
                        <DetailField label="Expected Due Date" value={formData.expectedDueDate} field="expectedDueDate" type="date" />
                        <DetailField label="Type of Service" value={formData.typeOfService} field="typeOfService" isSelect options={SERVICE_TYPES} />

                        <div className="grid grid-cols-[180px_1fr] items-center gap-4 py-1.5">
                            <Label className="uppercase text-[11px] font-bold text-gray-500 tracking-wider">Analysis Report</Label>
                            <div className="h-1 border-gray-100"></div>
                        </div>

                        {!isEditing && <DetailField label="Status" value={formData.status} field="status" />}

                        <div className="grid grid-cols-[180px_1fr] items-start gap-4 py-2">
                            <Label className="uppercase text-[11px] font-bold text-gray-500 tracking-wider pt-1 flex items-center gap-1">
                                Description {isEditing && <HelpCircle size={10} className="text-blue-500" />}
                            </Label>
                            {isEditing ? (
                                <Textarea
                                    value={formData.description}
                                    onChange={(e) => handleInputChange('description', e.target.value)}
                                    className="min-h-[60px] border-0 border-b rounded-none px-0 focus-visible:ring-0 shadow-none border-gray-200 bg-transparent resize-none text-[13px] uppercase"
                                    placeholder="Enter description..."
                                />
                            ) : (
                                <span className="text-[13px] font-medium text-gray-800 uppercase">{formData.description || '-'}</span>
                            )}
                        </div>

                        <div className="grid grid-cols-[180px_1fr] items-start gap-4 py-2">
                            <Label className="uppercase text-[11px] font-bold text-gray-500 tracking-wider pt-1 flex items-center gap-1">
                                Remarks {isEditing && <HelpCircle size={10} className="text-blue-500" />}
                            </Label>
                            {isEditing ? (
                                <Textarea
                                    value={formData.remarks}
                                    onChange={(e) => handleInputChange('remarks', e.target.value)}
                                    className="min-h-[60px] border-0 border-b rounded-none px-0 focus-visible:ring-0 shadow-none border-gray-200 bg-transparent resize-none text-[13px] uppercase"
                                    placeholder="Enter remarks..."
                                />
                            ) : (
                                <span className="text-[13px] font-medium text-gray-800 uppercase">{formData.remarks || '-'}</span>
                            )}
                        </div>

                        {/* Attachments */}
                        <div className="space-y-2 pt-4">
                            {[1, 2, 3].map(num => {
                                const fileData = formData.attachments[num];

                                return (
                                    <div key={num} className="grid grid-cols-[180px_1fr] items-center gap-4 py-1">
                                        <Label className="uppercase text-[11px] font-bold text-gray-500 tracking-wider">Attachment {num}</Label>
                                        <div className="flex items-center justify-between max-w-md">
                                            {fileData ? (
                                                <div className="flex items-center justify-between w-full">
                                                    <span className="text-[13px] text-gray-600 truncate max-w-[150px]" title={fileData.name}>
                                                        {fileData.size}
                                                    </span>
                                                    <div className="flex items-center gap-3">
                                                        <Edit
                                                            size={14}
                                                            className="text-[#00a19a] cursor-pointer hover:text-[#00817b]"
                                                            onClick={() => document.getElementById(`file-input-${num}`).click()}
                                                        />
                                                        <Download size={14} className="text-[#00a19a] cursor-pointer hover:text-[#00817b]" />
                                                        <Trash2
                                                            size={14}
                                                            className="text-[#00a19a] cursor-pointer hover:text-[#00817b]"
                                                            onClick={() => handleFileDelete(num)}
                                                        />
                                                    </div>
                                                </div>
                                            ) : (
                                                <div className="relative">
                                                    <Button
                                                        onClick={() => document.getElementById(`file-input-${num}`).click()}
                                                        className="bg-[#6b4260] hover:bg-[#5a3751] text-white text-[10px] uppercase font-bold px-4 h-7 w-fit rounded-sm shadow-sm transition-all active:scale-95"
                                                    >
                                                        Upload your file
                                                    </Button>
                                                </div>
                                            )}
                                            <input
                                                id={`file-input-${num}`}
                                                type="file"
                                                className="hidden"
                                                onChange={(e) => handleFileChange(num, e)}
                                            />
                                        </div>
                                    </div>
                                );
                            })}
                        </div>
                    </div>

                    {/* Submit Section */}
                    {isEditing && (
                        <div className="pt-10 border-t border-gray-100">
                            <Button className="bg-[#6b4260] hover:bg-[#5a3751] text-white uppercase font-bold text-xs px-8 py-5 h-auto rounded-sm shadow-md transition-all active:scale-95">
                                Enroll
                            </Button>
                        </div>
                    )}

                </div>
            </div>

            {/* Monthly Sales Plan Modal */}
            {isMspModalOpen && (
                <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-[100] animate-in fade-in duration-200">
                    <div className="bg-white rounded-sm shadow-2xl w-full max-w-2xl overflow-hidden border border-gray-100 animate-in zoom-in-95 duration-200">
                        {/* Modal Header */}
                        <div className="flex justify-between items-center px-6 py-4 border-b border-gray-100">
                            <h3 className="text-sm font-bold text-gray-800 uppercase tracking-tight">Create MONTHLY SALES PLAN</h3>
                            <button onClick={() => setIsMspModalOpen(false)} className="text-gray-400 hover:text-gray-600 transition-colors">
                                <X size={20} />
                            </button>
                        </div>

                        {/* Modal Body */}
                        <div className="p-8 space-y-4">
                            <div className="grid grid-cols-[120px_1fr] items-center gap-12">
                                <Label className="uppercase text-[11px] font-bold text-gray-700">BRAND</Label>
                                <Select value={mspEntry.brandName} onValueChange={(val) => setMspEntry(p => ({ ...p, brandName: val }))}>
                                    <SelectTrigger className="h-8 border-0 border-b rounded-none px-0 focus:ring-0 shadow-none border-gray-200">
                                        <SelectValue placeholder="Select brand..." />
                                    </SelectTrigger>
                                    <SelectContent className="z-[110]">
                                        {BRAND_OPTIONS.map(opt => <SelectItem key={opt} value={opt}>{opt}</SelectItem>)}
                                    </SelectContent>
                                </Select>
                            </div>

                            <div className="grid grid-cols-[120px_1fr] items-center gap-12">
                                <Label className="uppercase text-[11px] font-bold text-gray-700">PTS</Label>
                                <Input
                                    type="text"
                                    value={mspEntry.pts}
                                    onChange={(e) => setMspEntry(p => ({ ...p, pts: e.target.value }))}
                                    className="h-8 border-0 border-b rounded-none px-0 focus-visible:ring-0 shadow-none border-gray-200 text-sm"
                                    placeholder="0.00"
                                />
                            </div>

                            <div className="grid grid-cols-[120px_1fr] items-center gap-12">
                                <Label className="uppercase text-[11px] font-bold text-gray-700">UNITS</Label>
                                <Input
                                    type="text"
                                    value={mspEntry.units}
                                    onChange={(e) => setMspEntry(p => ({ ...p, units: e.target.value }))}
                                    className="h-8 border-0 border-b rounded-none px-0 focus-visible:ring-0 shadow-none border-gray-200 text-sm"
                                    placeholder="0"
                                />
                            </div>
                        </div>

                        {/* Modal Footer */}
                        <div className="p-6 pt-0 flex gap-2">
                            <Button
                                onClick={() => handleSaveMsp(true)}
                                className="bg-[#6b4260] hover:bg-[#5a3751] text-white uppercase font-bold text-[10px] px-6 h-8 rounded-sm shadow-sm transition-all active:scale-95"
                            >
                                Save & Close
                            </Button>
                            <Button
                                onClick={() => handleSaveMsp(false)}
                                className="bg-[#6b4260] hover:bg-[#5a3751] text-white uppercase font-bold text-[10px] px-6 h-8 rounded-sm shadow-sm transition-all active:scale-95"
                            >
                                Save & New
                            </Button>
                            <Button
                                variant="outline"
                                onClick={() => setIsMspModalOpen(false)}
                                className="bg-[#e9ecef] hover:bg-[#dee2e6] text-gray-700 border-0 uppercase font-bold text-[10px] px-6 h-8 rounded-sm transition-all active:scale-95"
                            >
                                Discard
                            </Button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default CrmRequestFormPage;
