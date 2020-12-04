import {Pipe, PipeTransform} from '@angular/core';
import {DatePipe} from '@angular/common';
import {PTBR} from '../constants/calendario.constants';
import {Data} from '@angular/router';


@Pipe({
    name: 'datePtFormat',
    pure: true
})

export class DatePtFormatPipe extends DatePipe implements PipeTransform {
    static DATE_FORMAT_FMT: {[key: string]: String} = {
        ano4: 'yyyy',
        ano2: 'yy',
        mes2: 'MM',
        mes3: 'MMM',
        mesNome: 'MMMM',
        dia1: 'd',
        dia2: 'dd',
        semana3: 'EEE',
        semanaNome: 'EEEE',
        dataBr: 'dd/MM/yyyy'
    };

    private local: any = this.local = PTBR;
    private data: Data;

    transform(value: any, pattern: string = 'dataBr'): any {
        const strData: string = (String(value));
        const splitDt: string[] = strData.split(/[\s/]+/, 3);
        this.data = new Date(splitDt[2] + '-' + splitDt[1] + '-' + splitDt[0]); // converte a data para yyyy-MM-dd //

        if (this.contains(DatePtFormatPipe.DATE_FORMAT_FMT, pattern)) {
            pattern = <string>this.get(DatePtFormatPipe.DATE_FORMAT_FMT, pattern);
        }
        return super.transform(this.data, pattern);
    }

    contains(map: {[key: string]: any}, key: string): boolean {
        return map.hasOwnProperty(key);
    }

    get<V>(map: {[key: string]: V}, key: string): V {
        return map.hasOwnProperty(key) ? map[key] : undefined;
    }
}
