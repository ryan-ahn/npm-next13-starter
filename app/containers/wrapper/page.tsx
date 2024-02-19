'use client';

import { useEffect } from 'react';
import { IRootLayout } from '@interface/layout';

export default function wrapperContainer({ children }: IRootLayout) {
  useEffect(() => {
    console.log('hi');
  }, []);

  return <>{children}</>;
}
