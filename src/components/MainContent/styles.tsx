import styled from "styled-components";

export const TopSection = styled.div`
  flex: 0.5;
  flex-direction: column;
  text-align: left;
  width: 100%;
  flex-basis: 20px;
  align-items: space-between;
`;
export const BottomSection = styled.div`
  flex-direction: column;
  flex-grow:1 ;
  font-weight: bold;
  width: 95%;
  height:auto;
  align-items: flex-end;
  display: flex;
  justify-content: flex-end;
  }
`;

export const MainContentContainer = styled.section`
  width: 100%;
  max-height: 200px;
  display: flex;
  flex-direction: column;
  margin: 0 5px;
`;
