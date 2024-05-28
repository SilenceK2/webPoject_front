import styled from "styled-components";

export const LocationTitle = styled.div`
  width: 100%;
  height: 10%;
  margin: 20px 20px;
  display: flex;
  flex: 1;
  flex-direction: row;
  & > div:nth-child(1) {
    background-image: url("/images/todoLogo.svg");
    width: 30px;
    height: 32px;
    background-position: center;
    background-repeat: no-repeat;
  }
`;

export const LocationTitleContent = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 10px;
  margin-top: -3px;
  & > div:nth-child(1) {
    align-items: center;
    font-size: 18px;
    font-weight: bold;
    color: black;
  }
  & > div:nth-child(2) {
    font-size: 13px;
    font-weight: light;
    color: gray;
  }
`;

export const LocationBoard = styled.div`
  display: flex;
  flex-grow: 1;
  justify-content: center;
  flex-direction: column;
  align-items: center;

  // & > div:nth-child(1) {
  //   flex: 0.1;
  //   justify-content: space-between;
  //   display: flex;

  //   flex-direction: row;
  //   & > input {
  //     border-radius: 10px;
  //     height: 30px;
  //     width: 40%;
  //     border: none;
  //   }
  }

  // & > div:nth-child(2) {
  //   flex: 1;
  //   flex-direction: row;
  // }
`;

export const Topsection = styled.section`
  display: flex;
`;

export const BottomSection = styled.section`
  display: flex;  
  flex: 1;
  border: 1px solid lightgray;
  margin: 10px;
  border-radius: 15px;
  padding: 20px 10px 20px 10px;
`;

export const StartPointInput = styled.div`
display:flex;
flex:1;
border-bottom: 1px dashed lightgray;
width: 90%;
height: 50px;
justify-content: center;
align-items: center;
padding: 0px 10px 5px 10px;
position: relative;
justify-content: center;
align-items:center;

`
export const Input = styled.input`
display: flex;
flex: 1;
border: 1px dotted white;
border-radius: 15px;
color: #9b9b9b;
font-weight: bold;
font-size: 17px;
padding: 10px;
margin-right: 20px;
`
export const EndPointInput = styled.div`
display:flex;
flex:1;
border-bottom: 1px dashed lightgray;
width: 90%;
height: 50px;
justify-content: center;
align-items: center;
padding: 0px 10px 5px 10px;
`
export const Change = styled.button`
padding: 7px;
border-radius: 10px;
border: 1px solid lightgray;
background-color: white;
position: absolute;
font-size: 16px;
color: gray;
top: 65%;
left: 80%;
transform: tranlate(-50%,-50%);
`

export const Select = styled.div`
margin-top: 30px;
display: flex;
flex: 1;
justify-items: center;
justify-content: center;
align-items: center;
width: 100%;
`

export const SelectBus = styled.button`
display: flex;
flex: 1;
margin-left: 10px;
border: 1px solid lightgray;
background-color: white;
border-top-left-radius: 10px;
border-bottom-left-radius: 10px;
color: gray;
justify-content: center;
align-items: center;
flex-direction: column;
padding: 5px;
`

export const SelectSubway = styled.button`
display: flex;
flex: 1;
margin-right: 10px;
border: 1px solid lightgray;
background-color: white;
border-top-right-radius: 10px;
border-bottom-right-radius: 10px;
color: gray;
justify-content: center;
align-items: center;
flex-direction: column;
padding: 5px;
`

export const ShowStartContent = styled.div`
`