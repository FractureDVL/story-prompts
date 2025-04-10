import React from "react"
import "./globals.css"
import { BrowserRouter } from "react-router-dom"
import { ThemeProvider } from "@/components/providers/theme-provider"
import AppRouter from "@/routes/AppRouter"
import MainLayout from "@/components/layouts/MainLayout";

function App() {
    return (
        <BrowserRouter>
            <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
                <MainLayout>
                    <AppRouter />
                </MainLayout>
            </ThemeProvider>
        </BrowserRouter>
    )
}

export default App