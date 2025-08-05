import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'medicalFilter',
  standalone: false
})
export class MedicalFilterPipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    return null;
  }

}
