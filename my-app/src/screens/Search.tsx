import { ChangeEvent, FormEvent, FunctionComponent, useState } from "react"
import { Link, RouteComponentProps } from "react-router-dom"
import { fetchData, urlBuilder } from "../data"

interface Props extends RouteComponentProps {
}

const Search: FunctionComponent<Props> = ({ history }) => {
    const [value, setValue] = useState("")

    const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
        setValue(event.target.value)
    }

    const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault()
        const url = urlBuilder(value)
        const issues = await fetchData(url)
        history.push('/issues', {state: { issues, value }})
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input type="text" value={value} onChange={handleChange} />
                <input type="submit" value="Submit" />
            </form>
        </div>
    )
}

export default Search