export interface State {
    issues: Array<any>
    value: string,
    prs: Array<any>
}

export enum Type {
    PR = "pr",
    Open = "open",
    Closed = "closed",
    Issues = "issues",
    All = "all"
}