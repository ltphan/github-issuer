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
            <div>
                <h1>{strings.githubIssueViewer}</h1>
            </div>
            <div>
                <h1>{url}</h1>
            </div>
        </div>
    )
}

export default Header