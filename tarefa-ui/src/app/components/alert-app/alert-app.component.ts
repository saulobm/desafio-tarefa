import {NotificationService} from './../../service/notification.service';
import {Component, OnInit} from '@angular/core';
import {Message} from 'primeng/primeng';

@Component({
    selector: 'app-alert-sys',
    template: '<p-messages [value]=\'getMessages()\'></p-messages>'
})
export class AlertAppComponent implements OnInit {

    constructor(private notification: NotificationService) {
    }

    getMessages(): Message[] {
        return this.notification.message;
    }

    ngOnInit() {
        this.notification.clear();
    }
}
