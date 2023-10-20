import baseStyled, {
  DefaultTheme,
  ThemedStyledInterface,
} from 'styled-components';

const myTheme: DefaultTheme = {
  flexSet,
  fontSet,
  minMedia,
  maxMedia,
  backgroundSet,
};

export type Theme = typeof myTheme;
export const styled = baseStyled as ThemedStyledInterface<Theme>;

export default myTheme;
