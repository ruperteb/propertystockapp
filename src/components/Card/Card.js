import React , { useState } from 'react';
import Accordion from 'react-bootstrap/Accordion';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import "./card.css"
import arrow from "./arrow.png"

const PropCard = (props) => {   /* destructuring props inside bracket */
   /*  const {name, email, id} = props */
   var [check, setcheck] = useState(false);

   PropCard.defaultProps = {
    EarliestOccupation: ""
  }

  var EarliestOccupation2 = 0
  if(props.EarliestOccupation === undefined) {
    EarliestOccupation2= ""}
    else {EarliestOccupation2 = (new Date(props.EarliestOccupation)).toLocaleDateString("en-GB");}
 

 console.log(EarliestOccupation2)

 const handleCheck =(event) => {
   if (event.target.checked) {
    props.handlemultipleSelect("add", props._id, props.BuildingName );
    setcheck (event.target.checked);
 
   } else {
    props.handlemultipleSelect("remove", props._id, props.BuildingName );
    setcheck (event.target.checked);
  
    }
}

    return (

<Accordion className="shadow-5 ma1" >
  <Card className="cardContainer">
    <Card.Header>
      <Accordion.Toggle className="accordionbutton" as={Button} variant="outline-primary" active block eventKey="0">
      <h3>{props.BuildingName}</h3>
      </Accordion.Toggle>
    </Card.Header>
    <div className="accordion">

      <Form.Check  inline
        type="checkbox" checked={check} onClick ={handleCheck} />
      <Form.Check.Input className="nocheck"/>
      <Form.Check.Label className="nocheck"></Form.Check.Label>
        <Form.Control.Feedback className="nocheck"></Form.Control.Feedback>
    
      
        </div>

    <div className="accordion"><img onClick={() =>props.handleCardSelect(props._id)} style={{paddingTop: "5px"}} className="w-40 grow shadow-5 pointer" alt="logo" src={arrow}/></div>
    <Accordion.Collapse eventKey="0">
      <Card.Body><i><p /* className="address" */>Address:&nbsp;<b>{props.Address}</b></p> <p>Building Type:&nbsp;<b>{props.BuildingType}</b> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Vacant Area:&nbsp; <b>{props.VacantArea}</b> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Earliest Occupation:&nbsp; <b>{EarliestOccupation2}</b> </p></i></Card.Body>
    </Accordion.Collapse>
  </Card>
  
</Accordion>



    );
}

export default PropCard;