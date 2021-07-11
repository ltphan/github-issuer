import { FunctionComponent } from "react"

const Search: FunctionComponent = () => {
    return (
        <div>
        <form onSubmit={() => {}}>
            <label>
                Github View Issuer
            <input type="text" value={"linh"} onChange={() => {}} />
            </label>
            <input type="submit" value="Submit" />
        </form>
        </div>
    )
}

export default Search