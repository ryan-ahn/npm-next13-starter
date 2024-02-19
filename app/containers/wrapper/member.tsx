'use client';

import { useEffect } from 'react';
import { useDataStore } from '@libs/store';
import { IRootLayout } from '@interface/layout';

export default function wrapperContainer({ children }: IRootLayout) {
  // hooks
  const { getDataMemberCheck } = useDataStore();

  /* functions */
  const fetchMemberCheck = async () => {
    await getDataMemberCheck();
  };

  /* life cycle */
  useEffect(() => {
    fetchMemberCheck();
  }, []);

  /* default render */
  return <>{children}</>;
}
