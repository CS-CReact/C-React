import type { JestConfigWithTsJest } from 'ts-jest';

const jestConfig: JestConfigWithTsJest = {
  preset: 'ts-jest',
  moduleNameMapper: {
    '^node_modules/(.*)$': '<rootDir>/node_modules/$1',
    '^src/(.*)$': '<rootDir>/src/$1',
  },
};

export default jestConfig;
