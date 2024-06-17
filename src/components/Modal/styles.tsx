import styled from "styled-components";

export const ModalBackdrop = styled.div`
  position: fixed;
  top: 0;
  // bottom: 70px; /* BottomNav의 높이만큼 공간을 남겨둠 */
  left: 0;
  right: 0;
  bottom: 0;

  height: calc(100% - 70px);
  background-color: rgba(0, 0, 0, 0.4);
  background-color: ${({ modalType }: any) =>
    modalType === "showtodo" ? rgba(0, 0, 0, 0.4) : rgba(0, 0, 0, 0.4)};
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: ${({ modalType }: any) => (modalType === "showtodo" ? 1000 : 1100)};
`;

export const ModalContainer = styled.div`
  display: flex;
  flex-direction: column;
  background-color: white;
  width: 80%;
  max-width: 500px;
  height: auto;
  align-items: center;
  border-radius: 20px;

  padding: 20px;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.3);
  z-index: 1001;
  @media (min-width: 1200px) {
    height: auto;
    width: 30%;
  }
  & > div:nth-child(1) {
    width: 100%;
    display: flex;
    justify-content: flex-end;
    margin-bottom: 20px;
    & > p {
      cursor: pointer;
      font-size: 1.5rem;
    }
  }
`;

export const ModalTopSection = styled.section`
  width: 100%;
  display: flex;
  align-items: center;
  flex-direction: column;
  margin-bottom: 20px;
`;

export const ModalBottomSection = styled.section`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  & > label {
    width: 100%;
    text-align: right;
    margin-bottom: 20px;
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    & > div {
      display: flex;
      align-items: center;
      & > input {
        margin-right: 10px;
      }
      & > p {
        font-size: 16px;
        font-weight: bold;
      }
    }
    & > span {
      margin-top: 5px;
      font-size: 14px;
      text-align: right;
      color: gray;
    }
  }
`;

export const ModalInput = styled.input`
  width: 100%;
  padding: 10px;
  border-radius: 10px;
  outline: none;
  font-size: 1rem;
  border: 1px solid #ddd;
  margin-bottom: 10px;
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.1);
  transition: border-color 0.3s;
  &:focus {
    border-color: #007bff; /* Change border color on focus */
  }
`;

export const ModalButton = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  width: 100%;
  & > button {
    background-color: #007bff;
    border: none;
    border-radius: 10px;
    padding: 10px 25px;
    color: white;
    font-weight: bold;
    margin-left: 10px;
    cursor: pointer;
    transition: background-color 0.3s;
    &:hover {
      background-color: #0056b3;
    }
  }
`;

export const ShowModalContainer = styled.div`
  position: fixed;
  bottom: 70px;
  width: 100%;
  background-color: white;
  // display: flex;

  border-radius: 20px 20px 0 0;
  overflow: hidden;
`;

export const ShowModalTopSection = styled.div`
  background-color: #ffffff;
  padding: 20px;
  display: flex;
  flex-direction: column;

  & > div:nth-child(2) {
    padding-top: 20px;
    padding-bottom: 20px;
    width: 100%;
    border-bottom: 1px solid #f1f1f1;
    font-size: 12px;
    font-weight: light;
    color: gray;
    flex: 1;
    max-height: 24px;
    align-items: center;
    flex-direction: row;

    display: flex;
  }
  & > div:nth-child(2) p {
    background-color: #50bcdf;
    margin-right: 8px;
    border-radius: 5px;
    padding: 1px 4px;
    text-align: center;
    color: white;
    font-weight: bold;
  }
  & > div:nth-child(2) p:nth-child(2) {
    background-color: #b9a7fc;
  }
  & > div:nth-child(2) p:nth-child(3) {
    background-color: #0d9afc;
  }
  & > div:nth-child(3) {
    margin-top: 20px;
    padding-bottom: 80px;
    padding-top: 20px;
    padding: 15px;
    background-color: #f9f9f9;
    border-radius: 10px;
  }
