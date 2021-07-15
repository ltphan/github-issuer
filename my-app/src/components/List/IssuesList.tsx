import React, { FunctionComponent } from "react"

interface Props {
    issues: Array<any>
}

const IssuesList: FunctionComponent<Props> = (props) => {
    const { issues } = props
    const listItems = issues.map((issue) => {
       return (<li key={issue.id.toString()}>
            {issue.title}
        </li>)
    })

    return (
        <ul>
            {listItems}
        </ul>
    )
}

export default IssuesList