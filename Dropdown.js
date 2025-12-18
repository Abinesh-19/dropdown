import "./Dropdown.css";
function Dropdown(
  {countries,
  message,
  selectedDistrict,
  selectedState,
  districtList,
  stateList,
  countryList,
  handleCountryChange,
  handleStateChange,
  handleSubmit,
  setDistrictList,
  edit}
) {
  return (
    <div className="Dropdown-container">
      <div className="Dropdown-content">
        <select
          className="select-opt"
          onChange={handleCountryChange}
          value={countryList}
        >
          <option>--Country--</option>
          {countries.map((country) => {
            return (
              <option key={country.countryId}>{country.countryName}</option>
            );
          })}
        </select>

        <select
          className="select-opt"
          onChange={handleStateChange}
          value={stateList}
        >
          <option>--State--</option>
          {selectedState.map((state) => {
            return <option key={state.stateId}>{state.stateName}</option>;
          })}
        </select>

        <select
          className="select-opt"
          onChange={(e) => {
            setDistrictList(e.target.value);
          }}
          value={districtList}
        >
          <option>--District--</option>
          {selectedDistrict.map((district) => {
            return (
              <option key={district.districtId}>{district.districtName}</option>
            );
          })}
        </select>
        <button type="submit" className="submit-btn" onClick={handleSubmit}>
          Submit
        </button> 
        <div>{message}</div>
      </div>
    </div>
  );
}

export default Dropdown;
