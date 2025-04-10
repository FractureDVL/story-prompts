"use client"

// This file contains mock API functions that would normally fetch data from GitHub

type Project = {
    id: string
    name: string
    repo: string
    stages: Stage[]
}

type Stage = {
    id: string
    name: string
}

type Prompt = {
    id: string
    title: string
    content: string
    model: string
    commitId: string
    contributor: {
        name: string
        avatar: string
    }
    responses: Response[]
    timestamp: string
}

type Response = {
    id: string
    content: string
    code?: {
        language: string
        content: string
    }[]
}

// Mock data
const mockProjects = [
    {
        id: "jpc",
        name: "JPC",
        repo: "https://raw.githubusercontent.com/user/project1/main/prompts",
        stages: [
            { id: "creacion-ui", name: "Creación UI" },
            { id: "landing-page", name: "Landing Page" },
        ],
    },
    {
        id: "datik",
        name: "Datik",
        repo: "https://raw.githubusercontent.com/user/project2/main/prompts",
        stages: [
            { id: "login", name: "Login" },
            { id: "dashboard", name: "Dashboard" },
            { id: "api-integration", name: "API Integration" },
        ],
    },
]

const mockPrompts = {
    jpc: {
        "creacion-ui": [
            {
                id: "prompt-1",
                title: "Diseño inicial de UI",
                content:
                    "Necesito crear una interfaz de usuario para la aplicación JPC. Debe tener un diseño moderno con colores azul y blanco...",
                model: "ollama3.2",
                commitId: "d591f8b",
                contributor: {
                    name: "María García",
                    avatar: "https://i.pravatar.cc/150?u=maria.garcia",
                },
                timestamp: "2023-10-15T14:30:00Z",
                responses: [
                    {
                        id: "response-1",
                        content: "Aquí tienes un diseño para la interfaz de usuario:",
                        code: [
                            {
                                language: "tsx",
                                content: `import React from 'react';
import { Button } from './components/Button';

export function App() {
  return (
    <div className="bg-blue-50 min-h-screen">
      <header className="bg-blue-600 text-white p-4">
        <h1 className="text-2xl font-bold">JPC Application</h1>
      </header>
      <main className="container mx-auto p-4">
        <section className="bg-white rounded-lg shadow p-6 mb-6">
          <h2 className="text-xl font-semibold mb-4">Dashboard</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {/* Content goes here */}
          </div>
        </section>
        <Button variant="primary">Continuar</Button>
      </main>
    </div>
  );
}`,
                            },
                        ],
                    },
                ],
            },
            {
                id: "prompt-2",
                title: "Componente de navegación",
                content:
                    "Necesito un componente de navegación para la aplicación JPC que incluya enlaces a Dashboard, Perfil y Configuración.",
                model: "ollama3.2",
                commitId: "a45b78c",
                contributor: {
                    name: "Carlos Rodríguez",
                    avatar: "https://i.pravatar.cc/150?u=carlos.rodriguez",
                },
                timestamp: "2023-10-16T10:15:00Z",
                responses: [
                    {
                        id: "response-2",
                        content: "He creado un componente de navegación con los enlaces solicitados:",
                        code: [
                            {
                                language: "tsx",
                                content: `import React from 'react';
import { Home, User, Settings } from 'lucide-react';
import Link from 'next/link';

export function Navigation() {
  return (
    <nav className="bg-blue-700 text-white">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <span className="font-bold text-xl">JPC</span>
          </div>
          <div className="flex space-x-4">
            <Link href="/dashboard" className="flex items-center px-3 py-2 rounded hover:bg-blue-600">
              <Home className="mr-2 h-5 w-5" />
              <span>Dashboard</span>
            </Link>
            <Link href="/profile" className="flex items-center px-3 py-2 rounded hover:bg-blue-600">
              <User className="mr-2 h-5 w-5" />
              <span>Perfil</span>
            </Link>
            <Link href="/settings" className="flex items-center px-3 py-2 rounded hover:bg-blue-600">
              <Settings className="mr-2 h-5 w-5" />
              <span>Configuración</span>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}`,
                            },
                        ],
                    },
                ],
            },
        ],
    },
    datik: {
        login: [
            {
                id: "prompt-3",
                title: "Formulario de login",
                content:
                    "Necesito un formulario de login para la aplicación Datik con validación de campos y manejo de errores.",
                model: "gpt-4",
                commitId: "b67c9d2",
                contributor: {
                    name: "Ana Martínez",
                    avatar: "https://i.pravatar.cc/150?u=ana.martinez",
                },
                timestamp: "2023-11-05T09:45:00Z",
                responses: [
                    {
                        id: "response-3",
                        content: "Aquí tienes un formulario de login con validación y manejo de errores:",
                        code: [
                            {
                                language: "tsx",
                                content: `import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Alert, AlertDescription } from '@/components/ui/alert';

const loginSchema = z.object({
  email: z.string().email('Email inválido'),
  password: z.string().min(8, 'La contraseña debe tener al menos 8 caracteres'),
});

type LoginFormValues = z.infer<typeof loginSchema>;

export function LoginForm() {
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginFormValues>({
    resolver: zodResolver(loginSchema),
  });
  
  const onSubmit = async (data: LoginFormValues) => {
    setLoading(true);
    setError(null);
    
    try {
      // Aquí iría la llamada a la API
      console.log('Login data:', data);
      // Simular un retraso
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      // Redireccionar al dashboard
      window.location.href = '/dashboard';
    } catch (err) {
      setError('Credenciales incorrectas. Por favor, inténtalo de nuevo.');
    } finally {
      setLoading(false);
    }
  };
  
  return (
    <div className="w-full max-w-md mx-auto p-6 bg-white rounded-lg shadow-md">
      <h2 className="text-2xl font-bold mb-6 text-center">Iniciar sesión</h2>
      
      {error && (
        <Alert variant="destructive" className="mb-4">
          <AlertDescription>{error}</AlertDescription>
        </Alert>
      )}
      
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        <div className="space-y-2">
          <label htmlFor="email" className="text-sm font-medium">
            Email
          </label>
          <Input
            id="email"
            type="email"
            {...register('email')}
            placeholder="tu@email.com"
            className={errors.email ? 'border-red-500' : ''}
          />
          {errors.email && (
            <p className="text-sm text-red-500">{errors.email.message}</p>
          )}
        </div>
        
        <div className="space-y-2">
          <label htmlFor="password" className="text-sm font-medium">
            Contraseña
          </label>
          <Input
            id="password"
            type="password"
            {...register('password')}
            placeholder="********"
            className={errors.password ? 'border-red-500' : ''}
          />
          {errors.password && (
            <p className="text-sm text-red-500">{errors.password.message}</p>
          )}
        </div>
        
        <Button
          type="submit"
          className="w-full"
          disabled={loading}
        >
          {loading ? 'Iniciando sesión...' : 'Iniciar sesión'}
        </Button>
      </form>
      
      <div className="mt-4 text-center">
        <a href="/forgot-password" className="text-sm text-blue-600 hover:underline">
          ¿Olvidaste tu contraseña?
        </a>
      </div>
    </div>
  );
}`,
                            },
                        ],
                    },
                ],
            },
        ],
    },
}

// API functions
export async function fetchProjects(): Promise<Project[]> {
    // In a real app, this would fetch from the GitHub API
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(mockProjects)
        }, 500)
    })
}

export async function fetchProjectData(projectId: string): Promise<Project> {
    // In a real app, this would fetch from the GitHub API
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const project = mockProjects.find((p) => p.id === projectId)
            if (project) {
                resolve(project)
            } else {
                reject(new Error(`Project with ID ${projectId} not found`))
            }
        }, 300)
    })
}

export async function fetchStagePrompts(projectId: string, stageId: string): Promise<Prompt[]> {
    // In a real app, this would fetch from the GitHub API
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const projectPrompts = mockPrompts[projectId as keyof typeof mockPrompts]
            if (!projectPrompts) {
                reject(new Error(`Project with ID ${projectId} not found`))
                return
            }

            const stagePrompts = projectPrompts[stageId as keyof typeof projectPrompts]
            if (!stagePrompts) {
                reject(new Error(`Stage with ID ${stageId} not found in project ${projectId}`))
                return
            }

            resolve(stagePrompts)
        }, 500)
    })
}
