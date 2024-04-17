import styled from "styled-components";

export const TopSection = styled.div`
  flex: 1;
  flex-direction: column;
  margin-left:10px;
  align-items: center;
  width: 100%;
  flex-basis:20px;
  & > div:nth-child(1) {
    width: 100%;
    font-size: 21px;
    font-weight: bold;
    transition: opacity 0.5s ease-in-out;
  }

  & > div:nth-child(2) {
    margin-top: -2px;
    font-weight: light;
    color: #868e96;
    transition: opacity 0.5s ease-in-out;

`;

export const BottomSection = styled.div`
  flex-grow: 1;
  flex-direction: column;
  width: 100%;
  margin- & > div:nth-child(1) {
    font-size: 12px;
  }
`;
