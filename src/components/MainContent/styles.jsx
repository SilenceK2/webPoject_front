import styled from "styled-components";

export const TopSection = styled.div`
  flex: 0.2;
  flex-direction: column;
  text-align: left;
  width: 100%;
  flex-basis: 50px;
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
`;
export const BottomSection = styled.div`
  font-weight: light;
  flex-direction: column;
flex-grow:1 ;
  color: black;
  font-weight: bold;
  width: 95%;
  height:100%;
  border-radius: 20px;
  align-items: flex-end;
  display: flex;
  justify-content: flex-end;
  }
`;

export const MainContentContainer = styled.section`
  width: 100%;
  flex: 1;
  display: flex;
  flex-direction: column;
  margin: 0 5px;
`;
