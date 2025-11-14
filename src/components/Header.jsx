
import { Bell, Search } from 'lucide-react';

export default function Header() {
  return (
    <div className="header">
      <div className="header-left">
        <div style={{ display: 'flex', alignItems: 'center', gap: '10px', color: '#888' }}>
          <Search size={18} />
          <input
            type="text"
            className="search-box"
            placeholder="Search dashboards, reports..."
          />
        </div>
      </div>

      <div className="header-right">
        <div className="notification-icon">
          <Bell size={24} />
          <div className="notification-dot"></div>
        </div>

        <div className="user-profile">
          <div className="avatar">AP</div>
          <div className="user-info">
            <div className="user-name">Arpit Kumar</div>
            <div className="user-role">Admin</div>
          </div>
        </div>
      </div>
    </div>
  );
}
