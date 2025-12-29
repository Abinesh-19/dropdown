import "./App.css";
import Dropdown from "./component/Dropdown";
import DropDownCard from "./component/DropDownCard";
import { useState } from "react";

function App() {
  const [countryList, setCountryList] = useState("");
  const [stateList, setStateList] = useState("");
  const [districtList, setDistrictList] = useState("");
  const [selectedState, setSelectedState] = useState([]);
  const [selectedDistrict, setselecteddistrict] = useState([]);
  const [editCountryList, setEditCountryList] = useState({});
  const [editStateList, setEditStateList] = useState({});
  const [editDistrictList, setEditDistrictList] = useState({});
  const [editSelectedState, setEditSelectedState] = useState({});
  const [editSelectedDistrict, setEditSelectedDistrict] = useState({});
  const [card, setCard] = useState([]);
  const [message,setMessage] = useState("");
  const [showup,setShowUp] = useState(false);
  const [edit,setEdit] = useState(false);
  const [editIndex,setEditIndex] =useState([]);
  const [popupEditIndex, setPopupEditIndex] = useState(null);

  const countries = [
    {
      countryId: 1,
      countryName: "India",
      states: [
        {
          stateId: 101,
          stateName: "Tamil Nadu",
          districts: [
            { districtId: 10101, districtName: "Chennai" },
            { districtId: 10102, districtName: "Coimbatore" },
            { districtId: 10103, districtName: "Madurai" },
            { districtId: 10104, districtName: "Salem" },
            { districtId: 10105, districtName: "Tirunelveli" },
          ],
        },
        {
          stateId: 102,
          stateName: "Maharashtra",
          districts: [
            { districtId: 10201, districtName: "Mumbai" },
            { districtId: 10202, districtName: "Pune" },
            { districtId: 10203, districtName: "Nagpur" },
            { districtId: 10204, districtName: "Nashik" },
            { districtId: 10205, districtName: "Aurangabad" },
          ],
        },
        {
          stateId: 103,
          stateName: "Karnataka",
          districts: [
            { districtId: 10301, districtName: "Bengaluru" },
            { districtId: 10302, districtName: "Mysuru" },
            { districtId: 10303, districtName: "Mangaluru" },
            { districtId: 10304, districtName: "Hubli" },
            { districtId: 10305, districtName: "Belagavi" },
          ],
        },
        {
          stateId: 104,
          stateName: "Kerala",
          districts: [
            { districtId: 10401, districtName: "Kochi" },
            { districtId: 10402, districtName: "Thiruvananthapuram" },
            { districtId: 10403, districtName: "Kozhikode" },
            { districtId: 10404, districtName: "Thrissur" },
            { districtId: 10405, districtName: "Alappuzha" },
          ],
        },
        {
          stateId: 105,
          stateName: "Gujarat",
          districts: [
            { districtId: 10501, districtName: "Ahmedabad" },
            { districtId: 10502, districtName: "Surat" },
            { districtId: 10503, districtName: "Vadodara" },
            { districtId: 10504, districtName: "Rajkot" },
            { districtId: 10505, districtName: "Bhavnagar" },
          ],
        },
      ],
    },

    {
      countryId: 2,
      countryName: "United States",
      states: [
        {
          stateId: 201,
          stateName: "California",
          districts: [
            { districtId: 20101, districtName: "Los Angeles County" },
            { districtId: 20102, districtName: "San Diego County" },
            { districtId: 20103, districtName: "Orange County" },
            { districtId: 20104, districtName: "Riverside County" },
            { districtId: 20105, districtName: "San Bernardino County" },
          ],
        },
        {
          stateId: 202,
          stateName: "Texas",
          districts: [
            { districtId: 20201, districtName: "Harris County" },
            { districtId: 20202, districtName: "Dallas County" },
            { districtId: 20203, districtName: "Tarrant County" },
            { districtId: 20204, districtName: "Bexar County" },
            { districtId: 20205, districtName: "Travis County" },
          ],
        },
        {
          stateId: 203,
          stateName: "Florida",
          districts: [
            { districtId: 20301, districtName: "Miami-Dade" },
            { districtId: 20302, districtName: "Broward" },
            { districtId: 20303, districtName: "Palm Beach" },
            { districtId: 20304, districtName: "Hillsborough" },
            { districtId: 20305, districtName: "Orange County (FL)" },
          ],
        },
        {
          stateId: 204,
          stateName: "New York",
          districts: [
            { districtId: 20401, districtName: "Manhattan" },
            { districtId: 20402, districtName: "Brooklyn" },
            { districtId: 20403, districtName: "Queens" },
            { districtId: 20404, districtName: "Bronx" },
            { districtId: 20405, districtName: "Staten Island" },
          ],
        },
        {
          stateId: 205,
          stateName: "Illinois",
          districts: [
            { districtId: 20501, districtName: "Cook County" },
            { districtId: 20502, districtName: "DuPage County" },
            { districtId: 20503, districtName: "Lake County" },
            { districtId: 20504, districtName: "Will County" },
            { districtId: 20505, districtName: "Kane County" },
          ],
        },
      ],
    },

    {
      countryId: 3,
      countryName: "China",
      states: [
        {
          stateId: 301,
          stateName: "Guangdong",
          districts: [
            { districtId: 30101, districtName: "Guangzhou" },
            { districtId: 30102, districtName: "Shenzhen" },
            { districtId: 30103, districtName: "Zhuhai" },
            { districtId: 30104, districtName: "Foshan" },
            { districtId: 30105, districtName: "Dongguan" },
          ],
        },
        {
          stateId: 302,
          stateName: "Beijing",
          districts: [
            { districtId: 30201, districtName: "Haidian" },
            { districtId: 30202, districtName: "Chaoyang" },
            { districtId: 30203, districtName: "Dongcheng" },
            { districtId: 30204, districtName: "Xicheng" },
            { districtId: 30205, districtName: "Fengtai" },
          ],
        },
        {
          stateId: 303,
          stateName: "Shanghai",
          districts: [
            { districtId: 30301, districtName: "Pudong" },
            { districtId: 30302, districtName: "Minhang" },
            { districtId: 30303, districtName: "Jingan" },
            { districtId: 30304, districtName: "Yangpu" },
            { districtId: 30305, districtName: "Huangpu" },
          ],
        },
        {
          stateId: 304,
          stateName: "Sichuan",
          districts: [
            { districtId: 30401, districtName: "Chengdu" },
            { districtId: 30402, districtName: "Mianyang" },
            { districtId: 30403, districtName: "Deyang" },
            { districtId: 30404, districtName: "Yibin" },
            { districtId: 30405, districtName: "Nanchong" },
          ],
        },
        {
          stateId: 305,
          stateName: "Zhejiang",
          districts: [
            { districtId: 30501, districtName: "Hangzhou" },
            { districtId: 30502, districtName: "Ningbo" },
            { districtId: 30503, districtName: "Wenzhou" },
            { districtId: 30504, districtName: "Jiaxing" },
            { districtId: 30505, districtName: "Shaoxing" },
          ],
        },
      ],
    },

    {
      countryId: 4,
      countryName: "Australia",
      states: [
        {
          stateId: 401,
          stateName: "New South Wales",
          districts: [
            { districtId: 40101, districtName: "Sydney" },
            { districtId: 40102, districtName: "Newcastle" },
            { districtId: 40103, districtName: "Wollongong" },
            { districtId: 40104, districtName: "Central Coast" },
            { districtId: 40105, districtName: "Tamworth" },
          ],
        },
        {
          stateId: 402,
          stateName: "Victoria",
          districts: [
            { districtId: 40201, districtName: "Melbourne" },
            { districtId: 40202, districtName: "Geelong" },
            { districtId: 40203, districtName: "Ballarat" },
            { districtId: 40204, districtName: "Bendigo" },
            { districtId: 40205, districtName: "Shepparton" },
          ],
        },
        {
          stateId: 403,
          stateName: "Queensland",
          districts: [
            { districtId: 40301, districtName: "Brisbane" },
            { districtId: 40302, districtName: "Gold Coast" },
            { districtId: 40303, districtName: "Cairns" },
            { districtId: 40304, districtName: "Townsville" },
            { districtId: 40305, districtName: "Sunshine Coast" },
          ],
        },
        {
          stateId: 404,
          stateName: "South Australia",
          districts: [
            { districtId: 40401, districtName: "Adelaide" },
            { districtId: 40402, districtName: "Mount Gambier" },
            { districtId: 40403, districtName: "Whyalla" },
            { districtId: 40404, districtName: "Port Augusta" },
            { districtId: 40405, districtName: "Murray Bridge" },
          ],
        },
        {
          stateId: 405,
          stateName: "Western Australia",
          districts: [
            { districtId: 40501, districtName: "Perth" },
            { districtId: 40502, districtName: "Bunbury" },
            { districtId: 40503, districtName: "Albany" },
            { districtId: 40504, districtName: "Geraldton" },
            { districtId: 40505, districtName: "Kalgoorlie" },
          ],
        },
      ],
    },

    {
      countryId: 5,
      countryName: "United Kingdom",
      states: [
        {
          stateId: 501,
          stateName: "England",
          districts: [
            { districtId: 50101, districtName: "London" },
            { districtId: 50102, districtName: "Manchester" },
            { districtId: 50103, districtName: "Birmingham" },
            { districtId: 50104, districtName: "Leeds" },
            { districtId: 50105, districtName: "Liverpool" },
          ],
        },
        {
          stateId: 502,
          stateName: "Scotland",
          districts: [
            { districtId: 50201, districtName: "Edinburgh" },
            { districtId: 50202, districtName: "Glasgow" },
            { districtId: 50203, districtName: "Aberdeen" },
            { districtId: 50204, districtName: "Dundee" },
            { districtId: 50205, districtName: "Inverness" },
          ],
        },
        {
          stateId: 503,
          stateName: "Wales",
          districts: [
            { districtId: 50301, districtName: "Cardiff" },
            { districtId: 50302, districtName: "Swansea" },
            { districtId: 50303, districtName: "Newport" },
            { districtId: 50304, districtName: "Wrexham" },
            { districtId: 50305, districtName: "Bangor" },
          ],
        },
        {
          stateId: 504,
          stateName: "Northern Ireland",
          districts: [
            { districtId: 50401, districtName: "Belfast" },
            { districtId: 50402, districtName: "Londonderry" },
            { districtId: 50403, districtName: "Lisburn" },
            { districtId: 50404, districtName: "Newry" },
            { districtId: 50405, districtName: "Armagh" },
          ],
        },
        {
          stateId: 505,
          stateName: "Isle of Man",
          districts: [
            { districtId: 50501, districtName: "Douglas" },
            { districtId: 50502, districtName: "Ramsey" },
            { districtId: 50503, districtName: "Peel" },
            { districtId: 50504, districtName: "Castletown" },
            { districtId: 50505, districtName: "Port Erin" },
          ],
        },
      ],
    },
  ];
  const handleCountryChange = (e) => {
    const selectedCountry = countries.find((country) => country.countryName === e.target.value);
    setCountryList(e.target.value);
    setStateList("");
    setDistrictList("");
    setselecteddistrict([]);
    setSelectedState(selectedCountry ? selectedCountry.states : []);
  };
  const handleStateChange = (e) => {
    const selectedstates = selectedState.find((state) => state.stateName === e.target.value);
    setStateList(e.target.value);
    setDistrictList("");
    setselecteddistrict([]);
    setselecteddistrict(selectedstates ? selectedstates.districts : []);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if(!validation())  return;
    if(!cardValidation()) return;
    setCard((previousState)=>[...previousState,{ country: countryList, state: stateList, district: districtList },]);
    setCountryList("");
    setStateList("");
    setDistrictList("");
    setSelectedState([]);
    setselecteddistrict([]);
  };
   const editHandleCountryChange = (e,i) => {
    const selectedCountry = countries.find((country) => country.countryName === e.target.value);
    setEditCountryList(previousState=>({...previousState,[i]:e.target.value}));
    setEditStateList(previousState => ({ ...previousState, [i]: "" }));
    setEditDistrictList(previousState => ({ ...previousState, [i]: "" }));
   setEditSelectedState(previousState => ({...previousState,[i]: selectedCountry ? selectedCountry.states : []}));
   setEditSelectedDistrict(previousState => ({...previousState,[i]: []}));
  };
 const editHandleStateChange = (e, i) => {
  const selectedstates = editSelectedState[i]?.find((state) => state.stateName === e.target.value);
  setEditStateList(previousState => ({ ...previousState, [i]: e.target.value }));
  setEditDistrictList(previousState => ({ ...previousState, [i]: "" }));
  setEditSelectedDistrict(previousState => ({...previousState,[i]: selectedstates ? selectedstates.districts : []}));
};

  function validation() {
    if(countryList===""||stateList===""||districtList===""){
      setMessage("Required All Fields");
      return false;
    }
    setMessage("");
    return true;
  }
 function cardValidation() {
  const isDuplicate = card.find(
    (item) =>
      item.country === countryList &&
      item.state === stateList &&
      item.district === districtList
  );
  if(isDuplicate){
    setShowUp(true);
    return(false);
  }
  setShowUp(false);
  return true;
}
 const editCardValidation = (i) => {
 if(!editCountryList===""||!editStateList===""||!editDistrictList===""){
      setMessage("Required All Fields");
      return false;
    }
  const isDuplicate = card.find(
    (item,index) =>{
if (index === i) return false;
    return (
      item.country === editCountryList[i] &&
      item.state === editStateList[i] &&
      item.district === editDistrictList[i]);
    }
  );
  if(isDuplicate){
    setPopupEditIndex(i);
    setShowUp(true);
    return(false);
  }
  setShowUp(false);
  return true;
};

function editHandleOk() {
  if (popupEditIndex === null) return;
  const i = popupEditIndex;
  const total = [...card];
  total[i] = {
    country: editCountryList[i],
    state: editStateList[i],
    district: editDistrictList[i],
  };
  setCard(total);
  setEditIndex(previousState => previousState.filter(item => item !== i));
  setPopupEditIndex(null);
  setShowUp(false);
  setEdit(false);
}

function handleOk(){
      setCard((previousState)=>[...previousState,{ country: countryList, state: stateList, district: districtList },]);
      setCountryList("");
      setStateList("");
      setDistrictList("");
      setSelectedState([]);
     setselecteddistrict([]);
     setShowUp(false);
  }
const handleCancel=()=>{
    setShowUp(false);
}
const handleEdit = (i) => {
  const item = card[i];
  setEditCountryList(previousState => ({ ...previousState, [i]: item.country }));
  setEditStateList(previousState => ({ ...previousState, [i]: item.state }));
  setEditDistrictList(previousState => ({ ...previousState, [i]: item.district }));
  const selectedCountry = countries.find((country) => country.countryName === item.country);
  const states = selectedCountry ? selectedCountry.states : [];
  setEditSelectedState(previousState => ({ ...previousState, [i]: states }));
  const selectedState = states.find((state) => state.stateName === item.state);
  setEditSelectedDistrict(previousState => ({...previousState,[i]: selectedState ? selectedState.districts : []}));
  setEditIndex(previousState => (previousState.includes(i) ? previousState : [...previousState, i]));
  setEdit(true);
};

const handleDelete=(i)=>{
     let total = [...card];
    total.splice(i, 1);
    setCard(total);
}
const handleUpdate=(i)=>{
  if(!editCardValidation(i)) return;
  let total = [...card];
    total[i] = {
    country: editCountryList[i],
    state: editStateList[i],
    district: editDistrictList[i]
    };
    setCard(total);
    setEditIndex((previousState) => previousState.filter((item) => item !== i));
}
const handleExit=(i)=>{
   setEditIndex((previousState) => previousState.filter((item) => item !== i));
}
  return (<>
  <Dropdown
    message={message}
    handleSubmit={handleSubmit}
    selectedDistrict={selectedDistrict}
    countryList={countryList}
    stateList={stateList}
    districtList={districtList}
    countries={countries}
    selectedState={selectedState}
    handleCountryChange={handleCountryChange}
    handleStateChange={handleStateChange}
    setDistrictList={setDistrictList}
    edit={edit}/> 

    <DropDownCard 
    card={card}
    showup={showup}
    handleOk={handleOk}
    handleCancel={handleCancel}
    handleEdit={handleEdit}
    handleDelete={handleDelete}
    handleUpdate={handleUpdate}
    handleExit={handleExit}
    edit={edit}
    editIndex={editIndex}
    editSelectedDistrict={editSelectedDistrict}
    editCountryList={editCountryList}
    editStateList={editStateList}
    editDistrictList={editDistrictList}
    countries={countries}
    editSelectedState={editSelectedState}
    editHandleCountryChange={editHandleCountryChange}
    editHandleStateChange={editHandleStateChange}
    setEditDistrictList={setEditDistrictList}
    message={message}
    editHandleOk={editHandleOk}
    />
    </>
    
  );
}

export default App;


