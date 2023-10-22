import styled from 'styled-components';
import { flexSet, boxSet, colorSet, fontSet } from '@styles/mixin';
import { CONTENT_PAGE } from '@constants/data/content';

export default function page() {
  return (
    <Wrapper>
      <ContentBox>
        <p>{CONTENT_PAGE.main}</p>
      </ContentBox>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  ${() => flexSet('center', 'center', 'row')};
  ${() => boxSet('100%', 'calc(100vh - 80px)')};
  ${() => colorSet('white', 'black')};
`;

const ContentBox = styled.div`
  ${() => flexSet('center', 'center', 'row')};
  white-space: pre-wrap;
  & > p {
    ${() => fontSet(50, 500, 60)};
    text-align: center;
  }
`;
