import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@radix-ui/react-collapsible"
import { ChevronDown } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { MessageSquare, Code } from "lucide-react"
import ContributorInfo from "@/components/organisms/app-prompt-contribuitor";
import {Separator} from "@/components/ui/separator";
import {Prompt} from "@/types/project";
import PromptResponses from "@/components/organisms/app-prompt-responses";

interface Props {
    prompt: Prompt
    openPromptId: string | null
    togglePrompt: (id: string) => void
}

function PromptDetails ({ prompt, openPromptId, togglePrompt }: Props) {
    return (
        <Collapsible
            open={openPromptId === prompt.id}
            onOpenChange={() => togglePrompt(prompt.id)}
            className="border rounded-lg overflow-hidden"
        >
            <CollapsibleTrigger className="flex flex-col sm:flex-row sm:items-center justify-between w-full p-4 bg-muted/30 hover:bg-muted/50 transition-colors">
                <div className="flex items-center gap-3 mb-2 sm:mb-0">
                    <div className="flex items-center justify-center h-8 w-8 rounded-full bg-primary/10 shrink-0">
                        <MessageSquare className="h-4 w-4 text-primary" />
                    </div>
                    <div className="text-left min-w-0">
                        <h3 className="font-medium truncate">{prompt.title}</h3>
                        <div className="flex items-center gap-2 text-xs text-muted-foreground mt-1 flex-wrap">
                            <span>{new Date(prompt.timestamp).toLocaleDateString()}</span>
                            <span className="hidden xs:inline">•</span>
                            <div className="flex items-center gap-1">
                                <Code className="h-3 w-3" />
                                <span>{prompt.commitId.substring(0, 7)}</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="flex items-center gap-3 mt-2 sm:mt-0">
                    <Badge variant="outline" className="whitespace-nowrap">
                        {prompt.model}
                    </Badge>
                    <ChevronDown className="h-4 w-4 transition-transform data-[state=open]:rotate-180 shrink-0" />
                </div>
            </CollapsibleTrigger>
            <CollapsibleContent>
                <div className="p-3 sm:p-4 border-t">
                    <div className="mb-4">
                        <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-2 gap-2">
                            <h4 className="text-sm font-medium">Prompt</h4>
                            {prompt.contributor && <ContributorInfo contributor={prompt.contributor} />}
                        </div>
                        <div className="p-3 bg-muted/30 rounded-md whitespace-pre-wrap overflow-x-auto">
                            {prompt.content}
                        </div>
                    </div>

                    <Separator className="my-4" />

                    <PromptResponses responses={prompt.responses} />
                </div>
            </CollapsibleContent>
        </Collapsible>
);

}


export default PromptDetails;