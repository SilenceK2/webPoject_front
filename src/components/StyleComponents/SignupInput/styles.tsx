import styled from "styled-components";

interface InputProps {
  color?: string;
}

export const StyledInputContainer = styled.div<InputProps>`
  position: relative;
  display: flex;
  align-items: center;
  flex-direction: column;
`;

export const StyledInput = styled.input`
  width: 100%;
  padding: 30px;
  margin-bottom: 35px;
  font-size: 1rem;
  border: 1px solid #dddddd;
  max-height: 50px;
  border-radius: 12px;
  box-sizing: border-box;
  position: relative;
  &:focus {
    outline: none;
  }
`;

export const IconContainer = styled.div`
  position: absolute;
  left: 8px;
  top: 50%;
  transform: translateY(-50%);
`;
