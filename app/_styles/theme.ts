import baseStyled, { ThemedStyledFunction } from 'styled-components';
import { flexSet, boxSet, fontSet, colorSet, backgroundSet } from './mixin';

const theme = {
  flexSet,
  boxSet,
  fontSet,
  colorSet,
  backgroundSet,
};

export type TTheme = typeof theme;
export const styled = baseStyled as ThemedStyledFunction<TTheme>;
