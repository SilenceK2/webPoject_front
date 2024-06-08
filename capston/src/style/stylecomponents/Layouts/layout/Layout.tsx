import React, { useState } from "react";
import { Outlet } from "react-router-dom";
import {
  Header,
  SearchButton,
  SearchContainer,
  SearchInput,
  MyPageMenuContainer,
  ModalBackdrop,
  RecentSearchList,
} from "./styles";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser, faSearch } from "@fortawesome/free-solid-svg-icons";
import {
  searchSuccessSelector,
  searchListSelector,
  searchBackDropSelector,
} from "../../../../utils/recoil/atom";
import { useSetRecoilState, useRecoilState } from "recoil";
import { sendSearchApi } from "../../../../utils/apimodule/todolist";
import { toast } from "react-toastify";

const Layout = () => {
  const [searchInput, setSearchInput] = useState("");
  const setSearchSuccessData = useSetRecoilState(searchSuccessSelector);
  const [searchListValue, setSearchListValue]: any =
    useRecoilState(searchListSelector);

  const [searchBackDropState, setSearchBackDropState] = useRecoilState(
    searchBackDropSelector
  );

  const sendSearchData = async () => {
    try {
      setSearchListValue([searchInput]);
      const response = await sendSearchApi(searchInput);
      console.log(response);

      if (response.success) {
        setSearchSuccessData(response.data);
        updateRecentSearches(searchInput);
      } else {
        toast.warning("검색결과가 없습니다.");
      }
    } catch (error) {
      console.error(error);
    }
  };

  const updateRecentSearches = (searchKeyword: any) => {
    if (!searchListValue.includes(searchKeyword)) {
      setSearchListValue([searchKeyword, ...searchListValue]);
    }
  };

  const handleBackdropClick = () => {
    setSearchBackDropState(true);
  };

  return (
    <>
      <Header>
        <SearchContainer>
          <SearchInput
            type="text"
            placeholder="투두리스트 검색..."
            value={searchInput}
            onChange={(e) => setSearchInput(e.target.value)}
            onClick={handleBackdropClick}
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
      {searchBackDropState && (
        <ModalBackdrop
          onClick={() => {
            setSearchBackDropState(false);
            setSearchInput("");
          }}
        ></ModalBackdrop>
      )}
      <RecentSearchList>
        {searchListValue &&
          searchListValue.map((search: any, index: any) => (
            <div key={index}>{search}</div>
          ))}
      </RecentSearchList>
    </>
  );
};

export default Layout;
