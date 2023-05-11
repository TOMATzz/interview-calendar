import styled from 'styled-components'

const widthCalendar = 740;

export const GridContainer = styled.div`
 display: flex;
 overflow: auto;
`
export const Row = styled.div`
 display: grid;
 @media (min-width: 2400px){
   grid-auto-rows: 70px;
 }
 @media (max-width: 2400px){
   grid-auto-rows: 80px;
 }
@media (max-width: 1900px){
   grid-auto-rows: 82px;
 }
 @media (max-width: 1600px){
   grid-auto-rows: 82px;
 }
 @media (max-width: 1400px){
   grid-auto-rows: 85px;
 }
@media (max-width: 1200px){
   grid-auto-rows: 85px;
 }
 @media (max-width: 1000px){
   grid-auto-rows: 85px;
 }
@media (max-width: 800px){
   grid-auto-rows: 85px;
 }
 @media (max-width: 625px){
   grid-auto-rows: 70px;
 }
 @media (max-width: 600px){
   grid-auto-rows: 70px;
 }
 @media (max-width: 575px){
   grid-auto-rows: 57px;
 }
 @media (max-width: 525px){
   grid-auto-rows: 57px;
 }
 @media (max-width: 500px){
   grid-auto-rows: 55px;
 }
 @media (max-width: 475px){
   grid-auto-rows: 52px;
 }@media (max-width: 450px){
   grid-auto-rows: 45px;
 }
 @media (max-width: 425px){
   grid-auto-rows: 45px;
 }
 @media (max-width: 400px){
   grid-auto-rows: 40px;
 }
 @media (max-width: 375px){
   grid-auto-rows: 40px;
 }
 @media (max-width: 350px){
   grid-auto-rows: 35px;
 }
 @media (max-width: 325px){
   grid-auto-rows: 32px;
 }
 @media (max-width: 300px){
   grid-auto-rows: 30px;
 }
 @media (max-width: 275px){
   grid-auto-rows: 27px;
 }
 grid-template-columns: repeat(7, 1fr); 
`

export const Cell = styled.div`
  border-right: 1px solid #e1e1e1;
  border-top: 1px solid #e1e1e1 ; 
  ${props => props.value === '23:00' ? 'border-bottom:1px solid #e1e1e1' : 'border-bottom: none'};
  overflow:hidden;
  background-color:white;
`
export const CellActive = styled.button`
 height: 90%;
 width: 90%;
 margin-top:4%;
 margin-left:5%;
 background-color: #ddd7ee; 
 border:none; 
 cursor:pointer;
 &:focus{background-color: #c0b0ee; }
`
export const GridTimeline = styled.div`
 display: grid;
 @media (min-width: 2400px){
   grid-auto-rows: 70px;
 }
 @media (max-width: 2400px){
   grid-auto-rows: 80px;
 }
@media (max-width: 1900px){
   grid-auto-rows: 82px;
 }
 @media (max-width: 1600px){
   grid-auto-rows: 82px;
 }
 @media (max-width: 1400px){
   grid-auto-rows: 85px;
 }
@media (max-width: 1200px){
   grid-auto-rows: 85px;
 }
 @media (max-width: 1000px){
   grid-auto-rows: 85px;
 }
@media (max-width: 800px){
   grid-auto-rows: 85px;
 }
 @media (max-width: 625px){
   grid-auto-rows: 70px;
 }
 @media (max-width: 600px){
   grid-auto-rows: 70px;
 }
 @media (max-width: 575px){
   grid-auto-rows: 57px;
 }
 @media (max-width: 550px){
   grid-auto-rows: 57px;
 }
 @media (max-width: 525px){
   grid-auto-rows: 57px;
 }
 @media (max-width: 500px){
   grid-auto-rows: 54.9px;
 }
 @media (max-width: 475px){
   grid-auto-rows: 51.9px;
 }@media (max-width: 450px){
   grid-auto-rows: 44.9px;
 }
 @media (max-width: 425px){
   grid-auto-rows: 44.8px;
 }
 @media (max-width: 400px){
   grid-auto-rows: 39.8px;
 }
 @media (max-width: 375px){
   grid-auto-rows: 39.8px;
 }
 @media (max-width: 350px){
   grid-auto-rows: 34.7px;
 }
 @media (max-width: 325px){
   grid-auto-rows: 31.7px;
 }
 @media (max-width: 300px){
   grid-auto-rows: 29.7px;
 }
 @media (max-width: 275px){
   grid-auto-rows: 26.7px;
 }
 grid-template-columns: repeat(1, 1fr);  
 width:${widthCalendar / 100 * 8}%;
 margin-left: 1%;
 margin-top: 1.75%;
`
export const Grid = styled.div`
 width: ${widthCalendar / 100 * 92}%;
 margin-top: 3.5%;
 margin-right: 1%;
 height: 100vh;
`