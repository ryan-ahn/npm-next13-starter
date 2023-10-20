import { css } from 'styled-components';
import {
  TAlignItems,
  TFlexDirection,
  TJustifyContent,
} from '@interface/alias';

// flex Set
export const flexSet = (
  justifyContent: TJustifyContent,
  alignItems: TAlignItems,
  flexDirection: TFlexDirection = 'row',
) => css`
  display: flex;
  flex-direction: ${flexDirection};
  justify-content: ${justifyContent};
  align-items: ${alignItems};
`;

// font Set
export const fontSet = (
  fontSize: number = 14,
  fontWeight: number = 400,
  lineHeight: number = 18,
) => css`
  font-size: ${fontSize}px;
  font-weight: ${fontWeight};
  line-height: ${lineHeight}px;
`;

// Background Set
export const backgroundSet = (url: string, size: string = 'cover') => css`
  background-image: url(${url});
  background-size: ${size};
  background-repeat: no-repeat;
  background-position: center center;
`;
