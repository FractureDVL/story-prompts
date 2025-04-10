import {useEffect, useState} from "react"
import {ChevronDown, Code} from "lucide-react"
import {
    Sidebar,
    SidebarContent,
    SidebarHeader,
    SidebarMenu,
    SidebarMenuButton,
    SidebarMenuItem,
    SidebarRail,
} from "@/components/ui/sidebar"
import {fetchProjects} from "@/lib/api"
import {NavMain} from "@/components/molecules/nav-main";
import {Project} from "@/types/project";


export default function AppSidebar({...props}) {
    const [projects, setProjects] = useState<Project[]>([])
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        const loadProjects = async () => {
            try {
                const projectsData = await fetchProjects()
                setProjects(projectsData)
            } catch (error) {
                console.error("Failed to load projects:", error)
            } finally {
                setLoading(false)
            }
        }
        loadProjects()
    }, [])

    return (
        <Sidebar collapsible="offcanvas" {...props}>
            <SidebarHeader>
                <SidebarMenu>
                    <SidebarMenuItem>
                        <SidebarMenuButton asChild className="data-[slot=sidebar-menu-button]:!p-1.5">
                            <a href="#">
                                <Code className="h-6 w-6"/>
                                <span className="text-base font-semibold">Prompt History</span>
                            </a>
                        </SidebarMenuButton>
                    </SidebarMenuItem>
                </SidebarMenu>
            </SidebarHeader>
            <SidebarContent>
                <NavMain/>
            </SidebarContent>
            <SidebarRail
                className="after:bg-primary-foreground hover:after:bg-primary hover:bg-primary/10 group-data-[collapsible=offcanvas]:hover:bg-primary/10">
                <div className="flex h-full w-full items-center justify-center">
                    <ChevronDown className="h-4 w-4 rotate-90 group-data-[state=collapsed]:rotate-[270deg]"/>
                </div>
            </SidebarRail>
        </Sidebar>
    )
}
