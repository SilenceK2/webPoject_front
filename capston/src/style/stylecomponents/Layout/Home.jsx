import styled from "styled-components";

export const PageContainer = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  margin: 0 20px; /* 좌우 여유 공간 */
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
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.1), 0 1px 2px rgba(0, 0, 0, 0.1); /* 연한 그림자 추가 */
  margin-bottom: 20px;
  width: 100%;
  max-height: ;
`;
export const TodoListContent = styled.div`
  flex: 1;
  display: flex;
  border-radius: 20px;
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.1), 0 1px 2px rgba(0, 0, 0, 0.1); /* 연한 그림자 추가 */
  margin-bottom: 20px;
  width: 100%;
`;

export const LocationContent = styled.div`
  flex: 1;
  display: flex;
  border-radius: 20px;
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.1), 0 1px 2px rgba(0, 0, 0, 0.1); /* 연한 그림자 추가 */
  margin-bottom: 20px;
  width: 100%;
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
    font-size: 20px;
    text-align: center;
    width: 100%;
  }
  & > div:nth-child(2) {
    font-weight: 13px;
    font-size: 15px;
    text-align: center;
    width: 100%;
  }
  & > div:nth-child(3) {
    background-image: url("/images/sun.png");
    width: 100%;
    height: 60%;
    background-color: gray;
    flex-grow: 1;
  }
`;

export const WheaterTitle = styled.div`
  flex: 0.7;
  border-radius: 20px;
  width: 50%;
  max-height: 100%;
  flex-direction: column;
  text-align: center;
  margin-top: 20px;
`;

export const WheaterProgress = styled.div`
  flex: 1;
  border-radius: 20px;
  justify-content: flex-end;
`;
