import styled from "styled-components";

export const LoginBoxContainer = styled.section`
  max-width: 500px;
  border-radius: 8px;
  display: flex;
  flex-direction: column;
  box-sizing: none;
  margin: 0 30px;
  height: 100%;
`;

export const BottomSection = styled.div`
  display: flex;
  flex-direction: column;
  flex: 2;
  width: 100%;
  height: 50%;
  justify-content: center;
`;

export const TextBox = styled.div`
  position: relative;
  margin-bottom: 20px;
  width: 100%;
  height: 100%;
  margin: 0;

  & > div:nth-child(2) {
    display: flex;
    align-items: center;
    width: 100%;
    text-align: left;
    justify-content: left;
    margin-top: -23px;
    font-size: 15px;
    color: gray;
  }
`;

export const SignupTopsection = styled.section`
  width: 100%;
  display: flex;
  flex:0.6;
  flex-direction: column;
  justify-content:space-between;
  margin-top:30px;
  margin-bottom:40px;
  & > div:nth-child(1) {
    display:flex;
    flex-direciton:row;
    justify-content:flex-start;
    align-itesm:flex-start;
    width:100%;
    font-size:20px;
    align-items:center;
  }
  & >  div:nth-child(2) {
    display:flex;
    flex-direciton:row;
    justify-content:flex-start;
    width:100%;
    align-items:center;
  }
  }
`;
export const SignupButton = styled.button`
  width: 100%;
  height: 50px;
  flex: 1;
  margin-bottom: 20px;
  border: none;
  padding: 0 20px;
  border-radius: 5px;
  background-color: gray;
  & > p {
    color: white;
    font-size: 17px;
    text-align: center;
    font-weight: bold;
  }
`;
export const SubmitButton = styled.input<{ bgColor?: any }>`
  height: 10%;
  max-height: 70px;
  background-color: ${(props) => props.bgColor || "#4287ff"};
  border: none;
  padding: 10px;
  font-size: 16px;
  color: #ffffff;
  border-radius: 12px;
  cursor: pointer;
  margin-top: 10px;
  font-size: 18px;
  width: 100%;
  font-weight: bolder;
  outline: none;
  &:focus {
    outline: none;
  }
`;
