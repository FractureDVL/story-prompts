import { Link } from "react-router";
import {fetchProjects, Project} from "@/lib/api"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { GitBranch, GitCommit } from "lucide-react"
import {useEffect, useState} from "react";

export default function Home() {
    const [projectsLoaded, setProjectsLoaded] = useState<Project [] >();

    const  handleProjects = async ()=> {
         const projects= await fetchProjects()
        setProjectsLoaded(projects);
    };

    return (
        <div className="container mx-auto p-4 md:p-6">
            <h1 className="text-3xl font-bold mb-2">Prompt History</h1>
            <p className="text-muted-foreground mb-8">Explore prompt history across projects and stages</p>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
                {projectsLoaded?.map((project) => (
                    <Card key={project.id} className="overflow-hidden">
                        <CardHeader className="bg-muted/30">
                            <CardTitle>{project.name}</CardTitle>
                            <CardDescription className="flex items-center gap-1.5">
                                <GitBranch className="h-3.5 w-3.5" />
                                <span>{project.stages.length} stages</span>
                            </CardDescription>
                        </CardHeader>
                        <CardContent className="pt-6">
                            <div className="space-y-2">
                                <h3 className="text-sm font-medium">Stages:</h3>
                                <ul className="space-y-1">
                                    {project.stages.slice(0, 3).map((stage) => (
                                        <li key={stage.id} className="flex items-center gap-2 text-sm">
                                            <GitCommit className="h-3.5 w-3.5 text-muted-foreground" />
                                            <span>{stage.name}</span>
                                        </li>
                                    ))}
                                    {project.stages.length > 3 && (
                                        <li className="text-sm text-muted-foreground pl-5">+{project.stages.length - 3} more stages</li>
                                    )}
                                </ul>
                            </div>
                        </CardContent>
                        <CardFooter className="border-t bg-muted/20 px-6 py-4">
                            <Button asChild className="w-full">
                                <Link to={`/${project.id}/${project.stages[0].id}`}>View Project</Link>
                            </Button>
                        </CardFooter>
                    </Card>
                ))}
            </div>

            {projectsLoaded?.length === 0 && (
                <div className="flex items-center justify-center h-[60vh]">
                    <div className="text-center text-muted-foreground">
                        <p className="mb-2">No projects available</p>
                        <p className="text-sm">Add projects to get started</p>
                    </div>
                </div>
            )}
        </div>
    )
}
