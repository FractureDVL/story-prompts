import React from "react"
import { Separator } from "@/components/ui/separator"
import { CodeBlock } from "@/components/code-block"
import { PromptResponse } from "@/types/prompts"


function PromptResponses ({ responses }: { responses: PromptResponse[] }){

    return (
        <div className="space-y-4">
            <h4 className="text-sm font-medium">Responses</h4>
            {responses.map((response, index) => (
                <div key={response.id} className="space-y-3">
                    {index > 0 && <Separator className="my-4" />}
                    <div className="whitespace-pre-wrap overflow-x-auto">{response.content}</div>

                    {response.code &&
                        response.code.map((codeBlock, idx) => (
                            <CodeBlock key={idx} language={codeBlock.language} code={codeBlock.content} />
                        ))}
                </div>
            ))}
        </div>
    );
}

export default PromptResponses;