import { useEffect, useState } from "react";
import Header from "../style/stylecomponents/Layout/Header";
import styled from "styled-components";
import useGeolocation from "react-hook-geolocation";
import getWeatherByCurrentLocation from "../utils/apimodule/math/getWheater";

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
  const [locationState, setLocationState] = useState(false);
  const [longitude, setLongitude] = useState(null); // 위도 상태 추가
  const [latitude, setLatitude] = useState(null); // 경도 상태 추가

  useGeolocation(
    {
      enableHighAccuracy: false,
      timeout: 1200000000,
    },
    (geolocation) => {
      if (geolocation.latitude && geolocation.longitude) {
        setLongitude(geolocation.longitude);
        setLatitude(geolocation.latitude);
        setLocationState(true);
      }
    }
  );

  useEffect(() => {
    if (latitude !== null && longitude !== null) {
      console.log(latitude, longitude);
      const locationSend = async () => {
        try {
          const result = await mappingLocation(latitude, longitude);

          if (result.success) {
            alert("길찾기 불러오기 성공!");
            const locationResult = await locationResultResponse();

            // const wheaterResult = await wheaterResultResponse();
            await getWeatherByCurrentLocation(latitude, longitude);
          } else {
            throw result;
          }
        } catch (error) {
          alert(`실패: ${error.message}`);
        }
      };
      locationSend();
    }
  }, [locationState, longitude, latitude]);

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
