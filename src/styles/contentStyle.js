import styled from 'styled-components'

const widthCalendar = 740;

export const GridContainer = styled.div`
 display: flex;
 min-width: ${widthCalendar}px;
 overflow: auto;
 height: 70vh;
 @media (max-width: 740px) {
 height: 150vh;
}
`
export const Row = styled.div`
 display: grid;
 grid-auto-rows: 75px;
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
 grid-auto-rows: 75px;
 grid-template-columns: repeat(1, 1fr);  
 width:${widthCalendar / 100 * 8}%;
 margin-left: 1%;
 margin-top: 1.75%;
`
export const Grid = styled.div`
 width: ${widthCalendar / 100 * 92}%;
 margin-top: 3.5%;
 margin-right: 1%;
`