import React, { ChangeEvent, FunctionComponent, useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

import Header from "../components/Header/Header";
import IssuesList from "../components/List/IssuesList";
import { strings } from "../localization/strings";
import { State, Type } from "../types/types";

const Issues: FunctionComponent = () => {
    const [onScreenContent, setOnScreenContent] = useState<Array<any> | []>([]);
    const [text, setText] = useState("")
    const [issues, setIssues] = useState<Array<any> | []>([])
    const [prs, setPrs] = useState<Array<any> | []>([])
    const location  = useLocation<{ state: State }>()
    const { state } = location
        
    useEffect(() => {
        setOnScreenContent(state.state.issues);
    },[])

    useEffect(() => {
        setIssues(state.state.issues)
        setPrs(state.state.prs)
    }, [text])

    const onFilter = (type: string) => {
        if(type === Type.Issues){
            setOnScreenContent(issues);
        } else if(type === Type.Open){
            setOnScreenContent(issues.filter(issue => issue.state === "open"));
        }
        else if(type === Type.Closed){
            setOnScreenContent(issues.filter(issue => issue.state === "closed"));
        }
         else {
            setOnScreenContent(prs);
        }
    }

    const showFilteredList = (event: ChangeEvent<HTMLInputElement>) => {
        setText(event.target.value)
        const newResults = issues.filter(({ title })=> {
            if (title.toLowerCase().includes(text.toLowerCase())) {
                return title
            }
        })
        setOnScreenContent(newResults)
    }


    return ( 
        <div>
            <Header url={state.state.value} />
          <div>
            <button onClick={() => onFilter(Type.Issues)}>{strings.allIssues}</button>
            <button onClick={() => onFilter(Type.Open)}>{strings.openIssues}</button>
            <button onClick={() => onFilter(Type.Closed)}>{strings.closedIssues}</button>
            <button onClick={() => onFilter(Type.PR)}>{strings.pullRequests}</button>
            <form>
                <input type="text" value={text} onChange={showFilteredList}/>
            </form>
          <div className="list">
                {onScreenContent.length !== 0 ? <IssuesList issues={onScreenContent}/> : 
                <h1>{strings.noIssuesOrPullRequests}</h1>}
            </div>
            </div> 
        </div>
    )
}

export default Issues