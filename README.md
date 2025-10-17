# HazmatGuard - Automated Hazmat Compliance on Base

A Next.js Base Mini App for automated hazmat compliance, route optimization, and trusted logistics networking.

## Features

- 🛡️ **Dynamic Compliance Documentation** - Auto-generate legally compliant shipping documents
- 🗺️ **Route Optimization** - Calculate compliant routes with hazard mitigation
- ⭐ **Verified Reputation System** - Farcaster-powered social layer for logistics professionals
- 🚨 **Incident Response** - Real-time collaborative incident reporting via Frames

## Tech Stack

- **Framework**: Next.js 15 with App Router
- **Blockchain**: Base (Ethereum L2)
- **Social**: Farcaster Mini App with MiniKit
- **Wallet**: OnchainKit + Coinbase Wallet
- **Styling**: Tailwind CSS with BASE theme

## Getting Started

1. **Install dependencies**:
```bash
npm install
```

2. **Set up environment variables**:
```bash
cp .env.example .env.local
```

Add your OnchainKit API key from [Coinbase Developer Platform](https://portal.cdp.coinbase.com/)

3. **Run development server**:
```bash
npm run dev
```

4. **Open** [http://localhost:3000](http://localhost:3000)

## Project Structure

```
app/
├── components/          # React components
│   ├── Providers.tsx   # OnchainKit + React Query providers
│   ├── ConnectWallet.tsx
│   ├── RouteMap.tsx
│   ├── HazmatDetails.tsx
│   ├── ComplianceData.tsx
│   └── DocumentsList.tsx
├── layout.tsx          # Root layout
├── page.tsx            # Main dashboard
└── globals.css         # Global styles with BASE theme

public/
└── .well-known/
    └── farcaster.json  # Mini App manifest
```

## Base Mini App Integration

This app is configured as a Farcaster Mini App with:
- OnchainKit for Base blockchain integration
- MiniKit for Farcaster social features
- Gasless transactions via Paymaster
- Account association for reputation system

## Deployment

Deploy to Vercel:

```bash
npm run build
```

Make sure to:
1. Add environment variables in Vercel dashboard
2. Configure custom domain for manifest
3. Update `farcaster.json` with production URLs

## License

MIT
