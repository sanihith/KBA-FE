export const USERS = [
    { id: 'u1', name: 'Alex Johnson', role: 'CRM Admin', avatar: 'https://ui.shadcn.com/avatars/01.png' },
    { id: 'u2', name: 'Sarah Williams', role: 'Finance Manager', avatar: 'https://ui.shadcn.com/avatars/02.png' },
    { id: 'u3', name: 'Michael Brown', role: 'Business Lead (BL)', avatar: 'https://ui.shadcn.com/avatars/03.png' },
    { id: 'u4', name: 'Emily Davis', role: 'Business Head (BH)', avatar: 'https://ui.shadcn.com/avatars/04.png' },
    { id: 'u5', name: 'David Wilson', role: 'SBU Head (SBUH)', avatar: 'https://ui.shadcn.com/avatars/05.png' },
    { id: 'u6', name: 'Vendor Corp Inc.', role: 'Vendor', avatar: 'https://ui.shadcn.com/avatars/06.png' },
];

export const REQUEST_STATUS = {
    REQUESTED: 'Requested',
    ENROLLED: 'Enrolled',
    APPROVED: 'Approved',
    PROCESSED: 'Processed',
    FULFILLED: 'Fulfilled',
    CONFIRMED: 'Confirmed',
    CANCELLED: 'Cancelled',
    REJECTED: 'Rejected',
};

export const RECENT_ACTIVITY = [
    { id: 'a1', requestId: 'KMAX1024', doctorName: 'Dr. Smith (Cardiology)', status: 'Requested', date: '2 mins ago', type: 'request' },
    { id: 'a2', requestId: 'KMAX1023', doctorName: 'Dr. Jones (Neurology)', status: 'Approved', date: '1 hour ago', type: 'approval' },
    { id: 'a3', requestId: 'KMAX1022', doctorName: 'Dr. Patel (Ortho)', status: 'Fulfilled', date: '3 hours ago', type: 'fulfillment' },
    { id: 'a4', requestId: 'KMAX1021', doctorName: 'Dr. Lee (Pediatrics)', status: 'Rejected', date: 'Yesterday', type: 'rejection' },
    { id: 'a5', requestId: 'KMAX1020', doctorName: 'Dr. Kim (Dermatology)', status: 'Enrolled', date: 'Yesterday', type: 'enrollment' },
    { id: 'a6', requestId: 'KMAX1019', doctorName: 'Dr. Garcia (General)', status: 'Confirmed', date: '2 days ago', type: 'confirmation' },
];

export const BUDGET_DATA = [
    { division: 'North Div', allocated: 5000000, utilized: 3200000, percentage: 64 },
    { division: 'South Div', allocated: 4500000, utilized: 1200000, percentage: 26 },
    { division: 'East Div', allocated: 3000000, utilized: 2800000, percentage: 93 },
    { division: 'West Div', allocated: 4000000, utilized: 1500000, percentage: 37 },
];

export const VENDOR_STATS = {
    pendingServices: 12,
    fulfilledThisMonth: 45,
    balance: 1250000,
    pendingValue: 340000,
};

export const FINANCE_STATS = {
    totalBudget: 25000000,
    budgetUtilized: 14500000,
    budgetUtilizedPercentage: 58,
    pendingCancellations: 5,
    activeVendors: 24,
};

export const ADMIN_STATS = {
    pendingApprovals: 8,
    totalRequestsQuarter: 142,
    availableBudget: 4500000,
    fulfilledServicesMonth: 67,
};

export const BL_STATS = {
    submittedRequests: 15,
    fulfilledRequests: 8,
    pendingConfirmations: 3,
};
