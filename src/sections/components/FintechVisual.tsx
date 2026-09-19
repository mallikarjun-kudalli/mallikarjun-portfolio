import React, { useState } from 'react';
import { TrendingUp, Code, BarChart2 } from 'lucide-react';

export const FintechVisual: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'kpi' | 'sql' | 'growth'>('kpi');

  return (
    <div className="w-full rounded-lg border border-border-hairline bg-surface-elevated/70 p-4 sm:p-5 font-mono">
      {/* Dashboard Top Navigation Bar */}
      <div className="flex flex-wrap items-center justify-between gap-2 border-b border-border-hairline/70 pb-3 mb-4 text-2xs">
        <div className="flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-accent-emerald animate-pulse" />
          <span className="text-content-primary font-medium tracking-wide">
            POWER_BI // EXECUTIVE_FINTECH_SUITE
          </span>
        </div>
        <div className="flex items-center gap-1 bg-surface rounded p-0.5 border border-border-hairline">
          <button
            onClick={(e) => {
              e.stopPropagation();
              setActiveTab('kpi');
            }}
            className={`px-2 py-1 rounded text-2xs transition-colors ${
              activeTab === 'kpi'
                ? 'bg-canvas text-accent-emerald font-semibold'
                : 'text-content-muted hover:text-content-primary'
            }`}
          >
            Metrics
          </button>
          <button
            onClick={(e) => {
              e.stopPropagation();
              setActiveTab('growth');
            }}
            className={`px-2 py-1 rounded text-2xs transition-colors ${
              activeTab === 'growth'
                ? 'bg-canvas text-accent-emerald font-semibold'
                : 'text-content-muted hover:text-content-primary'
            }`}
          >
            <span className="sm:hidden">Retention</span>
            <span className="hidden sm:inline">Retention & Revenue</span>
          </button>
          <button
            onClick={(e) => {
              e.stopPropagation();
              setActiveTab('sql');
            }}
            className={`px-2 py-1 rounded text-2xs transition-colors ${
              activeTab === 'sql'
                ? 'bg-canvas text-accent-emerald font-semibold'
                : 'text-content-muted hover:text-content-primary'
            }`}
          >
            <span className="sm:hidden">SQL (30+)</span>
            <span className="hidden sm:inline">SQL Query (30+)</span>
          </button>
        </div>
      </div>

      {/* View 1: KPI Panels */}
      {activeTab === 'kpi' && (
        <div className="space-y-3">
          <div className="grid grid-cols-3 gap-2">
            <div className="p-2.5 rounded bg-surface border border-border-hairline">
              <div className="text-content-dim text-2xs mb-1">TRANSACTIONS</div>
              <div className="text-sm sm:text-base font-bold text-accent-emerald">
                100,000+
              </div>
              <div className="text-2xs text-content-muted">Records Processed</div>
            </div>
            <div className="p-2.5 rounded bg-surface border border-border-hairline">
              <div className="text-content-dim text-2xs mb-1">DASHBOARDS</div>
              <div className="text-sm sm:text-base font-bold text-content-primary">
                5 Active
              </div>
              <div className="text-2xs text-content-muted">Power BI Views</div>
            </div>
            <div className="p-2.5 rounded bg-surface border border-border-hairline">
              <div className="text-content-dim text-2xs mb-1">SQL QUERIES</div>
              <div className="text-sm sm:text-base font-bold text-accent-cyan">
                30+ Optimized
              </div>
              <div className="text-2xs text-content-muted">KPI & Churn</div>
            </div>
          </div>

          {/* SVG Trendline Graphic */}
          <div className="p-3 rounded bg-surface border border-border-hairline">
            <div className="flex items-center justify-between text-2xs text-content-muted mb-2">
              <span className="flex items-center gap-1.5">
                <TrendingUp size={12} className="text-accent-emerald" />
                <span>Revenue & Investment Growth Simulation</span>
              </span>
              <span className="text-content-dim">Monthly Cohorts</span>
            </div>
            <div className="h-20 w-full relative">
              <svg className="w-full h-full overflow-visible" viewBox="0 0 300 70">
                {/* Horizontal Gridlines */}
                <line x1="0" y1="15" x2="300" y2="15" stroke="rgba(255,255,255,0.06)" strokeDasharray="3 3" />
                <line x1="0" y1="40" x2="300" y2="40" stroke="rgba(255,255,255,0.06)" strokeDasharray="3 3" />
                <line x1="0" y1="65" x2="300" y2="65" stroke="rgba(255,255,255,0.06)" />
                {/* Emerald Revenue Line */}
                <path
                  d="M0,60 Q40,50 80,42 T160,28 T240,18 T300,10"
                  fill="none"
                  stroke="#10b981"
                  strokeWidth="2"
                />
                {/* Cyan Retention Baseline */}
                <path
                  d="M0,65 Q50,60 100,52 T200,45 T300,38"
                  fill="none"
                  stroke="#06b6d4"
                  strokeWidth="1.5"
                  strokeDasharray="4 2"
                />
                {/* Key Plot Points */}
                <circle cx="80" cy="42" r="3" fill="#10b981" />
                <circle cx="160" cy="28" r="3" fill="#10b981" />
                <circle cx="240" cy="18" r="3" fill="#10b981" />
              </svg>
            </div>
          </div>
        </div>
      )}

      {/* View 2: 5 Interactive Power BI Dashboards Tracking Areas */}
      {activeTab === 'growth' && (
        <div className="p-3 rounded bg-surface border border-border-hairline space-y-2">
          <div className="flex items-center justify-between text-2xs text-content-muted mb-2">
            <span className="flex items-center gap-1.5">
              <BarChart2 size={12} className="text-accent-cyan" />
              <span>5 Interactive Power BI Dashboards</span>
            </span>
            <span className="text-content-dim">30+ SQL Query Core</span>
          </div>

          {[
            { label: '01. Revenue Performance', val: 'Financial Tracking', color: 'bg-accent-emerald' },
            { label: '02. Customer Retention', val: 'Cohort Retention', color: 'bg-accent-cyan' },
            { label: '03. Customer Growth', val: 'Acquisition Monitoring', color: 'bg-content-secondary' },
            { label: '04. Investment Performance', val: 'Portfolio Yield', color: 'bg-accent-emerald' },
            { label: '05. Churn Analysis', val: 'Customer Segmentation', color: 'bg-accent-cyan' },
          ].map((dash) => (
            <div
              key={dash.label}
              className="flex items-center justify-between p-2 rounded bg-surface-elevated/60 border border-border-hairline text-2xs"
            >
              <div className="flex items-center gap-2">
                <span className={`w-1.5 h-1.5 rounded-full ${dash.color}`} />
                <span className="text-content-primary font-medium">{dash.label}</span>
              </div>
              <span className="text-content-muted font-mono text-3xs">
                {dash.val}
              </span>
            </div>
          ))}
        </div>
      )}

      {/* View 3: Real SQL Analytical Query Snippet */}
      {activeTab === 'sql' && (
        <div className="p-3 rounded bg-canvas border border-border-hairline text-2xs text-content-secondary leading-relaxed overflow-x-auto">
          <div className="flex items-center gap-1.5 text-accent-emerald mb-2">
            <Code size={12} />
            <span>query_07_customer_churn_segmentation.sql</span>
          </div>
          <pre className="text-2xs font-mono text-content-muted">
            <span className="text-accent-cyan">SELECT</span> customer_id, segment, <br />
            &nbsp;&nbsp;<span className="text-accent-emerald">COUNT</span>(transaction_id) <span className="text-accent-cyan">AS</span> total_tx,<br />
            &nbsp;&nbsp;<span className="text-accent-emerald">SUM</span>(investment_volume) <span className="text-accent-cyan">AS</span> portfolio_val,<br />
            &nbsp;&nbsp;<span className="text-accent-emerald">AVG</span>(retention_score) <span className="text-accent-cyan">AS</span> avg_retention<br />
            <span className="text-accent-cyan">FROM</span> customer_transactions<br />
            <span className="text-accent-cyan">WHERE</span> tx_status = <span className="text-content-primary">'SETTLED'</span><br />
            <span className="text-accent-cyan">GROUP BY</span> customer_id, segment<br />
            <span className="text-accent-cyan">HAVING</span> total_tx &gt; 12<br />
            <span className="text-accent-cyan">ORDER BY</span> portfolio_val <span className="text-accent-cyan">DESC</span>;
          </pre>
        </div>
      )}
    </div>
  );
};
