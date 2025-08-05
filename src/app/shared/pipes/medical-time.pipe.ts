import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'medicalTime',
  standalone: false
})
export class MedicalTimePipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    return null;
  }

}
