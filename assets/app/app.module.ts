import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from "@angular/http";

import { AppComponent } from "./app.component";
import { AuthenticationComponent } from "./auth/authentication.component";
import { HeaderComponent } from "./header.component";
import { routing } from "./app.routing";
import { AuthService } from "./auth/auth.service";
import { ErrorComponent } from "./errors/error.component";
import { ErrorService } from "./errors/error.service";
import { MessageModule } from "./messages/message.module";
import { NavBarComponent } from './navbar.component';
import { AuthGuard } from './auth/auth-guard';

@NgModule({
    declarations: [
        AppComponent,
        AuthenticationComponent,
        HeaderComponent,
        ErrorComponent,
        NavBarComponent
    ],
    imports: [
        BrowserModule,
        routing,
        HttpModule,
        MessageModule
    ],
    providers: [AuthService, ErrorService,AuthGuard],
    bootstrap: [AppComponent]
})
export class AppModule {

}