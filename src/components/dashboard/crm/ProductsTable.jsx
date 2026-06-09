import React, { useState, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { MoreHorizontal, Settings, ChevronLeft, ChevronRight, Trash2 } from "lucide-react";
import ProductDetailsPage from './ProductDetailsPage';
import { productsApi } from '@/services/api';

const ProductsTable = () => {
    const [products, setProducts] = useState([]);
    const [selectedProduct, setSelectedProduct] = useState(null);
    const [isCreatingNew, setIsCreatingNew] = useState(false);
    const [selectedRows, setSelectedRows] = useState([]);
    const [loading, setLoading] = useState(true);

    // Load products from API
    useEffect(() => {
        loadProducts();
    }, []);

    const loadProducts = async () => {
        try {
            setLoading(true);
            const { data, success } = await productsApi.getAll();
            if (success) {
                setProducts(data);
            }
        } catch (error) {
            console.error('Failed to load products:', error);
        } finally {
            setLoading(false);
        }
    };

    // Navigation back to listing
    const handleBack = () => {
        setSelectedProduct(null);
        setIsCreatingNew(false);
    };

    const handleDelete = async (id) => {
        try {
            const { success } = await productsApi.delete(id);
            if (success) {
                setProducts(prev => prev.filter(p => p.id !== id));
                setSelectedRows(prev => prev.filter(rowId => rowId !== id));
            }
        } catch (error) {
            console.error('Failed to delete product:', error);
        }
    };

    const toggleRowSelect = (id) => {
        setSelectedRows(prev =>
            prev.includes(id) ? prev.filter(rowId => rowId !== id) : [...prev, id]
        );
    };

    const toggleAllSelect = () => {
        if (selectedRows.length === products.length) {
            setSelectedRows([]);
        } else {
            setSelectedRows(products.map(p => p.id));
        }
    };

    // If detail view or new form is active
    if (selectedProduct || isCreatingNew) {
        return (
            <ProductDetailsPage
                product={selectedProduct}
                onBack={handleBack}
            />
        );
    }

    return (
        <div className="space-y-4">
            {/* Toolbar */}
            <div className="flex items-center justify-between gap-4 py-2 px-1">
                <div className="flex items-center gap-3">
                    <Button
                        onClick={() => setIsCreatingNew(true)}
                        className="bg-[#714b67] hover:bg-[#5a3c52] text-white text-[11px] font-bold h-7 px-4 rounded-sm shadow-sm uppercase tracking-tight"
                    >
                        New
                    </Button>
                    <div className="flex items-center gap-1">
                        <span className="text-gray-600 text-sm font-medium">Products</span>
                        <Settings className="h-3 w-3 text-gray-400 cursor-pointer hover:text-gray-600" />
                    </div>
                </div>

                <div className="flex items-center gap-4 text-[11px] text-gray-500 font-medium">
                    <span>{`1-${products.length} / ${products.length}`}</span>
                    <div className="flex items-center border border-gray-200 rounded-sm bg-white overflow-hidden shadow-sm">
                        <Button variant="ghost" size="icon" className="h-6 w-7 rounded-none border-r hover:bg-gray-50">
                            <ChevronLeft className="h-3 w-3" />
                        </Button>
                        <Button variant="ghost" size="icon" className="h-6 w-7 rounded-none hover:bg-gray-50">
                            <ChevronRight className="h-3 w-3" />
                        </Button>
                    </div>
                </div>
            </div>

            {/* Table Listing */}
            <div className="border rounded-md overflow-hidden bg-card border-gray-200 shadow-sm">
                <div className="overflow-x-auto">
                    <table className="w-full text-sm text-left border-collapse">
                        <thead className="bg-[#f8f9fa] text-gray-600 uppercase text-[11px] font-bold">
                            <tr className="border-b border-gray-200">
                                <th className="px-4 py-3 w-8">
                                    <input
                                        type="checkbox"
                                        className="rounded-sm border-gray-300 text-[#714b67] focus:ring-[#714b67]"
                                        checked={products.length > 0 && selectedRows.length === products.length}
                                        onChange={toggleAllSelect}
                                    />
                                </th>
                                <th className="px-4 py-3 tracking-wider">Division</th>
                                <th className="px-4 py-3 tracking-wider">Brand Name</th>
                                <th className="px-4 py-3 text-right pr-8 tracking-wider">Rate</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-gray-100">
                            {loading ? (
                                <tr>
                                    <td colSpan={4} className="px-4 py-8 text-center text-muted-foreground">
                                        Loading products...
                                    </td>
                                </tr>
                            ) : products.length === 0 ? (
                                <tr>
                                    <td colSpan={4} className="px-4 py-8 text-center text-muted-foreground">
                                        No products found
                                    </td>
                                </tr>
                            ) : (
                                products.map((product) => (
                                    <tr
                                        key={product.id}
                                        className="hover:bg-gray-50 transition-colors cursor-pointer group"
                                        onClick={() => setSelectedProduct(product)}
                                    >
                                        <td className="px-4 py-3" onClick={(e) => e.stopPropagation()}>
                                            <input
                                                type="checkbox"
                                                className="rounded-sm border-gray-300 text-[#714b67] focus:ring-[#714b67]"
                                                checked={selectedRows.includes(product.id)}
                                                onChange={() => toggleRowSelect(product.id)}
                                            />
                                        </td>
                                        <td className="px-4 py-3">
                                            <span className="text-gray-800 font-medium text-[13px] uppercase">{product.division}</span>
                                        </td>
                                        <td className="px-4 py-3">
                                            <span className="text-[#00a19a] font-semibold text-[13px] hover:underline uppercase">{product.brand}</span>
                                        </td>
                                        <td className="px-4 py-3 text-right pr-8 relative">
                                            <span className="font-medium text-gray-800 text-[13px] pr-8">{product.rate?.toFixed(2)}</span>
                                            <div
                                                className="absolute right-4 top-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity"
                                                onClick={(e) => e.stopPropagation()}
                                            >
                                                <Button
                                                    variant="ghost"
                                                    size="icon"
                                                    className="h-7 w-7 text-gray-400 hover:text-destructive hover:bg-destructive/10"
                                                    onClick={() => handleDelete(product.id)}
                                                >
                                                    <Trash2 className="h-3.5 w-3.5" />
                                                </Button>
                                            </div>
                                        </td>
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

export default ProductsTable;