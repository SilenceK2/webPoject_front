import React, { useEffect, useState } from "react";
import axios from "axios";
import { 
  DirectionComponentBar,
  DirectionComponentBox, 
  DirectionComponentPublicBar, 
  DirectionComponentPublicBox, 
  DirectionComponentPublicBoxBox, 
  DirectionComponentPublicBoxHeader, 
  DirectionComponentPublicSection, 
  DirectionWay, 
  Number,
  Circle // 추가된 부분
} from "../styles";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCar, faPerson, faTrain,faBus } from '@fortawesome/free-solid-svg-icons'; // 추가된 부분

interface Place {
  title: string;
  address: string;
  roadAddress: string;
  mapx: string;
  mapy: string;
}

interface DirectionComponentPublicProps {
  start: Place;
  end: Place;
  selected: string;
}

interface Route {
  path: Array<{
    pathType: number;
    info: {
      trafficDistance: number;
      totalTime: number;
      payment: number;
      busTransitCount?: number;
      subwayTransitCount?: number;
      mapObj: string;
      firstStartStation: string;
      firstStartStationKor: string;
      lastEndStation: string;
      lastEndStationKor: string;
      totalStationCount: number;
      busStationCount: number;
      subwayStationCount: number;
      totalDistance: number;
    };
    subPath: Array<{
      trafficType: number;
      distance: number;
      sectionTime: number;
      stationCount?: number;
      lane?: Array<{
        name?: string;
        nameKor?: string;
        nameJpnKata?: string;
        busNo?: string;
        busNoKor?: string;
        busNoJpnKata?: string;
        type?: number;
        busID?: number;
        busLocalBlID?: string;
        busCityCode?: number;
        busProviderCode?: number;
        subwayCode?: number;
        subwayCityCode?: number;
      }>;
      intervalTime: number;
      startName: string;
      startNameKor: string;
      startNameJpnKata: string;
      startX: number;
      startY: number;
      endName: string;
      endNameKor: string;
      endNameJpnKata: string;
      endX: number;
      endY: number;
      way?: string;
      wayCode?: number;
      door?: string;
      startID: number;
      startStationCityCode?: number;
      startStationProviderCode?: number;
      startLocalStationID?: string;
      startArsID?: string;
      endID: number;
      endStationCityCode?: number;
      endStationProviderCode?: number;
      endLocalStationID?: string;
      endArsID?: string;
      startExitNo?: string;
      startExitX?: number;
      startExitY?: number;
      endExitNo?: string;
      endExitX?: number;
      endExitY?: number;
      passStopList?: {
        stations: Array<{
          index: number;
          stationID: number;
          stationName: string;
          stationNameKor: string;
          stationNameJpnKata: string;
          stationCityCode?: number;
          stationProviderCode?: number;
          localStationID?: string;
          arsID?: string;
          x: number;
          y: number;
          isNonStop?: string;
        }>;
      };
    }>;
  }>;
}

