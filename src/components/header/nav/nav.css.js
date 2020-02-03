import styled from 'styled-components';

export const Container = styled.nav`
  ul {
    display: flex;
    list-style: none;
    padding: 0;

    li {
      font: 6rem Ubuntu;
      font-size: 1.3rem;

      & + li {
        margin-left: 2rem;
      }
    }
  }
`;
