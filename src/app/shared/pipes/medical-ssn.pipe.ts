import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'medicalSsn',
  standalone: false
})
export class MedicalSsnPipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    return null;
  }

}
