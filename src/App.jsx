
import { useState } from 'react';
import Sidebar from './components/Sidebar';
import Header from './components/Header';
import Dashboard from './components/Dashboard';

export default function App() {
  const [activeItem, setActiveItem] = useState('dashboard');

  return (
    <div className="dashboard-container">
      <Sidebar activeItem={activeItem} setActiveItem={setActiveItem} />
      <div className="main-content">
        <Header />
        {activeItem === 'dashboard' && <Dashboard />}
        {activeItem === 'analytics' && (
          <div className="content">
            <div className="page-header">
              <h1 className="page-title">Analytics</h1>
              <p className="page-subtitle">Deep dive into your data</p>
            </div>
            <div className="chart-card" style={{ maxWidth: '800px' }}>
              <div className="chart-placeholder" style={{ height: '400px' }}>
                📊 Analytics Dashboard Coming Soon
              </div>
            </div>
          </div>
        )}
        {activeItem === 'messages' && (
          <div className="content">
            <div className="page-header">
              <h1 className="page-title">Messages</h1>
              <p className="page-subtitle">Your communication hub</p>
            </div>
            <div className="chart-card" style={{ maxWidth: '800px' }}>
              <div className="chart-placeholder" style={{ height: '400px' }}>
                💬 Messages Coming Soon
              </div>
            </div>
          </div>
        )}
        {activeItem === 'reports' && (
          <div className="content">
            <div className="page-header">
              <h1 className="page-title">Reports</h1>
              <p className="page-subtitle">Generate and view reports</p>
            </div>
            <div className="chart-card" style={{ maxWidth: '800px' }}>
              <div className="chart-placeholder" style={{ height: '400px' }}>
                📈 Reports Coming Soon
              </div>
            </div>
          </div>
        )}
        {activeItem === 'settings' && (
          <div className="content">
            <div className="page-header">
              <h1 className="page-title">Settings</h1>
              <p className="page-subtitle">Manage your preferences</p>
            </div>
            <div className="chart-card" style={{ maxWidth: '800px' }}>
              <div className="chart-placeholder" style={{ height: '400px' }}>
                ⚙️ Settings Coming Soon
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
