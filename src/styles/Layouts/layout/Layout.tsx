import React, { useState, useEffect } from "react";
import { Outlet, useLocation, useNavigate } from "react-router-dom";
import Modal from "../../../components/Modal";
import {
  Header,
  SearchButton,
  SearchContainer,
  SearchInput,
  MyPageMenuContainer,
  ModalBackdrop,
  RecentSearchList,
  BottomNav,
} from "./styles";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUser,
  faSearch,
  faHome,
  faStar,
} from "@fortawesome/free-solid-svg-icons";
import {
  searchSuccessSelector,
  searchListSelector,
  searchBackDropSelector,
  navState,
} from "../../../utils/recoil/atom";

import { useSetRecoilState, useRecoilState } from "recoil";
import { sendSearchApi } from "../../../utils/apimodule/todolist";
import { toast } from "react-toastify";

const Layout = () => {
  const [activePage, setActivePage] = useRecoilState(navState);
  const [searchInput, setSearchInput] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalType, setModalType] = useState("");
  const showTodoModal = () => {
    setIsModalOpen(true);
    setModalType("searchResult");
  };
  const setSearchSuccessData = useSetRecoilState(searchSuccessSelector);
  const [searchListValue, setSearchListValue]: any =
    useRecoilState(searchListSelector);

  const [searchBackDropState, setSearchBackDropState] = useRecoilState(
    searchBackDropSelector
  );

  const location = useLocation();
  const navigate = useNavigate();
  const sendSearchData = async () => {
    updateRecentSearches(searchInput);
    console.log(searchListValue);
    try {
      const response: any = await sendSearchApi(searchInput);
      console.log(response);
      showTodoModal();

      if (response.success) {
        setSearchSuccessData(response.data);
      } else {
        toast.warning("검색결과가 없습니다.");
      }
    } catch (error) {
      console.error(error);
    }
  };

  const updateRecentSearches = (searchKeyword: any) => {
    setSearchListValue((prevSearchList: any) => {
      if (!prevSearchList.includes(searchKeyword)) {
        return [...prevSearchList, searchKeyword];
      } else {
        return prevSearchList;
      }
    });
  };

  const handleBackdropClick = () => {
    setSearchBackDropState(true);
  };

  useEffect(() => {
    let page = "";

    if (location.pathname === "/home") {
      page = "home";
    } else if (location.pathname === "/todopage") {
      page = "todopage";
    }

    if (page) {
      setActivePage(page);
    }
  }, [location.pathname]);
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

        {searchBackDropState && (
          <RecentSearchList>
            {searchListValue !== null &&
            searchListValue !== undefined &&
            searchListValue.length > 0 ? (
              searchListValue.map((search: any, index: any) => (
                <div key={index}>{search}</div>
              ))
            ) : (
              <>
                <div>최근 검색어가 없습니다.</div>
              </>
            )}
          </RecentSearchList>
        )}
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
      <BottomNav>
        <ul>
          <li
            className={activePage === "home" ? "activePage" : ""}
            onClick={() => {
              navigate("/home");
            }}
          >
            <FontAwesomeIcon icon={faHome} />
            <div>홈</div>
          </li>
          <li
            className={activePage === "todopage" ? "activePage" : ""}
            onClick={() => {
              navigate("/todopage");
            }}
          >
            <FontAwesomeIcon icon={faStar} />
            <div>투두 순위/업데이트</div>
          </li>
        </ul>
      </BottomNav>
      {isModalOpen && (
        <Modal closeModal={() => setIsModalOpen(false)} modalType={modalType} />
      )}
    </>
  );
};

export default Layout;
