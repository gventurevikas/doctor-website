import { MedicalDatePipe } from './medical-date.pipe';

describe('MedicalDatePipe', () => {
  it('create an instance', () => {
    const pipe = new MedicalDatePipe();
    expect(pipe).toBeTruthy();
  });
});
