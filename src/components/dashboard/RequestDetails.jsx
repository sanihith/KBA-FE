import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { ArrowUpDown, Download, ChevronLeft } from "lucide-react";

// A single two-column label → value row
const DetailRow = ({ label, value, isLink = false }) => (
    <div className="grid grid-cols-[200px_1fr] items-start py-1.5 gap-2">
        <span className="text-[11px] font-bold text-gray-700 uppercase tracking-wider leading-5 shrink-0">
            {label}
        </span>
        <span
            className={`text-[13px] font-medium uppercase leading-5 break-words ${
                isLink ? 'text-teal-600 cursor-pointer hover:underline' : 'text-gray-800'
            }`}
        >
            {value || '-'}
        </span>
    </div>
);

// Attachment row – shows download icon + file size when an attachment exists
const AttachmentRow = ({ label, attachment }) => (
    <div className="grid grid-cols-[200px_1fr] items-center py-1.5 gap-2">
        <span className="text-[11px] font-bold text-gray-700 uppercase tracking-wider shrink-0">
            {label}
        </span>
        <div>
            {attachment ? (
                <a
                    href={attachment.url || '#'}
                    className="inline-flex items-center gap-1.5 text-teal-600 hover:text-teal-700 text-[13px] font-medium transition-colors"
                    download
                >
                    <Download size={13} className="shrink-0" />
                    {attachment.size}
                </a>
            ) : (
                <span className="text-gray-300 text-[13px]">—</span>
            )}
        </div>
    </div>
);

const RequestDetails = ({ request, onBack }) => {
    const navigate = useNavigate();
    if (!request) return null;

    const fmt = (n) =>
        typeof n === 'number'
            ? n.toLocaleString('en-IN', { minimumFractionDigits: 2, maximumFractionDigits: 2 })
            : n || '-';

    const salesPlan = request.monthlySalesPlan || [];
    const attachments = request.attachments || [];

    return (
        <div className="bg-white min-h-screen flex flex-col animate-in fade-in duration-300 font-sans">

            {/* Header / Back nav */}
            <div className="border-b border-gray-100 px-8 py-4 flex items-center gap-4 sticky top-0 bg-white z-10">
                <button
                    onClick={() => navigate('?tab=listing')}
                    className="inline-flex items-center gap-1.5 text-gray-500 hover:text-gray-900 text-[13px] font-medium transition-colors group"
                >
                    <ChevronLeft size={18} className="transition-transform group-hover:-translate-x-0.5" />
                    <span>Request Listing</span>
                </button>
                <div className="h-4 w-px bg-gray-200" />
                <div className="flex items-center gap-1 text-sm">
                    <span className="text-gray-400 font-medium">Request Listing /</span>
                    <span className="text-gray-800 font-semibold">{request.id}</span>
                </div>
            </div>

            {/* ── Main scrollable content ── */}
            <div className="flex-1 overflow-y-auto">
                <div className="max-w-5xl w-full mx-auto px-10 py-8 space-y-0">

                    {/* ── Section: REQUEST FORM ── */}
                    <div>
                        {/* Section header */}
                        <div className="border-b border-gray-200 pb-2 mb-6">
                            <h2 className="text-[11px] font-bold text-gray-400 uppercase tracking-widest">
                                Request Form
                            </h2>
                        </div>

                        {/* Top fields */}
                        <div className="space-y-0 mb-4">
                            <DetailRow label="Request ID"           value={request.id} />
                            <DetailRow label="Customer-Name"        value={request.customerName} isLink />
                            <DetailRow label="Customer-Code"        value={request.customerCode} />
                            <DetailRow label="Speciality"           value={request.speciality} />
                            <DetailRow label="Division"             value={request.division} />
                            <DetailRow label="Region"               value={request.region} />
                            <DetailRow
                                label="Customer Expectation"
                                value={fmt(request.customerExpectation)}
                            />
                        </div>

                        {/* Monthly Sales Plan table */}
                        <div className="grid grid-cols-[200px_1fr] items-start mb-4">
                            <span className="text-[11px] font-bold text-gray-700 uppercase tracking-wider pt-3 shrink-0">
                                Monthly Sales Plan
                            </span>
                            <div>
                                <table className="w-full text-[13px] text-left">
                                    <thead className="border-b border-gray-200">
                                           <tr className="text-[11px] font-bold text-gray-800 uppercase tracking-wider">
                                            <th className="py-3 pr-4 font-bold">Brand</th>
                                            <th className="py-3 px-4 text-right font-bold">PTS</th>
                                            <th className="py-3 px-4 text-right font-bold">Units</th>
                                            <th className="py-3 px-4 text-right font-bold">Amount</th>
                                            <th className="py-3 pl-4 font-bold flex items-center gap-1">
                                                RX Status
                                                <ArrowUpDown size={11} className="text-gray-400 ml-1" />
                                            </th>
                                        </tr>
                                    </thead>
                                    <tbody className="divide-y divide-gray-100">
                                        {salesPlan.length > 0 ? salesPlan.map((row, i) => (
                                            <tr key={i} className="hover:bg-gray-50/50 transition-colors">
                                                <td className="py-2.5 pr-4 font-medium text-gray-800 uppercase">
                                                    {row.brand}
                                                </td>
                                                <td className="py-2.5 px-4 text-right text-gray-700 font-mono">
                                                    {fmt(row.pts)}
                                                </td>
                                                <td className="py-2.5 px-4 text-right text-gray-700">
                                                    {row.units}
                                                </td>
                                                <td className="py-2.5 px-4 text-right text-teal-600 font-medium font-mono">
                                                    {fmt(row.amount)}
                                                </td>
                                                <td className="py-2.5 pl-4 text-gray-400">—</td>
                                            </tr>
                                        )) : (
                                            <tr>
                                                <td colSpan={5} className="py-4 text-center text-gray-300 text-[12px]">
                                                    No sales plan data
                                                </td>
                                            </tr>
                                        )}
                                    </tbody>
                                </table>

                                {/* Divider below table */}
                                <div className="border-b border-gray-100 mt-2 mb-4" />
                            </div>
                        </div>

                        {/* Bottom fields */}
                        <div className="space-y-0">
                            <DetailRow label="Monthly Sales Plan"  value={fmt(request.monthlyPlan)} />
                            <DetailRow label="From Date"           value={request.fromDate} />
                            <DetailRow label="To Date"             value={request.toDate} />
                            <DetailRow label="Total MSP"           value={fmt(request.totalMsp)} />
                            <DetailRow label="Request Date"        value={request.requestDate} />
                            <DetailRow label="Due Date"            value={request.dueDate} />

                            {/* Description with small superscript hint */}
                            <div className="grid grid-cols-[200px_1fr] items-start py-1.5 gap-2">
                                <span className="text-[11px] font-bold text-gray-700 uppercase tracking-wider leading-5 shrink-0 flex items-center gap-0.5">
                                    Description
                                    <sup className="text-[9px] text-gray-400 font-normal">?</sup>
                                </span>
                                <span className="text-[13px] font-medium leading-5 text-gray-800 break-words normal-case">
                                    {request.description || '-'}
                                </span>
                            </div>

                            <DetailRow label="Status" value={request.status} />

                            {/* Attachments */}
                            <AttachmentRow label="Attachment 1" attachment={attachments[0]} />
                            <AttachmentRow label="Attachment 2" attachment={attachments[1]} />
                            <AttachmentRow label="Attachment 3" attachment={attachments[2]} />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default RequestDetails;
