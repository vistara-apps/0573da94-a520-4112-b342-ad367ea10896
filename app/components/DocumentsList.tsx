'use client';

import { FileText, Download, Eye } from 'lucide-react';

export function DocumentsList() {
  const documents = [
    { id: 1, name: 'Bill of Lading', date: '1,6746 2020', status: 'Last' },
    { id: 2, name: 'Crucial O Formable', date: '1.00', status: 'Active' },
  ];

  return (
    <div className="bg-surface rounded-lg border border-white/10 overflow-hidden">
      <div className="bg-primary/10 border-b border-white/10 px-4 py-3">
        <h2 className="text-lg font-semibold text-fg flex items-center gap-2">
          <FileText className="w-5 h-5 text-primary" />
          Auto Generated Documents
        </h2>
        <p className="text-xs text-fg/60 mt-1">Nation Shipping Documents</p>
      </div>
      
      <div className="p-4">
        <div className="space-y-2">
          {documents.map((doc) => (
            <div 
              key={doc.id}
              className="flex items-center justify-between p-4 bg-bg rounded-lg border border-white/10 hover:border-primary/30 transition-colors"
            >
              <div className="flex items-center gap-3">
                <FileText className="w-5 h-5 text-primary" />
                <div>
                  <div className="text-sm font-medium text-fg">{doc.name}</div>
                  <div className="text-xs text-fg/60 mt-0.5">{doc.status}</div>
                </div>
              </div>
              
              <div className="flex items-center gap-4">
                <span className="text-sm text-fg/70">{doc.date}</span>
                <div className="flex items-center gap-2">
                  <button className="p-2 hover:bg-surface rounded-lg transition-colors">
                    <Eye className="w-4 h-4 text-fg/70" />
                  </button>
                  <button className="p-2 hover:bg-surface rounded-lg transition-colors">
                    <Download className="w-4 h-4 text-fg/70" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Manifests Documents Section */}
        <div className="mt-6 pt-6 border-t border-white/10">
          <h3 className="text-sm font-semibold text-fg mb-3">Manifests Documents</h3>
          <div className="space-y-2">
            <DocumentItem icon="🔄" label="Autonomous Materials" />
            <DocumentItem icon="📋" label="Least Needplay Manifest (Ars)" />
            <DocumentItem icon="📄" label="Destinate Regulation Completetes" />
            <DocumentItem icon="⚠️" label="Emergency & Enforced un Gairactions" />
            <DocumentItem icon="📝" label="& Emergency Response Instructions" />
          </div>
        </div>

        {/* Inter Details Section */}
        <div className="mt-6 pt-6 border-t border-white/10">
          <h3 className="text-sm font-semibold text-fg mb-3">Inter Details</h3>
          <div className="p-3 bg-bg rounded-lg border border-white/10">
            <p className="text-xs text-fg/70 leading-relaxed">
              (urerging Shipping Responsemeny Intercour Guidety Inetructions
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

function DocumentItem({ icon, label }: { icon: string; label: string }) {
  return (
    <div className="flex items-center gap-3 p-3 bg-bg rounded-lg border border-white/10 hover:border-primary/30 transition-colors">
      <span className="text-lg">{icon}</span>
      <span className="text-sm text-fg/80">{label}</span>
    </div>
  );
}
