import 'styled-components';
import { backgroundSet, flexSet, fontSet } from './mixin';

declare module 'styled-components' {
  export interface DefaultTheme {
    flexSet: typeof flexSet;
    fontSet: typeof fontSet;
    backgroundSet: typeof backgroundSet;
  }
}
