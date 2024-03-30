import styled from "styled-components";

export const LoginBoxContainer = styled.div`
  max-width: 500px;
  padding: 20px;
  margin: auto;
  border-radius: 8px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 95%;
  postition: fixed;
  box-sizing: none;
`;

export const Topsection = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  width: 100%;
  height: 100%;
  justify-content: center;
`;

export const BottomSection = styled.div`
  display: flex;
  flex-direction: column;
  flex: 2;
  width: 100%;
  height: 50%;
  justify-content: flex-start;
`;
export const Title = styled.h2`
  text-align: center;
  font-size: 20px;
`;

export const TextBox = styled.div`
  position: relative;
  margin-bottom: 20px;
  width: 100%;
  margin: 0;
`;

export const Input = styled.input`
  width: 93%;
  max-height: 30px;
  padding: 10px;
  font-size: 16px;
  border: 1px solid #cccccc;
  border-radius: 4px;
  margin-bottom: 10px;
`;

export const SubmitButton = styled.input`
  width: 100%;
  background: #a8a8a8;
  border: none;
  padding: 10px;

  font-size: 16px;
  color: #ffffff;
  border-radius: 4px;
  cursor: pointer;
  align-items: flex-end;
  &:hover {
    background: #0056b3;
  }
`;

export const Paragraph = styled.p`
  display: flex;
  justify-content: right;
  font-weight: 300;
  font-size: 15px;
  position: relative;
`;
