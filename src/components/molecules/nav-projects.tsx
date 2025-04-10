import {LucideIcon} from "lucide-react"

interface ItemNav {
    name: string
    url: string
    icon: LucideIcon
}

interface NavProjectsProps {
    items: ItemNav[]
}

function NavProjects({items}: NavProjectsProps) {
    return (
        <nav className="flex flex-col gap-2">
            {items.map((item) => (
                <a
                    key={item.name}
                    href={item.url}
                    className="flex items-center gap-2 p-2 rounded hover:bg-gray-100 transition-colors"
                >
                    <item.icon className="w-5 h-5"/>
                    <span>{item.name}</span>
                </a>
            ))}
        </nav>
    )
}

export default NavProjects;
