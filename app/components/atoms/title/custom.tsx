'use client';

import styled from 'styled-components';
import { flexSet, boxSet, fontSet } from '@styles/mixin';
import { IAtomsCustomTitleProps } from '@interface/props';

export default function customTitle({
  title,
  description,
}: IAtomsCustomTitleProps) {
  /* default render */
  return (
    <StyledWrapper>
      <StyledContentBox>
        <h4>{title}</h4>
        <p>{description}</p>
      </StyledContentBox>
    </StyledWrapper>
  );
}

const StyledWrapper = styled.div`
  position: relative;
`;

const StyledContentBox = styled.div`
  ${() => flexSet('center', 'center', 'column')};
  ${() => boxSet('auto', 'auto', '50px')};
  & > h4 {
    ${() => fontSet(50, 500, 60)};
    text-align: center;
    white-space: pre-wrap;
  }
  & > p {
    ${() => fontSet(20, 300, 24)};
  }
`;
