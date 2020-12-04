import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';
import {errorRoute} from "./error/error.route";
import {ErrorComponent} from "./error/error.component";


const LAYOUT_ROUTES = [
    ...errorRoute
];

@NgModule({
    imports: [
        RouterModule.forRoot(LAYOUT_ROUTES, { useHash: true })
    ],
    declarations: [
        ErrorComponent
    ],
    exports: [
        RouterModule
    ]
})
export class LayoutRoutingModule {}
