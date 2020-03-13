import React, { useState, useEffect } from 'react';
import { CSSTransition } from 'react-transition-group';
import "./SelectedList.css" 

function SelectedList(props) {

    const [showmultipleSelect, setshowmultipleSelect] = useState(false);

    const SelectedList = props.multipleSelect.map((_id, i) =>{
        return (
        <li className="selectedprop tl ma1">{props.multipleSelect[i].BuildingName}</li>
       
            );
        })

        useEffect(() =>{
            if (props.multipleSelect.length > 0) {

                setshowmultipleSelect(true)
            } else {
                setshowmultipleSelect(false)
            }

        },[props.multipleSelect])



return (

    <CSSTransition
        in={showmultipleSelect}
        timeout={200}
        classNames="showmultipleselect"
        unmountOnExit
   /*      onEnter={() => setShowButton(false)}
        onExited={() => setShowButton(true)} */
      >
    
    <div className="ma3 pa2 shadow-5 selectcontainer">
        <h4 className="tl ma1">Selected Properties:</h4>
{SelectedList}
</div>

</CSSTransition>

)

}

export default SelectedList;