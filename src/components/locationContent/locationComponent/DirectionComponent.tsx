import React, { useState, useEffect } from "react";
import axios from "axios";
import { DirectionComponentBox, LocationDataBox, LocationDataBoxBody, LocationDataBoxFooter, LocationDataBoxHeader, Number } from "../styles";

interface Route {
  summary: {
    distance: number; // 총 거리 (미터)
    duration: number; // 예상 소요 시간 (초)
    taxiFare: number; // 톨게이트 요금
    fuelPrice: number; // 주유비
  };
  path: Array<[number, number]>; // 경로 좌표 배열
}

interface DirectionProps {
  start: { mapx: string; mapy: string };
  end: { mapx: string; mapy: string };
  selected: string;
}

declare global {
  interface Window {
    naver: any; // 또는 원하는 형식으로 지정
  }
}

const DirectionComponent: React.FC<DirectionProps> = ({ start, end, selected }) => {
  const [traoptimalRoute, setTraoptimalRoute] = useState<Route | null>(null);
  const [trafastRoute, setTrafastRoute] = useState<Route | null>(null);
  const [tracomfortRoute, setTracomfortRoute] = useState<Route | null>(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchRoute = async () => {
      try {
        setLoading(true);
        const formattedStart = {
          mapx: `${start.mapx.slice(0, 3)}.${start.mapx.slice(3)}`,
          mapy: `${start.mapy.slice(0, 2)}.${start.mapy.slice(2)}`,
        };
        const formattedEnd = {
          mapx: `${end.mapx.slice(0, 3)}.${end.mapx.slice(3)}`,
          mapy: `${end.mapy.slice(0, 2)}.${end.mapy.slice(2)}`,
        };

        const traoptimalResponse = await axios.get("http://localhost:8000/naver/direction", {
          params: {
            start: `${formattedStart.mapx},${formattedStart.mapy}`,
            goal: `${formattedEnd.mapx},${formattedEnd.mapy}`,
            option: "traoptimal"
          },
        });

        const trafastResponse = await axios.get("http://localhost:8000/naver/direction", {
          params: {
            start: `${formattedStart.mapx},${formattedStart.mapy}`,
            goal: `${formattedEnd.mapx},${formattedEnd.mapy}`,
            option: "trafast"
          },
        });

        const tracomfortResponse = await axios.get("http://localhost:8000/naver/direction", {
          params: {
            start: `${formattedStart.mapx},${formattedStart.mapy}`,
            goal: `${formattedEnd.mapx},${formattedEnd.mapy}`,
            option: "tracomfort"
          },
        });

        setTraoptimalRoute(traoptimalResponse.data.route.traoptimal[0]);
        setTrafastRoute(trafastResponse.data.route.trafast[0]);
        setTracomfortRoute(tracomfortResponse.data.route.tracomfort[0]);

        setLoading(false);
      } catch (error) {
        console.error("Error fetching route:", error);
        setLoading(false);
      }
    };

    fetchRoute();
  }, [start, end, selected]);

  useEffect(() => {
    const loadScript = () => {
      return new Promise((resolve, reject) => {
        if (document.querySelector(`script[src="https://openapi.map.naver.com/openapi/v3/maps.js?ncpClientId=sr9ox19ub6"]`)) {
          resolve('Script already loaded');
          return;
        }
        const script = document.createElement("script");
        script.type = "text/javascript";
        script.src = "https://openapi.map.naver.com/openapi/v3/maps.js?ncpClientId=sr9ox19ub6";
        script.async = true;
        script.onload = () => {
          resolve('Script loaded successfully');
        };
        script.onerror = (error) => {
          reject('Error loading script');
        };
        document.head.appendChild(script);
      });
    };

    let map: any;
    let polyline: any;

    loadScript().then(() => {
      if (traoptimalRoute) {
        const mapOptions = {
          center: new window.naver.maps.LatLng(37.3595704, 127.105399),
          zoom: 13
        };
        map = new window.naver.maps.Map("map", mapOptions);

        const startLatLng = new window.naver.maps.LatLng(parseFloat(start.mapy.slice(0, 2) + "." + start.mapy.slice(2)), parseFloat(start.mapx.slice(0, 3) + "." + start.mapx.slice(3)));
        const endLatLng = new window.naver.maps.LatLng(parseFloat(end.mapy.slice(0,2) + "." + end.mapy.slice(2)), parseFloat(end.mapx.slice(0, 3) + "." + end.mapx.slice(3)));

        new window.naver.maps.Marker({
          position: startLatLng,
          map: map,
          title: "Start Point"
        });

        new window.naver.maps.Marker({
          position: endLatLng,
          map: map,
          title: "End Point"
        });

        const path = traoptimalRoute.path.map(([x, y]: [number, number]) => new window.naver.maps.LatLng(y, x));

        polyline = new window.naver.maps.Polyline({
          path: path,
          strokeColor: '#5347AA',
          strokeOpacity: 0.8,
          strokeWeight: 6,
          map: map
        });

        map.setCenter(startLatLng);
        console.log("Map and polyline loaded");
      }
    }).catch((error) => {
      console.error(error);
    });

    return () => {
      if (map) {
        map.destroy();
        console.log("Map destroyed");
      }
      if (polyline) {
        polyline.setMap(null);
        console.log("Polyline removed");
      }
    };
  }, [traoptimalRoute, start, end]);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <DirectionComponentBox>
      <div id="map" style={{ display:"flex", width: "99.8%", height: "300px", borderRadius:"20px 20px 0px 0px", border:"1px solid lightgray" }}></div>
      {traoptimalRoute && (
        <LocationDataBox>
          <LocationDataBoxHeader>
            <Number>1</Number>
            <h3 style={{ color: "blue" }}>최적의 경로</h3>
          </LocationDataBoxHeader>
          <LocationDataBoxBody>
            <p style={{ fontSize: "30px", fontWeight: "bold" }}>{Math.round(traoptimalRoute.summary.duration / 60 / 1000)}</p>
            <p style={{ fontSize: "22px", fontWeight: "bold" }}>분</p>
            <p style={{ fontSize: "20px", fontWeight: "bold" }}>&nbsp;⊸ {(traoptimalRoute.summary.distance / 1000).toFixed(1)}km</p>
          </LocationDataBoxBody>
          <LocationDataBoxFooter>
            <p style={{ fontSize: "15px", color: "gray" }}>택시비: {traoptimalRoute.summary.taxiFare}원 ⋯</p>
            <p style={{ fontSize: "15px", color: "gray" }}>&nbsp;주유비: {traoptimalRoute.summary.fuelPrice}원</p>
          </LocationDataBoxFooter>
        </LocationDataBox>
      )}
      {trafastRoute && (
        <LocationDataBox>
          <LocationDataBoxHeader>
          <Number>2</Number>
            <h3 style={{ color: "blue" }}>실시간 빠른길</h3>
          </LocationDataBoxHeader>
          <LocationDataBoxBody>
            <p style={{ fontSize: "30px", fontWeight: "bold" }}>{Math.round(trafastRoute.summary.duration / 60 / 1000)}</p>
            <p style={{ fontSize: "22px", fontWeight: "bold" }}>분</p>
            <p style={{ fontSize: "20px", fontWeight: "bold" }}>&nbsp;⊸ {(trafastRoute.summary.distance / 1000).toFixed(1)}km</p>
          </LocationDataBoxBody>
          <LocationDataBoxFooter>
            <p style={{ fontSize: "15px", color: "gray" }}>택시비: {trafastRoute.summary.taxiFare}원 ⋯</p>
            <p style={{ fontSize: "15px", color: "gray" }}>&nbsp;주유비: {trafastRoute.summary.fuelPrice}원</p>
          </LocationDataBoxFooter>
        </LocationDataBox>
      )}
      {tracomfortRoute && (
        <LocationDataBox >
          <LocationDataBoxHeader>
          <Number>3</Number>
            <h3 style={{ color: "blue" }}>실시간 편한길</h3>
          </LocationDataBoxHeader>
          <LocationDataBoxBody>
            <p style={{ fontSize: "30px", fontWeight: "bold" }}>{Math.round(tracomfortRoute.summary.duration / 60 / 1000)}</p>
            <p style={{ fontSize: "22px", fontWeight: "bold" }}>분</p>
            <p style={{ fontSize: "20px", fontWeight: "bold" }}>&nbsp;⊸ {(tracomfortRoute.summary.distance / 1000).toFixed(1)}km</p>
          </LocationDataBoxBody>
          <LocationDataBoxFooter>
            <p style={{ fontSize: "15px", color: "gray" }}>택시비: {tracomfortRoute.summary.taxiFare}원 ⋯</p>
            <p style={{ fontSize: "15px", color: "gray" }}>&nbsp;주유비: {tracomfortRoute.summary.fuelPrice}원</p>
          </LocationDataBoxFooter>
        </LocationDataBox>
      )}
    </DirectionComponentBox>
  );
};

export default DirectionComponent;
 
