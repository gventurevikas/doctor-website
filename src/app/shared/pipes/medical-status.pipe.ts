import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'medicalStatus',
  standalone: false
})
export class MedicalStatusPipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    return null;
  }

}
