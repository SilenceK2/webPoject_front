import styled from "styled-components";

export const TodoContainer = styled.section`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  margin: 0 20px;
  margin-top: 120px;
`;

export const TopSection = styled.section`
  display: flex;
  flex-direction: column;
  flex: 0.4;
  width: 100%;
  height: 50px;
`;

export const BottomSection = styled.section`
  display: flex;
  flex-direction: column;
  flex: 1;
  width: 100%;
`;

export const RatingContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;

  & > div:nth-child(2) {
    width: 100%;
    max-height: 50px;
  }
`;

export const RatingTitle = styled.div`
  width: 100%;
  display: flex;
  margin-bottom: 40px;
  font-weight: bold;
  font-size: 18px;
`;

export const RatingContent = styled.div`
  width: 80%;
  height: 100%;
  align-items: center;
  display: flex;
  flex-direction: column;
  & > div {
    font-size: 12px;
    border-radius: 20px;
    font-weight: light;
    height: 100%;
    width: 90%;
    margin-bottom: 20px;
    box-shadow: 0 0.5px 5px rgba(0, 0, 0, 0.1), 0 0.5px 5px rgba(0, 0, 0, 0.1); /* 연한 그림자 추가 */
  }
`;

export const TodoUpdateList = styled.section`
  width: 100%;
`;

export const UpdateListTitle = styled.div`
  width: 100%;
  display: flex;
  margin-bottom: 40px;
  font-weight: bold;
  font-size: 18px;
`;

export const UpdateListContent = styled.div`
  flex: 1;
  display: flex;
  border-radius: 20px;
  box-shadow: 0 0.5px 5px rgba(0, 0, 0, 0.1), 0 0.5px 5px rgba(0, 0, 0, 0.1); /* 연한 그림자 추가 */
  margin-bottom: 20px;
  width: 100%;
  max-height: 200px;
`;

export const Content = styled.div`
  flex: 1;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
