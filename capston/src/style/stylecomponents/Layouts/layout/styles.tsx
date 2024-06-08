import styled from "styled-components";

export const NavigationLayout = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100vh;
  overflow: hidden;
`;

export const Header = styled.section`
  position: relative;
  width: 100%;
  padding: 11px 8px;
  display: flex;
  height: 70px;
  justify-content: space-between;
  box-sizing: border-box;
  box-shadow: 0 0.5px 5px rgba(0, 0, 0, 0.1), 0 0.5px 5px rgba(0, 0, 0, 0.1); /* 연한 그림자 추가 */
  z-index: 999;
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

  overflow: hidden;
  outline: none;
`;

export const RecentSearchList = styled.div`
  position: absolute;
  top: 100%;
  z-index: 999;
  left: 0;
  width: 100%;
  background-color: #ffffff;
  border: 1px solid #ddd;
  border-top: none;
  border-radius: 0 0 10px 10px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  padding: 10px;
  max-height: 150px;
  overflow-y: auto;

  div {
    padding: 5px 10px;
    cursor: pointer;
    transition: background-color 0.3s;
    background-color: #ffffff;
  }

  div:hover {
    background-color: #f0f0f0;
  }
`;
