'use client';

import styled from 'styled-components';
import { flexSet, boxSet, colorSet, fontSet } from '@styles/mixin';
import { IAtomsCustomButtonProps } from '@interface/props';
import { ICustomButtonContentBox } from '@interface/attribute';

export default function customButton({
  color,
  text,
  onClickFunction,
}: IAtomsCustomButtonProps) {
  /* default render */
  return (
    <Wrapper>
      <ContentBox $color={color} onClick={onClickFunction}>
        <p>{text}</p>
      </ContentBox>
    </Wrapper>
  );
}

const Wrapper = styled.button`
  position: relative;
`;

const ContentBox = styled.div<ICustomButtonContentBox>`
  ${() => flexSet('center', 'center', 'row')};
  ${() => boxSet('auto', 'auto', '50px')};
  ${props => colorSet('white', props.$color)};
  padding: 15px 20px;
  cursor: pointer;
  & > p {
    ${() => fontSet(16, 500, 20)};
  }
`;
