
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
 width: 740px;
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
 width: 8%;
 height: 47px;
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
export const ModalCard = styled.div`
 z-index: 99999;
 top: 48%;
 left: 28%;
 transform: scale(${props => props.scale ? 1 : 0});
 background: #f2f3f3ee;
 border: 1px solid #A8B2B9;
 position: absolute;
 border-radius: 20px;
`
export const ModalContainer = styled.div`
 display:flex;
 flex-direction: column;
 align-items: center;
 justify-content: center;
 width:350px;
 height:250px;
`
export const ModalText = styled.div`
color:${props => props.red ? "red" : "black"};
 margin-bottom: 5%;
`
export const ModalInput = styled.input`
width:300px;
height:30px;
text-align: left;
caret-color: blue;
outline-style: none;
border-color:#A8B2B9;
font-size: 110%;
`
export const ModalButton = styled.button`
border-bottom:none;
border-right:none;
border-color:#A8B2B9;
width:350px;
height:50px;
background-color: transparent;
color: blue;
font-size: 120%;
border-left:${props => props.left ? ' 1px solid #A8B2B9' : "none"};
cursor:pointer;
`
export const ModalContainerButton = styled.div`
display:flex;
justify-content: space-between;
width:350px;
top:200px;
position: absolute;
`