import styled from 'styled-components'

export const ModalCard = styled.div`
 z-index: 99999;
 top: 45%;

 @media (min-width: 400px){
   left: 33%;
 }
 @media (max-width: 400px){
   left: 15%;
 }
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
 height:30vh;
 min-height: 200px;
`
export const ModalText = styled.div`
color:${props => props.red ? "red" : "black"};
 margin-bottom: 5%;
`
export const ModalInput = styled.input`
width:80%;
height:12%;
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
min-height: 40px;
background-color: transparent;
color: blue;
font-size: 120%;
border-left:${props => props.left ? ' 1px solid #A8B2B9' : "none"};
cursor:pointer;
`
export const ModalContainerButton = styled.div`
display:flex;
justify-content: space-between;
width:100%;
top:81%;
position: absolute;
`