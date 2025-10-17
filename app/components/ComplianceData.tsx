'use client';

import { Shield, CheckCircle2, FileText } from 'lucide-react';

export function ComplianceData() {
  return (
    <div className="bg-surface rounded-lg border border-white/10 overflow-hidden">
      <div className="bg-primary/10 border-b border-white/10 px-4 py-3">
        <h2 className="text-lg font-semibold text-fg flex items-center gap-2">
          <Shield className="w-5 h-5 text-primary" />
          Compliance DATA
        </h2>
      </div>
      
      <div className="p-4 space-y-4">
        {/* Key Metrics */}
        <div className="space-y-3">
          <MetricRow label="May to" value="" />
          <MetricRow label="Lorr:" value="Details" />
          <MetricRow label="Yotto:" value="$1,00.16" highlight />
          <MetricRow label="Input:" value="Generated Shipping Couments" />
          <MetricRow label="Tota:" value="$14,00$" highlight />
          <MetricRow label="Lact:" value="Destnom" />
          <MetricRow label="Date:" value="46 0" />
        </div>

        {/* Doc Compliments Checkbox */}
        <div className="flex items-center gap-2 py-2">
          <input 
            type="checkbox" 
            id="doc-compliments"
            defaultChecked
            className="w-4 h-4 rounded border-white/20 bg-bg text-primary focus:ring-primary"
          />
          <label htmlFor="doc-compliments" className="text-sm text-fg/80">
            Doc Compliments
          </label>
        </div>

        {/* Asset Generator */}
        <div className="space-y-2">
          <label className="text-sm text-fg/70">Asset Generator</label>
          <select className="w-full bg-bg border border-white/20 rounded-lg px-3 py-2 text-sm text-fg">
            <option>5</option>
          </select>
        </div>

        <div className="space-y-2">
          <select className="w-full bg-bg border border-white/20 rounded-lg px-3 py-2 text-sm text-fg">
            <option>3 a.m. 10 E 51/1A</option>
          </select>
        </div>

        {/* Auto Generated Options */}
        <div className="space-y-2">
          <div className="flex items-center gap-2">
            <input 
              type="checkbox" 
              id="auto-docs"
              defaultChecked
              className="w-4 h-4 rounded border-white/20 bg-bg text-primary"
            />
            <label htmlFor="auto-docs" className="text-sm text-fg/80">
              Auto Generated Shipping Documents
            </label>
          </div>
          
          <div className="flex items-center gap-2">
            <input 
              type="checkbox" 
              id="emergency-response"
              defaultChecked
              className="w-4 h-4 rounded border-white/20 bg-bg text-primary"
            />
            <label htmlFor="emergency-response" className="text-sm text-fg/80">
              Emergency Responses
            </label>
          </div>
        </div>

        {/* Action Button */}
        <button className="w-full mt-4 px-4 py-3 bg-primary hover:bg-primary/90 text-white rounded-lg font-medium transition-colors flex items-center justify-center gap-2">
          <FileText className="w-4 h-4" />
          Generate Documents
        </button>
      </div>
    </div>
  );
}

function MetricRow({ label, value, highlight }: { label: string; value: string; highlight?: boolean }) {
  return (
    <div className="flex items-center justify-between py-1">
      <span className="text-sm text-fg/70">{label}</span>
      <span className={`text-sm font-medium ${highlight ? 'text-primary' : 'text-fg'}`}>
        {value}
      </span>
    </div>
  );
}
