import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { fetchProjectData, fetchStagePrompts } from "@/lib/api"
import { Prompt } from "@/types/project";
import PromptDetails from "@/components/organisms/app-prompt-details";

function AppPromptViewer() {
    const { projectId, stageId } = useParams() as { projectId?: string; stageId?: string }
    const [openPromptId, setOpenPromptId] = useState<string | null>(null)
    const [project, setProject] = useState<any>(null)
    const [prompts, setPrompts] = useState<Prompt[]>([])

    useEffect(() => {
        if (!projectId || !stageId) return

        const loadData = async () => {
            const projectData = await fetchProjectData(projectId)
            const stagePrompts = await fetchStagePrompts(projectId, stageId)
            setProject(projectData)
            setPrompts(stagePrompts)
        }
        loadData()
    }, [projectId, stageId])

    const togglePrompt = (id: string) => {
        setOpenPromptId(openPromptId === id ? null : id)
    }

    if (prompts.length === 0) {
        return (
            <div className="flex items-center justify-center h-[60vh]">
                <div className="text-center text-muted-foreground">
                    <p className="mb-2">No prompts available</p>
                    <p className="text-sm">This stage doesn't have any prompts yet</p>
                </div>
            </div>
        )
    }

    return (
        <div className="container mx-auto w-full p-4 md:p-6 ">
            <h1 className="text-2xl md:text-3xl font-bold mb-4 md:mb-6">
                {project.name} - {stageId}
            </h1>
            <div className="space-y-6">
                {prompts.map((prompt) => (
                    <PromptDetails
                        key={prompt.id}
                        prompt={prompt}
                        openPromptId={openPromptId}
                        togglePrompt={togglePrompt}
                    />
                ))}
            </div>
        </div>
    )
}

export default AppPromptViewer;
