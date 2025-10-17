'use client';

import { useEffect, useState } from 'react';
import { MapPin, FileText, Shield, AlertTriangle, Settings2, Menu } from 'lucide-react';
import { ConnectWallet } from './components/ConnectWallet';
import { RouteMap } from './components/RouteMap';
import { HazmatDetails } from './components/HazmatDetails';
import { ComplianceData } from './components/ComplianceData';
import { DocumentsList } from './components/DocumentsList';

export default function Home() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-pulse text-primary text-xl">Loading HazmatGuard...</div>
      </div>
    );
  }

  return (
    <main className="min-h-screen bg-bg">
      {/* Header */}
      <header className="border-b border-white/10 bg-surface/50 backdrop-blur-sm sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center gap-3">
              <Shield className="w-8 h-8 text-primary" />
              <div>
                <h1 className="text-xl font-bold text-fg">HazmatGuard</h1>
                <p className="text-xs text-fg/60">Automated Compliance</p>
              </div>
            </div>
            
            <div className="flex items-center gap-4">
              <ConnectWallet />
              <button className="p-2 hover:bg-surface rounded-lg transition-colors">
                <Settings2 className="w-5 h-5 text-fg/70" />
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        {/* Stats Bar */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
          <StatCard 
            icon={<FileText className="w-5 h-5" />}
            label="Active Shipments"
            value="12"
            trend="+3"
          />
          <StatCard 
            icon={<Shield className="w-5 h-5" />}
            label="Compliance Score"
            value="98%"
            trend="+2%"
          />
          <StatCard 
            icon={<MapPin className="w-5 h-5" />}
            label="Routes Optimized"
            value="47"
            trend="+8"
          />
          <StatCard 
            icon={<AlertTriangle className="w-5 h-5" />}
            label="Active Alerts"
            value="2"
            trend="0"
          />
        </div>

        {/* Main Dashboard Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          {/* Route Map - Left Column */}
          <div className="lg:col-span-4">
            <RouteMap />
          </div>

          {/* Hazmat Details - Middle Column */}
          <div className="lg:col-span-4">
            <HazmatDetails />
          </div>

          {/* Compliance Data - Right Column */}
          <div className="lg:col-span-4">
            <ComplianceData />
          </div>
        </div>

        {/* Documents Section */}
        <div className="mt-6">
          <DocumentsList />
        </div>
      </div>
    </main>
  );
}

function StatCard({ icon, label, value, trend }: { 
  icon: React.ReactNode; 
  label: string; 
  value: string; 
  trend: string;
}) {
  const isPositive = trend.startsWith('+');
  
  return (
    <div className="bg-surface rounded-lg p-4 border border-white/10">
      <div className="flex items-center justify-between mb-2">
        <div className="text-primary">{icon}</div>
        <span className={`text-xs font-medium ${isPositive ? 'text-success' : 'text-fg/60'}`}>
          {trend}
        </span>
      </div>
      <div className="text-2xl font-bold text-fg mb-1">{value}</div>
      <div className="text-sm text-fg/60">{label}</div>
    </div>
  );
}
