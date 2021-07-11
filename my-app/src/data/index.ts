export function urlBuilder(url: string) {
    const stringArr = url.split('/')
    const org = stringArr[3]
    const repo = stringArr[4]
    const queryParam = org.concat('/', repo)
    const githubUrl = `https://api.github.com/search/issues?q=repo:${queryParam} is:issue is:pr`
    return githubUrl 
}

export async function fetchData(githubUrl: string) {
  try {
    const response = await fetch(githubUrl)
    const data = response.json()
    console.log("data", data)
    return data
  } catch (e) {
    throw new Error("Error fetching data from Github API")
  }
} 