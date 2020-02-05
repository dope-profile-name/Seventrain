import styled, { keyframes } from 'styled-components';

const animate = keyframes`
   0% {
      transform: translate(1600px);
   }
   100% {
      transform: translateX(-100%);
   }
`;

export const Container = styled.div`
   margin: 0 auto;
   padding: 0;
   display: flex;
   justify-content: center;
   align-items: center;
   height: 300px;
   maxHeight: 300px;
   overflow: hidden;

   .box {
      border-top: 1px solid white;
      border-bottom: 1px solid white;
      display: flex;
      position: absolute;
      top: 54%;
      width: 800px;
      height: 210px;
      justify-content: center;
      align-items: center;
      background: black;
      opacity: 0.75;
      /*background-image: linear-gradient(#A1C381, #8AA291);*/
      overflow: hidden;
      transform-style: preserve-3d;
   }
   .box.box1
   {
      /*background: #673ab7;*/
      transform-origin: right;
      transform: perspective(300px) translateX(-50%) rotateY(-15deg);
   }
   .box.box1 h2
   {
      /*color: #fff;*/

   }
   .box.box2 h2
   {
      /*color: #fff;*/
      left: -100%;

   }
   .box.box2
   {
      /*background: #673ab7;*/
      /*background-image: linear-gradient(#A1C381, #8AA291);*/
      transform-origin: left;
      transform: perspective(300px) translateX(50%) rotateY(15deg);
   }
   .box h2 {
      color: white;
      position: absolute;
      margin: 0;
      padding: 0;
      white-space: nowrap;
      left: 0;
      font-size: 8em;
      font-family: Josefin Sans;
      animation: ${animate} 6s linear infinite;

   }
`;
