import React, { useState } from "react";
import { 
  faRoad,
  faArrowRightArrowLeft,
  faLocationDot,
  faMagnifyingGlass,
  faBus,
  faX,
  faCar
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
  Overlay,
  SearchBox,
  InputPoint,
  SearchBoxHeader,
  SearchBoxBody,
  SelectPublicTransportation,
  SelectCar,
} from "./styles";
import PlacePickerComponent from "./PlacePickerComponent";

const LocationContentBox = () => {
  const [showStartPoint, setShowStartPoint] = useState(false);
  const [showEndPoint, setShowEndPoint] = useState(false);
  const [startPointValue, setStartPointValue] = useState("");
  const [endPointValue, setEndPointValue] = useState("");
  const [selected, setSelected] = useState("");

  const toggleStartPointInput = () => {
    setShowStartPoint(!showStartPoint);
  };

  const toggleEndPointInput = () => {
    setShowEndPoint(!showEndPoint);
  };

  // 출발지와 도착지를 구분하여 선택된 값을 설정하는 함수
  const handlePlaceSelect = (value: string, type: 'start' | 'end') => {
    if (type === 'start') {
      setStartPointValue(value); // 출발지 값 설정
      setShowStartPoint(false); // 출발지 입력창 닫기
    } else {
      setEndPointValue(value); // 도착지 값 설정
      setShowEndPoint(false); // 도착지 입력창 닫기
    }
  };

  // 출발지와 도착지 값을 교환하는 함수
  const swapPoints = () => {
    const temp = startPointValue;
    setStartPointValue(endPointValue);
    setEndPointValue(temp);
  };

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
            <FontAwesomeIcon icon={faRoad} style={{ color: "#4287ff", fontSize: "20px", width: "9%" }}/>
            <Input value={startPointValue} placeholder="출발지" readOnly />
            <FontAwesomeIcon icon={faMagnifyingGlass} style={{ color:"gray", fontSize: "20px" }} />
           
          </StartPointInput> <Change onClick={swapPoints}><FontAwesomeIcon icon={faArrowRightArrowLeft} /></Change>
          <EndPointInput onClick={toggleEndPointInput}>
            <FontAwesomeIcon icon={faLocationDot} style={{ color:"#4287ff", fontSize: "20px", width: "9%" }} />
            <Input value={endPointValue} readOnly placeholder="도착지"/>
            <FontAwesomeIcon icon={faMagnifyingGlass} style={{ color:"gray", fontSize: "20px" }} />
          </EndPointInput>
          <Select>
            <SelectPublicTransportation onClick={() => setSelected("publicTransportation")} className={selected === "publicTransportation" ? "selected" : ""}>
              <FontAwesomeIcon icon={faBus} style={{ fontSize: '20px', padding: '0 0 5px 0' }} />대중교통
            </SelectPublicTransportation>
            <SelectCar onClick={() => setSelected("car")} className={selected === "car" ? "selected" : ""}>
              <FontAwesomeIcon icon={faCar} style={{ fontSize: '20px', padding: '0 0 5px 0' }} />자동차
            </SelectCar>
          </Select>
        </LocationBoard>
      </BottomSection>

      {showStartPoint && (
        <Overlay onClick={toggleStartPointInput}>
          <SearchBox onClick={(e) => e.stopPropagation()}>
            <SearchBoxHeader>출발지 검색<FontAwesomeIcon icon={faX} style={{ color: "gray", marginLeft: "auto" }} onClick={toggleStartPointInput} /></SearchBoxHeader>
            {/* 출발지 선택 시 handlePlaceSelect에 'start' 타입 전달 */}
            <PlacePickerComponent onSelect={(value) => handlePlaceSelect(value, 'start')} />
          </SearchBox>
        </Overlay>
      )}

      {showEndPoint && (
        <Overlay onClick={toggleEndPointInput}>
          <SearchBox onClick={(e) => e.stopPropagation()}>
            <SearchBoxHeader>도착지 검색 <FontAwesomeIcon icon={faX} style={{ color: "gray", marginLeft: "auto" }} onClick={toggleEndPointInput} /></SearchBoxHeader>
            {/* 도착지 선택 시 handlePlaceSelect에 'end' 타입 전달 */}
            <PlacePickerComponent onSelect={(value) => handlePlaceSelect(value, 'end')} />
          </SearchBox>
        </Overlay>
      )}
    </>
  );
};

export default LocationContentBox;
