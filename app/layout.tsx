import type { Metadata } from 'next';
import { Urbanist, DM_Sans } from 'next/font/google';
import './globals.css';

const heading = Urbanist({ subsets: ['latin'], weight: ['700', '800'], variable: '--font-heading' });
const body = DM_Sans({ subsets: ['latin'], weight: ['400', '500', '700'], variable: '--font-body' });

export const metadata: Metadata = {
  title: 'Lorix — Digital Agency',
  description: 'Digital agency landing page',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={`${heading.variable} ${body.variable}`}>{children}</body>
    </html>
  );
}
