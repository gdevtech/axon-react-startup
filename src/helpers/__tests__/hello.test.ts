import hello from '../hello';

describe('Hello Function', () => {
  test('Show Name', () => {
    expect(hello('Jesus')).toContain('Jesus');
  });
  test('Throw error for no name', () => {
    expect(() => {
      hello('');
    }).toThrow();
  });
  test('Do not throw error for no name', () => {
    expect(() => {
      hello('Jesus');
    }).not.toThrow();
  });
});
