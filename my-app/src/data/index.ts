export function urlBuilder(url: string) {
    const stringArr = url.split('/')
    const org = stringArr[3]
    const repo = stringArr[4]
    const orgRepo = org.concat('/', repo)
    const queryStringPR = 'q=' + encodeURIComponent(`repo:${orgRepo} is:pr`)
    const queryStringIssue = 'q=' + encodeURIComponent(`repo:${orgRepo} is:issue`)
    const prUrl = `https://api.github.com/search/issues?${queryStringPR}`
    const issueUrl = `https://api.github.com/search/issues?${queryStringIssue}`
    return {
      prUrl, issueUrl
    }
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