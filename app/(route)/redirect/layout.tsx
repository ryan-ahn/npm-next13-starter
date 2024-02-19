import type { Metadata } from 'next';
import { ISampleLayout } from '@interface/layout';
import { META_PAGE } from '@constants/data/meta';

export const metadata: Metadata = {
  title: META_PAGE.redirect.title,
  description: META_PAGE.redirect.description,
  keywords: META_PAGE.redirect.keywords,
  openGraph: {
    title: META_PAGE.redirect.title,
    description: META_PAGE.redirect.description,
    images: META_PAGE.redirect.ogImage,
  },
  twitter: {
    title: META_PAGE.redirect.title,
    description: META_PAGE.redirect.description,
    images: META_PAGE.redirect.ogImage,
  },
};

export default function layout({ children }: ISampleLayout) {
  return <>{children}</>;
}
