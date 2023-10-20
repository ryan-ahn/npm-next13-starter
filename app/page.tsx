'use client';

import { ThemeProvider } from 'styled-components';
import theme from '@styles/theme';
import MainContainer from '@containers/main';

export default function main() {
  return (
    <ThemeProvider theme={theme}>
      <MainContainer />
    </ThemeProvider>
  );
}
