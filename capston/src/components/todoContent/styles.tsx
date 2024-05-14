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
`;

export const TodoListWeek = styled.div`
  display: flex;
  flex-direction: row;
  margin-top: 10px;
  padding: 3px;
  width: 90%;
  margin-bottom: 10px;
  background-color: #5c8be1;
  border-radius: 5px;
  font-size: 16px;
  color: white;
  font-weight: bold;
`;

export const TodoListSat = styled.div`
  display: flex;
  flex-grow: 1;
  justify-content: center;
  align-items: center;
  color: blue;
`;
export const TodoListSun = styled.div`
  display: flex;
  flex-grow: 1;
  justify-content: center;
  align-items: center;
  color: blue;
`;

export const TodoListMon = styled.div`
  display: flex;
  flex-grow: 1;
  justify-content: center;
  align-items: center;
`;
export const TodoListTue = styled.div`
  display: flex;
  flex-grow: 1;
  justify-content: center;
  align-items: center;
`;
export const TodoListWed = styled.div`
  display: flex;
  flex-grow: 1;
  justify-content: center;
  align-items: center;
`;
export const TodoListThu = styled.div`
  display: flex;
  flex-grow: 1;
  justify-content: center;
  align-items: center;
`;
export const TodoListFri = styled.div`
  display: flex;
  flex-grow: 1;
  justify-content: center;
  align-items: center;
`;
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
`;

export const TodoListDetail = styled.div`
  display: flex;
  flex: 1;
  jstify-content: center;
  align-items: center;
  width: 100%;
`;

export const Redcolor = styled.div`
  color: red;
`;

export const Bluecolor = styled.div`
  color: blue;
`;

export const Topsection = styled.section`
  display: flex;
`;

export const BottomSection = styled.section`
  display: flex;
  flex: 1;
  flex-direction: column;
  margin-bottom: 20px;
`;

export const ModalBackdrop = styled.div`
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  width: 100vw;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.4);
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  outline: none;
`;

export const ModalContainer = styled.div`
  display: flex;
  height: 150vw;
  flex-direction: column;
  background-color: white;
  width: 70%;
  align-items: center;
  border-radius: 20px;
  padding: 20px;
  @media (min-width: 1200px) {
    height: 40vw;
    width: 22vw;
  }
  & > div:nth-child(1) {
    margin-top: -70px;
    margin-bottom: 30px;
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: flex-end;
    text-align: right;
  }
`;

export const ModalTopSection = styled.section`
  flex: 0.3;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const ModalBottomSection = styled.section`
  flex-grow: 1;
  width: 100%;
  display: flex;
  justify-content: center;
  flex-direction: column;
  & > label {
    width: 100%;
    text-align: right;
    margin-bottom: 10px;
  }
`;

export const ModalInput = styled.input`
  flex: 1;
  border-radius: 50px;
  outline: none;
  font-size: 15px;
  font-size: 16px;
  border: none;
  border-radius: 10px;
  margin-bottom: 10px;
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.1);
`;

export const ModalButton = styled.div`
  display: flex;
  flex-basis: 40px;
  flex-direction: row;
  justify-content: flex-end;
  & > button {
    background-color: black;
    border: none;
    border-radius: 10px;
    width: 60px;
    height: 30px;
    color: white;
    font-weight: bold;
    margin-left: 15px;
  }
`;
