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
import { fetchProjects } from "@/lib/api"
import { NavMain } from "@/components/molecules/nav-main";
import { Project } from "@/types/project";

function AppSidebar({...props}) {
    const titleSidebar = "Prompt History"
    const [_projects, setProjects] = useState<Project[]>([])
    const [_loading, setLoading] = useState(true)

    useEffect(() => {
        const loadProjects = async () => {
            try {
                const projectsData = await fetchProjects();
                setProjects(projectsData);
            } catch (error) {
                console.error("Failed to load projects:", error);
            } finally {
                setLoading(false);
            }
        };

        loadProjects();
    }, []);

    return (
        <Sidebar collapsible="offcanvas" {...props}>
            <SidebarHeader>
                <SidebarMenu>
                    <SidebarMenuItem>
                        <SidebarMenuButton size="lg" className="gap-4">
                            <div className="flex aspect-square size-8 items-center justify-center rounded-lg bg-sidebar-primary text-sidebar-primary-foreground">
                                <Code className="size-4"/>
                            </div>
                            <div className="grid flex-1 text-left font-semibold">
                                <span className="truncate font-semibold"/>
                                <span className="truncate text-xl">{titleSidebar}</span>
                            </div>
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

export default AppSidebar;