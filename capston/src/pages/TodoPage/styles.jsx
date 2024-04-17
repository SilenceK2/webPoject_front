import styled from "styled-components";

export const TodoContainer = styled.section`
  display: flex;
  flex-direction: column;
  margin: 0 24px;
  margin-top: 120px;
  height: 100%;
`;

export const TopSection = styled.section`
  display: flex;
  flex-direction: column;
  flex: 1;
  width: 100%;
`;

export const BottomSection = styled.section`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  width: 100%;
`;
export const RatingContainer = styled.div`
  width: 100%;
  flex: 1;
  display: flex;
  flex-direction: column;
`;

export const RatingTitle = styled.div`
  width: 100%;
  display: flex;
  margin-bottom: 27px;
  flex-basis: 20px;
  flex-direction: column;

  & > div:nth-child(1) {
    font-size: 20px;
    font-weight: bold;
    display: flex;
    flex-drection: row;
    flex: 1;
  }
  & > div div {
    flex: 1;
    justify-content: flex-end;
    text-align: right;
    color: lightgray;
    font-size: 15px;
    font-weight: lighter;
  }

  & > div:nth-child(2) {
    font-size: 15px;
    font-weight: light;
    color: gray;
  }
`;
export const RatingContent = styled.div`
  width: 100%;
  flex: 1;
  align-items: center;
  display: flex;
  flex-direction: column;
`;
export const RatingBody = styled.div`
  width: 100%;
  max-height: 22%;
  flex: 1;
  border-radius: 10px;
  display: flex;
  flex-direction: row;
  // align-items: center;
  margin-bottom: 15px;
  box-shadow: 0 0.5px 5px rgba(0, 0, 0, 0.1), 0 0.5px 5px rgba(0, 0, 0, 0.1); /* 연한 그림자 추가 */
`;

export const RatingBodyTitle = styled.section`
  flex: 1;
  justify-content: center;
  text-align: left;
  margin: 0 20px;
  max-width: 80%;

  & > div:nth-child(1) {
    font-size: 15px;
    font-weight: bold;
    flex: 1;
  }
  & > div:nth-child(2) {
    font-size: 12px;
    font-weight: light;
    color: gray;
    flex: 1;
  }
`;

export const RatingNumber = styled.div`
  width: 20px;
  display: flex;
  flex: 0.3;
  flex-direction: column;
  & > div:nth-child(2) {
    flex: 0.8;
  }
  & > div:nth-child(1) {
    flex: 1;
    height: 50%;
    width: 100%;
    background-color: green;
  }
`;

export const RatingBodyContent = styled.div`
  display: flex;
  flex-grow: 0.3;
  flex-basis: 10px;
  flex-direction: column;
  text-align: center;
  border-left: 0.2px solid lightgray;
  justify-content: flex-end;
  margin: 20px 20px;

  & > div:nth-child(2) {
    font-size: 10px;
    color: gray;
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
  flex-direction: column;
  & > div:nth-child(1) {
    font-size: 20px;
    font-weight: bold;

  }
  
  & > div:nth-child(2) {
    font-size: 15px;
    font-weight: light;
    color:gray;

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
