import { Injectable } from '@angular/core'
import { NgbDateAdapter, NgbDateStruct } from '@ng-bootstrap/ng-bootstrap'

@Injectable()
export class CustomAdapter extends NgbDateAdapter<string> {
  fromModel(value: string | null): NgbDateStruct | null {
    if (value) {
      return {
        day : new Date(Date.parse(value)).getDate(),
        month : new Date(Date.parse(value)).getMonth(),
        year : new Date(Date.parse(value)).getFullYear(),
      };
    }
    return null;
  }

  toModel(date: NgbDateStruct | null): string | null {
    if (date) {
      console.log(new Date(Date.UTC(date.year, date.month, date.day, 0, 0, 0, 0)))
    }


    return date
      ? new Date(Date.UTC(date.year, date.month, date.day, 0, 0, 0, 0)).toISOString().split('T')[0] + 'T00:00:00.000+00:00'
      : '';
  }
}
