
import { Users, ShoppingCart, TrendingUp, DollarSign, Activity, Clock } from 'lucide-react';
import StatCard from './StatCard';

export default function Dashboard() {
  const stats = [
    { icon: DollarSign, title: 'Total Revenue', value: '$48,250', trend: 'up', trendValue: '+12.5%' },
    { icon: ShoppingCart, title: 'Total Orders', value: '1,482', trend: 'up', trendValue: '+8.2%' },
    { icon: Users, title: 'Active Users', value: '3,642', trend: 'down', trendValue: '-2.1%' },
    { icon: TrendingUp, title: 'Conversion Rate', value: '4.8%', trend: 'up', trendValue: '+3.5%' },
  ];

  const transactions = [
    { id: 1, description: 'Premium Subscription', amount: '$99.00', status: 'success', date: 'Nov 14, 2025' },
    { id: 2, description: 'Pro Plan Upgrade', amount: '$49.00', status: 'success', date: 'Nov 13, 2025' },
    { id: 3, description: 'Payment Failed', amount: '$129.00', status: 'failed', date: 'Nov 12, 2025' },
    { id: 4, description: 'Annual License', amount: '$299.00', status: 'pending', date: 'Nov 11, 2025' },
    { id: 5, description: 'Refund Processed', amount: '-$50.00', status: 'success', date: 'Nov 10, 2025' },
  ];

  return (
    <div className="content">
      <div className="page-header">
        <h1 className="page-title">Dashboard</h1>
        <p className="page-subtitle">Welcome back! Here's your business overview.</p>
      </div>

      {/* Stats Grid */}
      <div className="stats-grid">
        {stats.map((stat, index) => (
          <StatCard
            key={index}
            icon={stat.icon}
            title={stat.title}
            value={stat.value}
            trend={stat.trend}
            trendValue={stat.trendValue}
          />
        ))}
      </div>

      {/* Charts */}
      <div className="charts-grid">
        <div className="chart-card">
          <div className="chart-header">
            <h3 className="chart-title">Revenue Overview</h3>
            <p className="chart-description">Monthly revenue trend</p>
          </div>
          <div className="chart-placeholder">
            <svg width="100%" height="100%" viewBox="0 0 400 250" style={{ opacity: 0.6 }}>
              <defs>
                <linearGradient id="gradient1" x1="0%" y1="0%" x2="0%" y2="100%">
                  <stop offset="0%" style={{ stopColor: '#ff6b6b', stopOpacity: 0.3 }} />
                  <stop offset="100%" style={{ stopColor: '#ff6b6b', stopOpacity: 0 }} />
                </linearGradient>
              </defs>
              <polyline points="20,200 60,150 100,170 140,120 180,100 220,130 260,80 300,110 340,90 380,60" 
                stroke="#ff6b6b" strokeWidth="2" fill="none" />
              <polygon points="20,200 60,150 100,170 140,120 180,100 220,130 260,80 300,110 340,90 380,60 380,250 20,250" 
                fill="url(#gradient1)" />
            </svg>
          </div>
        </div>

        <div className="chart-card">
          <div className="chart-header">
            <h3 className="chart-title">Performance Metrics</h3>
            <p className="chart-description">System performance data</p>
          </div>
          <div className="chart-placeholder">
            <svg width="100%" height="100%" viewBox="0 0 400 250" style={{ opacity: 0.6 }}>
              <defs>
                <linearGradient id="gradient2" x1="0%" y1="0%" x2="0%" y2="100%">
                  <stop offset="0%" style={{ stopColor: '#ffa726', stopOpacity: 0.3 }} />
                  <stop offset="100%" style={{ stopColor: '#ffa726', stopOpacity: 0 }} />
                </linearGradient>
              </defs>
              <rect x="30" y="150" width="30" height="80" fill="#ffa726" opacity="0.8" />
              <rect x="80" y="100" width="30" height="130" fill="#ffa726" opacity="0.8" />
              <rect x="130" y="80" width="30" height="150" fill="#ffa726" opacity="0.8" />
              <rect x="180" y="120" width="30" height="110" fill="#ffa726" opacity="0.8" />
              <rect x="230" y="90" width="30" height="140" fill="#ffa726" opacity="0.8" />
              <rect x="280" y="110" width="30" height="120" fill="#ffa726" opacity="0.8" />
              <rect x="330" y="70" width="30" height="160" fill="#ffa726" opacity="0.8" />
            </svg>
          </div>
        </div>
      </div>

      {/* Transactions Table */}
      <div className="table-card">
        <div className="table-header">
          <h3 className="table-title">Recent Transactions</h3>
        </div>
        <table className="table">
          <thead>
            <tr>
              <th>Transaction</th>
              <th>Amount</th>
              <th>Status</th>
              <th>Date</th>
            </tr>
          </thead>
          <tbody>
            {transactions.map((transaction) => (
              <tr key={transaction.id}>
                <td>{transaction.description}</td>
                <td style={{ fontWeight: 600, color: '#ff6b6b' }}>{transaction.amount}</td>
                <td>
                  <span className={`status-badge ${transaction.status}`}>
                    {transaction.status}
                  </span>
                </td>
                <td>{transaction.date}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
