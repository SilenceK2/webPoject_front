import styled from "styled-components";

interface InputProps {
  color?: string;
}

export const StyledInputContainer = styled.div<InputProps>`
  display: flex;
  align-items: center;
  flex-direction: row;
  position: relative;
  justify-content: center;
  &:focus {
    outline: none;
  }
  & > button {
    background-color: ${(props) => props.color || "#133482"};
    position: absolute;
    color: white;
    background-color: whiteblue;
    border-radius: 10px;
    align-self: center;
    margin-right: 10px;
    display: flex;
    font-size: 15px;
    padding: 12px;
    padding-left: 15px;
    padding-right: 15px;
    right: 0;
    top: 50%;
    transform: translateY(-70%);
    border: none;
    &:focus {
      ouline: none;
    }
  }
`;

export const StyledInput = styled.input`
  width: 100%;
  padding: 30px;
  margin-bottom: 15px;
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
