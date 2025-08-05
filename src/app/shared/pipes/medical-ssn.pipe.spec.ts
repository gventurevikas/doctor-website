import { MedicalSsnPipe } from './medical-ssn.pipe';

describe('MedicalSsnPipe', () => {
  it('create an instance', () => {
    const pipe = new MedicalSsnPipe();
    expect(pipe).toBeTruthy();
  });
});
