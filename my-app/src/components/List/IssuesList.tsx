import React, { FunctionComponent } from "react"
import IssueItem from "../Item/IssueItem"

interface Props {
    issues: Array<any>
}

const IssuesList: FunctionComponent<Props> = (props) => {
    const { issues } = props
    const issueItems = issues.map((issue) => {
       return (<li key={issue.id.toString()}>
            <IssueItem title={issue.title} body={issue.body}/>
        </li>)
    })

    return (
        <ul>
            {issueItems}
        </ul>
    )
}

export default IssuesList