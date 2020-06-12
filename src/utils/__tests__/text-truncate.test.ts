import { textTruncate } from '../index';

describe('Truncate Text', () => {
  test('Text more then 30 characters should truncate with ...', () => {
    expect(
      textTruncate(
        'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. '
      )
    ).toContain('...');
  });
});
