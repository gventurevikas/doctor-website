import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'medicalSeverity',
  standalone: false
})
export class MedicalSeverityPipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    return null;
  }

}
