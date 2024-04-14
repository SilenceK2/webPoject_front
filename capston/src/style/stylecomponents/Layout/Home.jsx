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

export const WheaterImoge = styled.div`
  flex: 1;
  border: none;
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-top: 20px;
  width: 50%;
  max-height: 100%;
  & > div:nth-child(1) {
    font-weight: bold;
    font-size: 18px;
    text-align: center;
    width: 100%;
  }
  & > div:nth-child(2) {
    font-weight: 13px;
    font-size: 14px;
    text-align: center;
    margin-left: -9px;
    width: 100%;
    color: gray;
  }
  & > div:nth-child(3) {
    margin-top: 20px;
    margin-bottom: 60px;
    background-image: url("/images/sun.svg");
    width: 100%;
    height: 50%;
    flex-grow: 1;
    background-position: center; /* 이미지를 가운데 정렬 */
    background-repeat: no-repeat; /* 이미지 반복하지 않음 */
  }
`;

export const WheaterTitle = styled.div`
  flex: 0.7;
  border-radius: 20px;
  width: 50%;
  display: flex;
  flex-direction: column;
  flex: 1;
  max-height: 50%;
  flex-direction: column;
  margin-top: 20px;
  & > div:nth-child(1) {
    width: 80%;
    font-size: 15px;
    color: gray;
    display: flex;
    justify-content: flex-end;
    padding: 5px;
    margin-bottom: 20px;
    margin-top: -10px;
  }
  & > div:nth-child(2) {
    font-weight: bolder;
    font-size: 17px;
    text-align: center;
  }
  & > div:nth-child(3) {
    font-weight: bolder;
    font-size: 17px;
    text-align: center;
  }
`;

export const WheaterProgress = styled.div`
  flex-grow: 1;
  align-items: flex-end;
  border-radius: 20px;
  justify-content: flex-end;
  width: 100%;
  margin-bottom: 10px;
  max-height: 100px;
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

export const TodoListBoard = styled.div`
  display: flex;
  flex-grow: 1;
  justify-content: center;
  flex-direction: column;
  align-items: center;
`;
