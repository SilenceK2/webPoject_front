import styled from "styled-components";

export const LoginBoxContainer = styled.div`
  max-width: 500px;
 
  border-radius: 8px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 90%;
  box-sizing: none;
`;

export const Topsection = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 40%;
  justify-content: center;
  background-color: #626262;
  margin-bottom: 50px;
  border-bottom-right-radius: 250px;
`;
export const LoginText = styled.div`
display: flex;  
font-size: 70px;
font-weight: bold;
flex: 1;
align-items: flex-end;
justify-content: flex-start;
margin-left: 30px;
margin-bottom: 40px;  
  color: white;
`

export const BottomSection = styled.div`
  display: flex;
  flex-direction: column;
  padding: 28px;
  flex: 2;
  width: 90%;
  height: 50%;
  justify-content: center;
  align-items: center;
`;

export const Title = styled.h2`
  text-align: center;
  font-size: 30px;
`;

export const TextBox = styled.div`
position: relative;
display: flex;
width: 100%;
height: 100%;
margin: 0;
flex-direction: column;
align-items: center;
justify-content: center;

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

export const Input = styled.input`
  width: 80%;
  height: 36px;
  padding: 10px;
  font-size: 16px;
  border: none;
  border-radius: 30px;
  border: 2px solid black;
  margin-bottom: 20px;
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.1);
`;

export const SubmitButton = styled.input`
  width: 90%;
  height: 20%;
  max-height: 70px;
  display: flex;  
  /* background-color: ${(props) => props.bgColor || "#4c4c4c"}; */
  background-color: #4c4c4c;
  border-radius: 20px;
  padding: 10px;
  font-size: 17px;
  color: #ffffff;
  cursor: pointer;
  margin-top: 20px;
  font-weight: bolder;
  outline: none;
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.1);
  justify-content: center;
  // &:hover {
  //   background: #0056b3;
  // }
  &:focus {
    outline: none;
  }
`;

export const Paragraph = styled.p`
  display: flex;
  justify-content: right;
  font-weight: 300;
  font-size: 15px;
  position: relative;
`;



export const SignupTopsection = styled.section`
display: flex;
flex-direction: column;
width: 100%;
height: 40%;
justify-content: center;
background-color: #626262;
margin-bottom: 50px;
border-bottom-right-radius: 250px;
`;

export const EmailCheck = styled.div`
display: flex;
    flex: 1;
    width: 100%;
    flex-direction: row;
    justify-content: center;
    align-items: center;
`
export const EmailInput = styled.input`
display: flex;

width: 60%;
  height: 36px;
  padding: 10px;
  font-size: 16px;
  border: none;
  border-radius: 30px;
  border: 2px solid black;
  margin-bottom: 20px;
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.1);
`

export const SignupButton = styled.button`
display: flex;  
  width: 20%;
  margin-bottom: 20px;
  border: none;
  margin-left: 10px;
  border-radius: 5px;
  background-color: #4c4c4c;
  justify-content: center;
  & > p {
    color: white;
    font-size: 17px;
    text-align: center;
    font-weight: bold;
  }
`;