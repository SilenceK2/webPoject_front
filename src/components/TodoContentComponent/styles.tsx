import styled from "styled-components";

export const Container = styled.section`
  display: flex;
  flex-direction: column;
  width: 90%;
  margin: 0 20px;
  margin-top: 20px;
`;

export const ContentWrap = styled.div`
  margin-top: 10px;
  display: flex;
  width: 100%;
  flex-direction: column;
`;

export const TodoTitle = styled.div`
  display: flex;
  width: 100%;
  flex-direction: row;
  justify-content: space-between;
  font-weight: bolder;
  margin-bottom: 20px;
  border-bottom: 1px solid #f1f1f1;
  padding-bottom: 10px;
`;

export const TodoContent = styled.div`
  display: flex;
  width: 93%;

  flex-direction: column;
`;

export const TodoContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`;

export const TodoBody = styled.div`
  width: 100%;
  padding: 10px;
  display: flex;
  justify-content: space-between;
  border-radius: 5px;
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-bottom: 15px;
  box-shadow: 0 0.2px 2px rgba(0, 0, 0, 0.1), 0 0.5px 5px rgba(0, 0, 0, 0.1);
`;

export const TodoNumber = styled.div`
  width: 20px;
  display: flex;
  flex: 0.2;
  flex-direction: column;
  & > div:nth-child(1) {
    flex: 1;
    height: 100%;
    width: 100%;
    bodrer-radius: 20px;
    text-align: center;
  }
`;

export const TodoBodyTitle = styled.div`
  flex: 1;

  justify-content: center;
  text-align: left;
  margin: 0 20px;
  align-items: center;

  & > div:nth-child(1) {
    font-size: 15px;
    font-weight: extra-bold;
    padding-bottom: 5px;
  }

  & > div:nth-child(2) {
    font-size: 12px;
    color: gray;
    display: flex;
    flex-wrap: wrap;
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

export const TodoBodyContent = styled.div`
  display: flex;
  width: 20%;
  flex-direction: row;
  border-left: 0.2px solid lightgray;
  padding-left: 10px;
  justify-content: center;
  overflow: hidden;
  & > div:nth-child(1) {
    font-size: 13px;
  }

  & > div:nth-child(2) {
    margin-left: 15px;
    font-size: 13px;
  }
`;

export const CustomCheckbox = styled.input.attrs({ type: "checkbox" })`
  appearance: none;
  width: 20px;
  height: 20px;
  border: 0.4px solid black;
  border-radius: 3px;
  outline: none;
  cursor: pointer;
  position: relative;
  margin-right: 10px;

  &:checked {
    background-color: gray;
  }

  &:checked::after {
    border: 1px solid black;
    content: "\\2713"; /* 체크 표시 유니코드 */
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    color: white;
    font-size: 16px;
  }
`;
export const TimeSeparator = styled.div`
  margin: 10px 0;
  color: black;
  text-align: left;
  // border-bottom: 1px solid #f1f1f1;
`;