`;

export const ShowModalBottomSection = styled.div`
  background-color: #ffffff;
  padding: 20px;
  padding-bottom: 80px;
  height: calc(30px * 3);
  overflow-y: auto;
  & > div:nth-child(1) {
    display: flex;
    flex-direction: column;
    // align-items: center;
    justify-content: flex-start;
  }
`;

export const ShowModalTitle = styled.div`
  font-weight: lighter;
  padding-top: 10px;
  width: 100%;
  flex-direction: column;
  display: flex;
  & > div:nth-child(1) {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    & > div {
      display: flex;
      flex-direction: row;
      font-weight: bolder;
    }
  }
  & > div:nth-child(2) {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
  }
`;

export const SearchModalContainer = styled.section`
display: flex;
flex-direction: column;
background-color: white;
width: 80%;
max-width: 500px;
height:
align-items: center;
border-radius: 20px;

padding: 20px;
box-shadow: 0 5px 15px rgba(0, 0, 0, 0.3); 
z-index: 999; 
@media (min-width: 1200px) {
  height: auto;
  width: 30%;
}
`;

export const SearchModalTopSection = styled.div`
  margin-top: 20px;
  height: auto;
  display: flex;
  flex-direction: column;
  width: 100%;
  & > div:nth-child(1) {
    flex: 1;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    & > div:nth-child(1) {
    }
    & > div:nth-child(2) {
      display: flex;
      flex-direction: row;
      
      & > p {
        margin-right: 5px;
        font-weght:bolder;
      }
    }
  }
  & > div:nth-child(2) {
    flex: 1;
    display: flex;
    flex-direction: row;
    

    align-items: center;
    margin-top:10px;
    margin-bottom: 20px;
    border-bottom: 1px solid #f1f1f1;
    padding-bottom: 20px;
    flex-wrap: wrap;
  }



    & > div:nth-child(2) p {
      background-color: #50bcdf;
      margin-right: 8px;
      border-radius: 5px;
      padding: 1px 6px;
      text-align: center;
      color: white;

    }
    & > div:nth-child(2) p:nth-child(2) {
      background-color: #b9a7fc;
    }
    & > div:nth-child(2) p:nth-child(3) {
      background-color: #0d9afc;
    }
    & > div:nth-child(3) {
     
      padding-bottom: 80px;
      padding-top: 20px;
      padding: 15px;
      background-color: #f9f9f9;
      border-radius: 10px;
    }
  }
`;

export const SearchModalBottomSection = styled.div`
  width: 100%;
  display: flex;
  margin-top: 10px;
  flex-direction: column;
  align-items: center;
  & > div:nth-child(1) {
    margin-top: 10px;
    display: flex;
    width: 100%;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;

    & > input {
      flex: 1;
      padding: 20px;
      padding-bottom: 20px;
      width: 87%;
      margin-left: 10px;
      border: 1px solid #ddd;
      border-radius: 10px;
      outline: none;
      margin-right: 10px;
      margin-bottom: 20px;
    }
  }
`;

export const CommentContainer = styled.div`
  padding: 15px;
  background-color: #ffffff;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.1);
  margin-bottom: 20px;
`;

export const CommentHeader = styled.div`
  font-weight: bold;
  margin-bottom: 5px;
  font-size: 14px;
`;

export const CommentContent = styled.div`
  margin-top: 5px;
  font-size: 16px;
`;

export const CommentStyledInput = styled.input`
  width: 100%;
  padding: 30px;

  font-size: 1rem;
  border: 1px solid #dddddd;
  max-height: 50px;
  border-radius: 12px;
  box-sizing: border-box;

  &:focus {
    outline: none;
  }
`;

export const HeartIcon = styled.span`
  display: inline-block;
  width: 20px;
  height: 20px;
  background-image: url("/images/flatHeart.png");
  background-size: cover;
  background-repeat: no-repeat;
`;

export const CommentBottomSection = styled.section`
  margin-top: 20px;
  width: 90%;
  padding: 20px;
  display: flex;
  flex-direction: column;
`;
function rgba(r: number, g: number, b: number, a: number): string {
  return `rgba(${r}, ${g}, ${b}, ${a})`;
}
