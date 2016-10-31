import { Routes, RouterModule } from "@angular/router";
import { AuthGuard } from './auth/auth-guard';
import { MessagesComponent } from "./messages/messages.component";
import { StartComponent } from "./start.component";


const HOME_ROUTES: Routes = [
    { path: '',component:StartComponent ,canActivate: [AuthGuard] },
    { path: 'messages', component: MessagesComponent,canActivate: [AuthGuard] },
];
 


export const homeRouting = RouterModule.forChild(HOME_ROUTES);