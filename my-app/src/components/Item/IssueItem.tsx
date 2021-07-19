import React, { FunctionComponent } from "react"

import { strings } from "../../localization/strings"
import "../Item/IssueItem.css"

enum State {
    Closed = "closed",
    PR = "pr"
}

interface Props {
    title: string
    body: string
    state: State
}

const IssueItem: FunctionComponent<Props> = (props) => {
    const { title, body, state } = props

    return (
        <div>
            <h1>{title}</h1>
            {state === State.Closed && <div className="close" >&#10540;</div>}
            {state === State.PR && <div className="close">&#9732;</div>}
            <div>{body ? body : 
                <span className='emptyDescription'>{strings.noDescpritionProvided} </span>}
            </div>
        </div>
    )
}

export default IssueItem