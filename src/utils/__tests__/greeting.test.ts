import { greeting } from '../index';

const myDate = new Date();
const hrs = myDate.getHours();

describe('Greeting to show correct message based of the user local time', () => {
  if (hrs) {
    if (hrs < 12) {
      test('Time is less then 12pm', () => {
        expect(greeting()).toBe('Good Morning');
      });
    }
    if (hrs >= 12 && hrs < 17) {
      test('Time is less then 12pm', () => {
        expect(greeting()).toBe('Good Afternoon');
      });
    }
    if (hrs >= 17) {
      test('Time is less then 12pm', () => {
        expect(greeting()).toBe('Good Evening');
      });
    }
  } else {
    test('Could not get the user time', () => {
      expect(greeting()).toBe('Could not get your time, try again later');
    });
  }
});
