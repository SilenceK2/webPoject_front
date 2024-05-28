import React, {useState} from "react";
import { 
  faRoad,
  faArrowRightArrowLeft,
  faLocationDot,
  faMagnifyingGlass,
  faBus,
  faTrainSubway 
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  LocationTitle,
  LocationTitleContent,
  LocationBoard,
  Topsection,
  BottomSection,
  StartPointInput,
  EndPointInput,
  Input,
  Change,
  Select,
  SelectBus,
  SelectSubway,
  ShowStartContent,

} from "./styles";

const LocationContentBox = () => {
  const [showStartPoint, setShowStartPoint] = useState(false);
  const [showEndPoint, setShowEndPoint] = useState(false);

  const toggleStartPointInput = () =>{
    setShowStartPoint(!showStartPoint);
  }

  const toggleEndPointInput = () => {
    setShowEndPoint(!showEndPoint);
  }

  return (
    <>
      <Topsection>
        <LocationTitle>
          <div></div>
          <LocationTitleContent>
            <div>나의 가장 빠른 교통수단은?</div>
            <div>길찾기 서비스를 이용해보세요</div>
          </LocationTitleContent>
        </LocationTitle>
      </Topsection>
      <BottomSection>
        <LocationBoard>
            <StartPointInput onClick={toggleStartPointInput}>
              <FontAwesomeIcon icon={faRoad} style={{ color: "#4287ff", fontSize: "20px",width: "9%"}}/>
              <Input value={"출발지"} readOnly />
              <FontAwesomeIcon icon={faMagnifyingGlass}style={{ color:"gray" , fontSize: "20px"}} />
              <Change><FontAwesomeIcon icon={faArrowRightArrowLeft} /></Change>
            </StartPointInput>           
            <EndPointInput>
              <FontAwesomeIcon icon={faLocationDot} style={{ color:"#4287ff" , fontSize: "20px",width: "9%"}} />
              <Input value={"도착지"} readOnly/>
              <FontAwesomeIcon icon={faMagnifyingGlass} style={{ color:"gray" , fontSize: "20px" }} />
            </EndPointInput>
            <Select>
              <SelectBus><FontAwesomeIcon icon={faBus} style={{fontSize: '20px', padding: '0 0 5px 0'}} />BUS</SelectBus>
              <SelectSubway><FontAwesomeIcon icon={faTrainSubway} style={{fontSize: '20px',padding: '0 0 5px 0'}}/>SUBWAY</SelectSubway>
            </Select>
        </LocationBoard>
      </BottomSection>

      {showStartPoint && (
              <ShowStartContent>
                <Input placeholder="출발지를 입력하세요"/>
              </ShowStartContent>
            )} 
    </>
  );
};

export default LocationContentBox;
