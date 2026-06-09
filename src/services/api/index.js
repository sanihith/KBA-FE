// API Service Layer for KBA Application
// This service provides functions to interact with data
// Replace the mock implementations with actual API calls when backend is added

import {
    mockRequests,
    mockVendors,
    mockProducts,
    mockAcknowledgements,
    mockVendorRequests,
    mockCancellationRequests,
    delay
} from './mockData';

// In-memory store that can be modified (simulates database)
let requestsStore = [...mockRequests];
let vendorsStore = [...mockVendors];
let productsStore = [...mockProducts];
let acknowledgementsStore = [...mockAcknowledgements];
let vendorRequestsStore = [...mockVendorRequests];
let cancellationRequestsStore = [...mockCancellationRequests];

// ============================================
// CRM Requests API
// ============================================

export const crmApi = {
    // Get all requests
    async getAll() {
        await delay();
        return { data: requestsStore, success: true };
    },

    // Get request by ID
    async getById(id) {
        await delay();
        const request = requestsStore.find(r => r.id === id);
        if (!request) {
            return { error: 'Request not found', success: false };
        }
        return { data: request, success: true };
    },

    // Create new request
    async create(data) {
        await delay();
        const newRequest = {
            ...data,
            id: `${data.customerCode || 'NEW'}-NUC-${String(requestsStore.length + 1).padStart(4, '0')}`,
            requestDate: new Date().toLocaleDateString('en-GB'),
            status: 'REQUESTED'
        };
        requestsStore.unshift(newRequest);
        return { data: newRequest, success: true };
    },

    // Update request
    async update(id, data) {
        await delay();
        const index = requestsStore.findIndex(r => r.id === id);
        if (index === -1) {
            return { error: 'Request not found', success: false };
        }
        requestsStore[index] = { ...requestsStore[index], ...data };
        return { data: requestsStore[index], success: true };
    },

    // Delete request
    async delete(id) {
        await delay();
        const index = requestsStore.findIndex(r => r.id === id);
        if (index === -1) {
            return { error: 'Request not found', success: false };
        }
        requestsStore.splice(index, 1);
        return { success: true };
    },

    // Search requests
    async search(query) {
        await delay();
        const results = requestsStore.filter(r => 
            r.customerName.toLowerCase().includes(query.toLowerCase()) ||
            r.id.toLowerCase().includes(query.toLowerCase()) ||
            r.location.toLowerCase().includes(query.toLowerCase())
        );
        return { data: results, success: true };
    }
};

// ============================================
// Vendors API
// ============================================

export const vendorsApi = {
    // Get all vendors
    async getAll() {
        await delay();
        return { data: vendorsStore, success: true };
    },

    // Get vendor by name
    async getByName(name) {
        await delay();
        const vendor = vendorsStore.find(v => v.name === name);
        if (!vendor) {
            return { error: 'Vendor not found', success: false };
        }
        return { data: vendor, success: true };
    },

    // Create new vendor
    async create(data) {
        await delay();
        const newVendor = {
            ...data,
            pending: 0,
            serviceVal: 0.00,
            balance: 0.00,
            transactions: 'Available'
        };
        vendorsStore.push(newVendor);
        return { data: newVendor, success: true };
    },

    // Update vendor
    async update(name, data) {
        await delay();
        const index = vendorsStore.findIndex(v => v.name === name);
        if (index === -1) {
            return { error: 'Vendor not found', success: false };
        }
        vendorsStore[index] = { ...vendorsStore[index], ...data };
        return { data: vendorsStore[index], success: true };
    },

    // Delete vendor
    async delete(name) {
        await delay();
        const index = vendorsStore.findIndex(v => v.name === name);
        if (index === -1) {
            return { error: 'Vendor not found', success: false };
        }
        vendorsStore.splice(index, 1);
        return { success: true };
    }
};

// ============================================
// Products API
// ============================================

