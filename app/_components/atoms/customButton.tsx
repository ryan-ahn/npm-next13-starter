'use client';

import styled from 'styled-components';
import { flexSet, boxSet, colorSet, fontSet } from '@styles/mixin';
import { ICustomButtonProps } from '@interface/props';
import { ICustomButtonContentBox } from '@interface/attribute';

export default function CustomButton({
  width,
  height,
  color,
  text,
}: ICustomButtonProps) {
  return (
    <Wrapper>
      <ContentBox attrWidth={width} attrHeight={height} attrColor={color}>
        <p>{text}</p>
      </ContentBox>
    </Wrapper>
  );
}

const Wrapper = styled.button``;

const ContentBox = styled.div<ICustomButtonContentBox>`
  ${() => flexSet('center', 'center', 'row')};
  ${props => boxSet(props.attrWidth, props.attrHeight, '20px')};
  ${props => colorSet('white', props.attrColor)};
  & > p {
    ${() => fontSet(14, 400, 20)};
  }
`;
