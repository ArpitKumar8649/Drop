
import { BarChart3, Grid, Settings, LogOut, MessageSquare, AreaChart } from 'lucide-react';

export default function Sidebar({ activeItem, setActiveItem }) {
  const menuItems = [
    { id: 'dashboard', label: 'Dashboard', icon: Grid },
    { id: 'analytics', label: 'Analytics', icon: AreaChart },
    { id: 'messages', label: 'Messages', icon: MessageSquare },
    { id: 'reports', label: 'Reports', icon: BarChart3 },
  ];

  const bottomItems = [
    { id: 'settings', label: 'Settings', icon: Settings },
    { id: 'logout', label: 'Logout', icon: LogOut },
  ];

  return (
    <div className="sidebar">
      <div className="logo">
        📊 DashHub
      </div>

      <div className="nav-section">
        <div className="nav-title">Menu</div>
        <div className="nav-items">
          {menuItems.map((item) => (
            <div
              key={item.id}
              className={`nav-item ${activeItem === item.id ? 'active' : ''}`}
              onClick={() => setActiveItem(item.id)}
            >
              <item.icon size={20} />
              <span>{item.label}</span>
            </div>
          ))}
        </div>
      </div>

      <div className="nav-section" style={{ marginTop: 'auto', paddingTop: '30px', borderTop: '1px solid rgba(255, 255, 255, 0.1)' }}>
        <div className="nav-items">
          {bottomItems.map((item) => (
            <div
              key={item.id}
              className={`nav-item ${activeItem === item.id ? 'active' : ''}`}
              onClick={() => setActiveItem(item.id)}
            >
              <item.icon size={20} />
              <span>{item.label}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
