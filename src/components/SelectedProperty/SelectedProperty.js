import React, { useState, useEffect } from 'react';
import 'react-bootstrap-table-next/dist/react-bootstrap-table2.min.css';
import BootstrapTable from 'react-bootstrap-table-next';
import cellEditFactory, { Type } from 'react-bootstrap-table2-editor';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import "./SelectedProperty.css";
import Tabs from 'react-bootstrap/Tabs';
import Tab from 'react-bootstrap/Tab';
import InputGroup from 'react-bootstrap/InputGroup';
import FormControl from 'react-bootstrap/FormControl';
import Form from 'react-bootstrap/Form';
import DayPickerInput from 'react-day-picker/DayPickerInput';
import 'react-day-picker/lib/style.css';

import Map from "../Map/Map"
import 'moment/locale/en-gb';
import MomentLocaleUtils, {
  formatDate,
  parseDate,
} from 'react-day-picker/moment';
import Select from 'react-select';
/* import {Image, Video, Transformation, CloudinaryContext} from 'cloudinary-react';
import cloudinary from 'cloudinary-core'; */
/* import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { registerLocale, setDefaultLocale } from  "react-datepicker";
import GB from "date-fns/locale/en-GB";
registerLocale('GB', GB) */

/* const options = [
  { value: 'chocolate', label: 'Chocolate' },
  { value: 'strawberry', label: 'Strawberry' },
  { value: 'vanilla', label: 'Vanilla' }
] */



var moment = require('moment');
moment().format();



