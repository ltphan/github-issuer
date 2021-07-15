import { FunctionComponent } from "react";

interface Props {
    issues: Array<string>
    url: string
}

const Issues: FunctionComponent<Props> = (props) => {
    const { url } = props

    return ( 
        <div>
            <h1>"Github Issue Viewer"</h1>
            <h1>{url}</h1>
        </div>
    )
}

export default Issues