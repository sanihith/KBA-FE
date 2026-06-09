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

export const BL_BH_REQUESTS = [
    {
        id: '9307-NUC-0408',
        customerName: 'INDIRA PALO',
        customerCode: '9307',
        division: 'NUCLEUS',
        region: 'ODISHA',
        speciality: 'GYNECOLOGIST',
        location: 'BHUBANESWAR',
        customerExpectation: 4350.00,
        monthlySalesPlanAmount: 31750.00,
        fromDate: '01/04/2026',
        toDate: '01/08/2026',
        totalMsp: 1587500.00,
        requestDate: '18/04/2026',
        dueDate: '20/04/2026',
        description: 'Books already Purchased By Me & Handedover to Dr On 17th April kindly Reumber to My Account only',
        status: 'IN PROCESS',
        typeOfService: 'Cheque',
        remarks: '',
        expectedDueDate: '',
        attachments: { 1: { name: 'document_1.pdf', size: '75.13 Kb' }, 2: { name: 'document_2.pdf', size: '82.64 Kb' }, 3: null },
        monthlySalesPlan: [
            { brandName: 'DEKSEL NEO', pts: 325.00, units: 60, amount: 19500.00, rxStatus: 'Brand loyal' },
            { brandName: 'XTRACAL MD', pts: 245.00, units: 50, amount: 12250.00, rxStatus: 'Regular' },
        ],
    },
    {
        id: 'REQ-002',
        customerName: 'METRO CLINIC',
        customerCode: '8201',
        division: 'SURGICAL',
        region: 'SOUTH',
        speciality: 'NEUROLOGY',
        location: 'LOS ANGELES',
        customerExpectation: 5000.00,
        monthlySalesPlanAmount: 25000.00,
        fromDate: '01/03/2026',
        toDate: '01/07/2026',
        totalMsp: 500000.00,
        requestDate: '10/03/2026',
        dueDate: '15/03/2026',
        description: 'Regular monthly reimbursement for surgical supplies.',
        status: 'APPROVED',
        typeOfService: 'Cheque',
        remarks: '',
        expectedDueDate: '',
        attachments: { 1: { name: 'document_1.pdf', size: '45.00 Kb' }, 2: null, 3: null },
        monthlySalesPlan: [
            { brandName: 'NEUROSURG PRO', pts: 400.00, units: 30, amount: 12000.00, rxStatus: 'Frequent' },
            { brandName: 'STERILE KIT', pts: 200.00, units: 65, amount: 13000.00, rxStatus: 'Regular' },
        ],
    },
    {
        id: 'REQ-003',
        customerName: 'GENERAL MED',
        customerCode: '7105',
        division: 'DIAGNOSTICS',
        region: 'EAST',
        speciality: 'GENERAL',
        location: 'CHICAGO',
        customerExpectation: 3000.00,
        monthlySalesPlanAmount: 18000.00,
        fromDate: '01/02/2026',
        toDate: '01/06/2026',
        totalMsp: 216000.00,
        requestDate: '05/02/2026',
        dueDate: '08/02/2026',
        description: 'General diagnostic kit reimbursement for Feb cycle.',
        status: 'REJECTED',
        typeOfService: 'Transfer',
        remarks: '',
        expectedDueDate: '',
        attachments: { 1: null, 2: null, 3: null },
        monthlySalesPlan: [
            { brandName: 'DIAG KIT A', pts: 150.00, units: 40, amount: 6000.00, rxStatus: 'Regular' },
            { brandName: 'DIAG KIT B', pts: 200.00, units: 60, amount: 12000.00, rxStatus: 'Regular' },
        ],
    },
];

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

export const SBUH_REQUESTS = [
    { id: 'SBUH-001', customerName: 'Apollo Hospital', customerCode: 'APOLO001', division: 'Pharma', customerExpectation: 75, requestDate: '2024-01-20', region: 'North', speciality: 'Cardiology', location: 'Delhi', monthlySalesPlanAmount: 60000, totalMsp: 60000, status: 'Pending', dueDate: '2024-02-05', fromDate: '', toDate: '', expectedDueDate: '', typeOfService: 'Cheque', description: '', remarks: '', attachments: { 1: null, 2: null, 3: null }, monthlySalesPlan: [] },
    { id: 'SBUH-002', customerName: 'Max Healthcare', customerCode: 'MAXHC002', division: 'Surgical', customerExpectation: 85, requestDate: '2024-01-22', region: 'East', speciality: 'Orthopedics', location: 'Kolkata', monthlySalesPlanAmount: 55000, totalMsp: 55000, status: 'Approved', dueDate: '2024-02-10', fromDate: '', toDate: '', expectedDueDate: '', typeOfService: 'Cheque', description: '', remarks: '', attachments: { 1: null, 2: null, 3: null }, monthlySalesPlan: [] },
    { id: 'SBUH-003', customerName: 'Fortis Hospital', customerCode: 'FORTI003', division: 'Diagnostics', customerExpectation: 70, requestDate: '2024-01-24', region: 'West', speciality: 'General', location: 'Mumbai', monthlySalesPlanAmount: 45000, totalMsp: 45000, status: 'Pending', dueDate: '2024-02-08', fromDate: '', toDate: '', expectedDueDate: '', typeOfService: 'Transfer', description: '', remarks: '', attachments: { 1: null, 2: null, 3: null }, monthlySalesPlan: [] },
];
