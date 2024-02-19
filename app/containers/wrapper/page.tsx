'use client';

import styled from 'styled-components';
import { IRootLayout } from '@interface/layout';

export default function page({ children }: IRootLayout) {
  return <StyledWrapper>{children}</StyledWrapper>;
}

const StyledWrapper = styled.div``;
