import styled, { css } from "styled-components";

export const TopSection = styled.div`
  margin: 10px;
  flex-grow: 1;
  flex-direction: column;
  align-items: center;
  width: 100%;

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
  margin: 20px;
  flex: 1;
  flex-direction: column;
  width: 100%;
  max-height: 10%;
  & > div:nth-child(1) {
    font-size: 12px;
  }
`;
