import styled, { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  body {
   display: flex;
   font-family: Montserrat,Arial, Verdana;
   font-size: 132%;
   font-weight: bold;
   color: #A8B2B9;
   @media (max-width: 740px) { 
      justify-content: left;
   }
   @media (min-width: 740px) { 
      justify-content: center;
   }
}
`
export const Calendar = styled.div`

 display: block;
 //  width: ${props => props.width < 740 ? props.width : 740}px;
  @media (max-width: 740px) { 
   width: 100vw;
   min-width: 270px;
 }
  @media (min-width: 740px) { 
   width: 740px;
 }
`
export const CalendarContainer = styled.div`
 display: flex;
 border: 1px solid #A8B2B9;
 margin-left:10px;
 position: relative;
 flex-direction: column;
 height:${props => props.height - 30}px;
`