import React, { useState } from 'react';
import AddVendorModal from './AddVendorModal';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { ArrowUpDown, Upload } from "lucide-react";

const VendorAllocation = () => {
    const [showAddVendor, setShowAddVendor] = useState(false);

    return (
        <div className="space-y-8 max-w-6xl">
            {/* Top Form Section */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-6">
                {/* Left Column */}
                <div className="space-y-4">
                    <div className="space-y-2">
                        <Label className="uppercase text-xs font-bold text-muted-foreground">Customer Name</Label>
                        <Input className="border-0 border-b rounded-none px-0 focus-visible:ring-0 focus-visible:border-primary border-primary/50 bg-transparent" />
                    </div>
                    <div className="space-y-2">
                        <Label className="uppercase text-xs font-bold text-muted-foreground">Speciality</Label>
                        <div className="h-10 flex items-center border-b border-border/50"></div>
                    </div>
                    <div className="space-y-2">
                        <Label className="uppercase text-xs font-bold text-muted-foreground">Customer Code</Label>
                        <div className="h-10 flex items-center border-b border-border/50"></div>
                    </div>
                    <div className="space-y-2">
                        <Label className="uppercase text-xs font-bold text-muted-foreground">Location</Label>
                        <div className="h-10 flex items-center border-b border-border/50"></div>
                    </div>
                    <div className="space-y-2">
                        <Label className="uppercase text-xs font-bold text-muted-foreground">Region</Label>
                        <div className="h-10 flex items-center border-b border-border/50"></div>
                    </div>
                    <div className="space-y-2">
                        <Label className="uppercase text-xs font-bold text-muted-foreground">Division</Label>
                        <div className="h-10 flex items-center border-b border-border/50"></div>
                    </div>
                    <div className="space-y-2">
                        <Label className="uppercase text-xs font-bold text-muted-foreground">Admin Remarks</Label>
                        <div className="h-10 flex items-center border-b border-border/50"></div>
                    </div>
                </div>

                {/* Right Column */}
                <div className="space-y-6">
                    <div className="space-y-2">
                        <Label className="uppercase text-xs font-bold text-muted-foreground">Request Code</Label>
                        <div className="h-10 flex items-center border-b border-border/50"></div>
                    </div>
                    <div className="space-y-2">
                        <Label className="uppercase text-xs font-bold text-muted-foreground">Requested Date</Label>
                        <div className="h-10 flex items-center border-b border-border/50"></div>
                    </div>
                    <div className="space-y-2">
                        <Label className="uppercase text-xs font-bold text-muted-foreground">Due Date</Label>
                        <div className="h-10 flex items-center border-b border-border/50"></div>
                    </div>

                    {/* Uploads */}
                    <div className="grid grid-cols-[120px_1fr] items-center gap-4">
                        <Label className="uppercase text-xs font-bold text-muted-foreground">Aadhar Card</Label>
                        <Button variant="secondary" className="bg-[#7e4f7e] text-white hover:bg-[#6a426a] w-fit h-8 text-xs">
                            Upload your file
                        </Button>
                    </div>
                    <div className="grid grid-cols-[120px_1fr] items-center gap-4">
                        <Label className="uppercase text-xs font-bold text-muted-foreground">Pan Card</Label>
                        <Button variant="secondary" className="bg-[#7e4f7e] text-white hover:bg-[#6a426a] w-fit h-8 text-xs">
                            Upload your file
                        </Button>
                    </div>
                    <div className="grid grid-cols-[120px_1fr] items-center gap-4">
                        <Label className="uppercase text-xs font-bold text-muted-foreground">Blank Cheque</Label>
                        <Button variant="secondary" className="bg-[#7e4f7e] text-white hover:bg-[#6a426a] w-fit h-8 text-xs">
                            Upload your file
                        </Button>
                    </div>

                    <div className="space-y-2 pt-4">
                        <Label className="uppercase text-xs font-bold text-muted-foreground">Email</Label>
                        <div className="h-10 flex items-center border-b border-border/50"></div>
                    </div>
                    <div className="space-y-2">
                        <Label className="uppercase text-xs font-bold text-muted-foreground">Mobile</Label>
                        <div className="h-10 flex items-center border-b border-border/50"></div>
                    </div>
                </div>
            </div>

            {/* Vendor Table Section */}
            <div className="pt-8">
                <div className="flex items-center gap-8 mb-4">
                    <h3 className="uppercase text-xs font-bold text-muted-foreground min-w-[100px]">Add Vendor</h3>
                    <div className="flex-1">
                        <div className="border rounded-sm overflow-hidden">
                            <table className="w-full text-sm">
                                <thead className="bg-muted/30">
                                    <tr>
                                        <th className="text-left px-4 py-2 font-bold text-muted-foreground uppercase text-xs">Vendor Name</th>
                                        <th className="text-left px-4 py-2 font-bold text-muted-foreground uppercase text-xs">Type of Service</th>
                                        <th className="text-right px-4 py-2 font-bold text-muted-foreground uppercase text-xs flex items-center justify-end gap-1">
                                            Amount <ArrowUpDown size={12} />
                                        </th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr className="hover:bg-muted/50">
                                        <td className="p-2 px-4">
                                            <button
                                                className="text-teal-600 hover:text-teal-700 text-sm font-medium"
                                                onClick={() => setShowAddVendor(true)}
                                            >
                                                Add a line
                                            </button>
                                        </td>
                                        <td></td>
                                        <td></td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>

            {/* Bottom Totals */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 pt-4 border-t">
                <div className="space-y-2">
                    <div className="grid grid-cols-[150px_1fr] items-center">
                        <span className="uppercase text-xs font-bold text-muted-foreground">Service Amount</span>
                        <span className="text-sm">0.00</span>
                    </div>
                    <div className="grid grid-cols-[150px_1fr] items-center">
                        <span className="uppercase text-xs font-bold text-muted-foreground">Total Amount</span>
                        <span className="text-sm">0</span>
                    </div>
                </div>
            </div>

            <div>
                <Button className="bg-[#7e4f7e] hover:bg-[#6a426a] text-white">
                    Add Vendors
                </Button>
            </div>

            {showAddVendor && (
                <AddVendorModal onClose={() => setShowAddVendor(false)} />
            )}
        </div>
    );
};

export default VendorAllocation;
