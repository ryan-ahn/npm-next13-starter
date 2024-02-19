import type { Metadata } from 'next';
import { IContentLayout } from '@interface/layout';
import { META_PAGE } from '@constants/data/meta';
import MemberWrapper from '@containers/wrapper/member';

export const metadata: Metadata = {
  title: META_PAGE.content.title,
  description: META_PAGE.content.description,
  keywords: META_PAGE.content.keywords,
  openGraph: {
    title: META_PAGE.content.title,
    description: META_PAGE.content.description,
    images: META_PAGE.content.ogImage,
  },
  twitter: {
    title: META_PAGE.content.title,
    description: META_PAGE.content.description,
    images: META_PAGE.content.ogImage,
  },
};

export default function contentLayout({ children }: IContentLayout) {
  return <MemberWrapper>{children}</MemberWrapper>;
}
