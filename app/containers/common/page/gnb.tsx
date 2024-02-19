'use client';

import { useRouter } from 'next/navigation';
import { TIconName } from '@interface/alias';
import { CONTENT_PAGE } from '@constants/data/content';
import MoleculesNavigatorGnb from '@components/molecules/navigator/gnb';

export default function gnb() {
  // variable
  const content = CONTENT_PAGE.common.gnb;
  // hooks
  const router = useRouter();

  /* function */
  const onClickLeftIcon = () => {
    router.push('/');
  };

  const onClickRightIcon = () => {
    router.push('/');
  };

  /* default render */
  return (
    <MoleculesNavigatorGnb
      leftIcon={content.leftIcon as TIconName}
      rightIcon={content.rightIcon as TIconName}
      leftOnClickFunction={onClickLeftIcon}
      rightOnClickFunction={onClickRightIcon}
    />
  );
}
