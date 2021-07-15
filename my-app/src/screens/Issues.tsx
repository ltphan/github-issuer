import React, { FunctionComponent } from "react";
import { useLocation } from "react-router-dom";
import IssuesList from "../components/List/IssuesList";


interface State {
    issues: Array<any>
    value: string
}

const Issues: FunctionComponent = () => {
    const location  = useLocation<{ state: State}>()
    const { state } = location
        
    return ( 
        <div>
            <div className="navBar">
                <h1>Issues list</h1>
                <h2>{state.state.value}</h2>
            </div>
            <div className="list">
                <IssuesList issues={state.state.issues}/>
            </div>

        </div>
    )
}

export default Issues