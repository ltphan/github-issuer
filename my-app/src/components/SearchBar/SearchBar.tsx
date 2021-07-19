import React, { FormEvent, FunctionComponent } from "react"

interface Props {
    onChange: (event: FormEvent<HTMLFormElement>) => Promise<void>
}

const SearchBar: FunctionComponent<Props> = (props) => {
    const { onChange } = props

    const BarStyling = {width:"20rem",background:"#F2F1F9", border:"solid", padding:"0.5rem"};

    return (
        <input type='search'
        style={BarStyling}
        className='search'
        onChange={() => onChange}
        />
    )
}

export default SearchBar