import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { RECENT_ACTIVITY } from "@/lib/mockData";
import StatusBadge from "./StatusBadge";
import { Clock } from 'lucide-react';

const ActivityFeed = () => {
    return (
        <Card className="col-span-1 lg:col-span-3 h-full">
            <CardHeader>
                <CardTitle className="flex items-center">
                    <Clock className="mr-2 h-5 w-5 text-gray-500" />
                    Recent Activity
                </CardTitle>
            </CardHeader>
            <CardContent>
                <div className="space-y-6">
                    {RECENT_ACTIVITY.map((activity) => (
                        <div key={activity.id} className="flex flex-col sm:flex-row items-start sm:items-center justify-between border-b pb-4 last:border-0 last:pb-0">
                            <div className="space-y-1">
                                <p className="text-sm font-medium leading-none">
                                    {activity.requestId} - {activity.doctorName}
                                </p>
                                <p className="text-xs text-muted-foreground">
                                    Updated {activity.date}
                                </p>
                            </div>
                            <div className="mt-2 sm:mt-0">
                                <StatusBadge status={activity.status} />
                            </div>
                        </div>
                    ))}
                </div>
            </CardContent>
        </Card>
    );
};

export default ActivityFeed;
