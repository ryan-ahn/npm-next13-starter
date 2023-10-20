import { META_PAGE } from '@constants/data/meta';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: META_PAGE.sample.title,
  description: META_PAGE.sample.description,
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
