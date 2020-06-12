import { formatNumbers } from '../index';

describe('Formatting Numbers with comma', () => {
  test('Include one comma with number', () => {
    expect(formatNumbers(123456)).toBe('123,456');
  });
  test('Do not include comma with 3 digit number', () => {
    expect(formatNumbers(123)).toBe('123');
  });
});
