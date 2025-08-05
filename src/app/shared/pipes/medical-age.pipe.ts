import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'medicalAge',
  standalone: false
})
export class MedicalAgePipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    return null;
  }

}
