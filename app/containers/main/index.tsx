'use client';

import styled from 'styled-components';
import { useRouter } from 'next/navigation';
import { useCallback } from 'react';
import { flexSet, boxSet, colorSet, fontSet } from '@styles/mixin';
// import { useAuthStore, useDataStore } from '@store/index';
import { CONTENT_PAGE } from '@constants/data/content';
import AtomsCustomButton from '@components/atoms/button/custom';

export default function mainContainer() {
  // hooks
  const router = useRouter();
  // variable
  const bodyContent = CONTENT_PAGE.main.body;
  const buttonContent = CONTENT_PAGE.main.button;

  /* functions */
  const onClickRouteToSample = useCallback(() => {
    router.push('/sample');
  }, []);

  /* default render */
  return (
    <StyledWrapper>
      <StyledContentBox>
        <p>{bodyContent}</p>
        <AtomsCustomButton
          text={buttonContent.text}
          color={buttonContent.color}
          onClickFunction={onClickRouteToSample}
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
  gap: 10px;
  & > p {
    ${() => fontSet(50, 500, 60)};
    text-align: center;
    white-space: pre-wrap;
  }
`;
