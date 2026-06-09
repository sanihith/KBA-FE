import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import LandingPage from '@/pages/LandingPage';
import Dashboard from '@/pages/Dashboard';
import SBUHDashboard from '@/pages/SBUHDashboard';
import BlBhDashboard from '@/pages/BlBhDashboard';
import CrmAdminDashboard from '@/pages/CrmAdminDashboard';
import FinanceDashboard from '@/pages/FinanceDashboard';
import VendorDashboard from '@/pages/VendorDashboard';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/sbuh-dashboard" element={<SBUHDashboard />} />
        <Route path="/bl-bh-dashboard" element={<BlBhDashboard />} />
        <Route path="/crm-admin-dashboard" element={<CrmAdminDashboard />} />
        <Route path="/finance-dashboard" element={<FinanceDashboard />} />
        <Route path="/vendor-dashboard" element={<VendorDashboard />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
