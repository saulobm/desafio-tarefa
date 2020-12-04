import {Pipe, PipeTransform} from '@angular/core';
import {isNullOrUndefined} from "util";

@Pipe({
    name: 'telefone'
})
export class TelefonePipe implements PipeTransform{
    transform(valor: string): string{
        if(!isNullOrUndefined(valor) && valor.length > 9){
            valor = valor.replace(/\D/g,"");
            valor = valor.replace(/^(\d{2})(\d)/g,"($1)$2");
            if( valor.length > 11 ) {
                valor = valor.replace(/(\d)(\d{4})$/,"$1-$2");
            } else {
                valor = valor.replace(/(\d)(\d{3})$/,"$1-$2");
            }
        }
        return valor;
    }
}
