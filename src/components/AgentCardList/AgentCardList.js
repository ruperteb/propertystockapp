import React, { useState, useEffect } from 'react';
/* import AgencyCard from "../AgencyCard/AgencyCard"; */
import "./AgentCardList.css"
import CardDeck from 'react-bootstrap/CardDeck'; 
import Card from 'react-bootstrap/Card';
import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button';
import Nav from 'react-bootstrap/Nav';
import Form from 'react-bootstrap/Form';
import FormControl from 'react-bootstrap/FormControl';
import Modal from 'react-bootstrap/Modal';

const AgentCardList = (props) => {

    AgentCardList.defaultProps = {
        selectedAgency: 1
      }

const db = {
    _id: 1,
AgencyName: "Ellis Brown Properties",
AgencyPhone: "021 686 3160",
AgencyEmail: "info@ellisbrown.co.za",
AgencyWebsite: "www.ellisbrown.co.za",
Agents: [
    { _id: 1,
  AgentName: "Sean Ellis Brown",
    AgentEmail: "sean@ellisbrown.co.za",
    AgentPhone: "082 4555 183"

},
{ _id: 2,
    AgentName: "Mark Ellis Brown",
      AgentEmail: "mark@ellisbrown.co.za",
      AgentPhone: "082 4555 183"
  
  }

]

};

const [selagencyData, setselagencyData] = useState(db)


useEffect( () => {
   
    // First we set the loading and error states
    async function fetchdata () {
      /* console.log(props.selectedProp.selectedProp) */
    await fetch("http://localhost:3000/agencylist/selagency", {
      method: "post",
      headers: {"Content-Type": "application/json" } ,
      body: JSON.stringify({
    
        _id: props.selectedAgency
      })
    })
      .then(res => res.json())
      .then(data => {
        setselagencyData(data);
     

        

      })
    }
    /* setTimeout(() => {  console.log(props.selectedProp) }, 2000); */

    fetchdata();
    console.log(selagencyData)
  
  }, [props.selectedAgency])

  console.log(props.selectedAgency);
  console.log(selagencyData);

  var [addCount, setaddCount] = useState(0);

  const [showAdd, setShowAdd] = useState(false);
  const [addNameText, setaddNameText] = useState("");
  const [addEmailText, setaddEmailText] = useState("");
  const [addPhoneText, setaddPhoneText] = useState("");
  const handleCloseAdd = () => setShowAdd(false);
  const handleShowAdd = () => setShowAdd(true);

  const [showEdit, setShowEdit] = useState(false);
  const [editNameText, seteditNameText] = useState("");
  const [editEmailText, seteditEmailText] = useState("");
  const [editPhoneText, seteditPhoneText] = useState("");
  const handleCloseEdit = () => setShowEdit(false);
  const handleShowEdit = (result) => {
    setselectedAgent(result)
console.log(selectedAgent)
    setShowEdit(true);}

    const [selectedAgent,setselectedAgent] = useState(db.Agents[0])
    const [lastAdded, setlastAdded] = useState();

    const [saveAddData, setsaveAddData] = useState(selagencyData);
console.log(saveAddData.Agents);

useEffect(() => {
  setsaveAddData (selagencyData);
},[selagencyData])


console.log(saveAddData);

    const handleAddNameText = (event) => {
      setaddNameText (event.target.value);
      console.log(addNameText);
     }
    
    
     const handleAddEmailText = (event) => {
      setaddEmailText (event.target.value);
      console.log(addEmailText);
     }
    
     const handleAddPhoneText = (event) => {
      setaddPhoneText (event.target.value);
      console.log(addPhoneText);
     }
    
    
     var addData = {_id: selagencyData.Agents.length +1, AgentName: addNameText, AgentEmail : addEmailText, AgentPhone : addPhoneText  };
     
     const handleAddButton = async (value) => {

     
      await setsaveAddData ((saveAddData) => {

        saveAddData.Agents.push(addData);
         
       return({
         ...saveAddData
       });
     })
       
     
       console.log(saveAddData)
       
     
      await fetch("http://localhost:3000/agencylist/selagency/add", {
         method: "post",
         headers: {"Content-Type": "application/json"},
         body: JSON.stringify({
         saveAddData
         })
       })
     
       await fetch("http://localhost:3000/agencylist/selagency", {
           method: "post",
           headers: {"Content-Type": "application/json" } ,
           body: JSON.stringify({
         
             _id: props.selectedAgency
           })
         })
           .then(res => res.json())
           .then(data => {
             setselagencyData(data);
          
     
             console.log(selagencyData)
     
           })
     
       handleCloseAdd();
       
     }
    
     

 const handleRemoveButton = async (result) => {

  console.log(result);

 await fetch("http://localhost:3000/agencylist/selagency/remove", {
    method: "post",
    headers: {"Content-Type": "application/json"},
    body: JSON.stringify({

      _id:props.selectedAgency,
      _id2: result._id
      
    })
  })
  await fetch("http://localhost:3000/agencylist/selagency", {
      method: "post",
      headers: {"Content-Type": "application/json" } ,
      body: JSON.stringify({
    
        _id: props.selectedAgency
      })
    })
      .then(res => res.json())
      .then(data => {
        setselagencyData(data);
     

        console.log(selagencyData)

      })

}




const [saveEditData, setsaveEditData] = useState(selagencyData);
console.log(saveEditData.Agents);

useEffect(() => {
  setsaveEditData (selagencyData);
},[selagencyData])

console.log(saveEditData);

const handleEditNameText = (event) => {
  event.persist();
  seteditNameText (event.target.value);
  setselagencyData((selagencyData) => {
    selagencyData.Agents[selectedAgent._id -1].AgentName = event.target.value;
    return({
      ...selagencyData
    })
  })
  /* setselagencyData({...selagencyData, selagencyData.Agents[selectedAgent._id -1].AgentName: event.target.value}) */
  console.log(editNameText);
 }


 const handleEditEmailText = (event) => {
  event.persist();
  seteditEmailText (event.target.value);
  setselagencyData((selagencyData) => {
    selagencyData.Agents[selectedAgent._id -1].AgentEmail = event.target.value;
    return({
      ...selagencyData
    })
  })
  console.log(editEmailText);
 }

 const handleEditPhoneText = (event) => {
  event.persist();
  seteditPhoneText (event.target.value);
  setselagencyData((selagencyData) => {
    selagencyData.Agents[selectedAgent._id -1].AgentPhone = event.target.value;
    return({
      ...selagencyData
    })
  })
  console.log(editPhoneText);
 }

const handleEditButton = async (value) => {

 await setsaveEditData ((saveEditData) => {
    saveEditData.Agents[selectedAgent._id -1 ].AgentName = editNameText;
    saveEditData.Agents[selectedAgent._id -1 ].AgentEmail = editEmailText;
    saveEditData.Agents[selectedAgent._id -1 ].AgentPhone = editPhoneText;
  return({
    ...saveEditData
  });
})
  

  console.log(saveEditData)
  

 await fetch("http://localhost:3000/agencylist/selagency/edit", {
    method: "post",
    headers: {"Content-Type": "application/json"},
    body: JSON.stringify({
    saveEditData
    })
  })

  await fetch("http://localhost:3000/agencylist/selagency", {
      method: "post",
      headers: {"Content-Type": "application/json" } ,
      body: JSON.stringify({
    
        _id: props.selectedAgency
      })
    })
      .then(res => res.json())
      .then(data => {
        setselagencyData(data);
     

        console.log(selagencyData)

      })

  handleCloseEdit();
  
}

const [searchfield, setsearchfield] = useState("")

/* const [BuildingType, setBuildingType] = useState("All")
const handleBuildingTypeChange = (event) => {
  setBuildingType(event.target.value);
  console.log(BuildingType)
}; */


console.log(selectedAgent)

 
const filteredData = selagencyData.Agents.filter (agent => {
    
     return (agent.AgentName.toLowerCase().includes(searchfield.toLowerCase())  );
} 
)

console.log(filteredData)

const onSearchChange = (event) => {
  setsearchfield(event.target.value)
}


    const agentcardComponent = filteredData.map((_id, i) =>{
        return (

            <Card className="agentcard"  handleShowEdit={props.handleShowEdit}
            handleRemoveButton={props.handleRemoveButton} handleCardSelect={props.handleCardSelect}
                key={i} 
                _id={selagencyData.Agents[i]._id} 
                AgentName = {selagencyData.Agents[i].AgentName} 
               AgentPhone = {selagencyData.Agents[i].AgentPhone} 
               AgentEmail = {selagencyData.Agents[i].AgentEmail} >

                
   {/*  <Card.Img variant="top" src="holder.js/100px160" /> */}
    <Card.Body>
      <Card.Title className="agentcardtitle">{selagencyData.Agents[i].AgentName}</Card.Title>
      <Card.Text>
      <p>Phone:&nbsp;<b>{selagencyData.Agents[i].AgentPhone} </b></p> <p>Email:&nbsp;<b>{selagencyData.Agents[i].AgentEmail}</b> </p>
      </Card.Text>
    </Card.Body>
    <Card.Footer>
    <Button style={{height: "36px"}} onClick={() => handleShowEdit(_id)} className="button" variant="outline-primary">Edit</Button>
    <Button style={{height: "36px"}} onClick={() => handleRemoveButton(_id)} className="button" variant="outline-primary">Remove</Button>
    </Card.Footer>
  </Card> 
            );
        })

    return (
      <div>

      <div className="backbtn">  
      <div></div>
      <Button className="w-5" variant="primary" onClick={() => props.onRouteChange("agencylist")}>
            Back
          </Button>
          </div>

    <div className="List">
      <div></div>
      <Navbar className="navbar" bg="light" variant="light">
  <Form inline>
      <FormControl onChange={onSearchChange} type="text" placeholder="Search / Filter" className="mr-sm-2 search" />
    </Form>
    <Nav className="mr-auto">
    
    <Button onClick={handleShowAdd} className="button" variant="outline-primary">Add +</Button>
   
    </Nav>

    <Modal className="agentaddmodal" show={showAdd} onHide={handleCloseAdd}>
        <Modal.Header closeButton>
          <Modal.Title>Add Agent</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <Form.Control onChange={handleAddNameText} type="name" placeholder="Enter name" />
        <Form.Control onChange={handleAddEmailText} type="name" placeholder="Enter email" />
        <Form.Control onChange={handleAddPhoneText} type="name" placeholder="Enter phone" />
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleCloseAdd}>
            Close
          </Button>
          <Button variant="primary" onClick={() => handleAddButton()}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>

      <Modal className="agenteditmodal" show={showEdit} onHide={handleCloseEdit}>
        <Modal.Header closeButton>
          <Modal.Title>Edit Agent</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <Form.Control onChange={handleEditNameText} value={selagencyData.Agents[selectedAgent._id -1].AgentName} type="name" placeholder="Enter name" />
        <Form.Control onChange={handleEditEmailText} value={selagencyData.Agents[selectedAgent._id -1].AgentEmail} type="name" placeholder="Enter email" />
        <Form.Control onChange={handleEditPhoneText} value={selagencyData.Agents[selectedAgent._id -1].AgentPhone} type="name" placeholder="Enter phone" />
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

  <div></div>
  <div></div>
<div>
  <CardDeck>
{agentcardComponent}
  
</CardDeck>
</div>

                
    </div>
    </div>
    )
}

export default AgentCardList;