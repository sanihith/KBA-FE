import React from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

const RequestForm = () => {
    return (
        <div className="bg-card border rounded-xl p-6 shadow-sm">
            <h2 className="text-xl font-semibold mb-6">New Request</h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                    <Label htmlFor="customerName">Customer Name</Label>
                    <Input id="customerName" placeholder="Select customer..." />
                </div>

                <div className="space-y-2">
                    <Label htmlFor="customerCode">Customer Code</Label>
                    <Input id="customerCode" placeholder="Enter code" />
                </div>

                <div className="space-y-2">
                    <Label htmlFor="region">Region</Label>
                    <Input id="region" placeholder="Region" />
                </div>

                <div className="space-y-2">
                    <Label htmlFor="speciality">Speciality</Label>
                    <Input id="speciality" placeholder="Speciality" />
                </div>

                <div className="space-y-2">
                    <Label htmlFor="location">Location</Label>
                    <Input id="location" placeholder="Location" />
                </div>

                <div className="space-y-2">
                    <Label htmlFor="blLocation">BL Location</Label>
                    <Input id="blLocation" placeholder="BL Location" />
                </div>

                <div className="space-y-2">
                    <Label htmlFor="customerExpectation">Customer Expectation</Label>
                    <Input id="customerExpectation" type="number" placeholder="0.00" />
                </div>

                <div className="space-y-2">
                    <Label htmlFor="monthlySalesPlan">Monthly Sales Plan</Label>
                    <Input id="monthlySalesPlan" type="number" placeholder="0.00" />
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

            <div className="space-y-2 mt-6">
                <Label htmlFor="description">Description</Label>
                <Textarea id="description" placeholder="Enter description..." className="min-h-[100px]" />
            </div>

            <div className="mt-8 flex justify-end">
                <Button className="bg-primary text-primary-foreground hover:bg-primary/90">
                    Raise Form
                </Button>
            </div>
        </div>
    );
};

export default RequestForm;
