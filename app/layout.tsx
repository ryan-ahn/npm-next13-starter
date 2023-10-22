import type { Metadata } from 'next';
import { Registry } from '@styles/registry';
import { IRootLayout } from '@interface/layout';
import { META_PAGE } from '@constants/data/meta';
import Gnb from '@components/molecules/navigator/gnb';

export const metadata: Metadata = {
  title: META_PAGE.default.title,
  description: META_PAGE.default.description,
  keywords: META_PAGE.default.keywords,
};

export default function rootLayout({ children }: IRootLayout) {
  return (
    <html lang="ko">
      <body>
        <Registry>
          <Gnb />
          {children}
        </Registry>
      </body>
    </html>
  );
}
