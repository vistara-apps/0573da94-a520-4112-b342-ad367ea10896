'use client';

import { AlertTriangle, Package, MapPin } from 'lucide-react';

export function HazmatDetails() {
  const hazmatItems = [
    { id: 1, label: 'Hazardous Materials', status: 'active' },
    { id: 2, label: 'Load Data (LA)', status: 'active' },
    { id: 3, label: 'Hazardous Materials UN - Compliance', status: 'warning' },
    { id: 4, label: 'Hazardous Materials - UN 601 Action', status: 'active' },
    { id: 5, label: 'Destination Load Mnfr', status: 'info' },
    { id: 6, label: 'Hazardous Materials - Compliance Plan', status: 'active' },
    { id: 7, label: 'Hazardous Materials I - ITEconomy (Heredity Compliance)', status: 'active' },
    { id: 8, label: 'Regulatory Maintenance Requirements', status: 'active' },
    { id: 9, label: 'Hazardous Compliance For (for Non Bulk Motels)', status: 'active' },
  ];

  return (
    <div className="bg-surface rounded-lg border border-white/10 overflow-hidden">
      <div className="bg-primary/10 border-b border-white/10 px-4 py-3">
        <h2 className="text-lg font-semibold text-fg flex items-center gap-2">
          <Package className="w-5 h-5 text-primary" />
          Hazardous Materials
        </h2>
      </div>
      
      <div className="p-4">
        {/* Legal Details Header */}
        <div className="flex items-center justify-between mb-4 pb-3 border-b border-white/10">
          <span className="text-sm font-medium text-fg">Legal Details</span>
          <select className="bg-bg border border-white/20 rounded px-3 py-1 text-sm text-fg">
            <option>Celtro</option>
          </select>
        </div>

        {/* Hazmat Items List */}
        <div className="space-y-2 max-h-96 overflow-y-auto">
          {hazmatItems.map((item) => (
            <div 
              key={item.id}
              className="flex items-start gap-3 p-3 bg-bg rounded-lg border border-white/10 hover:border-primary/30 transition-colors"
            >
              <div className={`w-2 h-2 rounded-full mt-1.5 flex-shrink-0 ${
                item.status === 'active' ? 'bg-success' :
                item.status === 'warning' ? 'bg-warning' :
                'bg-primary'
              }`}></div>
              <span className="text-sm text-fg/80 leading-relaxed">{item.label}</span>
            </div>
          ))}
        </div>

        {/* Destination Info */}
        <div className="mt-4 pt-4 border-t border-white/10">
          <div className="flex items-center gap-2 text-sm text-fg/70 mb-2">
            <MapPin className="w-4 h-4 text-primary" />
            <span className="font-medium">Destination Load Mnfr</span>
          </div>
          <div className="flex items-center gap-2">
            <input 
              type="text" 
              defaultValue="Aut E Contro"
              className="flex-1 bg-bg border border-white/20 rounded px-3 py-2 text-sm text-fg"
            />
            <button className="px-3 py-2 bg-primary/20 border border-primary/50 rounded text-xs font-medium text-primary hover:bg-primary/30 transition-colors">
              LG 004
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
