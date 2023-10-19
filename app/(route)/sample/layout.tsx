import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: '샘플페이지',
  description: 'create next app',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
