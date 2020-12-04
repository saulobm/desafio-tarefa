import {Pipe, PipeTransform} from '@angular/core';
import {isNullOrUndefined} from "util";

@Pipe({
    name: 'indicador_obrigatorio'
})
export class IndicadorObrigatorioPipe implements PipeTransform{
    transform(value: string): string {
        if(!isNullOrUndefined(value)){
            switch(value) {
                case "SIM": {
                    return "SIM";
                }
                case "NAO": {
                    return "NÃO";
                }
                default: {
                    return value;
                }
            }
        }else{
            return value;
        }

    }
}
