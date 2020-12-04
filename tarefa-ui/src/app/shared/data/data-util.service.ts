
export declare class DateUtils {
  private pattern;
  private datePipe;
  constructor();
  convertDateTimeFromServer(date: any): Date;
  convertLocalDateFromServer(date: any): Date;
  convertLocalDateToServer(date: any, pattern?: string): string;
  dateformat(): string;
  toDate(date: any): Date;
}
