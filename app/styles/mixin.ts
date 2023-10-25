import { css } from 'styled-components';
import { TAlignItems, TFlexDirection, TJustifyContent } from '@interface/alias';

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

// Box Set
export const boxSet = (
  width: string,
  height: string,
  borderRadius: string = '0px',
) => css`
  width: ${width};
  height: ${height};
  border-radius: ${borderRadius};
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

// Color Set
export const colorSet = (color: string, background: string) => css`
  color: ${color};
  background: ${background};
`;

// Background Set
export const backgroundSet = (url: string, size: string = 'cover') => css`
  background-image: url(${url});
  background-size: ${size};
  background-repeat: no-repeat;
  background-position: center center;
`;
