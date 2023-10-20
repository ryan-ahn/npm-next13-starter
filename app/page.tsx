"use client";

import styled from "styled-components";
import MainContainer from "@containers/main";

export default function main() {
  return (
    <Wrapper>
      <MainContainer />
    </Wrapper>
  );
}

const Wrapper = styled.div`
  color: red;
`;
