export function urlBuilder(url: string) {
    const stringArr = url.split('/')
    const org = stringArr[3]
    const repo = stringArr[4]
    const orgRepo = org.concat('/', repo)
    const queryString = 'q=' + encodeURIComponent(`repo:${orgRepo} is:issue is:pr`)
    const githubUrl = `https://api.github.com/search/issues?${queryString}`
    return githubUrl 
}

export async function fetchData(githubUrl: string) {
  try {
    const response = await fetch(githubUrl)
    const data = await response.json()
    return data.items
  } catch (e) {
    throw new Error("Error fetching data from Github API")
  }
} 