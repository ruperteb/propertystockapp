import React from "react";
import Button from 'react-bootstrap/Button';
import "./Navigation.css"

const Navigation = ({onRouteChange, isSignedIn}) => {

if (isSignedIn) {
    return (

        <div className="navigation">
        
<nav style={{display: "flex"}}>
<Button className="ma3" variant="primary" onClick={()=>onRouteChange('mainlist')}>
        Property List
      </Button>  
       
        <Button className="ma3" variant="primary" onClick={()=>onRouteChange('agencylist')}>
        Agency List
      </Button>  
        

       
        <Button  className="ma3" variant="primary" onClick={()=>onRouteChange('signin')}>
        Sign Out
      </Button>  
        </nav>

        </div>

       
    )
} else if (isSignedIn === false)  {
    return (
    <nav style={{display: "flex", justifyContent: "flex-end"}}>
           
            <p>Test</p>
        </nav>
    )
        }

    


}

export default Navigation;