"use client"

import { useState } from "react"
import { Check, Copy } from "lucide-react"
import { cn } from "@/lib/utils"

interface CodeBlockProps {
    language: string
    code: string
    filename?: string
}

export function CodeBlock({ language, code, filename }: CodeBlockProps) {
    const [copied, setCopied] = useState(false)

    const copyToClipboard = async () => {
        await navigator.clipboard.writeText(code)
        setCopied(true)
        setTimeout(() => setCopied(false), 2000)
    }

    return (
        <div className="relative rounded-md border bg-muted/50 overflow-hidden">
            <div className="flex items-center justify-between px-3 sm:px-4 py-2 bg-muted/70 border-b">
                <div className="flex items-center gap-2 overflow-hidden">
                    <span className="text-xs font-mono text-muted-foreground whitespace-nowrap">{language}</span>
                    {filename && (
                        <>
                            <span className="text-xs text-muted-foreground hidden xs:inline">•</span>
                            <span className="text-xs font-medium truncate">{filename}</span>
                        </>
                    )}
                </div>
                <button
                    onClick={copyToClipboard}
                    className="h-7 w-7 flex items-center justify-center rounded-md hover:bg-muted transition-colors shrink-0 ml-2"
                    aria-label="Copy code"
                >
                    {copied ? <Check className="h-4 w-4" /> : <Copy className="h-4 w-4" />}
                </button>
            </div>
            <div className="overflow-x-auto">
        <pre className={cn("p-3 sm:p-4", `language-${language}`)}>
          <code>{code}</code>
        </pre>
            </div>
        </div>
    )
}
