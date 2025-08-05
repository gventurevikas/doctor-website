import { MedicalTimePipe } from './medical-time.pipe';

describe('MedicalTimePipe', () => {
  it('create an instance', () => {
    const pipe = new MedicalTimePipe();
    expect(pipe).toBeTruthy();
  });
});
