import {Pipe, PipeTransform} from '@angular/core';
import {DatePipe} from '@angular/common';
import {DATE_TIME_FMT} from '../constants/calendario.constants';


@Pipe({
    name: 'dateTimeFormat'
})
export class DateTimeFormatPipe extends DatePipe implements PipeTransform {
    transform(value: any, args?: any): any {
        return super.transform(value, DATE_TIME_FMT);
    }
}
