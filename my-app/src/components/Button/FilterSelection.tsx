import React, { FunctionComponent } from "react"
import { strings } from "../../localization/strings"

interface Props {
    onFilter: () => void
}

const FilterSelection: FunctionComponent<Props> = (props) => {
    const { onFilter } = props

    return (
        <div>
            <button onClick={onFilter}>{strings.allIssues}</button>
            <button onClick={onFilter}>{strings.openIssues}</button>
            <button onClick={onFilter}>{strings.closedIssues}</button>
            <button onClick={onFilter}>{strings.pullRequests}</button>
        </div>
    )
}

export default FilterSelection