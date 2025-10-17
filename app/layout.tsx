import type { Metadata } from "next";
import "./globals.css";
import { Providers } from "./components/Providers";

export const metadata: Metadata = {
  title: "HazmatGuard - Automated Hazmat Compliance",
  description: "Automated Hazmat Compliance & Trusted Logistics Network on Base",
  icons: {
    icon: "/icon-256x256.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
