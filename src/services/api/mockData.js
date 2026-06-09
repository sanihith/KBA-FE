// Mock data for the KBA application
// This file contains all mock data that simulates backend responses
// When a real backend is added, replace these with actual API calls

export const mockRequests = [
    { 
        id: '5343-NUC-0047', 
        customerCode: '5343', 
        customerName: 'DATTAPRASAD V GIZARE', 
        region: 'KARNATAKA', 
        speciality: 'GYNECOLOGIST', 
        division: 'NUCLEUS', 
        customerExpectation: 33000, 
        msp: 30000, 
        requestDate: '28/01/2026', 
        location: 'BELAGAVI', 
        dueDate: '07/02/2026', 
        status: 'REQUESTED',
        fromDate: '01/04/2026',
        toDate: '01/04/2027',
        monthlySalesPlanAmount: 8125.00,
        totalMsp: 105625.00,
        expectedDueDate: '22/04/2026',
        typeOfService: 'Cheque',
        description: 'Customer is loyal to our brand',
        remarks: 'OK',
        monthlySalesPlan: [
            { brandName: 'DEKSEL CD', pts: 325.00, units: 25, amount: 8125.00, rxStatus: 'Brand loyal' }
        ],
        attachments: {
            1: { name: 'document_1.pdf', size: '103.94 Kb' },
            2: { name: 'document_2.pdf', size: '256.58 Kb' },
            3: null
        }
    },
    { 
        id: '37911-NUC-0048', 
        customerCode: '37911', 
        customerName: 'ROHIT KHURANA', 
        region: 'WESTERN UP', 
        speciality: 'PAEDIATRICIAN', 
        division: 'NUCLEUS', 
        customerExpectation: 20000, 
        msp: 10000, 
        requestDate: '28/01/2026', 
        location: 'MORADABAD', 
        dueDate: '31/01/2026', 
        status: 'APPROVED',
        fromDate: '01/02/2026',
        toDate: '01/03/2026',
        monthlySalesPlanAmount: 5000.00,
        totalMsp: 50000.00,
        expectedDueDate: '15/02/2026',
        typeOfService: 'Gift Card',
        description: 'Regular customer with good track record',
        remarks: 'Good',
        monthlySalesPlan: [],
        attachments: { 1: null, 2: null, 3: null }
    },
    { 
        id: '37874-NUC-0049', 
        customerCode: '37874', 
        customerName: 'NUTAN GUPTA', 
        region: 'WESTERN UP', 
        speciality: 'PAEDIATRICIAN', 
        division: 'NUCLEUS', 
        customerExpectation: 10000, 
        msp: 10000, 
        requestDate: '28/01/2026', 
        location: 'MORADABAD', 
        dueDate: '31/01/2026', 
        status: 'PROCESSED',
        fromDate: '01/02/2026',
        toDate: '01/03/2026',
        monthlySalesPlanAmount: 3000.00,
        totalMsp: 30000.00,
        expectedDueDate: '15/02/2026',
        typeOfService: 'Cheque',
        description: 'New customer opportunity',
        remarks: 'Review needed',
        monthlySalesPlan: [],
        attachments: { 1: null, 2: null, 3: null }
    },
    { 
        id: '2-NUC-0107', 
        customerCode: '2', 
        customerName: 'M K KAKOTI', 
        region: 'ASSAM', 
        speciality: 'GENERAL PRACTITIONER', 
        division: 'NUCLEUS', 
        customerExpectation: 50000, 
        msp: 45000, 
        requestDate: '05/02/2026', 
        location: 'NUC-BONGAIGAON', 
        dueDate: '25/02/2026', 
        status: 'PROCESSED BY ADMIN',
        fromDate: '01/03/2026',
        toDate: '01/03/2027',
        monthlySalesPlanAmount: 15000.00,
        totalMsp: 180000.00,
        expectedDueDate: '20/03/2026',
        typeOfService: 'Gift-Card',
        description: 'Premium customer relationship',
        remarks: 'Approved',
        monthlySalesPlan: [],
        attachments: { 1: null, 2: null, 3: null }
    },
];

export const mockVendors = [
    { 
        name: 'WESTON MEDICAL EDUCATION FOUNDATION OF INDIA', 
        alias: 'WESTON', 
        pending: 1, 
        serviceVal: 0.00, 
        balance: 1038533.00, 
        transactions: 'Available',
        email: 'contact@westonmedical.org',
        phone: '+91 9876543210',
        address: '123 Medical Street, Mumbai, Maharashtra'
    },
    { 
        name: 'APEX HEALTHCARE SERVICES', 
        alias: 'APEX', 
        pending: 3, 
        serviceVal: 15000.00, 
        balance: 2500000.00, 
        transactions: 'Available',
        email: 'info@apexhealthcare.com',
        phone: '+91 9876543211',
        address: '456 Health Avenue, Delhi'
    },
    { 
        name: 'MEDICA SOLUTIONS PVT LTD', 
        alias: 'MEDICA', 
        pending: 0, 
        serviceVal: 0.00, 
        balance: 750000.00, 
        transactions: 'Available',
        email: 'sales@medicasolutions.in',
        phone: '+91 9876543212',
        address: '789 Medical Road, Bangalore'
    },
    { 
        name: 'CAREPLUS DISTRIBUTORS', 
        alias: 'CAREPLUS', 
        pending: 2, 
        serviceVal: 25000.00, 
        balance: 1500000.00, 
        transactions: 'Pending',
        email: 'orders@careplus.in',
        phone: '+91 9876543213',
        address: '321 Care Street, Chennai'
    },
];

