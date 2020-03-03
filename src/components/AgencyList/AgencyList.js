import React, { useState, useEffect } from 'react';
import AgencyCardList from "../AgencyCardList/AgencyCardList";
import SelectedProperty from "../SelectedProperty/SelectedProperty";

import "./AgencyList.css";
import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button';
import Nav from 'react-bootstrap/Nav';
import Form from 'react-bootstrap/Form';
import FormControl from 'react-bootstrap/FormControl';
import Modal from 'react-bootstrap/Modal';
import AgentCardList from '../AgentCardList/AgentCardList';



function AgencyList() {

  const db = [{
    _id: 1,
    AgencyName: "",
    AgencyWebsite: "www.ellisbrown.co.za",
    AgencyPhone: "021 686 3160",
    AgencyEmail: "info@ellisbrown.co.za",
    Agents: [
        {
            "_id": 1,
            "AgentName": "Rupert",
            "AgentEmail": "",
            "AgentPhone": ""
        },
        {
            "_id": 2,
            "AgentName": "Mark Ellis Brown",
            "AgentEmail": "mark@ellisbrown.co.za",
            "AgentPhone": "082 4555 183"
        }
    ]
    
},
{
  _id: 2,
  AgencyName: "",
  AgencyWebsite: "www.ellisbrown.co.za",
  AgencyPhone: "021 686 3160",
  AgencyEmail: "info@ellisbrown.co.za",
  Agents: [
      {
          "_id": 1,
          "AgentName": "Russspert",
          "AgentEmail": "",
          "AgentPhone": ""
      },
      {
          "_id": 2,
          "AgentName": "Mssark Ellis Brown",
          "AgentEmail": "mark@ellisbrown.co.za",
          "AgentPhone": "082 4555 183"
      }
  ]
  
}
]


  var [addCount, setaddCount] = useState(0);
  var [remCount, setremCount] = useState(0);
  const [agencyData, setagencyData] = useState(db);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const [showAdd, setShowAdd] = useState(false);
  const [addNameText, setaddNameText] = useState("");
  const [addWebsiteText, setaddWebsiteText] = useState("");
  const [addEmailText, setaddEmailText] = useState("");
  const [addPhoneText, setaddPhoneText] = useState("");
  const handleCloseAdd = () => setShowAdd(false);
  const handleShowAdd = () => setShowAdd(true);

  const [showEdit, setShowEdit] = useState(false);
  const [editNameText, seteditNameText] = useState("");
  const [editWebsiteText, seteditWebsiteText] = useState("");
  const [editEmailText, seteditEmailText] = useState("");
  const [editPhoneText, seteditPhoneText] = useState("");
  const handleCloseEdit = () => setShowEdit(false);
  const handleShowEdit = (result) => {
    setselectedAgency(result)
console.log(selectedAgency)
    setShowEdit(true);}


  var [route, setRoute] = useState("agencylist");
  const [selectedAgency, setselectedAgency] = useState(1);
  const [lastAdded, setlastAdded] = useState();
  const [selectedPropData, setselectedPropData] = useState({});

  
  
  const onRouteChange = (route) => {
    if (route === "agencylist") {
      setRoute("agencylist")
      
    } else if (route === "selagency") {
      setRoute("selagency")
      
  }
  }

  useEffect(() => {

    // First we set the loading and error states
    setLoading(true)
    setError(null)

    fetch('http://localhost:3000/agencylist')
      .then(res => res.json())
      .then(data => {
        setagencyData(data);
      })
     
     
  }, [route])

 const handleAddNameText = (event) => {
  setaddNameText (event.target.value);
  console.log(addNameText);
 }

 const handleAddWebsiteText = (event) => {
  setaddWebsiteText (event.target.value);
  console.log(addWebsiteText);
 }

 const handleAddEmailText = (event) => {
  setaddEmailText (event.target.value);
  console.log(addEmailText);
 }

 const handleAddPhoneText = (event) => {
  setaddPhoneText (event.target.value);
  console.log(addPhoneText);
 }

 const handleEditNameText = (event) => {
  event.persist();
  seteditNameText (event.target.value);
  setsaveEditData2((saveEditData2) => {
    saveEditData2[selectedAgency-1].AgencyName = event.target.value;
    return({
      ...saveEditData2
    })
  })
  console.log(addNameText);
 }

 const handleEditWebsiteText = (event) => {
  event.persist();
  seteditWebsiteText (event.target.value);
  setsaveEditData2((saveEditData2) => {
    saveEditData2[selectedAgency-1].AgencyWebsite = event.target.value;
    return({
      ...saveEditData2
    })
  })
  console.log(addWebsiteText);
 }

 const handleEditEmailText = (event) => {
  event.persist();
  seteditEmailText (event.target.value);
  setsaveEditData2((saveEditData2) => {
    saveEditData2[selectedAgency-1].AgencyEmail = event.target.value;
    return({
      ...saveEditData2
    })
  })
  console.log(addEmailText);
 }

 const handleEditPhoneText = (event) => {
  event.persist();
  seteditPhoneText (event.target.value);
  setsaveEditData2((saveEditData2) => {
    saveEditData2[selectedAgency-1].AgencyPhone = event.target.value;
    return({
      ...saveEditData2
    })
  })
  console.log(addPhoneText);
 }


 const [didMount, setDidMount] = useState(false)
useEffect(() => setDidMount(true), [])

//ADD Button

 const handleAddFetch = async () => {
  if (didMount) {
 await fetch("http://localhost:3000/agencylist/add", {
    method: "post",
    headers: {"Content-Type": "application/json"},
    body: JSON.stringify({
  
      AgencyName: addNameText,
      AgencyWebsite: addWebsiteText,
      AgencyEmail: addEmailText,
      AgencyPhone: addPhoneText
    })
  })
  .then(res => res.json())
  .then(result => {
    const lastAdded = result
    setlastAdded(lastAdded);
    /* setselectedProp(lastAdded._id); */
    
  })
  await fetch('http://localhost:3000/agencylist')
      .then(res => res.json())
      .then(data => {
        setagencyData(data);
      })
      /* const filterProp = data.filter(ele => {
        return ele._id === lastAdded ;
         } 
         )
        setselectedPropData(filterProp);
        console.log(selectedProp) */
        /* console.log(selectedPropData) */
        /* onRouteChange("propinfo"); */
 }
 }

 useEffect(() => {
  handleAddFetch();
  return () => {
    console.log('add new building');
  };
}, [addCount]);

 const handleAddButton =  (route) => {
  setaddCount(addCount=addCount+1);
  /*  onRouteChange(route); */
   console.log(route);
   handleCloseAdd();

  /*  const filterProp = data.filter(ele => {
    return ele._id === lastAdded;
     } 
     )
    setselectedPropData(filterProp); */
   
 }


useEffect(()=> {
  fetch('http://localhost:3000/agencylist')
      .then(res => res.json())
      .then(data => {
        setagencyData(data);
      })
 
},[])


const handleRemoveButton = async (result) => {

  console.log(result);

 await fetch("http://localhost:3000/agencylist/remove", {
    method: "post",
    headers: {"Content-Type": "application/json"},
    body: JSON.stringify({
  
      _id: result
      
    })
  })
 await fetch('http://localhost:3000/agencylist')
  .then(res => res.json())
  .then(data => {
    setagencyData(data);
  })

}

const [saveEditData2, setsaveEditData2] = useState()

useEffect(() => {
  setsaveEditData2 (agencyData);
},[saveEditData2])

const handleEditButton = async () => {

  const saveEditData =  {
    _id: selectedAgency,
    AgencyName: editNameText,
    AgencyWebsite: editWebsiteText,
    AgencyEmail: editEmailText,
    AgencyPhone: editPhoneText
  };

  console.log(saveEditData)
  

 await fetch("http://localhost:3000/agencylist/edit", {
    method: "post",
    headers: {"Content-Type": "application/json"},
    body: JSON.stringify({
    saveEditData
    })
  })

  await fetch('http://localhost:3000/agencylist')
  .then(res => res.json())
  .then(data => {
    setagencyData(data);
  })

  handleCloseEdit();
  
}




 /* const handleCardSelect2 = () => {
  if (didMount) {
setRoute("propinfo");
console.log(selectedProp)
 }}

 useEffect(() => {
 handleCardSelect2();
 return () => {
  console.log('select building');
 }
},[selectedProp]) */

var [selCount, setselCount] = useState(0);

const handleCardSelect = (_id) => {
  setselectedAgency(_id);
  setselCount(selCount=selCount+1);
  setRoute("selagency");
  setsearchfield("")
  

  console.log(selCount)
}


const [searchfield, setsearchfield] = useState("")

/* const [BuildingType, setBuildingType] = useState("All")
const handleBuildingTypeChange = (event) => {
  setBuildingType(event.target.value);
  console.log(BuildingType)
}; */




 
const filteredData = agencyData.filter (agency => {
    
     return (agency.AgencyName.toLowerCase().includes(searchfield.toLowerCase())  );
} 
)

console.log(filteredData)

const onSearchChange = (event) => {
  setsearchfield(event.target.value)
}


if (route === "agencylist") {
  return (
    <div>
       
     <br />
     
  <Navbar className="navbar" bg="light" variant="light">
  <Form inline>
      <FormControl onChange={onSearchChange} type="text" placeholder="Search / Filter" className="mr-sm-2 search" />
    </Form>
    <Nav className="mr-auto">
    
    <Button onClick={handleShowAdd} className="button" variant="outline-primary">Add +</Button>
   
    </Nav>

    <Modal className="agencyaddmodal" show={showAdd} onHide={handleCloseAdd}>
        <Modal.Header closeButton>
          <Modal.Title>Add Agency</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <Form.Control onChange={handleAddNameText} type="name" placeholder="Enter name" />
        <Form.Control onChange={handleAddWebsiteText} type="name" placeholder="Enter website" />
        <Form.Control onChange={handleAddEmailText} type="name" placeholder="Enter email" />
        <Form.Control onChange={handleAddPhoneText} type="name" placeholder="Enter phone" />
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleCloseAdd}>
            Close
          </Button>
          <Button variant="primary" onClick={() => handleAddButton("propinfo")}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>

      <Modal className="agencyeditmodal" show={showEdit} onHide={handleCloseEdit}>
        <Modal.Header closeButton>
          <Modal.Title>Edit Agency</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <Form.Control value={agencyData[selectedAgency-1].AgencyName} onChange={handleEditNameText} type="name" placeholder="Enter name" />
        <Form.Control value={agencyData[selectedAgency-1].AgencyWebsite} onChange={handleEditWebsiteText} type="name" placeholder="Enter website" />
        <Form.Control value={agencyData[selectedAgency-1].AgencyEmail} onChange={handleEditEmailText} type="name" placeholder="Enter email" />
        <Form.Control value={agencyData[selectedAgency-1].AgencyPhone} onChange={handleEditPhoneText} type="name" placeholder="Enter phone" />
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleCloseEdit}>
            Close
          </Button>
          <Button variant="primary" onClick={() => handleEditButton()}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    
  </Navbar>
    <div>
<AgencyCardList handleShowEdit={handleShowEdit} handleRemoveButton={handleRemoveButton} handleCardSelect={handleCardSelect} agencyData={filteredData}/>
    </div>

    </div>
  );
} else /* if (route === "propinfo" ) */ {
  return (
    <div>
<AgentCardList selectedAgency={selectedAgency} route={route} onRouteChange={onRouteChange} /* selectedProp={selectedProp} */ />
</div>
  )
}

}

export default AgencyList;