const DirectionComponentPublic: React.FC<DirectionComponentPublicProps> = ({ start, end, selected }) => {
  const [route, setRoute] = useState<Route | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchRoute = async () => {
      if (selected === "publicTransportation") {
        try {
          const formattedStart = {
            mapx: `${start.mapx.slice(0, 3)}.${start.mapx.slice(3)}`,
            mapy: `${start.mapy.slice(0, 2)}.${start.mapy.slice(2)}`,
          };
          const formattedEnd = {
            mapx: `${end.mapx.slice(0, 3)}.${end.mapx.slice(3)}`,
            mapy: `${end.mapy.slice(0, 2)}.${end.mapy.slice(2)}`,
          };

          const SX = formattedStart.mapx;
          const SY = formattedStart.mapy;
          const EX = formattedEnd.mapx;
          const EY = formattedEnd.mapy;

          const response = await axios.get("http://localhost:8000/odsay/route", {
            params: {
              SX,
              SY,
              EX,
              EY
            }
          });
          console.log("Route Data:", response.data.result);  // 경로 정보를 콘솔에 출력
          setRoute(response.data.result);
          setLoading(false);
        } catch (error) {
          console.error("Error fetching route from ODSAY API:", error);
          setLoading(false);
        }
      }
    };

    fetchRoute();
  }, [start, end, selected]);

  if (loading) {
    return <div>대중교통 경로를 검색 중입니다...</div>;
  }

  const getIcon = (trafficType: number) => {
    switch (trafficType) {
      case 1:
        return <FontAwesomeIcon icon={faTrain} />;
      case 2:
        return <FontAwesomeIcon icon={faBus} />;
      case 3:
        return <FontAwesomeIcon icon={faPerson} />;
      default:
        return null;
    }
  };

  return (
    <>
      {route && (
        <DirectionComponentPublicSection>
          {route.path.map((path, index) => (
            <div key={index}>
              <DirectionComponentPublicBox>
                <DirectionComponentPublicBoxHeader>
                  <DirectionWay>경로</DirectionWay>
                  <Number>{index + 1}</Number>
                </DirectionComponentPublicBoxHeader>
                <DirectionComponentPublicBoxBox>
                  <p style={{ fontSize: "30px", fontWeight: "bold" }}>{Math.round(path.info.totalTime)}</p>
                  <p style={{ fontSize: "22px", fontWeight: "bold" }}>분</p>
                  <p style={{ fontSize: "20px", fontWeight: "bold" }}>&nbsp;⊸ {path.info.payment}원 </p>
                </DirectionComponentPublicBoxBox>
                <DirectionComponentBar>
                  {path.subPath.map((subPath, subIndex) => (
                    <div key={subIndex} style={{ position: 'relative', display: 'inline-block', width: `${(subPath.sectionTime / path.info.totalTime) * 100}%`, textAlign: 'center' }}>
                      {subIndex !== path.subPath.length - 1 && (
                        <Circle
                          style={{
                            position: 'absolute',
                            top: '-5px',
                            left: '0',
                            transform: 'translateX(-50%)',
                            backgroundColor:
                              subPath.trafficType === 1 ? "#87b4fb" : subPath.trafficType === 2 ? "#1ed71e" : "lightgray",
                            width: '30px',
                            height: '30px',
                            borderRadius: '50%',
                            zIndex: 1,
                            display: 'flex',
                            justifyContent: 'center',
                            alignItems: 'center',
                            color: 'white', // 아이콘 색상
                          }}
                        >
                          {getIcon(subPath.trafficType)}
                        </Circle>
                      )}
                      <DirectionComponentPublicBar
                        style={{
                          borderRadius: subIndex === path.subPath.length - 1 ? "0px 10px 10px 0px" : "0px",
                          backgroundColor:
                            subPath.trafficType === 1 ? "#87b4fb" : subPath.trafficType === 2 ? "#1ed71e" : "lightgray",
                          width: '100%',
                          zIndex: 1,
                        }}
                      ></DirectionComponentPublicBar>
                      <div style={{ position: 'absolute', top: '20px', width: '100%', fontSize: '14px', fontWeight: 'bold' }}>
                        {subPath.trafficType !== 3 && subPath.lane && subPath.lane[0] && (
                          <>
                            {subPath.lane[0].busNo || subPath.lane[0].name}
                          </>
                        )}
                      </div>
                      {subPath.distance !== 0 && (
                        <div style={{ position: 'absolute', top: '0px', width: '100%', fontSize: '12px' }}>
                          {Math.round(subPath.sectionTime)}분
                        </div>
                      )}
                    </div>
                  ))}
                </DirectionComponentBar>
              </DirectionComponentPublicBox>
            </div>
          ))}
        </DirectionComponentPublicSection>
      )}
    </>
  );
};

export default DirectionComponentPublic;
