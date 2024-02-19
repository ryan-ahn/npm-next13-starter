'use client';

import { useEffect } from 'react';
import { useAuthStore } from '@libs/store';
import { IRootLayout } from '@interface/layout';

export default function wrapperContainer({ children }: IRootLayout) {
  // hooks
  const { isLoggedIn, getAuthUserDetail } = useAuthStore();

  /* functions */
  const fetchUserDetail = async () => {
    await getAuthUserDetail();
  };

  /* life cycle */
  useEffect(() => {
    if (isLoggedIn) {
      fetchUserDetail();
    }
  }, [isLoggedIn]);

  /* default render */
  return <>{children}</>;
}
