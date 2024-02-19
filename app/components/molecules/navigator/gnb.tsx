'use client';

import styled from 'styled-components';
import { generateSvg } from '@libs/utils/generator/svg';
import { boxSet, colorSet, flexSet, fontSet } from '@styles/mixin';
import { IMoleculesGnbNavigatorProps } from '@interface/props';

export default function gnb({
  rightText,
  leftIcon,
  rightIcon,
  leftIconColor,
  rightIconColor,
  leftOnClickFunction,
  rightOnClickFunction,
}: IMoleculesGnbNavigatorProps) {
  /* default render */
  return (
    <StyledWrapper>
      <StyledIconBox onClick={leftOnClickFunction}>
        {generateSvg(leftIcon, leftIconColor)}
      </StyledIconBox>
      <StyledIconBox onClick={rightOnClickFunction}>
        <h4>{rightText}</h4>
        {generateSvg(rightIcon, rightIconColor)}
      </StyledIconBox>
    </StyledWrapper>
  );
}

const StyledWrapper = styled.div`
  ${() => flexSet('space-between', 'center', 'row')};
  ${() => boxSet('100%', '60px')}
  ${() => colorSet('white', 'black')};
  padding: 0 5px;
`;

const StyledIconBox = styled.button`
  ${() => flexSet('space-between', 'center', 'row')};
  ${() => boxSet('auto', '100%', '0px')};
  padding: 14px;
  gap: 15px;
  cursor: pointer;
  & > h4 {
    ${() => colorSet('white', 'black')};
    ${() => fontSet(20, 500, 24)};
  }
`;
