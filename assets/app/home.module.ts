import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { homeRouting } from "./home.routing";
import { StartComponent } from "./start.component";
import { MessageModule } from "./messages/message.module";

 


@NgModule({
    declarations: [
        StartComponent
    ],
    imports: [
        CommonModule,
        homeRouting,
        MessageModule
    ]
})
export class HomeModule {

}