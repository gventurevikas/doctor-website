import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'medicalCurrency',
  standalone: false
})
export class MedicalCurrencyPipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    return null;
  }

}
