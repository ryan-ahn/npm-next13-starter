import type { Metadata } from 'next';
import { ISampleLayout } from '@interface/layout';
import { META_PAGE } from '@constants/data/meta';

export const metadata: Metadata = {
  title: META_PAGE.default.title,
  description: META_PAGE.default.description,
  keywords: META_PAGE.default.keywords,
  openGraph: {
    title: META_PAGE.default.title,
    description: META_PAGE.default.description,
    images: META_PAGE.default.ogImage,
  },
  twitter: {
    title: META_PAGE.default.title,
    description: META_PAGE.default.description,
    images: META_PAGE.default.ogImage,
  },
};

export default function layout({ children }: ISampleLayout) {
  return <>{children}</>;
}
