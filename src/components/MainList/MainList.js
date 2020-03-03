import React, { useState, useEffect } from 'react';
import CardList from "../CardList/CardList";
import SelectedProperty from "../SelectedProperty/SelectedProperty";
/* import SearchBox from "../compnents/SearchBox"; */
import "./MainList.css";
import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button';
import Nav from 'react-bootstrap/Nav';
import Form from 'react-bootstrap/Form';
import FormControl from 'react-bootstrap/FormControl';
import Modal from 'react-bootstrap/Modal';
import useForceUpdate from 'use-force-update';
import FilterModal from '../FilterModal/FilterModal';
import MultipleSelect from '../MultipleSelect/MultipleSelect';
import MultipleSelectPrint from '../MultipleSelectPrint/MultipleSelectPrint';

function MainList() {

  const forceUpdate = useForceUpdate();
  var [updateCount, setupdateCount] = useState(0);

  var [addCount, setaddCount] = useState(0);
  var [remCount, setremCount] = useState(0);
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const [showAdd, setShowAdd] = useState(false);
  const [addText, setaddText] = useState("");
  const handleCloseAdd = () => setShowAdd(false);
  const handleShowAdd = () => setShowAdd(true);

  var [route, setRoute] = useState("list");
  const [selectedProp, setselectedProp] = useState();
  const [lastAdded, setlastAdded] = useState();
  const [selectedPropData, setselectedPropData] = useState({});

  const [multipleSelect, setmultipleSelect] = useState([]);

  console.log(multipleSelect)
  
  const onRouteChange = (route) => {
    if (route === "list") {
      setRoute("list")
      
    } else if (route === "propinfo") {
      setRoute("propinfo") 
  } else if (route === "multipleselectprint") {
    setRoute("multipleselectprint") 
} else if (route === "multipleselect") {
  setRoute("multipleselect") 
}

  }

  useEffect(() => {

    // First we set the loading and error states
    setLoading(true)
    setError(null)

    fetch('http://localhost:3000/mainlist')
      .then(res => res.json())
      .then(data2 => {
        setData(data2);
      })
     
     
  }, [route])

 const handleAddText = (event) => {
  setaddText (event.target.value);
  console.log(addText);
 }

 const [didMount, setDidMount] = useState(false)
useEffect(() => setDidMount(true), [])

//ADD Button

 const handleAddFetch = async () => {
  if (didMount) {
 await fetch("http://localhost:3000/mainlist/add", {
    method: "post",
    headers: {"Content-Type": "application/json"},
    body: JSON.stringify({
  
      BuildingName: addText
    })
  })
  .then(res => res.json())
  .then(result => {
    const lastAdded = result
    setlastAdded(lastAdded);
    setselectedProp(lastAdded._id);
    setselectedPropData(lastAdded);
  })
  await fetch('http://localhost:3000/mainlist')
      .then(res => res.json())
      .then(data2 => {
        setData(data2);
      })
      /* const filterProp = data.filter(ele => {
        return ele._id === lastAdded ;
         } 
         )
        setselectedPropData(filterProp);
        console.log(selectedProp) */
        console.log(selectedPropData)
        onRouteChange("propinfo");
 }
 }

 useEffect(() => {
  handleAddFetch();
  return () => {
    console.log('add new building');
  };
}, [addCount]);

 const handleAddButton =  (route) => {
  setaddCount(addCount=addCount+1);
  /*  onRouteChange(route); */
   console.log(route);
   handleCloseAdd();

  /*  const filterProp = data.filter(ele => {
    return ele._id === lastAdded;
     } 
     )
    setselectedPropData(filterProp); */
   
 }

 const handleUpdate =() => {
   setupdateCount(updateCount=updateCount+1);
   /* forceUpdate();
   console.log(selectedProp)
   console.log(selectedPropData) */
 }

useEffect(()=> {
  fetch('http://localhost:3000/mainlist')
      .then(res => res.json())
      .then(data2 => {
        setData(data2);
      })
  forceUpdate();
   console.log(selectedProp)
   console.log(selectedPropData)
},[updateCount])




const handlemultipleSelect = (type, _id, BuildingName) => {
  if (type === "add") {
    setmultipleSelect([...multipleSelect,{_id: _id,
      BuildingName: BuildingName,
                          state: true}])
    console.log(multipleSelect)
  } else if (type === "remove") {
    setmultipleSelect (multipleSelect.filter(ele => {
     return ele._id !== _id;
    }))
    /* setmultipleSelect([...multipleSelect,{_id: _id,
      BuildingName: BuildingName,
      state: false}]) */
    console.log(multipleSelect)
}
}


const handleRemoveFetch = async () => {
  if (didMount) {

    multipleSelect.forEach(ele => {
      if (ele.state) {

        fetch("http://localhost:3000/mainlist/remove", {
          method: "post",
          headers: {"Content-Type": "application/json"},
          body: JSON.stringify({
        
            _id: ele._id
            
          })
        })
      }
    })
  
  console.log(multipleSelect)
 await fetch('http://localhost:3000/mainlist')
      .then(res => res.json())
      .then(data2 => {
        setData(data2);
      })
      setupdateCount(updateCount=updateCount+1);
 }}


 useEffect(() => {
  handleRemoveFetch();
  return () => {
    console.log('remove building');
  };
}, [remCount]);

 const handleRemoveButton =  () => {
  setremCount(remCount=remCount+1);
   /* onRouteChange(route); */
 }

 const handlemultipleSelectList =  () => {
  setRoute("multipleselect");

 }




 /* const handleCardSelect2 = () => {
  if (didMount) {
setRoute("propinfo");
console.log(selectedProp)
 }}

 useEffect(() => {
 handleCardSelect2();
 return () => {
  console.log('select building');
 }
},[selectedProp]) */

var [selCount, setselCount] = useState(0);

const handleCardSelect = (_id) => {
  setselectedProp(_id);
  setselCount(selCount=selCount+1);
  setRoute("propinfo");
  setsearchfield("")
  forceUpdate()

  console.log(selCount)
}


const [searchfield, setsearchfield] = useState("")

const [BuildingType, setBuildingType] = useState("All")
const handleBuildingTypeChange = (event) => {
  setBuildingType(event.target.value);
  console.log(BuildingType)
};

const [Province, setProvince] = useState("All")
const handleProvinceChange = (event) => {
  setProvince(event.target.value);
  console.log(Province)
};

const [Region, setRegion] = useState("All")
const handleRegionChange = (event) => {
  setRegion(event.target.value);
  console.log(Region)
};

const [GLAValues, setGLAValues] = useState([0,20000])
  const handleGLAChange =(sliderValues) => {
  setGLAValues(sliderValues)
console.log(GLAValues)
  }

  const [VacantValues, setVacantValues] = useState([0,20000])
  const handleVacantChange =(sliderValues) => {
  setVacantValues(sliderValues)
  console.log(VacantValues)
  }
  
  const [ErfValues, setErfValues] = useState([0,20000])
  const handleErfChange =(sliderValues) => {
  setErfValues(sliderValues)
  console.log(ErfValues)
 }

 const[filter,setfilter] = useState(false)
 const handleFilter =() => {
   if (filter === true) {
  setfilter(false);
} else if (filter === false) {
  setfilter(true);
}
  console.log(filter)
 }
 
const filteredData = data.filter (property => {
  if (property.Address !==undefined) {
    if(filter === true && BuildingType!=="All" && Province!=="All" && Region!=="All") {
  return (property.BuildingType === BuildingType && property.Province === Province && property.Region === Region && property.TotalGLA>= GLAValues[0] && property.TotalGLA<= GLAValues[1] && property.ErfExtent>= ErfValues[0] && property.ErfExtent<= ErfValues[1] && property.VacantArea>= VacantValues[0] && property.VacantArea<= VacantValues[1] );
    } else if(filter === true && BuildingType==="All" && Province!=="All" && Region!=="All") {
      return (property.Province === Province && property.Region === Region && property.TotalGLA>= GLAValues[0] && property.TotalGLA<= GLAValues[1] && property.ErfExtent>= ErfValues[0] && property.ErfExtent<= ErfValues[1] && property.VacantArea>= VacantValues[0] && property.VacantArea<= VacantValues[1] );
        } else if(filter === true && BuildingType==="All" && Province==="All" && Region!=="All") {
          return (property.Region === Region && property.TotalGLA>= GLAValues[0] && property.TotalGLA<= GLAValues[1] && property.ErfExtent>= ErfValues[0] && property.ErfExtent<= ErfValues[1] && property.VacantArea>= VacantValues[0] && property.VacantArea<= VacantValues[1] );
            } else if(filter === true && BuildingType==="All" && Province==="All" && Region==="All") {
              return (property.TotalGLA>= GLAValues[0] && property.TotalGLA<= GLAValues[1] && property.ErfExtent>= ErfValues[0] && property.ErfExtent<= ErfValues[1] && property.VacantArea>= VacantValues[0] && property.VacantArea<= VacantValues[1] );
                } if(filter === true && BuildingType!=="All" && Province==="All" && Region!=="All") {
                  return (property.BuildingType === BuildingType && property.Region === Region && property.TotalGLA>= GLAValues[0] && property.TotalGLA<= GLAValues[1] && property.ErfExtent>= ErfValues[0] && property.ErfExtent<= ErfValues[1] && property.VacantArea>= VacantValues[0] && property.VacantArea<= VacantValues[1] );
                    } if(filter === true && BuildingType!=="All" && Province==="All" && Region==="All") {
                      return (property.BuildingType === BuildingType && property.TotalGLA>= GLAValues[0] && property.TotalGLA<= GLAValues[1] && property.ErfExtent>= ErfValues[0] && property.ErfExtent<= ErfValues[1] && property.VacantArea>= VacantValues[0] && property.VacantArea<= VacantValues[1] );
                        } if(filter === true && BuildingType!=="All" && Province!=="All" && Region==="All") {
                          return (property.BuildingType === BuildingType && property.Province === Province && property.TotalGLA>= GLAValues[0] && property.TotalGLA<= GLAValues[1] && property.ErfExtent>= ErfValues[0] && property.ErfExtent<= ErfValues[1] && property.VacantArea>= VacantValues[0] && property.VacantArea<= VacantValues[1] );
                            }
    
    
    else return (property.BuildingName.toLowerCase().includes(searchfield.toLowerCase()) ||  property.Address.toLowerCase().includes(searchfield.toLowerCase()) ||  property.Suburb.toLowerCase().includes(searchfield.toLowerCase()) ||  property.Region.toLowerCase().includes(searchfield.toLowerCase()) ||  property.Province.toLowerCase().includes(searchfield.toLowerCase())  );
}
  
else { return property.BuildingName.toLowerCase().includes(searchfield.toLowerCase()) ||  property.Suburb.toLowerCase().includes(searchfield.toLowerCase()) ||  property.Region.toLowerCase().includes(searchfield.toLowerCase()) ||  property.Province.toLowerCase().includes(searchfield.toLowerCase())  }
})

console.log(filteredData)

const onSearchChange = (event) => {
  setsearchfield(event.target.value)
}

const [filtermodalShow, setfilterModalShow] = useState(false);

if (route === "list") {
  return (
    <div>
       
     <br />
     
  <Navbar className="navbar" bg="light" variant="light">
  <Form inline>
      <FormControl onChange={onSearchChange} type="text" placeholder="Search / Filter" className="mr-sm-2 search" />
    </Form>
    <Nav className="mr-auto">

   
      <Button variant="primary" onClick={() => setfilterModalShow(true)}>
        Advanced Filter
      </Button>

      <FilterModal filter={filter} handleFilter={handleFilter} handleBuildingTypeChange={handleBuildingTypeChange} handleProvinceChange={handleProvinceChange} handleRegionChange={handleRegionChange} BuildingType={BuildingType} Province={Province} Region={Region} GLAValues={GLAValues} VacantValues={VacantValues} ErfValues={ErfValues} handleGLAChange={handleGLAChange} handleVacantChange={handleVacantChange} handleErfChange={handleErfChange} show={filtermodalShow} onHide={() => setfilterModalShow(false)} />
  
    
    <Button onClick={handleShowAdd} className="button" variant="outline-primary">Add +</Button>
    <Button onClick={handleRemoveButton} className="button" variant="outline-primary">Remove -</Button>
    <Button onClick={handlemultipleSelectList} className="button" variant="outline-primary">Multiple Select</Button>
    </Nav>

    <Modal show={showAdd} onHide={handleCloseAdd}>
        <Modal.Header closeButton>
          <Modal.Title>Add Building</Modal.Title>
        </Modal.Header>
        <Modal.Body><Form.Control onChange={handleAddText} type="name" placeholder="Enter name" /></Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleCloseAdd}>
            Close
          </Button>
          <Button variant="primary" onClick={() => handleAddButton("propinfo")}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    
  </Navbar>
    <div>
<CardList multipleSelect={multipleSelect} handleCardSelect={handleCardSelect} handlemultipleSelect={handlemultipleSelect} data={filteredData}/>
    </div>

    </div>
  );
} else if (route === "propinfo") {
  return (
    <div>
<SelectedProperty route={route} onRouteChange={onRouteChange} selectedProp={selectedProp} />
</div>
  )
} else if (route === "multipleselect") {
  return (
    <div>
<MultipleSelect route={route} onRouteChange={onRouteChange} multipleSelect={multipleSelect} data={data} />
</div>
  )
} else if (route === "multipleselectprint") {
  return (
    <div>
<MultipleSelectPrint route={route} onRouteChange={onRouteChange} multipleSelect={multipleSelect} data={data} />
</div>
  )
}

}

export default MainList;