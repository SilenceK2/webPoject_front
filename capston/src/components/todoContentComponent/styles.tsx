import styled from "styled-components";

export const Container = styled.section`
  display: flex;
  flex-direction: column;
  width: 90%;
  margin: 0 20px;
  margin-top: 20px;
`;
export const ContentWrap = styled.section`
  display: flex;
  width: 100%;
  flex-direction: column;
  height: 90px;
`;
export const TodoTitle = styled.div`
  display: flex;
  width: 100%;
  flex-direction: row;
  justify-content: space-between;
  font-weight: bold;
`;
export const TodoContent = styled.section`
  display: flex;
  width: 100%;
  flex-direction: row;

  justify-content: center;
  & > div {
    width: 100%;
    border: 1px solid black;
    border-radius: 10px;
  }
`;
