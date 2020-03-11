import React from 'react';
import PropCard from "../Card/Card";
import "./CardList.css" 
import SelectedList from "../SelectedList/SelectedList";

const CardList = (props) => {
    const cardComponent = props.data.map((_id, i) =>{
        return (
         
        <PropCard 
      /* check={props.check}  setcheck={props.setcheck} */ handlemultipleSelect={props.handlemultipleSelect} handleCardSelect={props.handleCardSelect}
      multipleSelect={props.multipleSelect}
            key={i} 
            _id={props.data[i]._id} 
            BuildingName = {props.data[i].BuildingName} 
            Address = {props.data[i].Address} 
            BuildingType = {props.data[i].BuildingType}
            VacantArea = {props.data[i].VacantArea}
            EarliestOccupation = {props.data[i].EarliestOccupation}
            />
            );
        })
    return (
    <div className="List">
                <div className="item">
                    {cardComponent}
                </div>
                <div className="center shadow-5 ma1 selectlist">
<SelectedList multipleSelect={props.multipleSelect}></SelectedList>
                </div>
    </div>
    )
}

export default CardList;