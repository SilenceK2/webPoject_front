import styled from "styled-components";

export const TopSection = styled.div`
  flex: 1;
  flex-direction: column;
  margin: 0 20px;

  margin-left: 10px;
  text-align: left;
  width: 100%;
  flex-basis: 20px;
  align-items: space-between;

  & > div:nth-child(1) {
    width: 100%;
    font-size: 21px;
    font-weight: bold;
    transition: opacity 0.5s ease-in-out;
  }

  & > div:nth-child(2) {
    margin-top: -3px;
    font-weight: light;
    color: #868e96;
    transition: opacity 0.5s ease-in-out;
  }
  & > div:nth-child(3) {
    font-weight: light;
    color: black;
    margin-bottom: 250%;
    font-weight: bold;
    height: 30%;
    width: 90%;
    border-radius: 20px;
    align-items: center;
    display: flex;
    justify-content: right;
  }
`;

export const BottomSection = styled.div`
  flex-grow: 1;
  flex-direction: column;
  width: 100%;
  margin- & > div:nth-child(1) {
    font-size: 12px;
  }
`;
