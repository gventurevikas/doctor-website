import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'medicalDate',
  standalone: false
})
export class MedicalDatePipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    return null;
  }

}
