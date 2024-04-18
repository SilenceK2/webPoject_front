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
  width: 90%;
  border-bottom: 1px solid black;
  padding-bottom: 10px;
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
  color: red;
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
  flex: 1;
  justify-content: center;
  align-items: center;
  font-size: 18px;
`;

export const Redcolor = styled.div`
  color: red;
`;

export const Topsection = styled.section`
  display: flex;
`;

export const BottomSection = styled.section`
  display: flex;
  flex-grow: 1;
  flex: 1;
  flex-direction: column;
`;
