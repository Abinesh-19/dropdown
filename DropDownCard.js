import "./DropDownCard.css";

function DropDownCard({
  card,
  message,
  showup,
  handleCancel,
  handleOk,
  editHandleOk,
  handleEdit,
  handleDelete,
  handleUpdate,
  handleExit,
  edit,
  editIndex,
  countries,
  editCountryList,
  editDistrictList,
  editStateList,
  editSelectedState,
  editSelectedDistrict,
  setEditDistrictList,
  editHandleCountryChange,
  editHandleStateChange
}) {
  return (
    <div className="card-container">
      {card.map((item, i) => (
        <div key={i} className="card">
          <h2 className="card-title">Selected location</h2>
           {edit && editIndex.includes(i) ? (
              <>
              <div className="Dropdown-container">
      <div className="Dropdown-content">
        <select
          className="select-opt"
          value={editCountryList[i]}
          onChange={(e) => editHandleCountryChange(e, i)}
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
         value={editStateList[i]}
        onChange={(e) => editHandleStateChange(e, i)}
        >
          <option>--State--</option>
          {(editSelectedState[i]).map(state => {
            return <option key={state.stateId} value={state.stateName}>{state.stateName}</option>;
          })}
        </select>

       <select
  value={editDistrictList[i]}
  className="select-opt"
  onChange={(e) =>
    setEditDistrictList(prev => ({
      ...prev,
      [i]: e.target.value
    }))
  }
>
  <option>--District--</option>

  {(editSelectedDistrict[i]).map(district => (
    <option
      key={district.districtId}
      value={district.districtName}
    >
      {district.districtName}
    </option>
  ))}
</select>

      </div>
      <div className="card_btn">
                <button  onClick={() => handleUpdate(i)} className="update-btn">
                  Update
                </button>
                <button onClick={() => handleExit(i)} className="exit-btn">
                  Exit
                </button>
      </div>
      <div>{message}</div>
    </div>
              </>
            ) : (
              <>
               <div style={{ display: "flex", flexDirection: "column", width: "100%" }}>
            <p style={{ color: "blue", display: "flex", justifyContent: "space-between" }}>
              Country:
              <span style={{ color: "black" }}>{item.country}</span>
            </p>

            <p style={{ color: "blue", display: "flex", justifyContent: "space-between" }}>
              State:
              <span style={{ color: "black" }}>{item.state}</span>
            </p>

            <p style={{ color: "blue", display: "flex", justifyContent: "space-between" }}>
              District:
              <span style={{ color: "black" }}>{item.district}</span>
            </p>
          </div>
          <div className="card_btn">

                <button
                  onClick={() => handleEdit(i)}
                  className="edit-btn"
                  >
                  Edit
                </button>
                <button
                  onClick={() => handleDelete(i)}
                  className="delete-btn"
                  >
                  Delete
                </button>
                  </div>
              </>
            )}
        </div>
      ))}

      {showup && (
        <div className="add-msg">
          <p>
            This Location already exists.
            <br />
            Sure, do you want to add?
          </p>

          <div className="msg_btn">

            {edit?
             <button onClick={editHandleOk} className="ok-btn">Ok</button>:
             <button onClick={handleOk} className="ok-btn">Ok</button>
            }
            <button onClick={handleCancel} className="cancel-btn">Cancel</button>
          </div>
        </div>
      )}
    </div>
  );
}

export default DropDownCard;
