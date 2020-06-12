import { greeting } from '../utils';

const helloString = (name: string): string => {
  if (name) {
    return `${greeting()} ${name}`;
  }
  throw new Error('Name parameter can not be left blank');
};

export default helloString;
