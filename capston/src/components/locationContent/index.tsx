import React, { useState } from "react";
import { 
  faRoad,
  faArrowRightArrowLeft,
  faLocationDot,
  faMagnifyingGlass,
  faBus,
  faTrainSubway,
  faX,
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
  Overlay,
  SearchBox,
  InputPoint,
  SearchBoxHeader,
  SearchBoxBody,
} from "./styles";

const LocationContentBox = () => {
  const [showStartPoint, setShowStartPoint] = useState(false);
  const [showEndPoint, setShowEndPoint] = useState(false);
  const [startPointValue, setStartPointValue] = useState("");
  const [endPointValue, setEndPointValue] = useState("");
  const [selected, setSelected] = useState("");

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
              <Input value={startPointValue} placeholder="출발지" readOnly/>
              <FontAwesomeIcon icon={faMagnifyingGlass}style={{ color:"gray" , fontSize: "20px"}} />
              <Change><FontAwesomeIcon icon={faArrowRightArrowLeft} /></Change>
            </StartPointInput>           
            <EndPointInput onClick={toggleEndPointInput}>
              <FontAwesomeIcon icon={faLocationDot} style={{ color:"#4287ff" , fontSize: "20px",width: "9%"}} />
              <Input value={endPointValue} readOnly placeholder="도착지"/>
              <FontAwesomeIcon icon={faMagnifyingGlass} style={{ color:"gray" , fontSize: "20px" }} />
            </EndPointInput>
            <Select>
              <SelectBus onClick={() => setSelected("bus")} 
                className={selected === "bus" ? "selected" : ""}><FontAwesomeIcon icon={faBus} style={{fontSize: '20px', padding: '0 0 5px 0'}} />BUS</SelectBus>
              <SelectSubway onClick={() => setSelected("subway")} 
                className={selected === "subway" ? "selected" : ""}><FontAwesomeIcon icon={faTrainSubway} style={{fontSize: '20px',padding: '0 0 5px 0'}}/>SUBWAY</SelectSubway>
            </Select>
        </LocationBoard>
      </BottomSection>

      {showStartPoint && (
        <Overlay onClick={toggleStartPointInput}>
          <SearchBox onClick={(e) => e.stopPropagation()}>
            <SearchBoxHeader>출발지 검색<FontAwesomeIcon icon={faX} style={{color: "gray", marginLeft: "auto"}} onClick={toggleStartPointInput}/></SearchBoxHeader>
            <SearchBoxBody>
             <InputPoint placeholder="출발지를 입력하세요" value={startPointValue} onChange={(e) => setStartPointValue(e.target.value)}></InputPoint>
            </SearchBoxBody>
          </SearchBox>
        </Overlay>
      )} 

      {showEndPoint && (
        <Overlay onClick={toggleEndPointInput}>
          <SearchBox onClick={(e) => e.stopPropagation()}>
            <SearchBoxHeader>도착지 검색 <FontAwesomeIcon icon={faX} style={{color: "gray", marginLeft: "auto"}} onClick={toggleEndPointInput} /></SearchBoxHeader>
            <SearchBoxBody>
              <InputPoint placeholder="도착지를 입력하세요." value={endPointValue} onChange={(e) => setEndPointValue(e.target.value)} ></InputPoint>
            </SearchBoxBody>
          </SearchBox>
        </Overlay>
      )} 
    </>
  );
};

export default LocationContentBox;
