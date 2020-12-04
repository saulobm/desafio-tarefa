import {Pipe, PipeTransform} from '@angular/core';
import {isNullOrUndefined} from "util";

@Pipe({
    name: 'cnpj'
})
export class CnpjPipe implements PipeTransform{
  transform(value: string): string {
    if(!isNullOrUndefined(value) && value.length == 14){
      return value.substr(0, 2) + '.' +
        value.substr(2, 5) + '.' +
        value.substr(5, 8) + '/' +
        value.substr(8, 11)+ '-' +
        value.substr(11, 14);
    }else{
      return value;
    }

  }
}
