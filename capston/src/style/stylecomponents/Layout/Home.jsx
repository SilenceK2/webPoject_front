import styled from "styled-components";

export const PageContainer = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  margin: 0 20px;
  margin-top: 120px;
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
  max-height: 200px;
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
export const MainContent = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  margin-bottom: 20px;
  width: 100%;
  max-height: 120px;
`;
