
import styled from 'styled-components'


export const NavBar = styled.div`
 display: flex;
 font-weight: bold;
 color: black;
 margin-left: 5%;
 font-weight: lighter;
 font-size: 150%;
 justify-content: space-between;
 align-items: center;
`
export const ControlPanelButton = styled.button`
 color: red;
 background-color: transparent;
 border: none;
 cursor: pointer;
 font-size: 150%;
 margin-right: 7%;
`
export const ControlPanel = styled.div`
 display: inline-block;
 width:100%;
 max-width: 740px;
 background: #f2f3f3ee;
 border-top: 1px solid #e1e1e1 ; 
 border-bottom: 1px solid #e1e1e1;
`

export const MonthYearBar = styled.div`
 display: flex;
 justify-content: space-between;
 margin-left: 13%;
 margin-right: 1%;
 margin-bottom: 1%;
`
export const DateBar = styled.div`
 display: flex;
 justify-content: space-between;
 margin-left: 12.5%;
 margin-right: 7%;
 margin-bottom: 2%;
 margin-top: 2%;
 color: black;
 font-size: 105%;
`
export const MonthYear = styled.div`
 display: flex;
 align-items: center;
 color: black;
 margin-right: 8%;
`
export const ThisDay = styled.div`
 display: flex;
 background:${props => props.red ? "red" : 'transparent'};
 width:35px;
 height:35px;

 justify-content: center;
 align-items: center;
 border-radius:${props => props.red ? "50%" : 'none'}; 
 color:${props => props.red ? "white" : "black"}; 
`
export const DayBar = styled.div`
 display: flex;
 justify-content: space-between;
 color: black;
 margin-left: 14.5%;
 margin-right: 8%;
 margin-top: 2%;
 font-size: 80%;
`
