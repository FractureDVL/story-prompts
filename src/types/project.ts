export interface Project {
    id: string
    name: string
    repo: string
    stages: Stage[]
}

export interface Stage {
    id: string
    name: string
}

export interface Prompt {
    id: string
    title: string
    content: string
    model: string
    commitId: string
    contributor: {
        name: string
        avatar: string
    }
    responses: Response[]
    timestamp: string
}

export interface Response {
    id: string
    content: string
    code?: {
        language: string
        content: string
    }[]
}
