import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { Registry as StyledComponentRegistry } from '@styles/registry';
import { META_PAGE } from '@constants/data/meta';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: META_PAGE.main.title,
  description: META_PAGE.main.description,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ko">
      <body className={inter.className}>
        <StyledComponentRegistry>{children}</StyledComponentRegistry>
      </body>
    </html>
  );
}
