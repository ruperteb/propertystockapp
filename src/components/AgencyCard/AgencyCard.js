import React , { useState, useEffect } from 'react';
import Accordion from 'react-bootstrap/Accordion';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import "./AgencyCard.css"
import arrow from "./arrow.png"


const AgencyCard = (props) => {   
  


    return (

<Accordion className="shadow-5 ma1" >
  <Card className="cardContainer">
    <Card.Header>
      <Accordion.Toggle className="accordionbutton" as={Button} variant="outline-primary" active block eventKey="0">
      <h3>{props.AgencyName}</h3>
      </Accordion.Toggle>
    </Card.Header>
    <div className="accordion">

     <Button style={{"margin-top": "1.1em"}} onClick={() => props.handleRemoveButton(props._id)} className="button" variant="outline-primary">Remove</Button>
    
      
        </div>

    <div className="accordion"><img onClick={() =>props.handleCardSelect(props._id)} style={{paddingTop: "5px"}} className="w-40 grow shadow-5 pointer" alt="logo" src={arrow}/></div>
    <Accordion.Collapse eventKey="0">
      <Card.Body className="agencycardbody"><i><p className="website">Website:&nbsp;<b>{props.AgencyWebsite}</b></p> <p>Phone:&nbsp;<b>{props.AgencyPhone}</b> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Email:&nbsp; <b>{props.AgencyEmail}</b></p></i>
      <Button style={{height: "36px"}} onClick={() => props.handleShowEdit(props._id)} className="button" variant="outline-primary">Edit</Button>
      </Card.Body>
    </Accordion.Collapse>
  </Card>
  
</Accordion>



    );
}

export default AgencyCard;