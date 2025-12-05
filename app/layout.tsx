// app/layout.tsx
import './globals.css';
import type { Metadata } from 'next';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';

export const metadata: Metadata = {
  title: '뷰커넥스',
  description: '실시간 영상 기반 플랫폼, VIEWCONNEX',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ko">
      <head>
        {/* Pretendard */}
        <link
          rel="stylesheet"
          as="style"
          crossOrigin=""
          href="https://gcore.jsdelivr.net/gh/orioncactus/pretendard@v1.3.9/dist/web/static/pretendard-dynamic-subset.min.css"
        />
      </head>
      <body
        className="bg-slate-50 text-slate-900"
        style={{
          fontFamily:
            'Pretendard, system-ui, -apple-system, BlinkMacSystemFont, sans-serif',
        }}
      >
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
