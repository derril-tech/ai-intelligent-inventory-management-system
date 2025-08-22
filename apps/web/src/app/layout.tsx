import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';

// Import providers and components
import { Providers } from '@/components/providers/Providers';
import { Toaster } from 'react-hot-toast';

// Font configuration
const inter = Inter({ 
  subsets: ['latin'],
  variable: '--font-inter',
});

// Metadata for SEO
export const metadata: Metadata = {
  title: {
    default: 'StockSense AI - Intelligent Inventory Management',
    template: '%s | StockSense AI',
  },
  description: 'Right stock, right place, right time—predict, optimize, and execute with AI-powered inventory management.',
  keywords: [
    'inventory management',
    'supply chain',
    'AI forecasting',
    'demand planning',
    'stock optimization',
    'retail analytics',
    'warehouse management',
    'supply chain optimization'
  ],
  authors: [{ name: 'StockSense AI Team' }],
  creator: 'StockSense AI',
  publisher: 'StockSense AI',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://stocksense.ai'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://stocksense.ai',
    title: 'StockSense AI - Intelligent Inventory Management',
    description: 'Right stock, right place, right time—predict, optimize, and execute with AI-powered inventory management.',
    siteName: 'StockSense AI',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'StockSense AI - Intelligent Inventory Management',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'StockSense AI - Intelligent Inventory Management',
    description: 'Right stock, right place, right time—predict, optimize, and execute with AI-powered inventory management.',
    images: ['/og-image.png'],
    creator: '@stocksense_ai',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'your-google-verification-code',
    yandex: 'your-yandex-verification-code',
    yahoo: 'your-yahoo-verification-code',
  },
};

// Root layout component
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} antialiased`}>
      <head>
        {/* Preconnect to external domains for performance */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="preconnect" href="https://api.stocksense.ai" />
        
        {/* Favicon and app icons */}
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="manifest" href="/site.webmanifest" />
        
        {/* Theme color for browser UI */}
        <meta name="theme-color" content="#3b82f6" />
        <meta name="msapplication-TileColor" content="#3b82f6" />
      </head>
      <body className={`${inter.className} bg-neutral-50 dark:bg-neutral-900 text-neutral-900 dark:text-neutral-100`}>
        {/* Providers wrapper for global state and context */}
        <Providers>
          {/* Main application content */}
          <main className="min-h-screen">
            {children}
          </main>
          
          {/* Toast notifications */}
          <Toaster
            position="top-right"
            toastOptions={{
              duration: 4000,
              style: {
                background: 'var(--toast-bg)',
                color: 'var(--toast-color)',
                border: '1px solid var(--toast-border)',
              },
              success: {
                iconTheme: {
                  primary: '#22c55e',
                  secondary: '#ffffff',
                },
              },
              error: {
                iconTheme: {
                  primary: '#ef4444',
                  secondary: '#ffffff',
                },
              },
            }}
          />
        </Providers>
      </body>
    </html>
  );
}
