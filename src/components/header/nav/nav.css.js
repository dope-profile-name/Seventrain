import styled from 'styled-components';

export const Container = styled.nav`
  ul {
    display: flex;
    list-style: none;
    padding: 0;

    li {
      font: 6rem Ubuntu;


      & + li {
        margin-left: 2rem;
      }
    }
  }
`;
