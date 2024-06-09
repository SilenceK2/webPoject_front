import styled from "styled-components";

export const LocationTitle = styled.div`
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

export const LocationTitleContent = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 10px;
  margin-top: -3px;
  & > div:nth-child(1) {
    align-items: center;
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

export const LocationBoard = styled.div`
  display: flex;
  flex-grow: 1;
  justify-content: center;
  flex-direction: column;
  align-items: center;

  & > div:nth-child(1) {
    flex: 0.1;
    justify-content: space-between;
    display: flex;

    flex-direction: row;
    & > input {
      border-radius: 10px;
      height: 30px;
      width: 40%;
      border: none;
    }
  }

  & > div:nth-child(2) {
    flex: 1;
    flex-direction: row;
  }
`;

export const Topsection = styled.section`
  display: flex;
`;

export const BottomSection = styled.section`
  display: flex;
  flex-grow: 1;
  flex-direction: column;
`;