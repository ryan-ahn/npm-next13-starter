'use client';

import styled from 'styled-components';
import Image from 'next/image';
import { boxSet, colorSet, flexSet } from '@styles/mixin';
import AtomsCustomButton from '@components/atoms/button/custom';

export default function gnb() {
  return (
    <Wrapper>
      <Image
        src="/static/icons/logo.png"
        alt="logo-text"
        width={50}
        height={40}
      />
      <AtomsCustomButton
        text="테스트"
        width="70px"
        height="35px"
        color="#6f86d6"
      />
    </Wrapper>
  );
}

const Wrapper = styled.div`
  ${() => flexSet('space-between', 'center', 'row')};
  ${() => boxSet('100%', '80px')}
  ${() => colorSet('white', 'black')};
  padding: 0 20px;
`;
