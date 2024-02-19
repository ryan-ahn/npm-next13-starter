'use client';

import styled from 'styled-components';
import { flexSet, boxSet, colorSet, fontSet } from '@styles/mixin';
import { CONTENT_PAGE } from '@constants/data/content';

export default function redirectContainer() {
  // variable
  const content = CONTENT_PAGE.redirect.body;
  /* default render */
  return (
    <StyledWrapper>
      <StyledContentBox>
        <p>{content}</p>
      </StyledContentBox>
    </StyledWrapper>
  );
}

const StyledWrapper = styled.div`
  ${() => flexSet('center', 'center', 'row')};
  ${() => boxSet('100%', 'calc(100vh - 60px)')};
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
