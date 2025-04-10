// types/nav.ts
import { LucideIcon } from "lucide-react";

export interface NavSubItem {
    title: string;
    url: string;
    icon?: LucideIcon;
}

export interface NavItem {
    id: string;
    title: string;
    url: string;
    icon?: LucideIcon;
    isActive?: boolean;
    items?: NavSubItem[];
}

export interface ItemNav {
    name: string
    url: string
    icon: LucideIcon
}

export interface NavProjectsProps {
    items: ItemNav[]
}
