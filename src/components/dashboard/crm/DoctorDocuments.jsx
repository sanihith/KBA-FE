import React from 'react';
import AdvancedSearchBar from '../AdvancedSearchBar';

const DoctorDocuments = () => {
    return (
        <div className="space-y-6">
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
                <AdvancedSearchBar />
            </div>

            <div className="border rounded-md overflow-hidden bg-card">
                <div className="overflow-x-auto">
                    <table className="w-full text-sm text-left">
                        <thead className="bg-muted text-muted-foreground uppercase text-xs font-medium">
                            <tr>
                                <th className="px-4 py-3 min-w-[30px]"></th>
                                <th className="px-4 py-3">Pan card</th>
                                <th className="px-4 py-3">territory</th>
                                <th className="px-4 py-3">Aadhar card</th>
                                <th className="px-4 py-3">Mobile</th>
                                <th className="px-4 py-3">Email</th>
                                <th className="px-4 py-3">Blank cheque</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-border">
                            {/* Empty state as per screenshot */}
                        </tbody>
                    </table>
                </div>
                {/* Empty state visualization */}
                <div className="flex flex-col items-center justify-center py-20 text-center space-y-4">
                    <div className="w-16 h-16 bg-muted rounded-full flex items-center justify-center">
                        <span className="text-4xl shadow-sm">📄</span>
                    </div>
                    <h3 className="text-lg font-bold">This is your new action.</h3>
                    <p className="text-muted-foreground max-w-md text-sm">
                        By default, it contains a list and a form view and possibly other view types depending on the options you chose for your model.
                    </p>
                    <p className="text-muted-foreground max-w-md text-sm">
                        You can start customizing these screens by clicking on the Studio icon on the top right corner (you can also customize this help message there).
                    </p>
                </div>
            </div>
        </div>
    );
};

export default DoctorDocuments;
