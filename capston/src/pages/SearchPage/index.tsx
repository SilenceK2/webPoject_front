import React from "react";
import { TopSection, BottomSection, Container } from "./style";

const SearchPage = () => {
  return (
    <>
      <Container>
        <TopSection>
          <div>
            <input value={"내용을 검색해주세요..."} />
          </div>
        </TopSection>
        <BottomSection>saefagr</BottomSection>
      </Container>
    </>
  );
};

export default SearchPage;
