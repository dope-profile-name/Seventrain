import React from 'react';
import { Link } from 'gatsby';
import { Container } from './nav.css';

const Nav = () => (
  <Container>
    <ul>
      <li>
        <Link to="/">About</Link>
      </li>
      <li>
        <a href="#">Contact</Link>
      </li>
    </ul>
  </Container>
);

export default Nav;
