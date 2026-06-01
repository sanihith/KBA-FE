import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Progress } from "@/components/ui/progress";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { BUDGET_DATA, FINANCE_STATS } from "@/lib/mockData";
import { PieChart } from 'lucide-react';

const BudgetOverview = ({ userRole }) => {
    // Only show for Finance, Admin, and SBUH
    const authorizedRoles = ['Finance Manager', 'CRM Admin', 'SBU Head (SBUH)'];
    if (!authorizedRoles.includes(userRole)) return null;

    return (
        <Card className="col-span-1 lg:col-span-4 h-full">
            <CardHeader className="flex flex-row items-center justify-between">
                <CardTitle className="flex items-center">
                    <PieChart className="mr-2 h-5 w-5 text-gray-500" />
                    Budget Overview
                </CardTitle>
                <Select defaultValue="fy25">
                    <SelectTrigger className="w-[120px] h-8">
                        <SelectValue placeholder="Select FY" />
                    </SelectTrigger>
                    <SelectContent>
                        <SelectItem value="fy25">FY 2024-25</SelectItem>
                        <SelectItem value="fy24">FY 2023-24</SelectItem>
                    </SelectContent>
                </Select>
            </CardHeader>
            <CardContent>
                {/* Overall Progress */}
                <div className="mb-8">
                    <div className="flex justify-between text-sm mb-2">
                        <span className="text-muted-foreground">Total Budget Utilization</span>
                        <span className="font-medium">{FINANCE_STATS.budgetUtilizedPercentage}%</span>
                    </div>
                    <Progress value={FINANCE_STATS.budgetUtilizedPercentage} className="h-2" />
                    <div className="flex justify-between text-xs text-muted-foreground mt-1">
                        <span>Used: ₹{(FINANCE_STATS.budgetUtilized / 10000000).toFixed(2)} Cr</span>
                        <span>Total: ₹{(FINANCE_STATS.totalBudget / 10000000).toFixed(2)} Cr</span>
                    </div>
                </div>

                {/* Division Breakdown */}
                <div className="rounded-md border">
                    <Table>
                        <TableHeader>
                            <TableRow>
                                <TableHead>Division</TableHead>
                                <TableHead className="text-right">Allocated</TableHead>
                                <TableHead className="text-right">Utilized</TableHead>
                                <TableHead className="text-right">% Usage</TableHead>
                            </TableRow>
                        </TableHeader>
                        <TableBody>
                            {BUDGET_DATA.map((item) => (
                                <TableRow key={item.division}>
                                    <TableCell className="font-medium">{item.division}</TableCell>
                                    <TableCell className="text-right">₹{(item.allocated / 100000).toFixed(1)} L</TableCell>
                                    <TableCell className="text-right">₹{(item.utilized / 100000).toFixed(1)} L</TableCell>
                                    <TableCell className="text-right">
                                        <span className={`inline-flex items-center px-2 py-0.5 rounded text-xs font-medium ${item.percentage > 90 ? 'bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200' :
                                                item.percentage > 70 ? 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200' :
                                                    'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200'
                                            }`}>
                                            {item.percentage}%
                                        </span>
                                    </TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </div>
            </CardContent>
        </Card>
    );
};

export default BudgetOverview;
