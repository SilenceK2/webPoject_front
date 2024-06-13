import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faRoad,
  faArrowRightArrowLeft,
  faLocationDot,
  faMagnifyingGlass,
  faBus,
  faX,
  faCar,
} from "@fortawesome/free-solid-svg-icons";
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
  SearchBoxHeader,
  SelectPublicTransportation,
  SelectCar,
  LocationBoxContainer,
} from "./styles";
import PlacePickerComponent from "./locationComponent/PlacePickerComponent";
import DirectionComponent from "./locationComponent/DirectionComponentPublic";
import DirectionComponentPublic from "./locationComponent/DirectionComponentPublic";

interface Place {
  title: string;
  address: string;
  roadAddress: string;
  mapx: string;
  mapy: string;
}

const LocationContentBox: React.FC = () => {
  const [showStartPoint, setShowStartPoint] = useState(false);
  const [showEndPoint, setShowEndPoint] = useState(false);
  const [startPoint, setStartPoint] = useState<Place | null>(null);
  const [endPoint, setEndPoint] = useState<Place | null>(null);
  const [selected, setSelected] = useState<string>("publicTransportation");

  const toggleStartPointInput = () => {
    setShowStartPoint(!showStartPoint);
  };

  const toggleEndPointInput = () => {
    setShowEndPoint(!showEndPoint);
  };

  const handlePlaceSelect = (place: Place, type: "start" | "end") => {
    if (type === "start") {
      setStartPoint(place);
      setShowStartPoint(false);
    } else {
      setEndPoint(place);
      setShowEndPoint(false);
    }
    console.log(`${type} selected:`, place);
  };

  const swapPoints = () => {
    const temp = startPoint;
    setStartPoint(endPoint);
    setEndPoint(temp);
  };

  const handleTransportationSelect = (type: string) => {
    setSelected(type);
  };

  return (
    <>
      <LocationBoxContainer>
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
              <FontAwesomeIcon
                icon={faRoad}
                style={{ color: "#4287ff", fontSize: "20px", width: "9%" }}
              />
              <Input
                value={startPoint?.title || ""}
                placeholder="출발지"
                readOnly
              />
              <FontAwesomeIcon
                icon={faMagnifyingGlass}
                style={{ color: "gray", fontSize: "20px" }}
              />
            </StartPointInput>
            <Change onClick={swapPoints}>
              <FontAwesomeIcon icon={faArrowRightArrowLeft} />
            </Change>
            <EndPointInput onClick={toggleEndPointInput}>
              <FontAwesomeIcon
                icon={faLocationDot}
                style={{ color: "#4287ff", fontSize: "20px", width: "9%" }}
              />
              <Input
                value={endPoint?.title || ""}
                readOnly
                placeholder="도착지"
              />
              <FontAwesomeIcon
                icon={faMagnifyingGlass}
                style={{ color: "gray", fontSize: "20px" }}
              />
            </EndPointInput>
            <Select>
              <SelectPublicTransportation
                onClick={() =>
                  handleTransportationSelect("publicTransportation")
                }
                className={
                  selected === "publicTransportation" ? "selected" : ""
                }
              >
                <FontAwesomeIcon
                  icon={faBus}
                  style={{ fontSize: "20px", padding: "0 0 5px 0" }}
                />
                대중교통
              </SelectPublicTransportation>
              <SelectCar
                onClick={() => handleTransportationSelect("car")}
                className={selected === "car" ? "selected" : ""}
              >
                <FontAwesomeIcon
                  icon={faCar}
                  style={{ fontSize: "20px", padding: "0 0 5px 0" }}
                />
                자동차
              </SelectCar>
            </Select>
          </LocationBoard>
        </BottomSection>
      </LocationBoxContainer>

      {showStartPoint && (
        <Overlay onClick={toggleStartPointInput}>
          <SearchBox onClick={(e) => e.stopPropagation()}>
            <SearchBoxHeader>
              출발지 검색
              <FontAwesomeIcon
                icon={faX}
                style={{ color: "gray", marginLeft: "auto" }}
                onClick={toggleStartPointInput}
              />
            </SearchBoxHeader>
            <PlacePickerComponent
              onSelect={(value) => handlePlaceSelect(value, "start")}
              placeholder="출발지를 입력해주세요"
            />
          </SearchBox>
        </Overlay>
      )}

      {showEndPoint && (
        <Overlay onClick={toggleEndPointInput}>
          <SearchBox onClick={(e) => e.stopPropagation()}>
            <SearchBoxHeader>
              도착지 검색{" "}
              <FontAwesomeIcon
                icon={faX}
                style={{ color: "gray", marginLeft: "auto" }}
                onClick={toggleEndPointInput}
              />
            </SearchBoxHeader>
            <PlacePickerComponent
              onSelect={(value) => handlePlaceSelect(value, "end")}
              placeholder="도착지를 입력해주세요"
            />
          </SearchBox>
        </Overlay>
      )}

      {startPoint && endPoint && selected === "car" && (
        <DirectionComponent
          start={startPoint}
          end={endPoint}
          selected={selected}
        />
      )}

      {startPoint && endPoint && selected === "publicTransportation" && (
        <DirectionComponentPublic
          start={startPoint}
          end={endPoint}
          selected={selected}
        />
      )}
    </>
  );
};

export default LocationContentBox;
