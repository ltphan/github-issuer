import React, { FunctionComponent } from "react"

interface Props {
    title: string
    body: string
}

const IssueItem: FunctionComponent<Props> = (props) => {
    const { title, body } = props

    return (
        <div>
            <h1>{title}</h1>
            <h1>{body}</h1>
        </div>
    )
}

export default IssueItem