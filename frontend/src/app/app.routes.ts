import { Routes } from '@angular/router';

import {
    DashboardPage,
    ProjectsPage,
    NotesPage,
    ResourcesPage
} from './pages';

export const routes: Routes = [
    {
        path: "",
        component: DashboardPage
    },
    {
        path: "projects",
        component: ProjectsPage
    },
    {
        path: "notes",
        component: NotesPage
    },
    {
        path: "resources",
        component: ResourcesPage
    }
];
