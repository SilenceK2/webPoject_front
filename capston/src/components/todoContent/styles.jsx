import styled from "styled-components";

export const TodoListTitle = styled.div`
  width: 100%;
  height: 10%;
  margin: 20px 20px;
  display: flex;
  flex: 1;
  flex-direction: row;
  & > div:nth-child(1) {
    background-image: url("/images/todoLogo.svg");
    width: 30px;
    height: 32px;
    background-position: center;
    background-repeat: no-repeat;
  }
`;

export const TodoListTitleContet = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 10px;
  margin-top: -3px;
  & > div:nth-child(1) {
    font-size: 18px;
    font-weight: bold;
    color: black;
  }
  & > div:nth-child(2) {
    font-size: 13px;
    font-weight: light;
    color: gray;
  }
`;

export const TodoListBoard = styled.div`
  display: flex;
  flex-grow: 1;
  justify-content: center;
  flex-direction: column;
  align-items: center;
`;

export const TodoListMonth = styled.div`
display: flex;
justify-content: center;
width: 90%;
`

export const TodoListWeek = styled.div`
display: flex;
flex-direction: row;
margin-top: 10px;
width: 90%;
margin-bottom: 10px;
background-color: lightgray;
border-radius: 20px;
font-size: 16px;
`

export const TodoListSat = styled.div`
display: flex;
flex-grow:1;
justify-content: center;
align-items: center;
color: blue;

`
export const TodoListSun = styled.div`
display: flex;
flex-grow:1;
justify-content: center;
align-items: center;
color: red;
`

export const TodoListMon = styled.div`
display: flex;
flex-grow:1;
justify-content: center;
align-items: center;

`
export const TodoListTue = styled.div`
display: flex;
flex-grow:1;
justify-content: center;
align-items: center;

`
export const TodoListWed = styled.div`
display: flex;
flex-grow:1;
justify-content: center;
align-items: center;

`
export const TodoListThu = styled.div`
display: flex;
flex-grow:1;
justify-content: center;
align-items: center;

`
export const TodoListFri = styled.div`
display: flex;
flex-grow:1;
justify-content: center;
align-items: center;

`
export const TodoListDateBox = styled.div`
  border-top: 1px solid black;
  flex: 1;
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  width: 90%;
  justify-content: center;
  
  align-items: center;
  & > div {
    
    width: 100%;
    height: 100%;
  
    
  }
`;

export const TodoListDate = styled.div`
display: flex;
flex; 1;
justify-content: center;
font-size: 16px;
height: 20%;
margin-top: 10px;
flex-direction: column;
align-items: center;
&: hover{
  background-color: lightgray;
  border-radius: 20px;
}
`

export const TodoListDetail = styled.div`
display: flex;
flex: 1;
jstify-content: center;
align-items: center;
width:100%;
`

export const Redcolor = styled.div`
color: red;
`

export const Bluecolor= styled.div`
color: blue;
`


export const Topsection = styled.section`
  display: flex;

`;

export const BottomSection = styled.section`
  display: flex;
  flex:1;
  flex-direction: column;
`

export const ModalBackdrop = styled.div`
position: fixed;
top: 0;
bottom: 0;
left: 0;
right: 0;
width: 100%;
height: 100%;
background-color: rgba(0, 0, 0, 0.4);
display: flex;
justify-content: center;
align-items: center;
`

export const ModalContainer = styled.div`
display : flex;
justify-content: center;
align - items: center;
height: 70%;
flex-direction: column;
background-color: white;
width: 80%;
border-radius: 20px;
`

export const ModalTitle = styled.div`
justify-content: center;
display: flex;
flex: 1;
margin-top: 20px;
`
export const ModalMonth = styled.div`
display: flex;
flex: 1;
justify-content: center;
`


