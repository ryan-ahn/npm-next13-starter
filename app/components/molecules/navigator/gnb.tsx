'use client';

import styled from 'styled-components';
import { generateSvg } from '@libs/utils/generator/svg';
import { boxSet, colorSet, flexSet } from '@styles/mixin';
import { IMoleculesGnbNavigatorProps } from '@interface/props';

export default function gnb({
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
  ${() => boxSet('auto', '100%', '0px')};
  padding: 14px;
  cursor: pointer;
`;
