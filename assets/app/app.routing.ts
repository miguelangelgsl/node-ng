import { Routes, RouterModule } from "@angular/router";
import { AuthGuard } from './auth/auth-guard';

import { MessagesComponent } from "./messages/messages.component";
import { AuthenticationComponent } from "./auth/authentication.component";

const APP_ROUTES: Routes = [
    { path: '', redirectTo: '/messages', pathMatch: 'full',canActivate: [AuthGuard] },
    { path: 'messages', component: MessagesComponent,canActivate: [AuthGuard] },
    { path: 'auth', component: AuthenticationComponent, loadChildren: './auth/auth.module#AuthModule' }
];

export const routing = RouterModule.forRoot(APP_ROUTES);