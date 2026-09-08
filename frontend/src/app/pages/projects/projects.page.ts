import { Component } from "@angular/core";
import { FormsModule } from '@angular/forms';
import { InputGroupModule } from 'primeng/inputgroup';
import { InputGroupAddonModule } from 'primeng/inputgroupaddon';
import { InputTextModule } from 'primeng/inputtext';
import { User } from '@primeicons/angular/user';

@Component({
    selector: "app-projects-page",
    templateUrl: "./projects.page.html",
    styleUrl: "./projects.page.scss",
    imports: [InputGroupModule, InputGroupAddonModule, InputTextModule, FormsModule, User]
})
export class ProjectsPage {
    projects = [
        {
            title: "FormKit",
            status: "Livrat",
            year: "2025",
            role: "Lead developer",
            description: "Drag-and-drop JSON form builder with schema validation and live preview.",
            tags: ["TypeScript", "Angular", "JSON Schema"]
        },
        {
            title: "TaskFlow",
            status: "În dezvoltare",
            year: "2026",
            role: "Full-stack developer",
            description: "Collaborative project management platform with real-time updates and customizable workflows.",
            tags: ["React", "Node.js", "PostgreSQL"]
        },
        {
            title: "DataLens",
            status: "Livrat",
            year: "2024",
            role: "Frontend developer",
            description: "Interactive analytics dashboard for visualizing business metrics and generating custom reports.",
            tags: ["Vue", "TypeScript", "D3.js"]
        },
        {
            title: "AuthBridge",
            status: "Arhivat",
            year: "2023",
            role: "Backend developer",
            description: "Centralized authentication service supporting OAuth2, JWT tokens, and role-based access control.",
            tags: ["C#", ".NET", "OAuth2", "JWT"]
        },
        {
            title: "ShopPilot",
            status: "În dezvoltare",
            year: "2026",
            role: "Software engineer",
            description: "E-commerce administration platform for managing products, orders, inventory, and customer data.",
            tags: ["Angular", "NestJS", "MongoDB"]
        }
    ];
    searchText = '';
}