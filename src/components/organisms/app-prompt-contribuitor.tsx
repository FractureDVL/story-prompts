import React from "react"

export function ContributorInfo ({ contributor }: { contributor: { name: string; avatar: string } }){

    return (
        <div className="flex items-center gap-2">
            <span className="text-xs text-muted-foreground">Contributor:</span>
            <div className="flex items-center gap-1.5">
                <div className="h-5 w-5 rounded-full overflow-hidden bg-muted">
                    <img
                        src={contributor.avatar || "/placeholder.svg"}
                        alt={contributor.name}
                        className="h-full w-full object-cover"
                    />
                </div>
                <span className="text-xs font-medium">{contributor.name}</span>
            </div>
        </div>
    )
}


export default ContributorInfo;