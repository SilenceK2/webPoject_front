import React, { useState } from "react";
import {
  TopSection,
  BottomSection,
  Container,
  UpdateContent,
  UpdateContentTitle,
  UpdateListContent,
  SearchBar,
  UpdateContentBox,
} from "./style";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { sendSearchApi } from "../../utils/apimodule/todolist";

const SearchPage = () => {
  const [input, setInput]: any = useState("");
  const [data, setData]: any = useState([]);
  const latestUpdates = [
    {
      id: 1,
      todoTitle: "test",
      todoContent: "",
      todoCategory: "",
      todoDate: "test",
      todoRating: "test",
    },
    {
      id: 2,
      todoTitle: "test",
      todoContent: "",
      todoCategory: "",
      todoDate: "test",
      todoRating: "test",
    },
    {
      id: 3,
      todoTitle: "test",
      todoContent: "",
      todoCategory: "",
      todoDate: "test",
      todoRating: "test",
    },
  ];

  /**
   * 투두리스트 검색
   */

  const sendInput = async () => {
    try {
      const response = await sendSearchApi(input);
      console.log(response);
      if (response.success) {
        // 성공했을때 상태값 하나 넣기?
        alert("글찾기 불러오기 성공!");
      } else {
        alert("글찾기 불러오기 실패!");
      }
    } catch (error) {
      console.log("error", error);
    }
  };
  return (
    <>
      <Container>
        <TopSection>
          <SearchBar>
            <div>
              <input
                placeholder={"내용을 검색해주세요..."}
                value={input}
                onChange={(e) => {
                  setInput(e.target.value);
                }}
              />
            </div>
            <div onClick={sendInput}>
              <FontAwesomeIcon icon={faMagnifyingGlass} />
            </div>
          </SearchBar>
        </TopSection>

        <BottomSection>
          <UpdateListContent>
            {latestUpdates.map((update: any, index) => (
              <UpdateContent key={update.id}>
                <UpdateContentTitle>{update.todoTitle}</UpdateContentTitle>
                <UpdateContentBox>
                  <div>
                    {update.todoCategory
                      .split("#")
                      .filter((category: any) => category !== "")
                      .map((category: any, index: any) => (
                        <p key={index}>{category}</p>
                      ))}
                  </div>
                  <div>{update.todoContent}</div>
                </UpdateContentBox>
              </UpdateContent>
            ))}
          </UpdateListContent>
        </BottomSection>
      </Container>
    </>
  );
};

export default SearchPage;
