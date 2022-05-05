// jest.config.ts
import type { Config } from '@jest/types';

// Sync object
const config: Config.InitialOptions = {
  verbose: true,
  roots: ['src'],
  transform: {
    '^.+\\.(ts|tsx|js|jsx)$': 'ts-jest',
  },
  testRegex: '(\\.(test|spec))\\.(jsx?|tsx?)$',
  moduleNameMapper: {
    '\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$':
      '<rootDir>/__mocks__/fileMock.js',
    '\\.(css|less)$': '<rootDir>/__mocks__/styleMock.js',
    '^@c3/(.*)$': '<rootDir>/packages/$1/src/index.ts',
    setupFilesAfterEnv: ['jest-extended'],
  },
  setupFilesAfterEnv: ['<rootDir>/jestSetupTests.ts'],
  testEnvironment: 'jsdom',
};

export default config;
