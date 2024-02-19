'use client';

import styled from 'styled-components';
import { useRouter } from 'next/navigation';
import { useCallback } from 'react';
import { useDataStore } from '@libs/store';
import { flexSet, boxSet, colorSet, fontSet } from '@styles/mixin';
import { CONTENT_PAGE } from '@constants/data/content';
import AtomsCustomButton from '@components/atoms/button/custom';
import AtomsCustomTitle from '@components/atoms/title/custom';

export default function mainContainer() {
  // hooks
  const router = useRouter();
  const { isMember } = useDataStore();
  // variable
  const bodyContent = CONTENT_PAGE.main.body;
  const buttonContent = CONTENT_PAGE.main.button;

  /* functions */
  const onClickRouteToContent = useCallback(() => {
    router.push('/content');
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
          onClickFunction={onClickRouteToContent}
        />
      </StyledContentBox>
    </StyledWrapper>
  );
}

const StyledWrapper = styled.div`
  ${() => flexSet('center', 'center', 'row')};
  ${() => boxSet('100%', 'calc(100vh - 60px)')};
  ${() => colorSet('black', '#fffed3')};
`;

const StyledContentBox = styled.div`
  ${() => flexSet('center', 'center', 'column')};
  gap: 20px;
  & > p {
    ${() => fontSet(50, 500, 60)};
    text-align: center;
    white-space: pre-wrap;
  }
`;
