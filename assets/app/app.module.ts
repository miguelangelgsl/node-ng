import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from "@angular/http";

import { routing } from "./app.routing";

//Main Components
import { AppComponent } from "./app.component";
import { AuthenticationComponent } from "./auth/authentication.component";
import { HomeComponent } from './home.component';

//Service Security and Guard
import { AuthService } from "./auth/auth.service";
import { ErrorComponent } from "./errors/error.component";
import { ErrorService } from "./errors/error.service";
import { AuthGuard } from './auth/auth-guard';

//Layout
import { NavBarComponent } from './navbar.component';


@NgModule({
    declarations: [
        AppComponent,
        AuthenticationComponent,
        ErrorComponent,
        HomeComponent,
        NavBarComponent
    ],
    imports: [
        BrowserModule,
        routing,
        HttpModule
    ],
    providers: [AuthService, ErrorService,AuthGuard],
    bootstrap: [AppComponent]
})
export class AppModule {

}