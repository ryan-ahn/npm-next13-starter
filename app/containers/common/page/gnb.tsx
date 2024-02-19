'use client';

import { useRouter } from 'next/navigation';
import { useCallback } from 'react';
import { useAuthStore } from '@libs/store';
import { TIconName } from '@interface/alias';
import { CONTENT_PAGE } from '@constants/data/content';
import MoleculesNavigatorGnb from '@components/molecules/navigator/gnb';

export default function gnb() {
  // variable
  const content = CONTENT_PAGE.common.gnb;
  // hooks
  const router = useRouter();
  const { isLoggedIn, getAuthUserSignIn, getAuthUserSignOut } = useAuthStore();

  /* functions */
  const onClickUserSignIn = useCallback(async () => {
    await getAuthUserSignIn();
  }, []);

  const onClickUserSignOut = useCallback(async () => {
    await getAuthUserSignOut();
  }, []);

  const onClickRouteToMain = useCallback(() => {
    router.push('/');
  }, []);

  /* default render */
  return (
    <MoleculesNavigatorGnb
      leftIcon={content.leftIcon as TIconName}
      rightIcon={content.rightIcon as TIconName}
      leftIconColor={content.leftIconColor}
      rightIconColor={content.rightIconColor}
      leftOnClickFunction={onClickRouteToMain}
      rightOnClickFunction={isLoggedIn ? onClickUserSignOut : onClickUserSignIn}
    />
  );
}
