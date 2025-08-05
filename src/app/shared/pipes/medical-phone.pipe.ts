import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'medicalPhone',
  standalone: false
})
export class MedicalPhonePipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    return null;
  }

}
