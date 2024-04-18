import styled from "styled-components";

export const TodoContainer = styled.section`
  display: flex;
  flex-direction: column;
  margin: 0 24px;
  margin-top: 100px;
  height: 100%;
  letter-spacing: -1px;
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
  flex-basis: 400px;
`;

export const RatingTitle = styled.div`
  width: 100%;
  display: flex;
  margin-bottom: 40px;
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
  align-items: center;
  margin-bottom: 15px;
  box-shadow: 0 0.5px 5px rgba(0, 0, 0, 0.1), 0 0.5px 5px rgba(0, 0, 0, 0.1); /* 연한 그림자 추가 */
`;

export const RatingBodyTitle = styled.section`
  flex: 1;
  justify-content: center;
  text-align: left;
  margin: 0 20px;
  max-width: 80%;
  align-items: center;
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
    max-height: 24px;
    align-items: center;
    flex-direction: row;
    display: flex;
  }
  & > div:nth-child(2) p {
    background-color: #50bcdf;
    margin-right: 8px;
    border-radius: 5px;
    padding: 1px 4px;
    text-align: center;
    color: white;
    font-weight: bold;
  }
  & > div:nth-child(2) p:nth-child(2) {
    background-color: #b9a7fc;
  }
  & > div:nth-child(2) p:nth-child(3) {
    background-color: #0d9afc;
  }
`;

export const RatingNumber = styled.div`
  width: 20px;
  display: flex;
  flex: 0.2;
  flex-direction: column;
  & > div:nth-child(2) {
    flex: 0.8;
  }
  & > div:nth-child(1) {
    flex: 1;
    height: 100%;
    width: 100%;
    bodrer-radius: 20px;
    text-align: center;
    // background-color: green;
  }
`;

export const RatingBodyContent = styled.div`
  display: flex;
  flex-grow: 0.3;
  flex-basis: 20px;
  width: 100%;
  flex-direction: column;
  border-left: 0.2px solid lightgray;
  align-items: flex-start;

  & > div:nth-child(1) {
    flex: 1;
    font-size: 14px;
    text-align: center;
    width: 100%;
  }

  & > div:nth-child(2) {
    flex: 1;
    text-align: center;
    width: 100%;
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
  margin-bottom: 30px;
  flex-direction: row;
  & > div:nth-child(1) {
    flex: 0.1;
  }
`;

export const UpdateListTitleContent = styled.div`
  font-size: 20px;
  font-weight: bold;
  flex: 1.5;
  font-size: 19px;
  display: flex;
  flex-direction: column;
  & > div {
    font-size: 14px;
    font-weight: lighter;
  }
`;

export const UpdateListContent = styled.div`
  flex: 1;
  margin-top: 20px;
  display: flex;
  margin-bottom: 20px;
  width: 100%;
  max-height: 300px;
  flex-direction: row;
  overflow-x: scroll;
  align-items: center;
`;

export const Content = styled.div`
  flex: 1;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

/**
 * text color속성만 바꾼 card 1번예시
 */
export const RatingBodyTitletest = styled.section`
  flex: 1;
  justify-content: center;
  text-align: left;
  margin: 0 20px;
  max-width: 80%;
  align-items: center;
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
    max-height: 18px;
    align-items: center;
    flex-direction: row;
    display: flex;
  }
  & > div:nth-child(2) p {
    margin-right: 2px;
    border-radius: 5px;
    padding: 1px 4px;
    text-align: center;
    color: #b9a7fc;
    font-weight: bold;
  }
  & > div:nth-child(2) p:nth-child(2) {
    color: #b9a7fc;
  }
  & > div:nth-child(2) p:nth-child(3) {
    color: #b9a7fc;
  }
`;

/**
 * 전체 수정 필요
 */
export const UpdateContent = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  border-radius: 20px;
  margin-top: 10px;
  margin-left: 3px;
  box-shadow: 0 0.5px 5px rgba(0, 0, 0, 0.1), 0 0.5px 5px rgba(0, 0, 0, 0.1); /* 연한 그림자 추가 */
  margin-bottom: 20px;
  min-height: 180px;
  max-width: 230px;
  min-width: 230px;
  margin-right: 30px;
  white-space: nowrap;
  text-align: center;
  justify-content: center;
`;

export const UpdateContentContent = styled.div`
  width: 95%;
  margin-top: -2px;
  flex-grow: 1;
  text-align: left;
  white-space: pre-wrap;
  margin-left: 2px;
  overflow: hidden;
  padding-left: 5px;
  font-size: 13px;
  & > div:nth-child(1) {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    margin: 0 20px;
  }
  & > div:nth-child(1) p {
    color: white;
    margin-right: 2px;
    border-radius: 5px;
    font-size: 12px;
    padding: 1px 4px;
    max-width: 55px;
    text-align: center;
    font-weight: bold;
    background-color: #b9a7fc;
  }
`;

export const UpdateContentTitle = styled.div`
  width: 100%;
  justify-content: center;
  color: black;
  flex: 1;
  max-height: 30px;
  box-shadow: 0 3px rgba(0, 0, 0, 0.1);
  font-weight: bolder;
  display: flex;
  padding-top: 10px;
  border-bottom: 0.1px solid gray;
  // background-color: #0d9afc;
`;
