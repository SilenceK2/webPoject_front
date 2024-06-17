import styled from "styled-components";

export const Header = styled.section`
  // position: fixed;
  position: relative;
  width: 100%;
  padding: 11px 8px;
  display: flex;
  height: 70px;
  justify-content: space-between;
  box-sizing: border-box;
  box-shadow: 0 0.5px 5px rgba(0, 0, 0, 0.1), 0 0.5px 5px rgba(0, 0, 0, 0.1); /* 연한 그림자 추가 */
  z-index: 1001;
  background-color: #ffffff;
`;

export const SearchContainer = styled.div`
  display: flex;
  flex-grow: 1;
  align-items: center;
  width: 100%;
  height: auto;
  max-width: 600px;
  margin: 0 20px;
  padding: 10px 20px;
  border-radius: 20px;
  background-color: #ffffff;
  border: 1px solid #ddd;
`;

export const SearchInput = styled.input`
  width: 100%;
  border: none;
  outline: none;
  font-size: 15px;
  color: #333;
  padding: 8px;
  background: transparent;
`;

export const SearchButton = styled.button`
  border: none;
  background: none;
  cursor: pointer;
  padding: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.2rem;
  color: #333;
  &:hover {
    color: #ff9078;
  }
`;

export const MyPageMenuContainer = styled.section`
  flex: 1;
  margin-right: 20px;
  flex-direction: column;
  display: flex;
  justify-content: center;
`;

export const ModalBackdrop = styled.div`
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.4);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
  overflow: hidden;
  outline: none;
`;

export const RecentSearchList = styled.div`
  position: absolute;
  display: flex;
  flex-direction: column;
  top: 100%;
  z-index: 90;
  left: 0;
  width: 100%;
  background-color: #ffffff;
  // border: 1px solid #ddd;
  border-top: none;
  // border-radius: 0 0 10px 10px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  padding: 10px;
  max-height: 300px;
  overflow-y: auto;

  & > div {
    padding: 5px 10px;
    display: flex;
    width: 100%;
    flex-direction: row;
    // justify-content: space-between;
    cursor: pointer;
    transition: background-color 0.3s;
    background-color: #ffffff;
    & > div:nth-child(1) {
      flex: 1;
      justify-self: left;
    }
    & > div:nth-child(2) {
      flex: 1;
      justify-self: right;
    }
  }

  p {
    color: gray;
    font-weight: ;
  }

  div:hover {
    background-color: #f0f0f0;
  }
`;

export const BottomNav = styled.nav`
  position: fixed;
  // position: relative;
  width: 375vw;
  bottom: 0;
  margin-top: auto;
  height: 70px;
  display: flex;
  justify-content: center;
  box-sizing: border-box;
  box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
  z-index: 999;
  background-color: #fff;
  @media (max-width: 575px) {
    width: 100vw;
  }
  > ul {
    width: 100%;
    padding: 0 100px;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  > ul > li {
    list-style: none;
    font-size: 0.75rem;
    text-align: center;
    color: #a0a0a0;
    cursor: pointer;
  }

  > ul > li.activePage {
    color: black;
  }

  > ul > li > svg {
    font-size: 1rem;
    margin-bottom: 5px;
  }
`;
