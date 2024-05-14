import styled from "styled-components";

export const Container = styled.section`
  display: flex;
  flex-direction: column;
  width: 90%;
  height: 100%;
  border: none;
  box-sizing: none;
  margin: 0 20px;
`;

export const TopSection = styled.section`
  width: 100%;
  height: 100%;
  margin-top: 90px;
  flex: 1;
  flex-direction: column;
  & > div:nth-child(1) {
    flex: 1;
    justify-content: center;
    flex-direction: row;
    & > input:nth-child(1) {
      width: 95%;
      font-size: 14px;
      border: 0.1px solid gray;
      border-radius: 8px;
      height: 30px;
      display: flex;
      align-items: center;
      padding-left: 10px;
      &:focus {
        outline: none;
      }
    }
  }
`;

export const BottomSection = styled.section`
  width: 100%;
  flex: 1;
`;
