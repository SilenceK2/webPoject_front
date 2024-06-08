import { Outlet } from "react-router-dom";
import {
  BottomNav,
  Header,
  SearchButton,
  SearchContainer,
  SearchInput,
  MyPageMenuContainer,
} from "./styles";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser, faSearch } from "@fortawesome/free-solid-svg-icons";
import React, { useState } from "react";
import { sendSearchApi } from "../../../../utils/apimodule/todolist";
import {
  searchSuccessSelector,
  searchListSelector,
} from "../../../../utils/recoil/atom";
import { useSetRecoilState } from "recoil";

const Layout = () => {
  /**
   * 검색 성공했을시에 데이터값 저장하는 selector
   */

  const setSearchSuccessData = useSetRecoilState(searchSuccessSelector);
  const [searchInput, setSearchInput] = useState("");

  const setSearchListSelector = useSetRecoilState(searchListSelector);
  /**
   * 검색 버튼 클릭시 api Post요청
   */
  const sendSearchData = async () => {
    try {
      setSearchListSelector(searchInput);
      const response = await sendSearchApi(searchInput);
      console.log(response);
      setSearchSuccessData(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  const searchBackGround = () => {};

  return (
    <>
      <Header>
        <SearchContainer>
          <SearchInput
            type="text"
            placeholder="투두리스트 검색..."
            value={searchInput}
            onChange={(e) => setSearchInput(e.target.value)}
            onClick={searchBackGround}
          />
          <SearchButton onClick={sendSearchData}>
            <FontAwesomeIcon icon={faSearch} />
          </SearchButton>
        </SearchContainer>
        <MyPageMenuContainer>
          <FontAwesomeIcon icon={faUser} size="lg" />
        </MyPageMenuContainer>
      </Header>

      <Outlet />
      <BottomNav>
        <ul></ul>
      </BottomNav>
    </>
  );
};

export default Layout;
