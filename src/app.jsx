import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { SensorsDataProvider } from './context/SensorsData';

// Components
import Sidebar from "./components/common/Sidebar";

// Pages
import HomePage from "./pages/HomePage";
import RealTimePage from "./pages/RealTimePage";
import HistoricalPage from "./pages/HistoricalPage";
import UsersPage from "./pages/UsersPage";
import DashboardPage from "./pages/DashboardPage";
import SettingsPage from "./pages/SettingsPage";

function App() {
  return (
    <SensorsDataProvider>
      <div className='flex h-screen bg-gray-900 text-gray-100 overflow-hidden'>
        <div className='fixed inset-0 z-0'>
          <div className='absolute inset-0 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 opacity-80' />
          <div className='absolute inset-0 backdrop-blur-sm' />
        </div>

        <Sidebar />
        <Routes>
          <Route path={`/`} element={<HomePage />} />
          <Route path={`/realtime`} element={<RealTimePage />} />
          <Route path={`/historical`} element={<HistoricalPage />} />
          <Route path={`/users`} element={<UsersPage />} />
          <Route path={`/dashboard`} element={<DashboardPage />} />
          <Route path={`/settings`} element={<SettingsPage />} />
        </Routes>
      </div>
    </SensorsDataProvider>
  );
}

export default App;