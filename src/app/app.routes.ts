import { Routes } from '@angular/router';
import { App } from './app';
import { Home } from './home/home';
import { Login } from './login/login';

export const routes: Routes = [
    // {path: "", pathMatch:"full", component: App},
    {path: "", component: Home},
    {path: "login", component: Login}
];
