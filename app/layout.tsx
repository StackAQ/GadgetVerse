import '../styles/globals.css';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'GadgetVerse - Smart Tech, Smarter Design',
  description: 'Explore premium gadgets with lightning-fast performance and slick design.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
