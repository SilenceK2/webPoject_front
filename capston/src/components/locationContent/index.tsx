import React from "react";
import { faRoad,faArrowRightArrowLeft,faLocationDot,faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
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
  ChangeContent,
} from "./styles";

const LocationContentBox = () => {
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
            <StartPointInput>
              <FontAwesomeIcon icon={faRoad} style={{ color: "#4287ff", fontSize: "20px",width: "9%"}}/>
              <Input value={"출발지"} readOnly/>
              <FontAwesomeIcon icon={faMagnifyingGlass}style={{ color:"gray" , fontSize: "20px"}} />
            </StartPointInput>
            <ChangeContent></ChangeContent>
            <Change><FontAwesomeIcon icon={faArrowRightArrowLeft} /></Change>
            <EndPointInput>
              <FontAwesomeIcon icon={faLocationDot} style={{ color:"#4287ff" , fontSize: "20px",width: "9%"}} />
              <Input value={"도착지"} readOnly/>
              <FontAwesomeIcon icon={faMagnifyingGlass} style={{ color:"gray" , fontSize: "20px" }} />
            </EndPointInput>
        </LocationBoard>
      </BottomSection>
    </>
  );
};
export default LocationContentBox;
