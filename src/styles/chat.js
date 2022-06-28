import styled from "styled-components";



export const DivConteinter = styled.div `
height: 95vh;
display: flex;
flex-direction: column;
justify-content: space-between;
padding: 20px 10px;
background-color: #f6fffb;
`
export const Form = styled.form`

display: flex;
flex-direction: row;
justify-content: center;
gap: 10px;

`

export const Input = styled.input`
outline: none;
width: 80%;
height: 25px;
border: solid #B4FFD8   ;
border-radius: 20px;
`

export const ButtonSend = styled.button`
background: none;
	color: inherit;
	border: none;
	padding: 0;
	font: inherit;
	cursor: pointer;
	outline: inherit;
`
export const ChatDiv = styled.div`
display: flex;
flex-direction: column;
align-items: flex-end;
padding: 10px 10px;
height: 100%;
justify-content: flex-end;

`
export const List = styled.li`
list-style: none;
background-color: #b4ffd8;
padding: 5px 10px;
border-radius: 10px;

`
export const Ul = styled.ul`
display: flex;
flex-direction: column;
gap: 20px;
`