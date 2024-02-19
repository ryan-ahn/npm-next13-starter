'use client';

import styled from 'styled-components';
import { flexSet, boxSet, colorSet, fontSet } from '@styles/mixin';
import { CONTENT_PAGE } from '@constants/data/content';

export default function sampleContainer() {
  return (
    <StyledWrapper>
      <StyledContentBox>
        <p>{CONTENT_PAGE.sample.body}</p>
      </StyledContentBox>
    </StyledWrapper>
  );
}

const StyledWrapper = styled.div`
  ${() => flexSet('center', 'center', 'row')};
  ${() => boxSet('100%', 'calc(100vh - 80px)')};
  ${() => colorSet('white', '#101010')};
`;

const StyledContentBox = styled.div`
  ${() => flexSet('center', 'center', 'row')};
  white-space: pre-wrap;
  & > p {
    ${() => fontSet(50, 500, 60)};
    text-align: center;
  }
`;
