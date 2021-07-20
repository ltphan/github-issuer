# QnA

### Planning

> What do you think are the greatest areas of risk in completing the project?

- I have experience in React Native for mobile. The skills will be transferable from React Native to React, but the difference will be determining which element tags to use (<View> for RN vs <div> for React), CSS, and navigation. 

> What changes/additions would you make to the design?

- After reading and playing around with the Github API to see what data is returned from the search query of issues and pull requests, it seems as though there is no way to separate out an issue and pull request from the data returned. It it redundant to have the "Pull Requests" button as it will return us the same results as pressing the "All Issues" button. Another thing that we could do is to make a call to the REST API call to the pull endpoint [https://docs.github.com/en/rest/reference/pulls]. 

> List a two or three features that you would consider implementing in the future that would add significant value to the project.

- I would want to implement the backend via GraphQL since I want to lessen the amount of requests made instead of doing it through REST API.

- Using Context API which I don't have experience in and am currently learning as a way to manage and update state based on the issues or pull requests. 

- Not a feature per se, but I would definitely add tests to the project.

---

### Looking Back

> Describe the major design/build decisions and why you made them.

- I want to make sure my code is readable to allow developers to easily follow the flow of the application. I organized and compartmentalized my code based on screens, components, data, and localization.

> How long did the assignment take (in hours)? Please break down your answer into buckets (e.g. "Learning Framework", "Coding", "Debugging").

- 10 hours
Learning Framework (3.5 hours): Reading about React Router DOM (no experience), understanding how the Github API for the search endpoint works [https://docs.github.com/en/rest/reference/search], basic CSS styling since it is different from React Native mobile styling.

Coding (5 hours): Implementing code structure and architecture of the React application.

Debugging (1.5 hour): Making sure the data getting returned is correct, basic box model of CSS/HTML for web development.

> If you could go back and give yourself advice at the beginning of the project, what would it be?

- Don't be overwhelmed with the challenge tasks. Break them into smaller tasks if needed. Draw a flowchat on how the screens and data interact with one another.

> Did you learn anything new?

- I learned web navigation, basic CSS styling and being able to determine which element tags to use for web development. Technically, a lot of the assignment that relates to web was new so I learned a lot.

> Do you feel that this assignment allowed you to showcase your abilities effectively?

- Everything that involved React, logic, and organization of project showcases my abilities effectively. CSS/Styling is different in web versus mobile development so that is a something I am continually working on to improving.

> Are there any significant web development-related skills that you possess that were not demonstrated in this exercise? If so, what are they?

- Everything in this assignment of doing web development is new to me.

> Comments
 
- I was not able to render the icon properly using the <img> tag and the relative path of the attribute of 'src' was not showing correctly. Instead, I took an icon from TopTal [https://www.toptal.com/designers/htmlarrows/symbols/] and used it as a substitute to show whether it is a closed issue or a pull request.

- Although the styling does not match exactly to the Figma mocks, I did the best of my abilities to add CSS styling to show my basics at least. However, this is something I am currently working on to learn more as I continue developing more web applications. 

- I added a basic loading and error state in the "Search" screen when the data request returned fails or the user is waiting for the data to return. In the "Issues" screen, I added a check to see if the issues lists returned is empty, if it is, that is when we display the text "No issues or pull requests".

- The Github REST API I used was the search endpoint [https://docs.github.com/en/rest/reference/search#search-issues-and-pull-requests]. However, after inspecting and seeing what data gets returned, there was no way to separate a Github PR and issue separately from each other, despite having two different requests based (using the query string param of "is:issue" and "is:pr"). That's why having the "Pull Requests" button is redundant. I would have to make another request to the Pull Request endpoint in the Github API to get the PRs separately from the issues.

- In the "Search" screen, since we are making two requests for the "handleSubmit" button, we could have one of the issue or pr requests fail. After reading on MDN, there is a function from the Promise class called all()[https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise/all] that will resolve when ALL input promises have been resolved. This might be a better design decision but again, discussing with the team about this would be good in determining what is the best solution.
