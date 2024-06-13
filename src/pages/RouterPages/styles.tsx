import styled from "styled-components";

export const RoutePage = styled.div`
  width: 100%;
  display: flex;
  padding-top: 200px;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  & > div:nth-child(1) {
    background-image: url("/images/LoginImg.svg");
    background-size: contain;
    background-repeat: no-repeat;
    width: 200px;
    height: 200px;
  }
  & > p {
    font-size: 15px;
    width: 100%;
    text-align: center;
  }
`;
