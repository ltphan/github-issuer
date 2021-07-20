import React, { FunctionComponent } from "react"

import { strings } from "../../localization/strings"
import { Type } from "../../types/types"
import "../Item/IssueItem.css"

interface Props {
    title: string
    body: string
    state: string
}

const IssueItem: FunctionComponent<Props> = (props) => {
    const { title, body, state } = props

    return (
        <div>
            <h1>{title}</h1>
            {state === Type.Closed && <div className="close" >&#10540;</div>}
            {state === Type.PR && <div className="close">&#9732;</div>}
            <div>{body ? body : 
                <span className='emptyDescription'>{strings.noDescpritionProvided} </span>}
            </div>
        </div>
    )
}

export default IssueItem