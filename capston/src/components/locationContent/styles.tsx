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
  position: relative; /* 추가된 스타일 */
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
  display: flex;
  flex: 1;
  border-bottom: 1px dashed lightgray;
  width: 90%;
  height: 50px;
  justify-content: center;
  align-items: center;
  padding: 0px 10px 5px 10px;
  position: relative;
`;

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
`;

export const EndPointInput = styled.div`
  display: flex;
  flex: 1;
  border-bottom: 1px dashed lightgray;
  width: 90%;
  height: 50px;
  justify-content: center;
  align-items: center;
  padding: 0px 10px 5px 10px;
`;

export const Change = styled.button`
  padding: 7px;
  border-radius: 10px;
  border: 1px solid lightgray;
  background-color: white;
  position: absolute;
  font-size: 16px;
  color: gray;
  top: 26%; /* 변경된 위치 */
  left: 80%; /* 중앙 정렬 */
  transform: translate(-50%, -50%); /* 중앙 정렬 */
`;

export const Select = styled.div`
  margin-top: 30px;
  display: flex;
  flex: 1;
  justify-items: center;
  justify-content: center;
  align-items: center;
  width: 100%;
`;

export const SelectPublicTransportation = styled.button`
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
  &.selected {
    border: 1px solid blue;
    color: blue;
  }
`;

export const SelectCar = styled.button`
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
  &.selected {
    border: 1px solid blue;
    color: blue;
  }
`;

export const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: flex-end;
  overflow: auto; /* 스크롤 가능하게 설정 */
  z-index: 999;
`;

export const SearchBox = styled.div`
  background: white;
  width: 100%;
  height: 70%;
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
  display: flex;
  flex-direction: column;
`;

export const SearchBoxHeader = styled.div`
  display: flex;
  font-weight: bold;
  margin-bottom: 10px;
  font-size: 20px;
  border-bottom: 1px solid lightgray;
  padding: 20px;
  align-items: center;
`;

export const SearchBoxBody = styled.div`
  display: flex;
  border: 1px solid gray;
  border-radius: 10px;
  padding: 5px;
  margin: 10px 10px 20px 10px;
  align-items: center;
`;

export const InputPoint = styled.input`
  display: flex;
  flex-grow: 1;
  border: none;
  color: #9b9b9b;
  font-weight: bold;
  font-size: 17px;
  padding: 10px;
  margin-left: 10px;
`;

export const AddressSection = styled.div`
  display: flex;
  flex: 1;
  width: 100%;
  flex-direction: column;
  align-content: center;
  align-items: center;
`;

export const AddressBox = styled.div`
  display: flex;
  align-items: center;
  padding: 10px;
  border-bottom: 1px solid lightgray;
  width: 100%;
`;


//PlacePickerComponent.tsx
export const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  font-size: 1rem;
  gap: 10px;
`;

export const InputContainer = styled.div`
  display: flex;
  width:100%;
  align-items: center;
  gap: 10px;
`;

export const InputSearch = styled.input`
  padding: 8px;
  font-size: 1rem;
  width: 100%;
  box-sizing: border-box;
`;

export const ResultContainer = styled.div`
  
`;

export const ResultItem = styled.p`
  margin: 5px 0;
  padding: 8px;
  background: white;
  cursor: pointer;
  border-bottom: 1px solid gray;
  &:hover {
    background: #f0f0f0;
  }
`;

//DirectionComponent styles

export const DirectionComponentBox = styled.div`
  display: flex;
    flex-direction: column;
    padding: 23px;
    z-index: 1;
`
export const LocationDataBox = styled.div`
display: flex;
padding: 20px;
flex-direction: column;
border: 1px solid lightgray;
border-bottom-left-radius: 20px;
    border-bottom-right-radius: 20px;
`
export const LocationDataBoxHeader = styled.div`
display: flex;
`
export const LocationDataBoxBody = styled.div`
display: flex;
align-items: baseline;
`

export const LocationDataBoxFooter = styled.div`
display: flex;
align-items: baseline;
`