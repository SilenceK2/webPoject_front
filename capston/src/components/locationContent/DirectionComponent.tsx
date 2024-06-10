import React, { useState, useEffect } from "react";
import axios from "axios";

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
  const [route, setRoute] = useState<Route | null>(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchRoute = async () => {
      try {
        setLoading(true);
        // mapx, mapy 값 조작
        const formattedStart = {
          mapx: `${start.mapx.slice(0, 3)}.${start.mapx.slice(3)}`,
          mapy: `${start.mapy.slice(0, 2)}.${start.mapy.slice(2)}`,
        };
        const formattedEnd = {
          mapx: `${end.mapx.slice(0, 3)}.${end.mapx.slice(3)}`,
          mapy: `${end.mapy.slice(0, 2)}.${end.mapy.slice(2)}`,
        };
        const response = await axios.get("http://localhost:8000/naver/direction", {
          params: {
            start: `${formattedStart.mapx},${formattedStart.mapy}`,
            goal: `${formattedEnd.mapx},${formattedEnd.mapy}`,
            option: selected === "publicTransportation" ? "trafast" : "car"
          },
        });
        console.log("Route response data:", response.data);
        const routeData = response.data.route;
        if (selected === "publicTransportation" && routeData && routeData.trafast && routeData.trafast.length > 0) {
          const route = routeData.trafast[0];
          setRoute(route);
        } else if (selected === "car" && routeData && routeData.car) {
          const route = routeData.car;
          setRoute(route);
        } else {
          setRoute(null);
        }
        setLoading(false);
      } catch (error) {
        console.error("Error fetching route:", error);
        setLoading(false);
      }
    };

    fetchRoute();
  }, [start, end, selected]);

  useEffect(() => {
    const script = document.createElement("script");
    script.type = "text/javascript";
    script.src = "https://openapi.map.naver.com/openapi/v3/maps.js?ncpClientId=sr9ox19ub6";
    script.async = true;
    script.onload = () => {
      if (route) {
        const mapOptions = {
          center: new window.naver.maps.LatLng(37.3595704, 127.105399),
          zoom: 16
        };
        const map = new window.naver.maps.Map("map", mapOptions);

        const startLatLng = new window.naver.maps.LatLng(parseFloat(start.mapy.slice(0, 2) + "." + start.mapy.slice(2)), parseFloat(start.mapx.slice(0, 3) + "." + start.mapx.slice(3)));
        const endLatLng = new window.naver.maps.LatLng(parseFloat(end.mapy.slice(0, 2) + "." + end.mapy.slice(2)), parseFloat(end.mapx.slice(0, 3) + "." + end.mapx.slice(3)));

        const startMarker = new window.naver.maps.Marker({
          position: startLatLng,
          map: map,
          title: "Start Point"
        });

        const endMarker = new window.naver.maps.Marker({
          position: endLatLng,
          map: map,
          title: "End Point"
        });

        const path = route.path.map(([y, x]) => new window.naver.maps.LatLng(y, x));

        const polyline = new window.naver.maps.Polyline({
          path: path,
          strokeColor: '#5347AA',
          strokeOpacity: 0.8,
          strokeWeight: 6,
          map: map
        });

        map.setCenter(startLatLng);
      }
    };
    document.head.appendChild(script);

    return () => {
      document.head.removeChild(script);
    };
  }, [route, start, end]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (!route) {
    return <div>No route available</div>;
  }

  // 총 거리를 km로 변환
  const totalDistanceKm = (route.summary.distance / 1000).toFixed(1);
  // 예상 소요 시간을 분으로 변환
  const totalDurationMin = Math.round(route.summary.duration / 60 / 1000);
  // 택시비
  const taxiFare = route.summary.taxiFare;
  // 주유비
  const fuelPrice = route.summary.fuelPrice;

  return (
    <div>
      <div id="map" style={{ width: "100%", height: "300px"}}></div>
      <h3>경로</h3>
      <p>총 거리: {totalDistanceKm} km</p>
      <p>예상 소요 시간: {totalDurationMin} 분</p>
      <p>택시비: {taxiFare} 원</p>
      <p>주유비: {fuelPrice} 원</p>
      
    </div>
  );
};

export default DirectionComponent;
