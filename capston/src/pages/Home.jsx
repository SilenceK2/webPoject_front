import { useEffect } from "react";
import Header from "../style/stylecomponents/Layout/Header";
import styled from "styled-components";

import { mappingLocation } from "../utils/apimodule/location";

const PageContainer = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`;
const Content = styled.div`
  flex: 1;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;

const Home = () => {
  // useEffect(() => {
  //   /**
  //    * geolocation으로 담아서 recoil에 담기 성공하면 try, catch
  //    */
  //   const locationSend = async () => {
  //     try {
  //       const result = await mappingLocation(location, endpoint);
  //       if (result.success) {
  //         // 맵 지도에 띄움   ?   response
  //         alert("지도 불러오기 성공!");
  //       } else {
  //         throw result;
  //       }
  //     } catch (error) {
  //       alert(`실패: ${error.message}`);
  //     }
  //   };
  // }, []);
  return (
    <>
      <PageContainer>
        <Header>header</Header>
        <Content></Content>
      </PageContainer>
    </>
  );
};

export default Home;
