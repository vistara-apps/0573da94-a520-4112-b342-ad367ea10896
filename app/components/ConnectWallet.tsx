'use client';

import { useState } from 'react';
import { Wallet } from 'lucide-react';

export function ConnectWallet() {
  const [isConnected, setIsConnected] = useState(false);

  return (
    <button
      onClick={() => setIsConnected(!isConnected)}
      className="flex items-center gap-2 px-4 py-2 bg-primary hover:bg-primary/90 text-white rounded-lg transition-colors font-medium"
    >
      <Wallet className="w-4 h-4" />
      {isConnected ? 'Connected' : 'Connect Wallet'}
    </button>
  );
}
