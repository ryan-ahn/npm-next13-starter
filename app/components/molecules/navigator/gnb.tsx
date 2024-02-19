'use client';

import styled from 'styled-components';
import { generateSvg } from '@libs/utils/generator/svg';
import { boxSet, colorSet, flexSet } from '@styles/mixin';
import theme from '@styles/theme';
import { TIconName } from '@interface/alias';

interface IDefault {
  leftIcon: TIconName;
  rightIcon: TIconName;
  leftOnClickFunction: () => void;
  rightOnClickFunction: () => void;
}

export default function gnb({
  leftIcon,
  rightIcon,
  leftOnClickFunction,
  rightOnClickFunction,
}: IDefault) {
  return (
    <StyledWrapper>
      <StyledIconBox onClick={leftOnClickFunction}>
        {generateSvg(leftIcon, theme.theme01)}
      </StyledIconBox>
      <StyledIconBox onClick={rightOnClickFunction}>
        {generateSvg(rightIcon, theme.theme01)}
      </StyledIconBox>
    </StyledWrapper>
  );
}

const StyledWrapper = styled.div`
  ${() => flexSet('space-between', 'center', 'row')};
  ${() => boxSet('100%', '80px')}
  ${() => colorSet('white', 'black')};
  padding: 0 15px;
`;

const StyledIconBox = styled.button`
  ${() => boxSet('auto', '100%', '0px')};
  padding: 20px;
  cursor: pointer;
`;
