import { Injectable } from '@angular/core'
import { NgbDateParserFormatter, NgbDateStruct } from '@ng-bootstrap/ng-bootstrap'

@Injectable()
export class CustomDateParserFormatter extends NgbDateParserFormatter {

  readonly DELIMITER = '/';

  parse(value: string): NgbDateStruct | null {
    if (value) {
      return {
        day : new Date(Date.parse(value)).getDate(),
        month : new Date(Date.parse(value)).getMonth(),
        year : new Date(Date.parse(value)).getFullYear(),
      };
    }
    return null;
  }

  format(date: NgbDateStruct | null): string {
    return date
      ? `${date.year}-${date.month}-${date.day}`
      /* date.day + this.DELIMITER + date.month + this.DELIMITER + date.year */
      : '';
  }
}
