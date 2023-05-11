import React, { useState } from 'react';
import { Data } from '../json/SelectLIst';

const SelectLocation = () => {
  const [selectedCountry, setSelectedCountry] = useState([Data]);
  const [selectedState, setSelectedState] = useState(null);

  const handleCountrySelect = (event) => {
    const countryId = parseInt(event.target.value);
    const selectedCountry = Data.find(location => location.id === countryId);
    setSelectedCountry(selectedCountry);
  };

  const handleStateSelect = (event) => {
    const stateId = parseInt(event.target.value);
    const selectedState = Data.find(location => location.id === stateId);
    console.log('Selected state:', selectedState);
    setSelectedState(selectedState)
  };

  const renderCountryOptions = () => {
    return Data.filter(location => location.parent === 0).map(location => (
      <option key={location.id} value={location.id}>
        {location.name}
      </option>
    ));
  };

  const handleCityOptions = (event) =>{
    const cityId = parseInt(event.target.value);
    const selectedCity = Data.find(location => location.id === cityId);
    console.log('selected City', selectedCity);

  }
  const renderStateOptions = () => {
    if (!selectedCountry) {
      return null;
    }

    const stateOptions = Data.filter(location => location.parent === selectedCountry.id).map(location => (
      <option key={location.id} value={location.id}>
        {location.name}
      </option>
    ));

    if (stateOptions.length === 0) {
      return <option disabled>No states found for {selectedCountry.name}</option>;
    }

    return stateOptions;
  };


  const renderCityOptions =()=>{
    if (!selectedState) {
        return null;
      }
  
      const cityOptions = Data.filter(location => location.parent === selectedState.id).map(location => (
        <option key={location.id} value={location.id}>
          {location.name}
        </option>
      ));
  
      if (cityOptions.length === 0) {
        return <option disabled>No states found for {selectedState.name}</option>;
      }
  
      return cityOptions;
    }

  return (
   
    <div className='container mt-5 bg-warning p-5 text-danger' style={{fontFamily:"cursive"}}>
      <h2 className='display-6 mb-5'>Select country  and select state and display their values in another dropdown</h2>
       <h3>Select country</h3>
      <select onChange={handleCountrySelect}>
        <option value="">Select a country</option>
        {renderCountryOptions()}
      </select>
      <h3 className='mt-2'>Select state</h3>
      <select onChange={handleStateSelect} disabled={!selectedCountry}>
        <option value="">Select a state</option>
        {renderStateOptions()}
      </select>
      <h3  className='mt-2'>Select city</h3>
      <select onChange={handleCityOptions} disabled={!selectedState}>
        <option value="">Select a city</option>
        {renderCityOptions()}
      </select>
    </div>
  );
};

export default SelectLocation;
