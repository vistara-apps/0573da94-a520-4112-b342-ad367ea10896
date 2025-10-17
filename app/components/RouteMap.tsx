'use client';

import { MapPin, Navigation } from 'lucide-react';

export function RouteMap() {
  return (
    <div className="bg-surface rounded-lg border border-white/10 overflow-hidden">
      <div className="bg-primary/10 border-b border-white/10 px-4 py-3">
        <h2 className="text-lg font-semibold text-fg flex items-center gap-2">
          <MapPin className="w-5 h-5 text-primary" />
          Route Optimization
        </h2>
      </div>
      
      <div className="p-4">
        {/* Map Placeholder */}
        <div className="relative bg-bg rounded-lg overflow-hidden mb-4" style={{ height: '300px' }}>
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-center">
              <Navigation className="w-12 h-12 text-primary/50 mx-auto mb-2" />
              <p className="text-sm text-fg/60">Interactive Route Map</p>
              <p className="text-xs text-fg/40 mt-1">Lexington → Destination</p>
            </div>
          </div>
          
          {/* Route indicators */}
          <div className="absolute top-4 left-4 bg-success/20 border border-success/50 rounded-full px-3 py-1 text-xs font-medium text-success">
            Start: Lexington
          </div>
          <div className="absolute bottom-4 right-4 bg-primary/20 border border-primary/50 rounded-full px-3 py-1 text-xs font-medium text-primary">
            End: Destination
          </div>
        </div>

        {/* Route Controls */}
        <div className="space-y-3">
          <div className="flex items-center justify-between">
            <span className="text-sm text-fg/70">Route Definition</span>
            <button className="text-xs text-primary hover:text-primary/80 font-medium">
              Optimize
            </button>
          </div>
          
          <div className="flex items-center gap-2">
            <div className="flex-1">
              <div className="flex items-center gap-2 text-sm">
                <div className="w-3 h-3 rounded-full bg-warning"></div>
                <span className="text-fg/70">AM</span>
              </div>
            </div>
            <div className="flex-1 text-right">
              <span className="text-sm text-fg/70">Details</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
