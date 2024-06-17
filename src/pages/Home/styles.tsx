import styled from "styled-components";

export const PageContainer = styled.section`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  margin: 0 20px;
  width: 100%;
  height: 100%;
  margin-top: 40px;
  margin-bottom: 100px;
  &::-webkit-scrollbar {
    display: none;
  }
`;

export const Content = styled.section`
  flex-grow: 1;
  width: 90%;
  height: auto;

  display: flex;
  flex-direction: column;
  align-items: center;
  &::-webkit-scrollbar {
    display: none;
  }
`;

export const WheaterContent = styled.div`
  flex: 0.3;
  flex-shrink: 0;
  display: flex;
  margin-right: 0px;
  border-radius: 20px;
  box-shadow: 0 0.5px 5px rgba(0, 0, 0, 0.1), 0 0.5px 5px rgba(0, 0, 0, 0.1); /* 연한 그림자 추가 */

  padding-bottom: 40px;
  overflow: hidden;
  max-height: 220px;
`;
export const TodoListContent = styled.div`
  flex: 1;
  flex-shrink: 0;
  display: flex;
  border-radius: 20px;
  overflow: hidden;
  flex-direction: column;
  box-shadow: 0 0.5px 5px rgba(0, 0, 0, 0.1), 0 0.5px 5px rgba(0, 0, 0, 0.1);
  margin-bottom: 20px;
  width: 100%;
  flex-shrink: 0;
  min-height: 200px;
`;

export const LocationContent = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 10px;
  border-radius: 20px;
  box-shadow: 0 0.5px 5px rgba(0, 0, 0, 0.1), 0 0.5px 5px rgba(0, 0, 0, 0.1); /* 연한 그림자 추가 */
  margin-bottom: 100px;

  width: 100%;
  // min-height: 220px;
  flex-shrink: 0; /* 내용이 넘칠 때 축소되지 않도록 */
  // max-height: 220px;
`;

export const LocationTitle = styled.div`
  width: 100%;
  height: 10%;
  margin: 20px 20px;
  display: flex;
  flex: 0.3;
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
export const MainContent = styled.div<{ show: any }>`
  display: flex;
  flex-direction: column;

  width: 100%;
  max-height: 500px;
  min-height: 180px;
  opacity: ${({ show }) => (show ? 1 : 0)};
  transition: opacity 1s ease;
`;

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
  overflow: hidden;
  outline: none;
`;

export const LogoutDiv = styled.div`
  display: flex;
  width: 80%;
  min-height: 110px;
  text-align: right;
  flex-direction: row;
  justify-content: flex-end;
  color: gray;
  font-weight: ligther;
`;
