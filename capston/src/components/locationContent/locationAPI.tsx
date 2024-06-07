import React, { useState } from 'react';
import '@googlemaps/extended-component-library/place_picker.js'
import './locationStyles.css';

const { APILoader, PlacePicker } = require('@googlemaps/extended-component-library/react');




const PlacePickerComponent = () => {
  const [formattedAddress, setFormattedAddress] = useState('');
  
  const handlePlaceChange = (e: { target: { value: { formattedAddress: any; }; }; }) => {
    setFormattedAddress(e.target.value?.formattedAddress ?? '');
  };
  
  const countries = ['kr'];
  
  
  return (
    <div>
      <APILoader apiKey="AIzaSyDRp_-Qaco0rsCYzo1P_Fx0pvsx55ki7SY" solutionChannel="GMP_GCC_placepicker_v1" />
      <div className="container">
        <PlacePicker country={countries} placeholder="출발지입력" onPlaceChange={handlePlaceChange} />
        <div className="result">
          {formattedAddress}
        </div>
      </div>
    </div>
  );
};

export default PlacePickerComponent;
