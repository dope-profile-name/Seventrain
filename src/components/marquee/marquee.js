import React from 'react';
import styled from 'styled-components';
import { Container } from './marquee.css';
import Title from 'components/title';


const Marquee = () => (
   <Container>
      <div className="box box1">
         <Title as="h2">Stay Tuned</Title>
      </div>
      <div className="box box2">
         <Title as="h2">Stay Tuned</Title>
      </div>
   </Container>
)



export default Marquee;
