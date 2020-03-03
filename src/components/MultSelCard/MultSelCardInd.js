import React from 'react';
import "./MultSelCardInd.css"
import {Image, Video, Transformation, CloudinaryContext} from 'cloudinary-react';

var moment = require('moment');
moment().format();

const MultSelCardInd = (props) => {

console.log(props.i)

const row = props.data.Premises.map((_id, i) =>{
       var occdate = moment(props.data.Premises[i].Occupation).format("DD/MM/YYYY"); 
       console.log(occdate)
    return (
        <tr>
        <td className="leftheader">{props.data.Premises[i].Floor}</td>
        <td >{props.data.Premises[i].Area}</td>
        <td >{props.data.Premises[i].Type}</td>
        <td >{occdate}</td>
        <td className="leftheader">{props.data.Premises[i].NetRental}</td>
        <td >{props.data.Premises[i].OpCosts}</td>
        <td >{props.data.Premises[i].Other}</td>
        <td >{props.data.Premises[i].GrossRental}</td>
        <td >{props.data.Premises[i].Esc}</td>
        <td className="leftheader">{props.data.Premises[i].Yard}</td>
        <td >{props.data.Premises[i].Height}</td>
        <td >{props.data.Premises[i].Doors}</td>
        <td >{props.data.Premises[i].Loading}</td>
        <td >{props.data.Premises[i].Sprinklered}</td>
        <td >{props.data.Premises[i].Canopies}</td>
        <td className="rightheader">{props.data.Premises[i].Power}</td>
        </tr>
    
        );
    })

    const agents = () => {

        if (props.agents === true) {
    return (
    <div className="agentdata">
       <p className="agency">{props.data.Agency}</p> 
       <p className="agent">{props.data.Agent}</p>
       <p className="phone"> {props.data.Phone}</p>
    </div> 
    )
        } else {
            return (
                <div></div>
            )
        }
    }

if (props.photos === true) {
    return (
        <div className="shadow-5 multselcard">
            <div><h2 className= "headernumber">{props.i + 1}</h2></div>
            <div>
               <h3 className="headerbuilding tc">{props.data.BuildingName}</h3> 
              <h5 className="headeraddress tc"><i>{props.data.Address}</i></h5>  
            </div>
            <div>
            {agents()}
            </div>

            <div className="tablediv" >
            <table className="headertable shadow-2" width="1030">
<tbody>
<tr>
<td className="topheader" colspan="4">Basic Details</td>
<td className="topheader" colspan="5">Rental Details (/m&sup2;/month)</td>
<td  className="topheader" colspan="7">Features</td>
</tr>
<tr>
<td className="leftheader middleheader">Floor/Unit</td>
<td className="middleheader">Area</td>
<td className="middleheader">Type</td>
<td className="middleheader">Occupation Date</td>
<td className="leftheader middleheader">Net Rental</td>
<td className="middleheader">Op Costs</td>
<td className="middleheader">Other</td>
<td className="middleheader">Gross Rental</td>
<td className="middleheader">Esc</td>
<td className="leftheader middleheader">Yard Size</td>
<td className="middleheader">Height</td>
<td className="middleheader">Doors</td>
<td className="middleheader">Loading</td>
<td className="middleheader">Sprinklered?</td>
<td className="middleheader">Canopies?</td>
<td className="rightheader middleheader">Power</td>
</tr>
<tr>
<td className="bottomheader leftheader" >&nbsp;</td>
<td className="bottomheader" >(m²)</td>
<td className="bottomheader">&nbsp;</td>
<td className="bottomheader">&nbsp;</td>
<td className="bottomheader leftheader">(R)</td>
<td className="bottomheader">(R)</td>
<td className="bottomheader">(R)</td>
<td className="bottomheader">(R)</td>
<td className="bottomheader">(%)</td>
<td className="bottomheader leftheader">(m²)</td>
<td className="bottomheader">(m)</td>
<td className="bottomheader">&nbsp;</td>
<td className="bottomheader">&nbsp;</td>
<td className="bottomheader">&nbsp;</td>
<td className="bottomheader">&nbsp;</td>
<td className="bottomheader rightheader">&nbsp;</td>
</tr>
{row}
</tbody>
</table>

            </div>

            <div className= "imagecontainer">

            <Image className="center image" cloudName="drlfedqyz" publicId={props.data.Aerial} width="600" height="400" crop="fill" />
            <Image className="center image" cloudName="drlfedqyz" publicId={props.data.MainPhoto} width="600" height="400" crop="fill" />
            <Image className="center image" cloudName="drlfedqyz" publicId={props.data.SecondPhoto} width="600" height="400" crop="fill" />
            </div>
                   
          
        </div>
        )

} else  {

    return (
        <div className="shadow-5 multselcard">
            <div><h2 className= "headernumber">{props.i + 1}</h2></div>
            <div>
               <h3 className="headerbuilding tc">{props.data.BuildingName}</h3> 
              <h5 className="headeraddress tc"><i>{props.data.Address}</i></h5>  
            </div>
            <div>
            {agents()}
            </div>

            <div className="tablediv" >
            <table className="headertable shadow-2" width="1030">
<tbody>
<tr>
<td className="topheader" colspan="4">Basic Details</td>
<td className="topheader" colspan="5">Rental Details (/m&sup2;/month)</td>
<td  className="topheader" colspan="7">Features</td>
</tr>
<tr>
<td className="leftheader middleheader">Floor/Unit</td>
<td className="middleheader">Area</td>
<td className="middleheader">Type</td>
<td className="middleheader">Occupation Date</td>
<td className="leftheader middleheader">Net Rental</td>
<td className="middleheader">Op Costs</td>
<td className="middleheader">Other</td>
<td className="middleheader">Gross Rental</td>
<td className="middleheader">Esc</td>
<td className="leftheader middleheader">Yard Size</td>
<td className="middleheader">Height</td>
<td className="middleheader">Doors</td>
<td className="middleheader">Loading</td>
<td className="middleheader">Sprinklered?</td>
<td className="middleheader">Canopies?</td>
<td className="rightheader middleheader">Power</td>
</tr>
<tr>
<td className="bottomheader leftheader" >&nbsp;</td>
<td className="bottomheader" >(m²)</td>
<td className="bottomheader">&nbsp;</td>
<td className="bottomheader">&nbsp;</td>
<td className="bottomheader leftheader">(R)</td>
<td className="bottomheader">(R)</td>
<td className="bottomheader">(R)</td>
<td className="bottomheader">(R)</td>
<td className="bottomheader">(%)</td>
<td className="bottomheader leftheader">(m²)</td>
<td className="bottomheader">(m)</td>
<td className="bottomheader">&nbsp;</td>
<td className="bottomheader">&nbsp;</td>
<td className="bottomheader">&nbsp;</td>
<td className="bottomheader">&nbsp;</td>
<td className="bottomheader rightheader">&nbsp;</td>
</tr>
{row}
</tbody>
</table>

            </div>

            <div className= "imagecontainer">

           {/*  <Image className="center image" cloudName="drlfedqyz" publicId={props.data.Aerial} width="600" height="400" crop="fill" />
            <Image className="center image" cloudName="drlfedqyz" publicId={props.data.MainPhoto} width="600" height="400" crop="fill" />
            <Image className="center image" cloudName="drlfedqyz" publicId={props.data.SecondPhoto} width="600" height="400" crop="fill" /> */}
            </div>
                   
          
        </div>
        )

}




}

export default MultSelCardInd;