export const productsApi = {
    // Get all products
    async getAll() {
        await delay();
        return { data: productsStore, success: true };
    },

    // Get product by ID
    async getById(id) {
        await delay();
        const product = productsStore.find(p => p.id === id);
        if (!product) {
            return { error: 'Product not found', success: false };
        }
        return { data: product, success: true };
    },

    // Create new product
    async create(data) {
        await delay();
        const newProduct = {
            ...data,
            id: Math.max(...productsStore.map(p => p.id)) + 1
        };
        productsStore.push(newProduct);
        return { data: newProduct, success: true };
    },

    // Update product
    async update(id, data) {
        await delay();
        const index = productsStore.findIndex(p => p.id === id);
        if (index === -1) {
            return { error: 'Product not found', success: false };
        }
        productsStore[index] = { ...productsStore[index], ...data };
        return { data: productsStore[index], success: true };
    },

    // Delete product
    async delete(id) {
        await delay();
        const index = productsStore.findIndex(p => p.id === id);
        if (index === -1) {
            return { error: 'Product not found', success: false };
        }
        productsStore.splice(index, 1);
        return { success: true };
    }
};

// ============================================
// Acknowledgements API
// ============================================

export const acknowledgementsApi = {
    // Get all acknowledgements
    async getAll() {
        await delay();
        return { data: acknowledgementsStore, success: true };
    },

    // Get acknowledgement by ID
    async getById(id) {
        await delay();
        const ack = acknowledgementsStore.find(a => a.id === id);
        if (!ack) {
            return { error: 'Acknowledgement not found', success: false };
        }
        return { data: ack, success: true };
    },

    // Update acknowledgement status
    async updateStatus(id, status) {
        await delay();
        const index = acknowledgementsStore.findIndex(a => a.id === id);
        if (index === -1) {
            return { error: 'Acknowledgement not found', success: false };
        }
        acknowledgementsStore[index] = { ...acknowledgementsStore[index], status };
        return { data: acknowledgementsStore[index], success: true };
    }
};

// ============================================
// Vendor Requests API
// ============================================

export const vendorRequestsApi = {
    // Get all vendor requests
    async getAll() {
        await delay();
        return { data: vendorRequestsStore, success: true };
    },

    // Get vendor request by ID
    async getById(id) {
        await delay();
        const vr = vendorRequestsStore.find(v => v.id === id);
        if (!vr) {
            return { error: 'Vendor request not found', success: false };
        }
        return { data: vr, success: true };
    },

    // Update vendor request status
    async updateStatus(id, status) {
        await delay();
        const index = vendorRequestsStore.findIndex(v => v.id === id);
        if (index === -1) {
            return { error: 'Vendor request not found', success: false };
        }
        vendorRequestsStore[index] = { ...vendorRequestsStore[index], status };
        return { data: vendorRequestsStore[index], success: true };
    }
};

// ============================================
// Cancellation Requests API
// ============================================

export const cancellationApi = {
    // Get all cancellation requests
    async getAll() {
        await delay();
        return { data: cancellationRequestsStore, success: true };
    },

    // Get cancellation request by ID
    async getById(id) {
        await delay();
        const cr = cancellationRequestsStore.find(c => c.id === id);
        if (!cr) {
            return { error: 'Cancellation request not found', success: false };
        }
        return { data: cr, success: true };
    },

    // Create cancellation request
    async create(data) {
        await delay();
        const newCr = {
            ...data,
            id: `CANC-${Date.now()}`,
            status: 'CANCELLATION INITIATED'
        };
        cancellationRequestsStore.push(newCr);
        return { data: newCr, success: true };
    },

    // Update cancellation request status
    async updateStatus(id, status) {
        await delay();
        const index = cancellationRequestsStore.findIndex(c => c.id === id);
        if (index === -1) {
            return { error: 'Cancellation request not found', success: false };
        }
        cancellationRequestsStore[index] = { ...cancellationRequestsStore[index], status };
        return { data: cancellationRequestsStore[index], success: true };
    }
};

// ============================================
// Export all APIs
// ============================================

export const api = {
    requests: crmApi,
    vendors: vendorsApi,
    products: productsApi,
    acknowledgements: acknowledgementsApi,
    vendorRequests: vendorRequestsApi,
    cancellation: cancellationApi
};

export default api;