import type { Metadata } from 'next';
import './globals.css';

// Providers
import Providers from '@/utils/Providers';

// Fonts
import { montserrat } from '@/fonts';
import { ThemeToggler } from '@/components/common';

// Metadata
export const metadata: Metadata = {
  title: {
    template: `%s | Experiments By Prashant`,
    default: `Home | Experiments By Prashant`,
  },
  description: 'Collection of experiments stuffs made by me',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={montserrat.className}>
        <Providers>
          <ThemeToggler />
          {children}
        </Providers>
      </body>
    </html>
  );
}
