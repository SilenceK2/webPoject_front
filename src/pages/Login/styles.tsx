import styled from "styled-components";

export const LoginBoxContainer = styled.div`
  max-width: 500px;
  padding: 28px;
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
  flex: 1;
  width: 100%;
  //   height: 100%;
  justify-content: center;
`;

export const BottomSection = styled.div`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  width: 100%;
  justify-content: center;
`;

export const Title = styled.div`
  text-align: right;
  margin-top: 190px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  & > div:nth-child(1) {
    color: #403af3;
    font-size: 40px;
    font-weight: bold;
  }
  & > div:nth-child(2) {
    font-size: 14px;
    padding-top: 7px;
    color: #2b2b2b;
  }
`;

export const TextBox = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
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

export const SubmitButton = styled.input<{ bgColor?: any }>`
  height: 13%;
  max-height: 70px;
  background-color: #3e37f8;
  border: none;
  padding: 10px;
  font-size: 16px;
  color: #ffffff;
  border-radius: 12px;
  cursor: pointer;
  margin-top: -20px;
  font-size: 18px;
  width: 100%;
  font-weight: bolder;
  outline: none;
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

export const SignupTopsection = styled.section`
  width: 100%;
`;

// export const LinkContainer = styled.div`
//   display: flex;
// `;

// export const Link = styled.p``;

export const LinkContainer = styled.div`
  display: flex;
  width: 100%;
  align-items: flex-start;
  flex-direction: row;
  justify-content: center;
  font-size: 14px;
`;

export const Link = styled.p`
  text-decoration: none;
  color: #3e37f8;
  padding-left: 6px;
  font-weight: bold;
  cursor: pointer;
  padding-right: 10px;
  margin-right: 10px;
  border-right: 1px solid #ccc;
  transition: border-color 0.3s ease;

  &:last-child {
    border-right: none;
  }

  &:hover {
    text-decoration: underline;
    border-color: black;
  }
`;
