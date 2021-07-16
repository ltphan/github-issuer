import React, { FunctionComponent, useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

import Header from "../components/Header/Header";
import IssuesList from "../components/List/IssuesList";
import { strings } from "../localization/strings";

interface State {
    issues: Array<any>
    value: string
}

const Issues: FunctionComponent = () => {
    const [issues, setIssues] = useState<Array<any> | []>([])
    const [filteredIssues, setFilteredIssues] = useState<Array<any> | []>([])
    const location  = useLocation<{ state: State}>()
    const { state } = location
        
    useEffect(() => {
        setIssues(state.state.issues)
    }, [state.state.issues])

    const onFilter = (issues: Array<any>, issueState: string) => {
        const filteredIssues = issues.filter((issue) => {
            return issue.state === issueState
        })
        setFilteredIssues(filteredIssues)
    }

    return ( 
        <div className="container">
            <Header url={state.state.value} />
            <button onClick={() => setFilteredIssues(issues)}>{strings.allIssues}</button>
            <button onClick={() => onFilter(issues, strings.open)}>{strings.openIssues}</button>
            <button onClick={() => onFilter(issues, strings.closed)}>{strings.closedIssues}</button>
            <div className="list">
                <IssuesList issues={filteredIssues}/>
            </div>
        </div>
    )
}

export default Issues