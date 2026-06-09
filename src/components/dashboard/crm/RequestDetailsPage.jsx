import React from 'react';
import { Label } from "@/components/ui/label";

const RequestDetailsPage = ({ request }) => {
    if (!request) return null;

    return (
        <div className="bg-white rounded-lg shadow-md p-8 space-y-6">
            {/* Header */}
            <div>
                <h2 className="text-lg font-semibold text-muted-foreground">CRM REQUESTS</h2>
                <h3 className="text-2xl font-bold text-blue-600">{request.customerName}</h3>
            </div>

            {/* Basic Information - 2 Column Layout */}
            <div className="grid grid-cols-2 gap-8">
                {/* Left Column */}
                <div className="space-y-4">
                    <div>
                        <Label className="text-muted-foreground text-xs font-semibold">REQUEST ID</Label>
                        <p className="text-sm font-medium mt-1">{request.id}</p>
                    </div>
                    <div>
                        <Label className="text-muted-foreground text-xs font-semibold">CUSTOMER-CODE</Label>
                        <p className="text-sm font-medium mt-1">{request.customerCode}</p>
                    </div>
                    <div>
                        <Label className="text-muted-foreground text-xs font-semibold">SPECIALITY</Label>
                        <p className="text-sm font-medium mt-1">{request.speciality}</p>
                    </div>
                    <div>
                        <Label className="text-muted-foreground text-xs font-semibold">LOCATION</Label>
                        <p className="text-sm font-medium mt-1">{request.location}</p>
                    </div>
                    <div>
                        <Label className="text-muted-foreground text-xs font-semibold">REGION</Label>
                        <p className="text-sm font-medium mt-1">{request.region}</p>
                    </div>
                    <div>
                        <Label className="text-muted-foreground text-xs font-semibold">DIVISION</Label>
                        <p className="text-sm font-medium mt-1">{request.division}</p>
                    </div>
                </div>

                {/* Right Column */}
                <div className="space-y-4">
                    <div>
                        <Label className="text-muted-foreground text-xs font-semibold">CUSTOMER-NAME</Label>
                        <p className="text-sm font-medium mt-1 text-blue-600">{request.customerName}</p>
                    </div>
                    <div>
                        <Label className="text-muted-foreground text-xs font-semibold">REQUEST DATE</Label>
                        <p className="text-sm font-medium mt-1">{request.requestDate}</p>
                    </div>
                    <div>
                        <Label className="text-muted-foreground text-xs font-semibold">DUE DATE</Label>
                        <p className="text-sm font-medium mt-1">{request.dueDate}</p>
                    </div>
                    <div>
                        <Label className="text-muted-foreground text-xs font-semibold">EXPECTED DUE DATE</Label>
                        <p className="text-sm font-medium mt-1">{request.expectedDueDate}</p>
                    </div>
                    <div>
                        <Label className="text-muted-foreground text-xs font-semibold">STATUS</Label>
                        <p className="text-sm font-medium mt-1">
                            <span className={`inline-flex items-center px-2 py-1 rounded-full text-xs font-medium 
                                ${request.status === 'Approved' ? 'bg-green-100 text-green-700' :
                                    request.status === 'REQUESTED' ? 'bg-yellow-100 text-yellow-700' :
                                        'bg-gray-100 text-gray-700'}`}>
                                {request.status}
                            </span>
                        </p>
                    </div>
                    <div>
                        <Label className="text-muted-foreground text-xs font-semibold">CUSTOMER EXPECTATION</Label>
                        <p className="text-sm font-medium mt-1">{parseFloat(request.customerExpectation).toLocaleString()}</p>
                    </div>
                </div>
            </div>

            {/* Additional Fields */}
            <div className="grid grid-cols-2 gap-8 border-t pt-6">
                <div>
                    <Label className="text-muted-foreground text-xs font-semibold">MONTHLY SALES PLAN AMOUNT</Label>
                    <p className="text-sm font-medium mt-1">{parseFloat(request.monthlySalesPlanAmount).toLocaleString()}</p>
                </div>
                <div>
                    <Label className="text-muted-foreground text-xs font-semibold">TYPE OF SERVICE</Label>
                    <p className="text-sm font-medium mt-1">{request.typeOfService}</p>
                </div>
                <div>
                    <Label className="text-muted-foreground text-xs font-semibold">FROM DATE</Label>
                    <p className="text-sm font-medium mt-1">{request.fromDate}</p>
                </div>
                <div>
                    <Label className="text-muted-foreground text-xs font-semibold">TO DATE</Label>
                    <p className="text-sm font-medium mt-1">{request.toDate}</p>
                </div>
                <div>
                    <Label className="text-muted-foreground text-xs font-semibold">TOTAL MSP</Label>
                    <p className="text-sm font-medium mt-1">{parseFloat(request.totalMsp).toLocaleString()}</p>
                </div>
            </div>

            {/* Monthly Sales Plan */}
            {request.monthlySalesPlan && request.monthlySalesPlan.length > 0 && (
                <div className="space-y-2 border-t pt-6">
                    <Label className="text-sm font-semibold">MONTHLY SALES PLAN</Label>
                    <div className="border rounded-lg overflow-hidden">
                        <table className="w-full text-xs">
                            <thead className="bg-muted text-muted-foreground uppercase text-xs font-medium">
                                <tr>
                                    <th className="px-3 py-2 text-left">Brand</th>
                                    <th className="px-3 py-2 text-left">PTS</th>
                                    <th className="px-3 py-2 text-left">Units</th>
                                    <th className="px-3 py-2 text-left">Amount</th>
                                    <th className="px-3 py-2 text-left">RX Status</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-border">
                                {request.monthlySalesPlan.map((item, index) => (
                                    <tr key={index} className="text-xs">
                                        <td className="px-3 py-2">{item.brandName}</td>
                                        <td className="px-3 py-2">{item.pts}</td>
                                        <td className="px-3 py-2">{item.units}</td>
                                        <td className="px-3 py-2">{parseFloat(item.amount).toLocaleString()}</td>
                                        <td className="px-3 py-2">{item.rxStatus}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            )}

            {/* Description and Remarks */}
            <div className="space-y-2 border-t pt-6">
                <div>
                    <Label className="text-muted-foreground text-xs font-semibold">DESCRIPTION</Label>
                    <p className="text-sm mt-1">{request.description}</p>
                </div>
                <div>
                    <Label className="text-muted-foreground text-xs font-semibold">REMARKS</Label>
                    <p className="text-sm mt-1">{request.remarks}</p>
                </div>
            </div>
        </div>
    );
};

export default RequestDetailsPage;
