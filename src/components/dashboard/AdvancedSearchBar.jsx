import React, { useState, useRef, useEffect } from 'react';
import { Search, ChevronDown } from 'lucide-react';
import { Button } from "@/components/ui/button";

const SEARCH_FIELDS = [
    { id: 'request_id', label: 'Request ID' },
    { id: 'doctor_code', label: 'Doctor Code' },
    { id: 'division', label: 'Division' },
    { id: 'customer_name', label: 'Customer Name' },
    { id: 'region', label: 'Region' },
    { id: 'monthly_sales_plan', label: 'Monthly Sales Plan' },
    { id: 'speciality', label: 'Speciality' },
    { id: 'territory', label: 'Territory' },
    { id: 'status', label: 'Status' }
];

const AdvancedSearchBar = ({ onSearch }) => {
    const [query, setQuery] = useState('');
    const [isOpen, setIsOpen] = useState(false);
    const containerRef = useRef(null);

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (containerRef.current && !containerRef.current.contains(event.target)) {
                setIsOpen(false);
            }
        };

        document.addEventListener('mousedown', handleClickOutside);
        return () => document.removeEventListener('mousedown', handleClickOutside);
    }, []);

    const handleInputChange = (e) => {
        setQuery(e.target.value);
        if (e.target.value) {
            setIsOpen(true);
        } else {
            setIsOpen(false);
        }
    };

    const handleSelectField = (field) => {
        if (onSearch) {
            onSearch({ field: field.id, value: query });
        }
        setIsOpen(false);
        // Optionally clear query or keep it
    };

    return (
        <div className="relative w-full max-w-2xl" ref={containerRef}>
            <div className="relative">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                <input
                    type="text"
                    value={query}
                    onChange={handleInputChange}
                    placeholder="Search..."
                    className="w-full h-10 pl-10 pr-4 rounded-md border border-input bg-background text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                />
            </div>

            {isOpen && query && (
                <div className="absolute top-full left-0 mt-1 w-full bg-popover text-popover-foreground rounded-md border shadow-md z-50 py-1">
                    {SEARCH_FIELDS.map((field) => (
                        <button
                            key={field.id}
                            onClick={() => handleSelectField(field)}
                            className="w-full text-left px-4 py-2 text-sm hover:bg-accent hover:text-accent-foreground flex items-center gap-2"
                        >Doctor 
                            <span className="text-muted-foreground">Search {field.label} for:</span>
                            <span className="font-medium text-foreground">{query}</span>
                        </button>
                    ))}
                    <div className="border-t my-1" />
                    <button
                        onClick={() => handleSelectField({ id: 'all', label: 'All' })}
                        className="w-full text-left px-4 py-2 text-sm hover:bg-accent hover:text-accent-foreground text-primary"
                    >
                        Add Custom Filter
                    </button>
                </div>
            )}
        </div>
    );
};

export default AdvancedSearchBar;
