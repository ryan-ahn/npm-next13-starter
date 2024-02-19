'use client';

import styled from 'styled-components';
import { useCallback, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { useDataStore } from '@libs/store';
import { flexSet, boxSet, colorSet } from '@styles/mixin';
import { CONTENT_PAGE } from '@constants/data/content';
import AtomsCustomButton from '@components/atoms/button/custom';
import AtomsCustomTitle from '@components/atoms/title/custom';

export default function contentContainer() {
  // hooks
  const router = useRouter();
  const { isMember, setIsMember } = useDataStore();
  // variable
  const bodyContent = CONTENT_PAGE.content.body;
  const buttonContent = CONTENT_PAGE.content.button;

  /* functions */
  const onClickRouteToMain = useCallback(() => {
    router.push('/');
  }, []);

  const initialPage = useCallback(() => {
    setIsMember();
  }, []);

  /* life cycle */
  useEffect(() => {
    return () => {
      initialPage();
    };
  }, []);

  /* default render */
  return (
    <StyledWrapper>
      <StyledContentBox>
        <AtomsCustomTitle
          title={bodyContent}
          description={isMember ? '멤버십 체크에 성공했어요!' : ''}
        />
        <AtomsCustomButton
          text={buttonContent.text}
          color={buttonContent.color}
          onClickFunction={onClickRouteToMain}
        />
      </StyledContentBox>
    </StyledWrapper>
  );
}

const StyledWrapper = styled.div`
  ${() => flexSet('center', 'center', 'row')};
  ${() => boxSet('100%', 'calc(100vh - 60px)')};
  ${() => colorSet('black', '#ffd0d0')};
`;

const StyledContentBox = styled.div`
  ${() => flexSet('center', 'center', 'column')};
  gap: 20px;
`;
