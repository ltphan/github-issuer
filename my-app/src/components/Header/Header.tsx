import React, { FunctionComponent } from "react"

import '../Header/Header.css'
import { strings } from "../../localization/strings"

interface Props {
    url: string
}

const Header: FunctionComponent<Props> = (props) => {
    const { url } = props

    return (
        <div className='header'>    
            <h1>{strings.githubIssueViewer}</h1>
            <h1>{url}</h1>
        </div>
    )
}

export default Header