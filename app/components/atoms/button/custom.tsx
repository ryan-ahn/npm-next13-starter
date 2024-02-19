'use client';

import styled from 'styled-components';
import { flexSet, boxSet, colorSet, fontSet } from '@styles/mixin';
import { ICustomButtonProps } from '@interface/props';
import { ICustomButtonContentBox } from '@interface/attribute';

export default function customButton({ color, text }: ICustomButtonProps) {
  return (
    <Wrapper>
      <ContentBox $color={color}>
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
  padding: 15px 20px;
  ${props => colorSet('white', props.$color)};
  & > p {
    ${() => fontSet(16, 500, 20)};
  }
`;
