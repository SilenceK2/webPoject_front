import React from "react";
import { faRoad } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  LocationTitle,
  LocationTitleContent,
  LocationBoard,
  Topsection,
  BottomSection,
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
          {/* <div>
            <input value={"출발지"} readOnly />
            <FontAwesomeIcon icon={faRoad} style={{ color: "#4287ff" }} />

            <input value={"도착지"} readOnly />
          </div>
          <div>
            <p></p>
          </div> */}
        </LocationBoard>
      </BottomSection>
    </>
  );
};
export default LocationContentBox;
