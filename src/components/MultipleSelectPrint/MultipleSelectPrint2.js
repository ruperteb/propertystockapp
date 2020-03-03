import React, { useEffect } from 'react';
import MultSelCard from '../MultSelCard/MultSelCard';
import Button from 'react-bootstrap/Button';
import "./MultipleSelectPrint2.css"
import pdfMake from "pdfmake/build/pdfmake";
import pdfFonts from "pdfmake/build/vfs_fonts";
import LogoImage from "./Logo.jpg";
import Logo2 from "./Logo2.jpg";
import Logo3 from "./Logo3.jpg";
import ReverseLogo from "./ReverseLogo.jpg";
import FormControl from 'react-bootstrap/FormControl';
import Background from "./background.jpg";
import {Image, Video, Transformation, CloudinaryContext} from 'cloudinary-react';
import cloudinary from 'cloudinary-core';
import MultSelCardInd from '../MultSelCard/MultSelCardInd';

pdfMake.vfs = pdfFonts.pdfMake.vfs;


class MultipleSelectPrint2 extends React.Component {

  constructor(props) {
    super(props);
    this.state = {scheduleTitle: "Schedule of Accommodation:"};
  }

      
        render() {

          

console.log(this.state.scheduleTitle)
          var handleTitleChange = (event) => {
           this.setState ({scheduleTitle: event.target.value})
          }

          const  multipleSelect_id = this.props.multipleSelect.map((_id, i) => {
            return _id= this.props.multipleSelect[i]._id
          })
      
         const  selectedPropertiesData = this.props.data.filter( i => multipleSelect_id.includes( i._id ) );
      
        const propertyComponent = selectedPropertiesData.map((_id, i) =>{
             
          return (
             
          <MultSelCard 
          agents = {this.props.agents}
         photos = {this.props.photos}
              i={i} 
              data={selectedPropertiesData[i]} 
              />
              );
          })

          const propertyComponentInd = selectedPropertiesData.map((_id, i) =>{
             
            return (
               
            <MultSelCardInd 
            agents = {this.props.agents}
           photos = {this.props.photos}
                i={i} 
                data={selectedPropertiesData[i]} 
                />
                );
            })

       
        

console.log(this.props.photos)
console.log(this.props.industrial)

if (this.props.industrial === false) {

if (this.props.locality === false) {

    return (

<div className="print">
<table className="printtable">
  <thead><tr><td className= "bordertd">
    <div class="header-space">
    <div className="topbar">
<div><img className="logo" style={{paddingTop: "5px"}} alt="logo" src={LogoImage}/></div>
<div><FormControl onChange={handleTitleChange} value={this.state.scheduleTitle} id="name" aria-describedby="basic-addon3" /></div>

</div>
    
    </div>
  </td></tr></thead>

  <tbody><tr><td className= "bordertd">
    <div class="content">
    <div >




    <div className="multsellist">
        <div></div>
                <div className="multselitem">
                    {propertyComponent}
                </div>
        <div></div>
             
    </div>
    <div className="contact">

<div className="contactcard"> 
  <h2 className="contactheader"> Contact:</h2>
  <h3 className="contactdetails"> Sean Ellis Brown</h3>
  <h3 className="contactdetails"> 082 4555 183</h3>
   </div>

    </div>

    </div>

    </div>
  </td></tr></tbody>
  <tfoot><tr><td className= "bordertd">
    <div class="footer-space">&nbsp;</div>
  </td></tr></tfoot>
</table>

<div class="header">

  
</div>
{/* <div class="footer">...</div> */}
</div>


      

    )
} else if (this.props.locality === true) {

  return (

    <div className="print">
    <table className="printtable">
      <thead><tr><td className= "bordertd">
        <div class="header-space">
        <div className="topbar">
    <div><img className="logo" style={{paddingTop: "5px"}} alt="logo" src={LogoImage}/></div>
    <div><FormControl onChange={handleTitleChange} value={this.state.scheduleTitle} id="name" aria-describedby="basic-addon3" /></div>
    
    </div>
        
        </div>
      </td></tr></thead>
      <tbody><tr><td className= "bordertd">
        <div class="content">
        <div >
    
    <div className="locality">
      <div className="localitycontainer">
<h3 className="localityheader">Overall Locality</h3>
    <Image className="center localityimage" cloudName="drlfedqyz" publicId={this.props.localityurl} width="1920" height="1080" crop="fit" />
    </div>
    </div>
    
        <div className="multsellist">
            <div></div>
                    <div className="multselitem">
                        {propertyComponent}
                    </div>
            <div></div>
                 
        </div>
        <div className="contact">
    
    <div className="contactcard"> 
      <h2 className="contactheader"> Contact:</h2>
      <h3 className="contactdetails"> Sean Ellis Brown</h3>
      <h3 className="contactdetails"> 082 4555 183</h3>
       </div>
    
        </div>
    
        </div>
    
        </div>
      </td></tr></tbody>
      <tfoot><tr><td className= "bordertd">
        <div className="footer-space">&nbsp;</div>
      </td></tr></tfoot>
    </table>
    
    <div className="header">
    
      
    </div>
    <div className="footer">...</div>
    </div>
    
        )
} 

} else if (this.props.industrial === true) {

  if (this.props.locality === false) {

    return (

<div className="print">
<table className="printtable">
  <thead><tr><td className= "bordertd">
    <div class="header-space">
    <div className="topbar">
<div><img className="logo" style={{paddingTop: "5px"}} alt="logo" src={LogoImage}/></div>
<div><FormControl onChange={handleTitleChange} value={this.state.scheduleTitle} id="name" aria-describedby="basic-addon3" /></div>

</div>
    
    </div>
  </td></tr></thead>

  <tbody><tr><td className= "bordertd">
    <div class="content">
    <div >




    <div className="multsellist">
        <div></div>
                <div className="multselitem">
                    {propertyComponentInd}
                </div>
        <div></div>
             
    </div>
    <div className="contact">

<div className="contactcard"> 
  <h2 className="contactheader"> Contact:</h2>
  <h3 className="contactdetails"> Sean Ellis Brown</h3>
  <h3 className="contactdetails"> 082 4555 183</h3>
   </div>

    </div>

    </div>

    </div>
  </td></tr></tbody>
  <tfoot><tr><td className= "bordertd">
    <div class="footer-space">&nbsp;</div>
  </td></tr></tfoot>
</table>

<div class="header">

  
</div>
{/* <div class="footer">...</div> */}
</div>


      

    )
} else if (this.props.locality === true) {

  return (

    <div className="print">
    <table className="printtable">
      <thead><tr><td className= "bordertd">
        <div class="header-space">
        <div className="topbar">
    <div><img className="logo" style={{paddingTop: "5px"}} alt="logo" src={LogoImage}/></div>
    <div><FormControl onChange={handleTitleChange} value={this.state.scheduleTitle} id="name" aria-describedby="basic-addon3" /></div>
    
    </div>
        
        </div>
      </td></tr></thead>
      <tbody><tr><td className= "bordertd">
        <div class="content">
        <div >
    
    <div className="locality">
      <div className="localitycontainer">
<h3 className="localityheader">Overall Locality</h3>
    <Image className="center localityimage" cloudName="drlfedqyz" publicId={this.props.localityurl} width="1920" height="1080" crop="fit" />
    </div>
    </div>
    
        <div className="multsellist">
            <div></div>
                    <div className="multselitem">
                        {propertyComponentInd}
                    </div>
            <div></div>
                 
        </div>
        <div className="contact">
    
    <div className="contactcard"> 
      <h2 className="contactheader"> Contact:</h2>
      <h3 className="contactdetails"> Sean Ellis Brown</h3>
      <h3 className="contactdetails"> 082 4555 183</h3>
       </div>
    
        </div>
    
        </div>
    
        </div>
      </td></tr></tbody>
      <tfoot><tr><td className= "bordertd">
        <div className="footer-space">&nbsp;</div>
      </td></tr></tfoot>
    </table>
    
    <div className="header">
    
      
    </div>
    <div className="footer">...</div>
    </div>
    
        )
} 


}


    }
  }

export default MultipleSelectPrint2;