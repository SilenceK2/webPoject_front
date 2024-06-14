import React, { useState, useEffect, FC } from "react";
import { Outlet, useLocation, useNavigate } from "react-router-dom";
import Modal from "../../../components/Modal";
import {
  Header,
  SearchButton,
  SearchContainer,
  SearchInput,
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
  searchSuccessListSelector,
  navState,
} from "../../../utils/recoil/atom";
import { useSetRecoilState, useRecoilState, useRecoilValue } from "recoil";
import {
  sendSearchTitleApi,
  sendSearchCaterogyApi,
} from "../../../utils/apimodule/todolist";
import { toast } from "react-toastify";
import Select from "react-select";

interface Props {
  type?: boolean;
}

const Layout: FC<Props> = () => {
  const [activePage, setActivePage] = useRecoilState(navState);
  const [searchInput, setSearchInput] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalType, setModalType] = useState("");
  const [searchOption, setSearchOption] = useState("제목");
  const [successResponseData, setSuccessResponseData] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  // const showTodoModal = () => {
  //   setIsModalOpen(true);
  //   setModalType("searchResult");
  // };

  const setSearchSuccessData: any = useSetRecoilState(searchSuccessSelector);

  const [searchListValue, setSearchListValue]: any =
    useRecoilState(searchListSelector);

  const [searchSuccessList, setSearchSuccessList]: any = useRecoilState(
    searchSuccessListSelector
  );

  const [searchBackDropState, setSearchBackDropState]: any = useRecoilState(
    searchBackDropSelector
  );

  const sendSearchData = async () => {
    updateRecentSearches(searchInput);

    try {
      let response: any;
      if (searchOption === "제목") {
        response = await sendSearchTitleApi(searchInput);
      } else {
        response = await sendSearchCaterogyApi(searchInput);
      }

      const data = response.data.data;

      if (response.success) {
        const searchResult = { data };
        toast.success("검색 성공");

        setSuccessResponseData(true);
        setSearchSuccessData([searchResult.data]);
        setSearchSuccessList(searchResult.data);
        console.log(searchSuccessList);
      } else {
        toast.warning("검색결과가 없습니다.");
        setSuccessResponseData(false);
      }
    } catch (error) {
      toast.warning("검색결과가 없습니다.");
      console.error(error);
    }
  };

  const updateRecentSearches = (searchKeyword: any) => {
    setSearchListValue((prevSearchList: any[]) => {
      if (!prevSearchList.includes(searchKeyword)) {
        return [...prevSearchList, searchKeyword];
      } else {
        return prevSearchList;
      }
    });
  };

  const handleBackdropClick = () => {
    setSearchBackDropState(false);
    setSearchInput("");
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchInput(e.target.value);
    setSuccessResponseData(false); // 검색창에 입력할 때 검색 결과가 아닌 최근 검색어를 보이게 설정
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

  const customStyles = {
    control: (provided: any, state: any) => ({
      ...provided,
      fontSize: "12px",
      marginLeft: "-10px",
      width: "80px",
      marginRight: "20px",
      borderRadius: "10px",
      border: "none",
      focus: "none",
      outline: "none",
      zIndex: "3000",
    }),
  };

  const options = [
    { value: "title", label: "제목" },
    { value: "category", label: "카테고리" },
  ];

  const showHeaderAndNav =
    location.pathname.startsWith("/home") ||
    location.pathname.startsWith("/todopage");

  const highlightText = (text: string, highlight: string) => {
    const parts = text.split(new RegExp(`(${highlight})`, "gi"));

    return (
      <>
        {parts.map((part, index) =>
          part.toLowerCase() === highlight.toLowerCase() ? (
            <span key={index} style={{ color: "orange" }}>
              {part}
            </span>
          ) : (
            part
          )
        )}
      </>
    );
  };

  return (
    <>
      {showHeaderAndNav && (
        <Header>
          <SearchContainer>
            <Select
              options={options}
              value={options.find((option) => option.value === searchOption)}
              onChange={(selectedOption) =>
                setSearchOption(selectedOption?.value || "제목")
              }
              styles={customStyles}
            />
            <SearchInput
              type="text"
              placeholder="투두리스트 검색..."
              value={searchInput}
              onChange={handleInputChange}
              onClick={() => {
                handleBackdropClick(), setIsModalOpen(true);
              }}
            />
            <SearchButton onClick={sendSearchData}>
              <FontAwesomeIcon icon={faSearch} />
            </SearchButton>
          </SearchContainer>

          {searchBackDropState ? (
            <>
              {successResponseData ? (
                <RecentSearchList>
                  {(Array.isArray(searchSuccessList)
                    ? searchSuccessList
                    : []
                  ).map((search: any, index: number) => (
                    <div
                      key={index}
                      onClick={() => {
                        setIsModalOpen(true);
                        setModalType("searchResult");
                      }}
                      style={{ borderBottom: "1px solid black;" }}
                    >
                      <div>{highlightText(search.todoTitle, searchInput)}</div>

                      <div>{search.todoEmail}</div>
                    </div>
                  ))}
                </RecentSearchList>
              ) : searchListValue.length > 0 ? (
                <RecentSearchList>
                  {searchListValue.map((search: string, index: number) => (
                    <div
                      key={index}
                      onClick={() => {
                        setSearchInput(search);
                        sendSearchData(); // 최근 검색어를 클릭하면 검색 실행
                      }}
                    >
                      {search}
                    </div>
                  ))}
                </RecentSearchList>
              ) : (
                <RecentSearchList>
                  <div>최근 검색어가 없습니다.</div>
                </RecentSearchList>
              )}
            </>
          ) : null}
        </Header>
      )}
      <Outlet />
      {searchBackDropState && <ModalBackdrop onClick={handleBackdropClick} />}
      {showHeaderAndNav && (
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
                navigate("todopage");
              }}
            >
              <FontAwesomeIcon icon={faStar} />
              <div>투두 순위/업데이트</div>
            </li>
          </ul>
        </BottomNav>
      )}
      {isModalOpen && (
        <Modal closeModal={() => setIsModalOpen(false)} modalType={modalType} />
      )}
    </>
  );
};

export default Layout;