export const mockProducts = [
    { id: 1, division: 'MAXIMUS', brand: 'MECONEURON Inj', rate: 21.02, stock: 500, category: 'Neurology' },
    { id: 2, division: 'IMPETUS', brand: 'NEXOVIA M', rate: 44.36, stock: 300, category: 'General' },
    { id: 3, division: 'NUCLEUS', brand: 'NEXPAR', rate: 48.30, stock: 450, category: 'Pain Management' },
    { id: 4, division: 'IMPETUS', brand: 'NEXOVIA', rate: 51.00, stock: 200, category: 'General' },
    { id: 5, division: 'PROMINUS', brand: 'DEKSEL AD', rate: 54.00, stock: 150, category: 'Dermatology' },
    { id: 6, division: 'PROMINUS', brand: 'Durasoft AD', rate: 54.00, stock: 180, category: 'Dermatology' },
    { id: 7, division: 'MAXIMUS', brand: 'MECONEURON 500', rate: 57.86, stock: 400, category: 'Neurology' },
    { id: 8, division: 'STIMULUS', brand: 'EPINEXT 250/500/750/1gm', rate: 60.00, stock: 600, category: 'Anti-epileptic' },
    { id: 9, division: 'IMPETUS', brand: 'GLIFLODIA 5/10', rate: 60.00, stock: 350, category: 'Diabetes' },
    { id: 10, division: 'GLASTIMUS', brand: 'EPINEXT 250/500/750/1gm', rate: 60.00, stock: 250, category: 'Anti-epileptic' },
    { id: 11, division: 'IMPETUS', brand: 'DAPAGLIFLOZIN 10MG', rate: 63.76, stock: 280, category: 'Diabetes' },
    { id: 12, division: 'MAXIMUS', brand: 'NEXPAR LA', rate: 72.00, stock: 180, category: 'Pain Management' },
    { id: 13, division: 'STIMULUS', brand: 'LEXADEP AX', rate: 81.32, stock: 220, category: 'Anti-epileptic' },
];

export const mockAcknowledgements = [
    {
        id: '2-NUC-0107',
        requestId: '2-NUC-0107',
        customerName: 'M K KAKOTI',
        customerCode: '2',
        speciality: 'GENERAL PRACTITIONER',
        location: 'NUC-BONGAIGAON',
        region: 'ASSAM',
        division: 'NUCLEUS',
        requestDate: '05/02/2026',
        dueDate: '25/02/2026',
        value: 1.00,
        status: 'PROCESSED BY ADMIN',
        vendors: [
            {
                name: 'WESTON MEDICAL EDUCATION FOUNDATION OF INDIA',
                typeOfService: 'Gift-Card',
                value: 1,
                status: 'PROCESSED BY ADMIN',
                adminRemarks: 'n',
                vendorRemarks: ''
            }
        ]
    },
    {
        id: '5343-NUC-0047',
        requestId: '5343-NUC-0047',
        customerName: 'DATTAPRASAD V GIZARE',
        customerCode: '5343',
        speciality: 'GYNECOLOGIST',
        location: 'BELAGAVI',
        region: 'KARNATAKA',
        division: 'NUCLEUS',
        requestDate: '28/01/2026',
        dueDate: '07/02/2026',
        value: 8125.00,
        status: 'PENDING ACKNOWLEDGEMENT',
        vendors: [
            {
                name: 'APEX HEALTHCARE SERVICES',
                typeOfService: 'Cheque',
                value: 8125.00,
                status: 'PENDING',
                adminRemarks: 'Approved for processing',
                vendorRemarks: ''
            }
        ]
    },
];

export const mockVendorRequests = [
    {
        id: '2-NUC-0107',
        description: 'WESTON MEDICAL EDUCATION FOUNDATION OF INDIA',
        requestId: '2-NUC-0107',
        customerName: 'M K KAKOTI',
        fulfilledCount: 1,
        giftVouchers: 'giftcard',
        status: 'PROCESSED BY ADMIN',
        requestDate: '05/02/2026',
        dueDate: '25/02/2026',
        typeOfService: 'Gift-Card',
        value: 1,
        remarks: 'n',
        detailsOfService: '',
        mobile: '7386510581',
        email: '',
        otherDocuments: ''
    },
    {
        id: '5343-NUC-0047',
        description: 'APEX HEALTHCARE SERVICES',
        requestId: '5343-NUC-0047',
        customerName: 'DATTAPRASAD V GIZARE',
        fulfilledCount: 0,
        giftVouchers: '',
        status: 'PENDING',
        requestDate: '28/01/2026',
        dueDate: '07/02/2026',
        typeOfService: 'Cheque',
        value: 8125.00,
        remarks: 'OK',
        detailsOfService: '',
        mobile: '9876543210',
        email: 'dattaprasad@email.com',
        otherDocuments: ''
    },
];

export const mockCancellationRequests = [
    {
        id: '2-NUC-0107',
        description: 'M K KAKOTI',
        division: 'NUCLEUS',
        location: 'NUC-BONGAIGAON',
        region: 'ASSAM',
        customerCode: '2',
        status: 'CANCELLATION INITIATED',
        serviceAmount: 1.0,
        remarks: '',
        requestId: '2-NUC-0107',
        requestDate: '05/02/2026',
        dueDate: '25/02/2026',
        speciality: 'GENERAL PRACTITIONER'
    },
];

// Simulate network delay
export const delay = (ms = 300) => new Promise(resolve => setTimeout(resolve, ms));