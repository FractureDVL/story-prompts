export interface PromptResponse  {
    id: string
    content: string
    code?: {
        language: string
        content: string
    }[]
}
