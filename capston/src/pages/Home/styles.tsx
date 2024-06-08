import styled from "styled-components";

export const PageContainer = styled.section`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  margin: 0 24px;
  letter-spacing: -1px;
`;

export const Content = styled.section`
  flex: 1;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const WheaterContent = styled.div`
  flex: 0.3;
  flex-shrink: 0;
  display: flex;
  margin-right: 0px;
  border-radius: 20px;
  box-shadow: 0 0.5px 5px rgba(0, 0, 0, 0.1), 0 0.5px 5px rgba(0, 0, 0, 0.1); /* 연한 그림자 추가 */
  margin-bottom: 20px;
  width: 100%;
  min-height: 220px;
  max-height: 220px;
`;
export const TodoListContent = styled.div`
  flex: 0.3;
  flex-shrink: 0;
  display: flex;
  margin-top: 80px;
  border-radius: 20px;
  flex-direction: column;
  box-shadow: 0 0.5px 5px rgba(0, 0, 0, 0.1), 0 0.5px 5px rgba(0, 0, 0, 0.1); /* 연한 그림자 추가 */
  margin-bottom: 20px;
  width: 100%;

  flex-shrink: 0; /* 내용이 넘칠 때 축소되지 않도록 */
  min-height: 200px;
`;

export const LocationContent = styled.div`
  display: flex;
  flex-direction: column;

  border-radius: 20px;
  box-shadow: 0 0.5px 5px rgba(0, 0, 0, 0.1), 0 0.5px 5px rgba(0, 0, 0, 0.1); /* 연한 그림자 추가 */
  margin-bottom: 20px;
  width: 100%;
  min-height: 220px;
  flex-shrink: 0; /* 내용이 넘칠 때 축소되지 않도록 */
  max-height: 220px;
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
  flex: 1;
  display: flex;
  flex-direction: column;
  margin-bottom: 20px;
  width: 100%;
  max-height: 500px;
  min-height: 180px;
  opacity: ${({ show }) => (show ? 1 : 0)};
  transition: opacity 1s ease;
`;

export const Backdrop = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5); /* 반투명한 배경색 */
  z-index: 999; /* 모달보다 더 위에 위치 */
`;

// export const ScrollBoxContainer = styled.section`
//   flex: 1;
//   margin-top: 20px;
//   display: flex;
//   margin-left: 20px;
//   margin-bottom: 20px;
//   width: 100%;
//   max-height: 300px;
//   flex-direction: row;
//   overflow-x: auto;
//   align-items: center;
// `;
