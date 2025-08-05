import { MedicalCurrencyPipe } from './medical-currency.pipe';

describe('MedicalCurrencyPipe', () => {
  it('create an instance', () => {
    const pipe = new MedicalCurrencyPipe();
    expect(pipe).toBeTruthy();
  });
});
