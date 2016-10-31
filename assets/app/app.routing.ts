import { Routes, RouterModule } from "@angular/router";
import { AuthGuard } from './auth/auth-guard';

import { HomeComponent } from './home.component';
import { AuthenticationComponent } from "./auth/authentication.component";

const APP_ROUTES: Routes = [
    { path: '', redirectTo: '', pathMatch: 'full',canActivate: [AuthGuard] },
    { path: 'auth', component: AuthenticationComponent, loadChildren: './auth/auth.module#AuthModule' },
    { path: '', component: HomeComponent, loadChildren: './home.module#HomeModule' }
];

export const routing = RouterModule.forRoot(APP_ROUTES);