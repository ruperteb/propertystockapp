import React, { useState, useEffect } from 'react';
import SignIn from "./components/SignIn/SignIn";
import MainList from "./components/MainList/MainList";
import Navigation from "./components/Navigation/Navigation";
import Logo from "./components/Logo/Logo";
import AgencyList from "./components/AgencyList/AgencyList";
import './App.css';


function App() {


const [route, setRoute] = useState("signin");
const [isSignedIn, setisSignedIn] = useState(false);



console.log (route);
console.log (isSignedIn);

const onRouteChange = (route) => {
  if (route === "mainlist") {
    setRoute("mainlist")
    setisSignedIn({isSignedIn: true})
  } else if (route === "signin") {
    setRoute("signin")
    setisSignedIn({isSignedIn: false})  
} else if (route === "agencylist") {
  setRoute("agencylist") 
}
}

var mainDisplay;
if (route === "mainlist") {
mainDisplay = <MainList />
} else if (route === "signin") {
  mainDisplay = <SignIn onRouteChange={onRouteChange}/>
} else if (route === "agencylist") {
  mainDisplay = <AgencyList/>
}

  return (
    <div className="App">
      <div className="NavBar" >
        <div className="pt3"> <Logo/> </div>
        <div></div>
        <div className=""> <Navigation isSignedIn={isSignedIn} onRouteChange={onRouteChange}/> </div>
     </div>
     <div>
     {mainDisplay}
        </div>
    </div>
  );
}

export default App;
