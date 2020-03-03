import React, { useState, useEffect } from 'react';
import ReactMapGL, {Marker} from 'react-map-gl';
import MapMarker from "./mapmarker.png"

const MAPBOX_TOKEN = 'pk.eyJ1IjoicnVwZXJ0ZWIiLCJhIjoiY2s1NWljdXAxMGcxMDNsa2J6MDRtYzloNiJ9.3CC5NFFUvlBMDULDdroiwA';

function Map(props) {

    Map.defaultProps = {
        lat: 0,
        long: 0
        
      }

  const [viewport, setViewport] = useState({
    width: 300,
    height: 300,
    latitude: 37.7577,
    longitude: -122.4376,
    zoom: 15
  });

  const [didMount, setDidMount] = useState(false)
useEffect(() => setDidMount(true), [])

  useEffect(() => {
      if (didMount) {
          
    setViewport({...viewport, latitude: props.lat, longitude: props.long})
  
    
  }},[props.lat])

 

  return (
    <ReactMapGL
      {...viewport}
      onViewportChange={setViewport}
      mapboxApiAccessToken={MAPBOX_TOKEN}
      mapStyle="mapbox://styles/mapbox/satellite-streets-v11" >

        <Marker latitude={props.lat} longitude={props.long} offsetLeft={-20} offsetTop={-10}>
        <div><img alt="" src={MapMarker}/></div>
            </Marker>
    </ReactMapGL>
    
  );
}

export default Map;