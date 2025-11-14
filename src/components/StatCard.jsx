
import { TrendingUp, TrendingDown } from 'lucide-react';

export default function StatCard({ icon: Icon, title, value, trend, trendValue, color }) {
  const isPositive = trend === 'up';

  return (
    <div className="stat-card">
      <div className="stat-header">
        <div className="stat-icon">
          <Icon size={24} />
        </div>
        <div className={`stat-trend ${!isPositive ? 'negative' : ''}`}>
          {isPositive ? <TrendingUp size={16} /> : <TrendingDown size={16} />}
          <span>{trendValue}</span>
        </div>
      </div>
      <div className="stat-value">{value}</div>
      <div className="stat-label">{title}</div>
    </div>
  );
}
