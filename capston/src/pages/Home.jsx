import { useEffect, useState } from "react";
import Header from "../style/stylecomponents/Layout/Header";
import styled from "styled-components";
import useGeolocation from "react-hook-geolocation";

import {
  locationResultResponse,
  mappingLocation,
} from "../utils/apimodule/location";

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
  const dfs_xy_conv = require("../utils/wheater/grid");
  const [locationState, setLocationState] = useState(false);
  const geolocation = useGeolocation(
    {
      enableHighAccuracy: true,
      timeout: 12000,
    },
    (geolocation) => {
      if (geolocation.latitude && geolocation.longitude) {
        setLocationState(true);
      }
    }
  );

  const longitude = geolocation.longitude;
  const latitude = geolocation.latitude;

  // const { x, y } = dfs_xy_conv("xy", v1.longitude, v2.latitude);

  useEffect(() => {
    console.log(longitude, latitude);
    const locationSend = async () => {
      try {
        const result = await mappingLocation(longitude, latitude);
        console.log(geolocation);
        if (result.success) {
          alert("길찾기 불러오기 성공!");
          const locationResult = await locationResultResponse();
          // const wheaterResult = await wheaterResultResponse();
        } else {
          throw result;
        }
      } catch (error) {
        alert(`실패: ${error.message}`);
      }
    };
    locationSend();
  }, [locationState]);

  return (
    <>
      <PageContainer>
        <Header></Header>
        <Content></Content>
      </PageContainer>
    </>
  );
};

export default Home;
