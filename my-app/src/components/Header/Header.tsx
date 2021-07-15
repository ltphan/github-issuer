import React, { FunctionComponent } from "react"

interface Props {
    url: string
}

const Header: FunctionComponent<Props> = (props) => {
    const { url } = props

    return (
        <div>
            <h1>Github Issue Viewer</h1>
            <h1>{url}</h1>
        </div>
    )
}

export default Header