import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { homeRouting } from "./home.routing";
import { MessageModule } from "./messages/message.module";

 


@NgModule({
    declarations: [
    ],
    imports: [
        CommonModule,
        homeRouting,
        MessageModule
    ]
})
export class HomeModule {

}