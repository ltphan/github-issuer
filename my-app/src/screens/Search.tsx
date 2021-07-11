import { ChangeEvent, FormEvent, FunctionComponent, useState } from "react"
import { fetchData, urlBuilder } from "../data"

const Search: FunctionComponent = () => {
    const [value, setValue] = useState("")
    const [issues, setIssues] = useState([])

    const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
        setValue(event.target.value)
    }

    const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault()
        const url = urlBuilder(value)
        const issues = await fetchData(url)
        setIssues(issues)
    }

    return (
        <div>
        <form onSubmit={handleSubmit}>
            <label>
                Github View Issuer
            <input type="text" value={value} onChange={handleChange} />
            </label>
            <input type="submit" value="Submit" />
        </form>
        </div>
    )
}

export default Search