import React, { useState, useEffect } from 'react';
import "./SelectedList.css" 

function SelectedList(props) {

    const SelectedList = props.multipleSelect.map((_id, i) =>{
        return (
        <li className="tl ma1">{props.multipleSelect[i].BuildingName}</li>
       
            );
        })

if (props.multipleSelect.length > 0) {
return (
    
    <div className="ma3 pa2 shadow-5 selectcontainer">
        <h4 className="tl ma1">Selected Properties:</h4>
{SelectedList}
</div>

  )} else {return null}

}

export default SelectedList;