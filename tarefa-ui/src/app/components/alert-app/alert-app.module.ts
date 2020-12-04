import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {AlertAppComponent} from './alert-app.component';
import {MessageModule} from 'primeng/message';
import {MessagesModule} from 'primeng/primeng';

@NgModule({
    imports: [
        CommonModule,
        MessageModule,
        MessagesModule,
    ],
    declarations: [
        AlertAppComponent],

    exports: [
        AlertAppComponent
    ],
})
export class AlertAppModule { }
