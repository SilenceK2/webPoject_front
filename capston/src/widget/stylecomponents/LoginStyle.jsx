import styled from "styled-components";

export const LoginBoxContainer = styled.div`
  max-width: 500px;
  padding: 28px;
  margin: auto;
  border-radius: 8px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 90%;
  position: fixed;
  box-sizing: none;
`;

export const Topsection = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  width: 100%;
  height: 20%;
  justify-content: center;
`;

export const BottomSection = styled.div`
  display: flex;
  flex-direction: column;
  flex: 2;
  width: 100%;
  height: 80%;
  justify-content: center;
`;

export const Title = styled.h2`
  text-align: center;
  font-size: 30px;
`;

export const TextBox = styled.div`
  position: relative;
  margin-bottom: 20px;
  width: 100%;
  height: 100%;
  margin: 0;
`;

export const Input = styled.input`
  width: 95%;
  height: 10%;
  padding: 10px;
  font-size: 16px;
  border: 1px solid #cccccc;
  border-radius: 4px;
  margin-bottom: 0px;
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.1);
`;

export const SubmitButton = styled.input`
  width: 100%;
  height: 13%;
  background: #007bff;
  border: none;
  padding: 10px;
  font-size: 16px;
  color: #ffffff;
  border-radius: 4px;
  cursor: pointer;
  margin-top: 20px;
  font-weight: bolder;
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.1);
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
