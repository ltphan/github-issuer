import React, { FunctionComponent } from "react";
import { useLocation } from "react-router-dom";


const Issues: FunctionComponent = () => {
    const { state } = useLocation()
    
    return ( 
        <div>
            <h1>Issues list</h1>
        </div>
    )
}

export default Issues