import { MedicalStatusPipe } from './medical-status.pipe';

describe('MedicalStatusPipe', () => {
  it('create an instance', () => {
    const pipe = new MedicalStatusPipe();
    expect(pipe).toBeTruthy();
  });
});
