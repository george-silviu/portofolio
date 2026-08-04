import { Routes } from '@angular/router';

import { Dashboard } from './components/dashboard/dashboard.component';
import { Projects } from './components/projects/projects.component';

export const routes: Routes = [
    {
        // title: "Dashboard page",
        path: "",
        component: Dashboard
    },
    {
        // title: "Projects page",
        path: "projects",
        component: Projects
    }
];
