import styled from 'styled-components';

export const Container = styled.div`
  /*background: purple;*/
  margin: 0 auto;
  marginBottom: 15%;
  height: 600px;
  maxHeight: 510px;
  minWidth: 840px;
  width: 840px;
  maxWidth: 900px;
  position: relative;



   #clock {
      margin: 15% auto;
      position: relative;
      padding: 9px 0px 9px 9px;
      width: 92%;
   }

  #circle {
      position: absolute;
      background: transparent;
      border: 1px solid white;
      top: 90px;
      left: 375px;
      border-radius: 50%;
      height: 90px;
      width: 90px;
      margin: 0rem auto -18rem;
      z-index: 2;
      text-align: center;
      transform: rotate(20deg);
   }
   #circleO {
       background: black;
       opacity: 0.6;
       border: 1px solid white;
       width: 200px;
       border-radius: 50%;
       height: 200px;
       top: 42px;
       left: 321px;
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
