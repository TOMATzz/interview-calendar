import styled, { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  body {
   font-family: Montserrat,Arial, Verdana;
   font-size: 132%;
   font-weight: bold;
   color: #A8B2B9;
    min-height: 1px;

   touch-action: pan-x pan-y;
  height: 100% 
`

export const Calendar = styled.div`

 display: flex;
 justify-content: center;
 @media (max-width: 740px) {
 justify-content: left;

  }
  
`
export const CalendarContainer = styled.div`
 display: flex;
 border: 1px solid #A8B2B9;
 margin-left:10px;
 position: relative;
 flex-direction: column;
`