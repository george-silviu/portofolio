import { Routes } from '@angular/router';

import {
    DashboardPage,
    ProjectsPage,
    ArticlesPage,
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
        path: "articles",
        component: ArticlesPage
    },
    {
        path: "resources",
        component: ResourcesPage
    }
];
