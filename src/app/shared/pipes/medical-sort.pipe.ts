import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'medicalSort',
  standalone: false
})
export class MedicalSortPipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    return null;
  }

}
