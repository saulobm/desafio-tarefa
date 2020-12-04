import {Pipe, PipeTransform} from '@angular/core';
import {isNullOrUndefined} from "util";

@Pipe({
    name: 'cpf'
})
export class CpfPipe implements PipeTransform{
    transform(value: string): string {
        if(!isNullOrUndefined(value) && value.length == 11){
            return value.substr(0, 3) + '.' +
                value.substr(3, 3) + '.' +
                value.substr(6, 3) + '-' +
                value.substr(9, 2);
        }else{
            return value;
        }

    }
}
