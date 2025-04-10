import { mockProjects } from "@/mocks/projects"
import { mockPrompts } from "@/mocks/prompts"
import { Project, Prompt } from "@/types/project";


export async function fetchProjects(): Promise<Project[]> {
    return new Promise((resolve) => resolve(mockProjects))
}

export async function fetchProjectData(projectId: string): Promise<Project> {
    return new Promise((resolve, reject) => {
        const project = mockProjects.find((p) => {
            console.log(p)
            return p.id === projectId
        })
        project ? resolve(project) : reject(new Error(`Project ${projectId} not found`))
    })
}

export async function fetchStagePrompts(projectId: string, stageId: string): Promise<Prompt[]> {
    return new Promise((resolve, reject) => {
        const projectPrompts = mockPrompts[projectId as keyof typeof mockPrompts]
        if (!projectPrompts) return reject(new Error(`Project ${projectId} not found`))

        const stagePrompts = projectPrompts[stageId as keyof typeof projectPrompts]
        if (!stagePrompts) return reject(new Error(`Stage ${stageId} not found in ${projectId}`))

        resolve(stagePrompts)
    })
}
