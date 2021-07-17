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
    const [filteredIssues, setFilteredIssues] = useState<Array<any> | []>([])
    const location  = useLocation<{ state: State}>()
    const { state } = location
        
    useEffect(() => {
        setFilteredIssues(state.state.issues)
    }, [])

    const onFilter = (issueState: string) => {
        let issues = state.state.issues
        
        if (issueState === "all") {
            setFilteredIssues(issues)
            return
        }

        const filteredResults = issues.filter((issue) => {
            return issue.state === issueState
        })
        setFilteredIssues(filteredResults)
    }

    return ( 
        <div className="container">
            <Header url={state.state.value} />
            <button onClick={() => onFilter(strings.all)}>{strings.allIssues}</button>
            <button onClick={() => onFilter(strings.open)}>{strings.openIssues}</button>
            <button onClick={() => onFilter(strings.closed)}>{strings.closedIssues}</button>
            <div className="list">
                <IssuesList issues={filteredIssues}/>
            </div>
        </div>
    )
}

export default Issues