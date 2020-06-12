module.exports = {
  preset: 'ts-jest/presets/js-with-babel',
  transform: {
    '^.+\\.(ts(x?)|js)$': 'ts-jest',
  },
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
  testPathIgnorePatterns: ['/node_modules/', '/public/'],
  collectCoverage: true,
  coverageReporters: ['lcov'],
  coverageDirectory: 'coverage',
  collectCoverageFrom: [
    'src/**/{!(index),}.{js,jsx,ts,tsx}',
    '!src/**/*.test.{js,jsx,ts,tsx}',
    '!src/app.tsx',
    '!src/index.tsx',
    '!src/styles/*.{ts,js}',
  ],
  coverageThreshold: {
    global: {
      statements: 60,
      branches: 60,
      functions: 60,
      lines: 60,
    },
  },
  globals: {
    'ts-jest': {
      tsConfig: 'tsconfig.json',
    },
  },
  snapshotSerializers: [],
  watchPlugins: [
    'jest-watch-typeahead/filename',
    'jest-watch-typeahead/testname',
  ],
};
