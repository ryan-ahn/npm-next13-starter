import type { Metadata } from 'next';
import { Registry } from '@styles/registry';
import { IRootLayout } from '@interface/layout';
import { META_PAGE } from '@constants/data/meta';
import Wrapper from '@containers/wrapper/page';
import Gnb from '@containers/common/page/gnb';

export const metadata: Metadata = {
  icons: '/static/icons/logo.png',
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

export default function rootLayout({ children }: IRootLayout) {
  return (
    <html lang="ko">
      <body>
        <Registry>
          <Wrapper>
            <Gnb />
            {children}
          </Wrapper>
        </Registry>
      </body>
    </html>
  );
}
