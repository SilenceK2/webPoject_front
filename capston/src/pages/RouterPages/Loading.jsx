import { MoonLoader } from "react-spinners";
import styled from "styled-components";

const LoadingPage = styled.div`
  width: 100%;
  display: flex;
  padding-top: 300px;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

const Loading = () => {
  return (
    <>
      <LoadingPage>
        <h3>잠시만 기다려주세요</h3>
        <p>데이터를 불러오고 있습니다...</p>
        <MoonLoader color="#36d7b7" />
      </LoadingPage>
    </>
  );
};
export default Loading;
