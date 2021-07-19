import React, { FunctionComponent } from "react"

import { strings } from "../../localization/strings"
import '../Item/IssueItem.css'

enum State {
    Closed = "closed",
    PullRequest = "pr"
}

interface Props {
    title: string
    body: string
    state: State
}

const IssueItem: FunctionComponent<Props> = (props) => {
    const { title, body, state } = props
    console.log("state", state)

    return (
        <div className='item'>
            <h1>{title}</h1>
            {state === State.Closed && <img src="issue-closed.svg" />}
            {state === State.PullRequest && <img src="pull-request.svg" /> }
            <body>{body ? body : 
                <span className='emptyDescription'>{strings.noDescpritionProvided} </span>}
            </body>
        </div>
    )
}

export default IssueItem