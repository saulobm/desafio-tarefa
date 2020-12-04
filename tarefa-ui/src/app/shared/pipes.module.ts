import {NgModule} from '@angular/core';
import {DateFormatPipe} from "./data/dateFormat-pipe";
import {DateTimeFormatPipe} from "./data/dateTimeFormat-pipe";
import {CpfPipe} from "./cpf/cpf-pipe";
import {CnpjPipe} from "./cnpj/cnpj-pipe";
import {TelefonePipe} from "./telefone/telefone-pipe";
import {CepPipe} from "./cep/cep-pipe";
import {IndicadorObrigatorioPipe} from "./indicador-obrigatorio/tipo-empresa-pipe";
import {DatePtFormatPipe} from "./data/datePtFormat-pipe";

@NgModule({
    imports: [
    ],
    declarations: [
        CpfPipe,
        CnpjPipe,
        TelefonePipe,
        CepPipe,
        IndicadorObrigatorioPipe,
        DateFormatPipe,
        DateTimeFormatPipe,
        DatePtFormatPipe

    ],
    exports: [
        CpfPipe,
        CnpjPipe,
        TelefonePipe,
        CepPipe,
        IndicadorObrigatorioPipe,
        DateFormatPipe,
        DateTimeFormatPipe
    ]
})
export class ApplicationPipesModule {}
