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
  // functions
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
      leftIconColor={content.leftIconColor}
      rightIconColor={content.rightIconColor}
      leftOnClickFunction={onClickLeftIcon}
      rightOnClickFunction={onClickRightIcon}
    />
  );
}
