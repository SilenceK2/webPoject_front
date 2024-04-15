import styled from "styled-components";

export const PageContainer = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  margin: 0 20px;
  margin-top: 120px;
  .scroll {
    overflow: hidden;
  }
`;

export const Content = styled.div`
  flex: 1;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const WheaterContent = styled.div`
  flex: 1;
  display: flex;
  border-radius: 20px;
  box-shadow: 0 0.5px 5px rgba(0, 0, 0, 0.1), 0 0.5px 5px rgba(0, 0, 0, 0.1); /* 연한 그림자 추가 */
  margin-bottom: 20px;
  width: 100%;
  max-height: 200px;
`;
export const TodoListContent = styled.div`
  flex: 1;
  display: flex;
  border-radius: 20px;
  flex-direction: column;
  box-shadow: 0 0.5px 5px rgba(0, 0, 0, 0.1), 0 0.5px 5px rgba(0, 0, 0, 0.1); /* 연한 그림자 추가 */
  margin-bottom: 20px;
  width: 100%;
  min-height: 100px;
  max-height: 400px;
`;

export const LocationContent = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  border-radius: 20px;
  box-shadow: 0 0.5px 5px rgba(0, 0, 0, 0.1), 0 0.5px 5px rgba(0, 0, 0, 0.1); /* 연한 그림자 추가 */
  margin-bottom: 20px;
  width: 100%;
  max-height: 200px;
`;

export const WheaterImoge = styled.div``;

export const WheaterTitle = styled.div``;

export const WheaterIcon = styled.div``;

export const LocationTitle = styled.div`
  width: 100%;
  height: 10%;
  margin: 20px 20px;
  display: flex;
  flex: 1;
  flex-direction: row;
  & > div:nth-child(1) {
    background-image: url("/images/loadLogo.svg");
    width: 30px;
    height: 40px;
    background-position: center;
    background-repeat: no-repeat;
  }
`;

export const LocationTitleContet = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 10px;
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

export const LocationTranspost = styled.div`
  width: 100%;
  height: 30%;
  background-color: gray;
`;

export const LocationTime = styled.div`
  width: 100%;
  height: 30%;
  background-color: gray;
`;

export const TodoListTitle = styled.div`
  width: 90%;
  height: 10%;
  margin: 20px 20px;
  display: flex;
  flex-direction: row;
  & > div:nth-child(1) {
    background-image: url("/images/todoLogo.svg");
    width: 30px;
    height: 40px;
    background-position: center;
    background-repeat: no-repeat;
  }
`;

export const TodoListTitleContet = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 10px;
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

export const TodoListBoard = styled.form`
  display: flex;
  flex-direction: row;
 justify-content: center;
 height: 10%;
 padding-bottom: 10px;
 
`;


export const TodoListTypingContent = styled.div`
display: flex;
width: 100%
heigh: 10%;
justify-content: center;
flex-direction: row;
border-bottom: 1px solid black;
`

export const TodoInput = styled.input`
width: 60%;
  max-height: 20px;
  padding: 10px;
  font-size: 16px;
  border: none;
  border-radius: 10px;
  margin-top: 10px;
  margin-right:10px;
  background-color: white-gray;
`
export const TodoInputButton = styled.input`
  width: 20%;
  height: 13%;
  background: #007bff;
  border: none;
  padding: 10px;
  font-size: 14px;
  color: #ffffff;
  border-radius: 10px;
  cursor: pointer;
  margin-top: 10px;
  font-weight: bolder;
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.1);
`;
export const TodoList = styled.div`
display: flex;
flex:1;
width: 100%;


`

 export const TodoListShow = styled.div`
 flex: 1;
 display: flex;
 padding:10px;
 flex-direction: row;
 justify-content: center;
 margin-top: 10px;
 `
 export const TodoListText = styled.div`


min-height: 1px;
 display: flex;
 flex: 1;
 padding-top: 10px;
 padding-bottom: 20px;
 flex-direction: column;
 border-top: 1px solid black;
  `
  export const ToDoListId = styled.div`
    display: flex;
    flex-grow: 1;
    width: 10%
    flex-direction; center;
    border-bottom: 1px solid black;
  `

  export const ToDoListWrite = styled.div`
  display: flex;
    flex-grow: 1;
    width: 60%;
    flex-direction; center;
    border-bottom: 1px solid black;
  `

  export const ToDoListChecked = styled.input`
  display: flex;
    flex-grow: 1;
    width: 10%;
    flex-direction; center;
    border-bottom: 1px solid black;
  `


