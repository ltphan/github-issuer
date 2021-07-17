import { ChangeEvent, FormEvent, FunctionComponent, useState } from "react"
import { RouteComponentProps } from "react-router-dom"
import { fetchData, urlBuilder } from "../data"
import { strings } from "../localization/strings"

interface Props extends RouteComponentProps {
}

const Search: FunctionComponent<Props> = ({ history }) => {
    const [loading, setLoading] = useState(false)
    const [value, setValue] = useState("")
    const [error, setError] = useState(false)

    const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
        setValue(event.target.value)
    }

    const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault()
        const url = urlBuilder(value)
        setLoading(true)
        try {
            const issues = await fetchData(url)
            setLoading(false)
            setError(false)
            history.push('/issues', {state: { issues, value }})
        } catch (e) {
            setError(true)
            throw new Error("Error fetching issues and pull requests from Github API")
        }
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input type="text" value={value} onChange={handleChange} />
                <input type="submit" value="Submit" />
            </form>
            {loading ? <h1>{strings.loading}</h1> : null}
            {error ? <h1>{strings.error}</h1> : null}
        </div>
    )
}

export default Search