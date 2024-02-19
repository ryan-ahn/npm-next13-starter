'use client';

import styled from 'styled-components';
import { useCallback } from 'react';
import { useRouter } from 'next/navigation';
import { flexSet, boxSet, colorSet, fontSet } from '@styles/mixin';
import { CONTENT_PAGE } from '@constants/data/content';
import AtomsCustomButton from '@components/atoms/button/custom';

export default function sampleContainer() {
  // hooks
  const router = useRouter();
  // variable
  const bodyContent = CONTENT_PAGE.sample.body;
  const buttonContent = CONTENT_PAGE.sample.button;
  // functions
  const onClickRouteToMain = useCallback(() => {
    router.push('/');
  }, []);

  /* default render */
  return (
    <StyledWrapper>
      <StyledContentBox>
        <p>{bodyContent}</p>
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
  gap: 10px;
  & > p {
    ${() => fontSet(50, 500, 60)};
    text-align: center;
    white-space: pre-wrap;
  }
`;
