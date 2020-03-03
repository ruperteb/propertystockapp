import React, { useRef, useState } from 'react';
import ReactToPrint from 'react-to-print';
import MultipleSelectPrint2 from "../MultipleSelectPrint/MultipleSelectPrint2";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import {Image, Video, Transformation, CloudinaryContext} from 'cloudinary-react';
import cloudinary from 'cloudinary-core';

const MultipleSelectPrint = (props) => {
  const componentRef = useRef();

const [locality, setlocality] = useState(false)

const handleLocality =() => {
  if (locality === true) {
 setlocality(false);
} else if (locality === false) {
 setlocality(true);
}
 console.log(locality)
}

const [photos, setphotos] = useState(true)

const handlePhotos =() => {
  if (photos === false) {
 setphotos(true);
} else if (photos === true) {
  setphotos(false);
}
 console.log(photos)
}

const [industrial, setindustrial] = useState(false)

const handleIndustrial =() => {
  if (industrial === true) {
    setindustrial(false);
} else if (industrial === false) {
  setindustrial(true);
}
 console.log(industrial)
}

const [agents, setagents] = useState(false)

const handleAgents =() => {
  if (agents === true) {
    setagents(false);
} else if (agents === false) {
  setagents(true);
}
 console.log(agents)
}

var widget = window.cloudinary.createUploadWidget({ 
  cloudName: "drlfedqyz", uploadPreset: "xblzxkc8" }, (error, result) => {checkUploadResult(result) });

  var [localityurl,setlocalityurl] = useState('');

  var checkUploadResult = (resultEvent) => {
    if (resultEvent.event === "success") {
    setlocalityurl (resultEvent.info.public_id)
    console.log(resultEvent)
    }
  }

  var handleWidgetOpenLocality = () => {
 widget.open(); 
 } 

console.log(localityurl);

  return (
    <div>
        <div><h1 className="white">Print Preview</h1></div>
        <div>  
        <Button className="w-5" variant="primary" onClick={() => props.onRouteChange("multipleselect")}>
              Back
            </Button>
            <ReactToPrint 
      
      trigger={() => <Button>Print</Button>}
      content={() => componentRef.current}
    />

<Button variant="primary" onClick={handleWidgetOpenLocality}>
            Add locality
          </Button>

<Form style={{display: "inline-block", color: "white"}} className="multselcheck">
          <Form.Check 
            type="switch"
            id="custom-switch"
            label="Toggle Locality"
            onChange={handleLocality}
            defaultValue = {locality}
            value={locality}
            checked={locality}
          />
          </Form>

          <Form style={{display: "inline-block", color: "white"}} className="multselcheck">
          <Form.Check 
            type="switch"
            id="custom-switch2"
            label="Toggle Photos"
            onChange={handlePhotos}
            defaultValue = {photos}
            value={photos}
            checked={photos}
          />
          </Form>

          <Form style={{display: "inline-block", color: "white"}} className="multselcheck">
          <Form.Check 
            type="switch"
            id="custom-switch3"
            label="Toggle Industrial"
            onChange={handleIndustrial}
            defaultValue = {industrial}
            value={industrial}
            checked={industrial}
          />
          </Form>

          <Form style={{display: "inline-block", color: "white"}} className="multselcheck">
          <Form.Check 
            type="switch"
            id="custom-switch4"
            label="Toggle Agents"
            onChange={handleAgents}
            defaultValue = {agents}
            value={agents}
            checked={agents}
          />
          </Form>

            </div>
     
      <MultipleSelectPrint2 agents={agents} industrial={industrial} photos={photos} localityurl={localityurl} locality={locality} route={props.route} onRouteChange={props.onRouteChange} multipleSelect={props.multipleSelect} data={props.data} ref={componentRef} />
    </div>
  );
};

export default MultipleSelectPrint;