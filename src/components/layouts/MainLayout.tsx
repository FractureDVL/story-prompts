import React from "react"
import { SidebarInset, SidebarProvider } from "@/components/ui/sidebar"
import AppSidebar from "@/components/organisms/app-sidebar"
import AppHeader from "@/components/organisms/app-header";

interface MainLayoutProps {
    children: React.ReactNode
}

function MainLayout({ children }: MainLayoutProps) {
    return (
        <SidebarProvider>
            <AppSidebar />
            <SidebarInset>
                <AppHeader/>
                <div className="flex flex-1 flex-col gap-4 p-4 pt-0">
                    <div className="h-full rounded-xl bg-accent">
                        {children}
                    </div>
                </div>
            </SidebarInset>
        </SidebarProvider>
    )
}

export default MainLayout;
