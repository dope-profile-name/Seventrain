import styled from 'styled-components';

export const Container = styled.header`
  display: flex;
  margin-bottom: 9rem;
  /*background: green;*/
  justify-content: space-between;
  align-items: center;
  padding: 1rem 4rem;


  a {
    font: 1.5rem Ubuntu;
    color: white;
    transition: color 0.2s ease;
    text-decoration: none;

    &:hover {
      color: inherit;
    }
  }
`;