function SelectedProperty(props) {
 
  const server = process.env.REACT_APP_SERVER
  



  SelectedProperty.defaultProps = {
    selectedProp: 1
  }

  const [didMount, setDidMount] = useState(false)
useEffect(() => setDidMount(true), [])

const db = [
  {
    id: 1,
          Floor: 1,
          Area: 200,
          Vacant: "True",
          Type: "Offices",
          Occupation: "02/02/2020",
          PremisesNotes: "Notes",
          NetRental: 60,
          OpCosts: 20,
          Other: 5,
          GrossRental: 85,
          Esc: 8,
          OpenBays: 5,
          OpenRate: 100,
          CoveredBays: 6,
          CoveredRate: 200,
          ShadedBays: 7,
          ShadedRate: 300,
          ParkingRatio: 3,
          Tenant: "Random Tenant",
          LeaseExpiry: "02/06/2020",
          TenantNotes: "Notes"
  }
]

const db2 = [
  {
        BuildingName: "test", 
        Address: "test", 
        Suburb: "test", 
        EarliestOccupation: "02/02/2020",
        EarliestExpiry: "02/02/2020",
        ErfExtent: 2000,
        TotalGLA: 2000,
        VacantArea: 2000,
        BuildingType: "COM",
        Province: "WC",
        Region: "CBD",
        Agency: "Ellis Brown Properties",
        Agent: "Sean",
        Phone: "0824555183",
        Email: "sean@ellisbrown.co.za",
  }
]

const [propData, setpropData] = useState(db2);
  const [listData, setlistData] = useState(db);
  const [selectedRow, setselectedRow] = useState(null);

  
  const agencydb = [
    {_id: 1,
  AgencyName: "Test",
Agents:[
  {_id:1,
  AgentName: "Test",
AgentPhone:"",
AgentEmail:""}]
},
  {_id: 2,
    AgencyName: "Test2",
    Agents:[
      {_id:1,
      AgentName: "Test2",
      AgentPhone:"",
      AgentEmail:""}
    ]}
  ]

  const[agencylist, setagencylist] = useState(agencydb)

  const agencyoptions = agencylist.map((_id, i) =>{
    return (
      { value: agencylist[i].AgencyName, label: agencylist[i].AgencyName }
        );
    })
    

const selagency = {value: propData.Agency, label: propData.Agency}
  console.log(selagency);
    console.log(agencyoptions);
  
  const AgencyDropdown = (props) => (
    <Select isSearchable="true"  onChange={handleAgencyChange} value={selagency}  className="filterdropdown" options={agencyoptions} />
  )

 const selagency2 = agencylist.filter(agency =>{
   return agency.AgencyName === selagency.value
         })
         
const selagency3 = () => {
  if (selagency2[0] !== undefined) {
    return selagency2[0]
  } else {
    return {Agents:[{_id:1,AgentName: 'Test',
    AgentPhone:"",
    AgentEmail:""}]}
  }
}

console.log(selagency3().Agents)

  const agentoptions = selagency3().Agents.map((_id, i) =>{
 
    return (
      { value: selagency3().Agents[i].AgentName, label: selagency3().Agents[i].AgentName }
        );
    
  })

  const selagent = {value: propData.Agent, label: propData.Agent}


  const AgentDropdown = (props) => (
    <Select  onChange={handleAgentChange} value={selagent}  className="filterdropdown" options={agentoptions} />
  )

  const selagency4 = selagency3().Agents
  console.log(selagency4)
  
  const selagent2 = selagency4.filter(agent =>{
    return agent.AgentName === selagent.value
          })
          console.log(selagent2)

          const selagent3 = () => {
            if (selagent2[0] !== undefined) {
              return selagent2[0]
            } else {
              return {Agents:[{_id:1,AgentName: 'Test',
              AgentPhone:"",
              AgentEmail:""}]}
            }
          }

          console.log(selagent3())

const agentphoneoptions = [{
       value: selagent3().AgentPhone, label: selagent3().AgentPhone }]
         
   
const selagentphone = {value: propData.Phone, label: propData.Phone}

  const AgentPhoneDropdown = (props) => (
    <Select  onChange={handlePhoneChange} value={selagentphone}  className="filterdropdown" options={agentphoneoptions} />
  )

  const agentemailoptions = [{
    value: selagent3().AgentEmail, label: selagent3().AgentEmail }]

    const selagentemail = {value: propData.Email, label: propData.Email}

    const AgentEmailDropdown = (props) => (
      <Select  onChange={handleEmailChange} value={selagentemail}  className="filterdropdown" options={agentemailoptions} />
    )


  useEffect( () => {
   
    // First we set the loading and error states
    async function fetchdata () {
      /* console.log(props.selectedProp.selectedProp) */
    await fetch(`${server}/mainlist/selprop`, {
      method: "post",
      headers: {"Content-Type": "application/json" } ,
      body: JSON.stringify({
    
        _id: props.selectedProp
      })
    })
      .then(res => res.json())
      .then(data => {
        setpropData(data);
        setlistData(data.Premises)

        console.log(propData)
        console.log(propData.Address)
        console.log(listData)
      
      })
    }
    /* setTimeout(() => {  console.log(props.selectedProp) }, 2000); */
    console.log(props.selectedProp)
    fetchdata();
  
  }, [props.route])


  var vacantTotal = () => {
    var total = 0;
for (var i = 0; i< listData.length; i++) {

  if (listData[i].Vacant==="True") {
    total += listData[i].Area
  }
 
}
return total
  }

  console.log(vacantTotal())
  console.log(listData[0].Area)


  

  useEffect(() => {

    fetch(`${server}/mainlist/selprop/agents`)
      .then(res => res.json())
      .then(data => {
        setagencylist(data);
      })
     
     
  }, [])

console.log(agencylist);
  //MAP//

  const [coord, setcoord] = useState()
  const [coord2, setcoord2] = useState()
  
  useEffect(() => {
    if (didMount) {
    fetch(`https://api.mapbox.com/geocoding/v5/mapbox.places/${propData.Address}.json?access_token=${process.env.REACT_APP_MAPBOX_TOKEN}`).then(response =>{
       return response.json();
    })
    .then(result => {
    setcoord({result})
    });
}},[propData])

useEffect(() => {
  if (didMount) {
    if (coord.result!== undefined) {
    
setcoord2(
  
  {latitude: coord.result.features[0].geometry.coordinates[1],
    longitude: coord.result.features[0].geometry.coordinates[0]}
 
)
}
  }
},[coord])


 var lat=0
  if (coord2!==undefined) {
 
    lat = coord2.latitude
  
  }
  var long=0
  if (coord2!==undefined) {
    long = coord2.longitude
  }

  //MAP END//

  const [key, setKey] = useState('Basic');

  const basic = [{
    dataField: '_id',
    text: 'ID2',
    style: { color: 'black' },
    hidden: true
  },{
    dataField: 'id',
    text: 'ID',
    style: { color: 'black' },
    hidden: true
  }, {
    dataField: 'Floor',
    text: 'Floor/Unit No',
    headerStyle: { "background-color": "rgba(222, 226, 230, 0.5)", width: "10%" },
    style: { "background-color": "rgba(222, 226, 230, 0.5)" }
  }, {
    dataField: 'Area',
    text: 'Area'
  }, {
    dataField: 'Vacant',
    text: 'Vacant',
    editor: {
      type: Type.CHECKBOX,
      value: 'True:False'
    }
  }, {
    dataField: 'Type',
    text: 'Type'
  },{
    dataField: 'Occupation',
    text: 'Occupation Date',
    formatter: (cell) => {
      let dateObj = cell;
      if (typeof cell !== 'object') {
        dateObj = new Date(cell);
      }
      return `${('0' + dateObj.getUTCDate()).slice(-2)}/${('0' + (dateObj.getUTCMonth() + 1)).slice(-2)}/${dateObj.getUTCFullYear()}`;
    },
    editor: {
      type: Type.DATE
    }
  }, {
    dataField: 'PremisesNotes',
    text: 'Notes',
    headerStyle: {width: "40% ", color: 'black' }
  }
];

const rental = [{
  dataField: 'Floor',
  text: 'Floor/Unit No',
  headerStyle: { "background-color": "rgba(222, 226, 230, 0.5)", width: "10%" },
    style: { "background-color": "rgba(222, 226, 230, 0.5)" }
},{
  dataField: 'NetRental',
  text: 'Net Rental',
  style: { color: 'black' },
 
},{
  dataField: 'OpCosts',
  text: 'Op Costs',
  style: { color: 'black' },
 
},{
  dataField: 'Other',
  text: 'Other',
  style: { color: 'black' },
  
}, {
  dataField: 'GrossRental',
  text: 'Gross Rental'
}, {
  dataField: 'Esc',
  text: 'Esc'
}
];

const parking = [{
  dataField: 'Floor',
  text: 'Floor/Unit No',
  headerStyle: { "background-color": "rgba(222, 226, 230, 0.5)", width: "10%" },
    style: { "background-color": "rgba(222, 226, 230, 0.5)" }
},{
  dataField: 'OpenBays',
  text: 'Open Bays',
  style: { color: 'black' },

},{
  dataField: 'OpenRate',
  text: 'Open Rate',
  style: { color: 'black' },
 
},{
  dataField: 'CoveredBays',
  text: 'Covered Bays',
  style: { color: 'black' },
  
}, {
  dataField: 'CoveredRate',
  text: 'Covered Rate'
},{
  dataField: 'ShadedBays',
  text: 'Shaded Bays',
  style: { color: 'black' },
  
}, {
  dataField: 'ShadedRate',
  text: 'Shaded Rate'
}, {
  dataField: 'ParkingRatio',
  text: 'Parking Ratio'
}
];

const industrial = [{
  dataField: 'Floor',
  text: 'Floor/Unit No',
  headerStyle: { "background-color": "rgba(222, 226, 230, 0.5)", width: "10%" },
    style: { "background-color": "rgba(222, 226, 230, 0.5)" }
},{
  dataField: 'Yard',
  text: 'Yard Size',
    style: { color: 'black' }
},{
  dataField: 'Height',
  text: 'F/E Height',
  style: { color: 'black' },

},{
  dataField: 'Doors',
  text: 'Doors',
  style: { color: 'black' },
 
},{
  dataField: 'Loading',
  text: 'Loading Type',
  style: { color: 'black' },
  
}, {
  dataField: 'Sprinklered',
  text: 'Sprinklered?',
  editor: {
    type: Type.CHECKBOX,
    value: 'Yes:No'
  }
}, {
  dataField: 'Canopies',
  text: 'Canopies?',
  editor: {
    type: Type.CHECKBOX,
    value: 'Yes:No'
  }
}, {
  dataField: 'Power',
  text: 'Power'
}
];

const lease = [{
  dataField: 'Floor',
  text: 'Floor/Unit No',
  headerStyle: { "background-color": "rgba(222, 226, 230, 0.5)", width: "10%" },
    style: { "background-color": "rgba(222, 226, 230, 0.5)" }
},{
  dataField: 'Tenant',
  text: 'Tenant',
  style: { color: 'black' },
 
},{
  dataField: 'LeaseExpiry',
  text: 'Lease Expiry',
  formatter: (cell) => {
    let dateObj = cell;
    if (typeof cell !== 'object') {
      dateObj = new Date(cell);
    }
    return `${('0' + dateObj.getUTCDate()).slice(-2)}/${('0' + (dateObj.getUTCMonth() + 1)).slice(-2)}/${dateObj.getUTCFullYear()}`;
  },
  editor: {
    type: Type.DATE
  }
},{
  dataField: 'TenantNotes',
  text: 'Notes',
  style: { color: 'black' },
  headerStyle: {width: "40%"}

}
];



//add row
var today = new Date();
var dd = String(today.getDate()).padStart(2, '0');
var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
var yyyy = today.getFullYear();

today = mm + '/' + dd + '/' + yyyy;

const addButton = () => {

setlistData(listData => [...listData, {
  id: listData[listData.length-1].id + 1,
 /*  Floor: '',
  area: "",
  occupation: ` ${today}` */
}]);
}

// Delete Row
const selectRow = {
  mode: 'radio', // single row selection
  onSelect: (row, isSelect, rowIndex, e) => {
    setselectedRow (row.id);
    console.log(row);
  
  }
};

var selRow = {selectedRow}
var selRow2 = selRow.selectedRow;

const delButton = () => {
  if (listData.length>1) {
  setlistData(listData.filter(item => {
    return item.id !== (selRow2) ;
  
  }))}
  handleClose();
}

console.log(selRow2);
console.log(listData);



//save table change data
const onTableChange = (type, { data, cellEdit: { rowId, dataField, newValue } }) => {
  setTimeout(() => {
    if (newValue === 'test' && dataField === 'name') {
      this.setState(() => ({
        data,
        errorMessage: 'Oops, product name shouldnt be test'
      }));
    } else {
      const result = data.map((row) => {
        if (row.id === rowId) {
          const newRow = { ...row };
          newRow[dataField] = newValue;
          return newRow;
        }
        return row;
      });
     /*  this.setState(() => ({
        data: result,
        errorMessage: null
      })); */
      setlistData(result);
    }
  }, 0);
}

const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [showsave, setShowSave] = useState(false);

  const handleCloseSave = () => setShowSave(false);
  const handleShowSave = () => setShowSave(true);

  const saveButton =() => {
    const saveData =  propData;
    saveData.Premises = listData;

    fetch(`${server}/mainlist/selprop/save`, {
      method: "post",
      headers: {"Content-Type": "application/json"},
      body: JSON.stringify({
      saveData
      })
    })

    handleCloseSave();
    console.log(saveData);
    console.log(listData);
  }


  const handleBuildingNameChange = (event) => {
    setpropData({
      ...propData, BuildingName: event.target.value} 
    );
    console.log(propData)
  };

  const handleAddressChange = (event) => {
    setpropData({
      ...propData, Address: event.target.value} 
    );
  };

  const handleSuburbChange = (event) => {
    setpropData({
      ...propData, Suburb: event.target.value} 
    );
  };

  const handleErfExtentChange = (event) => {
    setpropData({
      ...propData, ErfExtent: event.target.value} 
    );
  };

  const handleTotalGLAChange = (event) => {
    setpropData({
      ...propData, TotalGLA: event.target.value} 
    );
  };

  useEffect (() => {
    setpropData({
      ...propData, VacantArea: vacantTotal()} 
    );

  },[listData])
  /* const handleVacantAreaChange = (event) => {
    setpropData({
      ...propData, VacantArea: vacantTotal()} 
    );
  }; */

  const handleBuildingTypeChange = (event) => {
    setpropData({
      ...propData, BuildingType: event.target.value} 
    );
  };

  const handleProvinceChange = (event) => {
    setpropData({
      ...propData, Province: event.target.value} 
    );
  };

  const handleRegionChange = (event) => {
    setpropData({
      ...propData, Region: event.target.value} 
    );
  };

  const handleAgencyChange = (value) => {
    setpropData({
      ...propData, Agency: value.value} 
    );
  };

  const handleAgentChange = (value) => {
    setpropData({
      ...propData, Agent: value.value} 
    );
  };

  const handlePhoneChange = (value) => {
    setpropData({
      ...propData, Phone: value.value} 
    );
  };

  const handleEmailChange = (value) => {
    setpropData({
      ...propData, Email: value.value} 
    );
  };


 const handleEarliestOccupationChange = date => {
    setpropData({
      ...propData, EarliestOccupation: date} 
    );
  };
  const handleEarliestExpiryChange = date => {
    setpropData({
      ...propData, EarliestExpiry: date} 
    );
  };


  console.log(propData.EarliestOccupation)
  console.log(propData)

  var [imagetype,setimagetype] = useState('')

  var checkUploadResult = (resultEvent) => {
    console.log(resultEvent)
if (resultEvent.event === "success" && imagetype === "aerial") {
  console.log(resultEvent.info.secure_url)
  setpropData({
    ...propData, Aerial: resultEvent.info.public_id} 
  );
  /* setimagetype ("") */
} else if (resultEvent.event === "success" && imagetype === "photo") {
  console.log(resultEvent.info.secure_url)
  setpropData({
    ...propData, MainPhoto: resultEvent.info.public_id} 
  );
  /* setimagetype("") */
} else if (resultEvent.event === "success" && imagetype === "photo2") {
  console.log(resultEvent.info.secure_url)
  setpropData({
    ...propData, SecondPhoto: resultEvent.info.public_id} 
  );
 /*  setimagetype("") */
}

  }

  var widget = window.cloudinary.createUploadWidget({ 
    cloudName: "drlfedqyz", uploadPreset: "xblzxkc8" }, (error, result) => {checkUploadResult(result) });
   
    var handleWidgetOpenAerial = () => {
      setimagetype("aerial");
   /*  widget.open(); */

   } 

   var handleWidgetOpenPhoto = () => {
    setimagetype("photo");
  /* widget.open(); */

 } 

 var handleWidgetOpenPhoto2 = () => {
  setimagetype("photo2");
/* widget.open(); */

}

useEffect(() => {
  if (didMount) {
  widget.open();

}},[imagetype])
console.log(imagetype)
  
  return (
    <div>
<div className="navbuttons center"> 
      <div>  
  <Button className="w-5" variant="primary" onClick={() => props.onRouteChange("list")}>
        Back
      </Button>

     
      </div>

      <div>
          
          <Button variant="primary" onClick={handleShowSave}>
            Save
          </Button>

          <Modal show={showsave} onHide={handleCloseSave}>
            <Modal.Header closeButton>
              <Modal.Title>Confirm</Modal.Title>
            </Modal.Header>
            <Modal.Body>Are you sure you want to save these changes?</Modal.Body>
            <Modal.Footer>
              <Button variant="secondary" onClick={handleCloseSave}>
                Close
              </Button>
              <Button variant="primary" onClick={saveButton} >
                Save
              </Button>
            </Modal.Footer>
          </Modal>
      </div>
      </div>

      <div className="centre h2 w-100">
      </div>

<div className="propinfocontainer w-95 ba dark-gray b--black-10 shadow-5 center "> 
<div className= "leftcol pa3">

  <InputGroup style={{width: "100%"}} className="mb-3">
    <InputGroup.Prepend>
      <InputGroup.Text id="basic-addon3">
        Building Name
      </InputGroup.Text>
    </InputGroup.Prepend>
    <FormControl onChange={handleBuildingNameChange} value={propData.BuildingName} id="name" aria-describedby="basic-addon3" />
  </InputGroup>

  <InputGroup className="mb-3">
    <InputGroup.Prepend>
      <InputGroup.Text id="basic-addon3">
        Address
      </InputGroup.Text>
    </InputGroup.Prepend>
    <FormControl onChange={handleAddressChange} value={propData.Address} id="name" aria-describedby="basic-addon3" />
  </InputGroup>

  <InputGroup className="mb-3">
    <InputGroup.Prepend>
      <InputGroup.Text id="basic-addon3">
       Suburb
      </InputGroup.Text>
    </InputGroup.Prepend>
    <FormControl onChange={handleSuburbChange} value={propData.Suburb} id="name" aria-describedby="basic-addon3" />
  </InputGroup>

<div>
<Form.Group style={{display: "flex"}} /* controlId="EarliestOccupation" */>
  <InputGroup.Prepend>
      <InputGroup.Text id="EarliestOccupation">
      Earliest Occupation
      </InputGroup.Text>
    </InputGroup.Prepend>
  <DayPickerInput className="DayPickerInput" format = "DD/MM/YYYY" formatDate={formatDate}
        parseDate={parseDate}
        placeholder={`${formatDate(moment(propData.EarliestOccupation)/* , "en-gb" */)}`} onDayChange={day => handleEarliestOccupationChange(day)} />
  </Form.Group>
  </div>

  <div> 
  <Form.Group style={{display: "flex"}} /* controlId="EarliestExpiry" */ >
  <InputGroup.Prepend>
      <InputGroup.Text id="EarliestExpiry">
      Earliest Expiry
      </InputGroup.Text>
    </InputGroup.Prepend>
  <DayPickerInput className="DayPickerInput" style={{width: "100px"}} format = "DD/MM/YYYY" formatDate={formatDate}
        parseDate={parseDate}
        placeholder={`${formatDate(moment(propData.EarliestExpiry)/* , "en-gb" */)}`} onDayChange={day => handleEarliestExpiryChange(day)} />
 </Form.Group>
  </div>

  </div>

  <div className= "midcol pa3">
  <InputGroup style={{width: "200px"}} className="mb-3 ErfExtent">
    <InputGroup.Prepend>
      <InputGroup.Text id="ErfExtent">
        Erf Extent
      </InputGroup.Text>
    </InputGroup.Prepend>
    <FormControl  onChange={handleErfExtentChange} value={propData.ErfExtent} id="ErfExtent" aria-describedby="ErfExtent" />
  </InputGroup>

  <InputGroup style={{width: "200px"}} className="mb-3 TotalGLA">
    <InputGroup.Prepend>
      <InputGroup.Text id="TotalGLA">
      Total GLA
      </InputGroup.Text>
    </InputGroup.Prepend>
    <FormControl  onChange={handleTotalGLAChange} value={propData.TotalGLA} id="TotalGLA" aria-describedby="TotalGLA" />
  </InputGroup>

  <InputGroup style={{width: "200px"}} className="mb-3 VacantArea">
    <InputGroup.Prepend>
      <InputGroup.Text id="VacantArea">
      Vacant Area
      </InputGroup.Text>
    </InputGroup.Prepend>
    <FormControl /* onChange={handleVacantAreaChange} */ value={propData.VacantArea} id="VacantArea" aria-describedby="VacantArea" />
  </InputGroup>

  

  <Form.Group style={{display: "flex"}} /* controlId="BuildingType" */>
  <InputGroup.Prepend>
      <InputGroup.Text id="BuildingType">
      Building Type
      </InputGroup.Text>
    </InputGroup.Prepend>
    <Form.Control defaultValue={propData.BuildingType} onChange={handleBuildingTypeChange} value={propData.BuildingType} id="BuildingType" aria-describedby="BuildingType" style={{width: "100px"}} as="select">
    <option value=""></option>
      <option value="COM">COM</option>
      <option value="IND">IND</option>
      <option value="RETAIL">RETAIL</option>
    </Form.Control >
  </Form.Group>

  <Form.Group style={{display: "flex"}} /* controlId="Province" */>
  <InputGroup.Prepend>
      <InputGroup.Text id="Province">
      Province
      </InputGroup.Text>
    </InputGroup.Prepend>
    <Form.Control onChange={handleProvinceChange} value={propData.Province} style={{width: "100px"}} as="select">
    <option value=""></option>
      <option value="WC">WC</option>
      <option value="GAU">GAU</option>
      <option value="KZN">KZN</option>
    
    </Form.Control>
  </Form.Group>

  <Form.Group style={{display: "flex"}} /* controlId="Region" */>
  <InputGroup.Prepend>
      <InputGroup.Text id="Region">
      Region
      </InputGroup.Text>
    </InputGroup.Prepend>
    <Form.Control onChange={handleRegionChange} value={propData.Region} style={{width: "100px"}} as="select">
    <option value=""></option>
      <option value="SS">SS</option>
      <option value="NS">NS</option>
      <option value="CBD">CBD</option>
    
    </Form.Control>
  </Form.Group>

 </div>
  
  <div className="rightcol pa3">

  <InputGroup style={{width: "100%"}} className="mb-3 VacantArea">
    <InputGroup.Prepend>
      <InputGroup.Text id="Agency">
      Agency
      </InputGroup.Text>
    </InputGroup.Prepend>
    <AgencyDropdown ></AgencyDropdown>
  {/*   <FormControl onChange={handleAgencyChange} value={propData.Agency} id="Agency" aria-describedby="Agency" /> */}
  </InputGroup>

  <InputGroup style={{width: "100%"}} className="mb-3 VacantArea">
    <InputGroup.Prepend>
      <InputGroup.Text id="Agency">
      Agent
      </InputGroup.Text>
    </InputGroup.Prepend>
    <AgentDropdown></AgentDropdown>
    {/* <FormControl onChange={handleAgentChange} value={propData.Agent} id="Agency" aria-describedby="Agency" /> */}
  </InputGroup>

  <InputGroup style={{width: "100%"}} className="mb-3 VacantArea">
    <InputGroup.Prepend>
      <InputGroup.Text id="Agency">
      Phone
      </InputGroup.Text>
    </InputGroup.Prepend>
    <AgentPhoneDropdown></AgentPhoneDropdown>
    {/* <FormControl onChange={handlePhoneChange} value={propData.Phone} id="Agency" aria-describedby="Agency" /> */}
  </InputGroup>

  <InputGroup style={{width: "100%"}} className="mb-3 VacantArea">
    <InputGroup.Prepend>
      <InputGroup.Text id="Agency">
      Email
      </InputGroup.Text>
    </InputGroup.Prepend>
    <AgentEmailDropdown></AgentEmailDropdown>
   {/*  <FormControl onChange={handleEmailChange} value={propData.Email} id="Agency" aria-describedby="Agency" /> */}
  </InputGroup>

  </div>
  
  <div className="map"  >
   <Map lat={lat} long={long} />

   <Button variant="primary" onClick={handleWidgetOpenAerial}>
            Add Aerial
          </Button>

          <Button variant="primary" onClick={handleWidgetOpenPhoto}>
            Add Photo
          </Button>

          <Button variant="primary" onClick={handleWidgetOpenPhoto2}>
            Add Photo2
          </Button>
   </div>

  </div>



<div className="centre h2 w-100">
     

      </div>

<div className="premisesinfo center">

<Button onClick={addButton} value="Add" type="button" class="btn btn-primary" >
        Add
      </Button>

      <Button variant="primary" onClick={handleShow}>
        Delete
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Confirm</Modal.Title>
        </Modal.Header>
        <Modal.Body>Are you sure you want to delete this row?</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={delButton} >
            Delete
          </Button>
        </Modal.Footer>
      </Modal>

      <Tabs className=" tabsbar ba dark-gray b--black-10 shadow-5 center mt2" id="PremisesInfoTab" activeKey={key} onSelect={k => setKey(k)}>
  <Tab eventKey="Basic" title="Basic">
        <div>
        <div className="SelectedProperty center">
          <article className="pa1 bg-washed-blue ba dark-gray b--black-10 shadow-5 center">
          <BootstrapTable className="bg-washed-blue"
          remote={ {
            filter: false,
            pagination: false,
            sort: false,
            cellEdit: true
          } }
        keyField="id"
        tabIndexCell
        data={ listData }
        columns={ basic }
        selectRow={ selectRow }
        onTableChange={ onTableChange }
        cellEdit={ cellEditFactory({
        mode: 'click',
        blurToSave: true,
        onStartEdit: (row, column, rowIndex, columnIndex) => { console.log('start to edit!!!'); },
        beforeSaveCell: (oldValue, newValue, row, column) => { console.log('Before Saving Cell!!'); },
        afterSaveCell: (oldValue, newValue, row, column) => { console.log('After Saving Cell!!', newValue); }
      }) }
    />
    </article>
        </div>
        </div>
  </Tab>

  <Tab eventKey="Rental" title="Rental">
  <div>
        <div className="SelectedProperty center">
          <article className="pa1 bg-washed-blue ba dark-gray b--black-10 shadow-5 center">
          <BootstrapTable 
          remote={ {
            filter: false,
            pagination: false,
            sort: false,
            cellEdit: true
          } }
        keyField="id"
        data={ listData }
        columns={ rental }
        selectRow={ selectRow }
        onTableChange={ onTableChange }
        cellEdit={ cellEditFactory({
        mode: 'click',
        blurToSave: true,
        onStartEdit: (row, column, rowIndex, columnIndex) => { console.log('start to edit!!!'); },
        beforeSaveCell: (oldValue, newValue, row, column) => { console.log('Before Saving Cell!!'); },
        afterSaveCell: (oldValue, newValue, row, column) => { console.log('After Saving Cell!!', newValue); }
      }) }
    />
    </article>
        </div>
        </div>
  </Tab>

  <Tab eventKey="Parking" title="Parking">
  <div>
        <div className="SelectedProperty center">
          <article className="pa1 bg-washed-blue ba dark-gray b--black-10 shadow-5 center">
          <BootstrapTable 
          remote={ {
            filter: false,
            pagination: false,
            sort: false,
            cellEdit: true
          } }
        keyField="id"
        data={ listData }
        columns={ parking }
        selectRow={ selectRow }
        onTableChange={ onTableChange }
        cellEdit={ cellEditFactory({
        mode: 'click',
        blurToSave: true,
        onStartEdit: (row, column, rowIndex, columnIndex) => { console.log('start to edit!!!'); },
        beforeSaveCell: (oldValue, newValue, row, column) => { console.log('Before Saving Cell!!'); },
        afterSaveCell: (oldValue, newValue, row, column) => { console.log('After Saving Cell!!', newValue); }
      }) }
    />
    </article>
        </div>
        </div>
  </Tab>

  <Tab eventKey="Industrial" title="Industrial">
  <div>
        <div className="SelectedProperty center">
          <article className="pa1 bg-washed-blue ba dark-gray b--black-10 shadow-5 center">
          <BootstrapTable 
          remote={ {
            filter: false,
            pagination: false,
            sort: false,
            cellEdit: true
          } }
        keyField="id"
        data={ listData }
        columns={ industrial }
        selectRow={ selectRow }
        onTableChange={ onTableChange }
        cellEdit={ cellEditFactory({
        mode: 'click',
        blurToSave: true,
        onStartEdit: (row, column, rowIndex, columnIndex) => { console.log('start to edit!!!'); },
        beforeSaveCell: (oldValue, newValue, row, column) => { console.log('Before Saving Cell!!'); },
        afterSaveCell: (oldValue, newValue, row, column) => { console.log('After Saving Cell!!', newValue); }
      }) }
    />
    </article>
        </div>
        </div>
  </Tab>

  <Tab eventKey="Lease" title="Lease">
  <div>
        <div className="SelectedProperty center">
          <article className="pa1 bg-washed-blue ba dark-gray b--black-10 shadow-5 center">
          <BootstrapTable 
          remote={ {
            filter: false,
            pagination: false,
            sort: false,
            cellEdit: true
          } }
        keyField="id"
        data={ listData }
        columns={ lease }
        selectRow={ selectRow }
        onTableChange={ onTableChange }
        cellEdit={ cellEditFactory({
        mode: 'click',
        blurToSave: true,
        onStartEdit: (row, column, rowIndex, columnIndex) => { console.log('start to edit!!!'); },
        beforeSaveCell: (oldValue, newValue, row, column) => { console.log('Before Saving Cell!!'); },
        afterSaveCell: (oldValue, newValue, row, column) => { console.log('After Saving Cell!!', newValue); }
      }) }
    />
    </article>
        </div>
        </div>
  </Tab>

</Tabs>
</div>
  
<div className="centre h5 w-100">


      </div>
     
    </div>
  );
}

export default SelectedProperty;