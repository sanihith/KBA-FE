import React from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { USERS } from "@/lib/mockData";

const HeroSection = ({ currentUser, onRoleChange }) => {
    return (
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-8">
            <div>
                <h1 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-gray-100">
                    CRM Module - Customer Request Management
                </h1>
                <p className="text-muted-foreground mt-1">
                    Streamline special customer requests with efficient budget management and approval workflows
                </p>
            </div>

            <div className="flex items-center gap-4 bg-white dark:bg-gray-800 p-2 rounded-lg shadow-sm border">
                <div className="hidden md:block text-right mr-2">
                    <p className="text-sm font-medium leading-none">{currentUser.name}</p>
                    <p className="text-xs text-muted-foreground">{currentUser.role}</p>
                </div>
                <Avatar className="h-10 w-10 border-2 border-primary/10">
                    <AvatarImage src={currentUser.avatar} alt={currentUser.name} />
                    <AvatarFallback>{currentUser.name.charAt(0)}</AvatarFallback>
                </Avatar>

                <div className="border-l pl-4 ml-2">
                    <label className="text-xs text-muted-foreground block mb-1">View as Role:</label>
                    <Select onValueChange={onRoleChange} defaultValue={currentUser.id}>
                        <SelectTrigger className="w-[180px] h-8">
                            <SelectValue placeholder="Select Role" />
                        </SelectTrigger>
                        <SelectContent>
                            {USERS.map(user => (
                                <SelectItem key={user.id} value={user.id}>
                                    {user.role}
                                </SelectItem>
                            ))}
                        </SelectContent>
                    </Select>
                </div>
            </div>
        </div>
    );
};

export default HeroSection;
