import React, { FunctionComponent, useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

import Header from "../components/Header/Header";
import IssuesList from "../components/List/IssuesList";

interface State {
    issues: Array<any>
    value: string
}

const Issues: FunctionComponent = () => {
    const [issues, setIssues] = useState<Array<any> | []>([])
    const location  = useLocation<{ state: State}>()
    const { state } = location
        
    useEffect(() => {
        setIssues(state.state.issues)
    },[issues])

    return ( 
        <div className="container">
            <Header url={state.state.value} />
            <div className="list">
                <IssuesList issues={state.state.issues}/>
            </div>
        </div>
    )
}

export default Issues