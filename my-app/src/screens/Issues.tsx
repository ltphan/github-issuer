import React, { FunctionComponent } from "react";
import { useLocation } from "react-router-dom";
import FilterSelection from "../components/Button/FilterSelection";

import Header from "../components/Header/Header";
import IssuesList from "../components/List/IssuesList";

interface State {
    issues: Array<any>
    value: string
}

const Issues: FunctionComponent = () => {
    const location  = useLocation<{ state: State}>()
    const { state } = location
        
    return ( 
        <div className="container">
            <Header url={state.state.value} />
            <FilterSelection onFilter={() => {}}/>
            <div className="list">
                <IssuesList issues={state.state.issues}/>
            </div>
        </div>
    )
}

export default Issues