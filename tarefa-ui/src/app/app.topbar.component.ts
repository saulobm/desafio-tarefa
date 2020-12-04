import {Component} from '@angular/core';
import {AppMainComponent} from './app.main.component';

@Component({
    selector: 'app-topbar',
    template: `
        <div class="topbar clearfix">
            <div class="topbar-left">
               
            </div>

            <div class="topbar-right">
                <a id="menu-button" href="#" (click)="app.onMenuButtonClick($event)">
                    <i></i>
                </a>

            </div>
        </div>
    `
})
export class AppTopbarComponent {

    constructor(public app: AppMainComponent) {}

}
