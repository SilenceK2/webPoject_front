import styled from "styled-components";

export const NavigationLayout = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
  overflow: hidden;
`;

export const Header = styled.section`
  width: 100%;
  padding: 11px 5px;
  display: flex;
  justify-content: space-between;
  box-sizing: border-box;
  box-shadow: 0 0.5px 5px rgba(0, 0, 0, 0.1), 0 0.5px 5px rgba(0, 0, 0, 0.1); /* 연한 그림자 추가 */
  > div.milkyWayLogo {
    width: 155px;
    height: 22px;
    background-image: url("/images/HeaderLogoImg.svg");

    cursor: pointer;
  }

  > svg {
    color: #717171;
    margin-right: 10px;
    cursor: pointer;
  }

  > .activeIcon {
    color: #ff9078;
  }
`;

export const BottomNav = styled.nav`
  width: 100%;
  bottom: 0;
  margin-top: auto;
  padding: 0px 40px;
  box-sizing: border-box;
  box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
  z-index: 1;

  > ul {
    padding: 0;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  > ul > li {
    list-style: none;
    font-size: 0.75rem;
    text-align: center;
    color: #717171;
    cursor: pointer;
  }

  > ul > li.activePage {
    color: #ff9078;
  }

  > ul > li > svg {
    font-size: 1rem;
    margin-bottom: 5px;
  }
`;

export const SearchContainer = styled.div`
  display: flex;
  flex-grow: 1;
  align-items: center;
  width: 100%;
  height: 20%;
  max-width: 600px;
  margin: 0 20px;
  padding: 10px 20px;
  border-radius: 20px;
  // box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  background-color: #ffffff;
  border: 1px solid #ddd;
`;

export const SearchInput = styled.input`
  width: 100%;
  border: none;
  outline: none;
  font-size: 13px;
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
