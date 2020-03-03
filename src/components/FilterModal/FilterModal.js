import React , { useState, useEffect } from 'react';
import Modal from 'react-bootstrap/Modal';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import "./FilterModal.css";
import ReactDOM from 'react-dom';
import Slider, { Range } from 'rc-slider';
import 'rc-slider/assets/index.css';
import Tooltip from 'rc-tooltip';
import 'rc-tooltip/assets/bootstrap.css';



function FilterModal(props) {
  
  FilterModal.defaultProps = {
    GLAValues: [0,20000],
    VacantValues: [0,20000],
    ErfValues: [0,20000]
  }
  

    return (
      <Modal className="filtermodal" {...props} aria-labelledby="contained-modal-title-vcenter">
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            Advanced Filter
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Container>
            <Row className="show-grid">
              <Col className="modaldrop" xs={6} md={8}>

              <Form.Group controlId="exampleForm.ControlSelect1">
                <Form.Label>Building Type</Form.Label>
                <Form.Control defaultValue="all" value={props.BuildingType} onChange={props.handleBuildingTypeChange} as="select">
                <option value="All">All</option>
                <option value="COM">COM</option>
                <option value="IND">IND</option>
                <option value="RETAIL">RETAIL</option>
                </Form.Control>
            </Form.Group>

            <Form.Group controlId="exampleForm.ControlSelect1">
                <Form.Label>Province</Form.Label>
                <Form.Control defaultValue="all" value={props.Province} onChange={props.handleProvinceChange} as="select">
                <option value="All">All</option>
                <option value="WC">WC</option>
                <option value="GAU">GAU</option>
                <option value="KZN">KZN</option>
                </Form.Control>
            </Form.Group>

            <Form.Group controlId="exampleForm.ControlSelect1">
                <Form.Label>Region</Form.Label>
                <Form.Control defaultValue="all" value={props.Region} onChange={props.handleRegionChange} as="select">
                <option value="All">All</option>
                <option value="SS">SS</option>
                <option value="NS">NS</option>
                <option value="CBD">CBD</option>
                </Form.Control>
            </Form.Group>

              </Col>
              <Col className="range" xs={12} md={4}>

              <Form.Group>
              <Form.Label style={{"margin": "0" }}>Total GLA Filter: </Form.Label> <br></br>
              <Form.Label style={{"font-size": "0.8em", "margin-left": "4em" }}>  {props.GLAValues[0]}&nbsp;m2&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;-&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; {props.GLAValues[1]}&nbsp;m2 </Form.Label>
              <Range
              min={0}
          max={20000}
          defaultValue={props.GLAValues}
          onChange={props.handleGLAChange}
          />
   </Form.Group>

   <Form.Group>
   <Form.Label style={{"margin": "0" }}>Vacant Area Filter: </Form.Label> <br></br>
              <Form.Label style={{"font-size": "0.8em", "margin-left": "4em" }}>  {props.VacantValues[0]}&nbsp;m2&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;-&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; {props.VacantValues[1]}&nbsp;m2 </Form.Label>
               
               <Range
               min={0}
           max={20000}
           defaultValue={props.VacantValues}
           onChange={props.handleVacantChange}
           />
            </Form.Group>

            <Form.Group>
            <Form.Label style={{"margin": "0" }}>Erf Extent Filter: </Form.Label> <br></br>
              <Form.Label style={{"font-size": "0.8em", "margin-left": "4em" }}>  {props.ErfValues[0]}&nbsp;m2&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;-&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; {props.ErfValues[1]}&nbsp;m2 </Form.Label>
               
               <Range
               min={0}
           max={20000}
           defaultValue={props.ErfValues}
           onChange={props.handleErfChange}
           />

</Form.Group>

              </Col>

            </Row>
  
          </Container>
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={props.onHide}>Close</Button>
          <Form>
          <Form.Check 
            type="switch"
            id="custom-switch"
            label="Filter"
            onChange={props.handleFilter}
            defaultValue = {props.filter}
            value={props.filter}
            checked={props.filter}
          />
          </Form>
        </Modal.Footer>
      </Modal>
    );
  }

  export default FilterModal;