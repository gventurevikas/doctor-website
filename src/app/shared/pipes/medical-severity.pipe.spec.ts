import { MedicalSeverityPipe } from './medical-severity.pipe';

describe('MedicalSeverityPipe', () => {
  it('create an instance', () => {
    const pipe = new MedicalSeverityPipe();
    expect(pipe).toBeTruthy();
  });
});
