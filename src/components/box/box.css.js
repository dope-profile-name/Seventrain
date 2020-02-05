import styled from 'styled-components';

export const Container = styled.div`
  background: purple;
  margin: 0 auto;
  height: 510px;
  maxHeight: 510px;
  minWidth: 720px;
  width: 100%;
  maxWidth: 840px;
  position: relative;



   #clock {
      border-top: 1px solid white;
      position: absolute;
      margin: 0 auto;
      bottom: 0;
      width: 90%;
      relative: relative;
   }

  #circle {
      position: absolute;
      background: transparent;
      border: 1px solid red;
      top: 90px;
      left: 315px;
      border-radius: 50%;
      height: 90px;
      width: 90px;
      margin: 0rem auto -18rem;
      z-index: 2;
      text-align: center;
      transform: rotate(20deg);
   }
   #circleO {
       background: transparent;
       border: 1px solid white;
       width: 200px;
       border-radius: 50%;
       height: 200px;
       top: 42px;
       left: 261px;
       position: absolute;
       margin: 0rem auto -18rem;
       z-index: 0;
       text-align: center;
       transform: rotate(20deg);
   }

   #star {
      display: none;
      background: red;
      width: 150px;
      height: 150px;
      position: relative;
      margin: 0rem auto -12rem;
      text-align: center;
      transform: rotate(20deg);
   }
   #star:before {
      content: "";
      position: absolute;
      top: 0;
      left: 0;
      height: 150px;
      width: 150px;
      background: red;
      transform: rotate(150deg);
   }

`;
