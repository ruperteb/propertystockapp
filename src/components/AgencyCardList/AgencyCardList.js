import React from 'react';
import AgencyCard from "../AgencyCard/AgencyCard";
import "./AgencyCardList.css" 

const AgencyCardList = (props) => {

const db = [{
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

}

]

}];

    const agencycardComponent = props.agencyData.map((_id, i) =>{
        return (
         
        <AgencyCard 
        handleShowEdit={props.handleShowEdit}
        handleRemoveButton={props.handleRemoveButton} handleCardSelect={props.handleCardSelect}
            key={i} 
            _id={props.agencyData[i]._id} 
            AgencyName = {props.agencyData[i].AgencyName} 
           AgencyPhone = {props.agencyData[i].AgencyPhone} 
           AgencyEmail = {props.agencyData[i].AgencyEmail} 
            AgencyWebsite = {props.agencyData[i].AgencyWebsite} 
           
            />
            );
        })

    return (
    <div className="List">
                <div className="item">
                    {agencycardComponent}
                </div>
    </div>
    )
}

export default AgencyCardList;