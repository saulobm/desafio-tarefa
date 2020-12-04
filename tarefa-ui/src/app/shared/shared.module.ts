import {CUSTOM_ELEMENTS_SCHEMA, NgModule} from "@angular/core";

import {AlertaService} from "./alert/alerta.service";

@NgModule({
    imports: [
    ],
    declarations: [

    ],
    providers: [
        AlertaService
    ],
    exports: [
    ],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]

})
export class SharedModule {}
