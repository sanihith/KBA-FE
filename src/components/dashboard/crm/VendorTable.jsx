import React, { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import AdvancedSearchBar from '../AdvancedSearchBar';
import { ArrowUpDown } from "lucide-react";
import VendorProfilePage from './VendorProfilePage';
import { vendorsApi } from '@/services/api';

const VendorTable = () => {
    const [searchParams, setSearchParams] = useSearchParams();
    const vendorParam = searchParams.get('vendor');
    const [vendors, setVendors] = useState([]);
    const [loading, setLoading] = useState(true);

    // Load vendors from API
    useEffect(() => {
        loadVendors();
    }, []);

    const loadVendors = async () => {
        try {
            setLoading(true);
            const { data, success } = await vendorsApi.getAll();
            if (success) {
                setVendors(data);
            }
        } catch (error) {
            console.error('Failed to load vendors:', error);
        } finally {
            setLoading(false);
        }
    };

    const selectedVendor = React.useMemo(() => {
        if (!vendorParam) return null;
        if (vendorParam === 'new') {
            return { name: '', alias: '', pending: 0, balance: 0.00, serviceVal: 0.00, isNew: true };
        }
        return vendors.find(v => v.name === vendorParam) || null;
    }, [vendorParam, vendors]);

    const setSelectedVendor = (vendor) => {
        setSearchParams((prev) => {
            const next = new URLSearchParams(prev);
            if (vendor) {
                next.set('vendor', vendor.isNew ? 'new' : vendor.name);
            } else {
                next.delete('vendor');
            }
            return next;
        });
    };

    if (selectedVendor) {
        return <VendorProfilePage vendor={selectedVendor} onBack={() => setSelectedVendor(null)} />;
    }

    return (
        <div className="space-y-6">
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
                <AdvancedSearchBar />
                <button
                    className="bg-[#714b67] hover:bg-[#5a3c52] text-white uppercase font-bold text-[11px] px-6 h-8 rounded-sm shadow-sm transition-all active:scale-95"
                    onClick={() => setSelectedVendor({ name: '', alias: '', pending: 0, balance: 0.00, serviceVal: 0.00, isNew: true })}
                >
                    New
                </button>
            </div>

            <div className="border rounded-md overflow-hidden bg-card shadow-sm border-gray-100">
                <div className="overflow-x-auto">
                    <table className="w-full text-sm text-left">
                        <thead className="bg-[#f8f9fa] text-gray-600 uppercase text-[11px] font-bold tracking-wider">
                            <tr className="border-b border-gray-100">
                                <th className="px-6 py-4">Vendor Name</th>
                                <th className="px-6 py-4">Alias Name</th>
                                <th className="px-6 py-4 text-right">Pending Services</th>
                                <th className="px-6 py-4 text-right">Service Value Pending</th>
                                <th className="px-6 py-4 text-right">Balance</th>
                                <th className="px-6 py-4">Transactions</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-gray-50">
                            {loading ? (
                                <tr>
                                    <td colSpan={6} className="px-6 py-8 text-center text-muted-foreground">
                                        Loading vendors...
                                    </td>
                                </tr>
                            ) : vendors.length === 0 ? (
                                <tr>
                                    <td colSpan={6} className="px-6 py-8 text-center text-muted-foreground">
                                        No vendors found
                                    </td>
                                </tr>
                            ) : (
                                vendors.map((row, idx) => (
                                    <tr
                                        key={idx}
                                        className="hover:bg-gray-50/80 transition-colors cursor-pointer group"
                                        onClick={() => setSelectedVendor(row)}
                                    >
                                        <td className="px-6 py-4 font-semibold text-teal-600 group-hover:text-teal-700 underline-offset-4 decoration-teal-600/30">
                                            {row.name}
                                        </td>
                                        <td className="px-6 py-4 text-gray-600 uppercase">{row.alias}</td>
                                        <td className="px-6 py-4 text-right text-gray-600">{row.pending}</td>
                                        <td className="px-6 py-4 text-right text-gray-600 font-mono">{row.serviceVal?.toLocaleString('en-IN', { minimumFractionDigits: 2 })}</td>
                                        <td className="px-6 py-4 text-right text-gray-800 font-bold font-mono">{row.balance?.toLocaleString('en-IN', { minimumFractionDigits: 2 })}</td>
                                        <td className="px-6 py-4 text-gray-600 italic text-xs">{row.transactions}</td>
                                    </tr>
                                ))
                            )}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default VendorTable;