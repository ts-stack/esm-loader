import type { Config } from 'jest';

const config: Config = {
  testEnvironment: 'node',
  modulePathIgnorePatterns: [],
  moduleNameMapper: {
    '@service/(.+)': '<rootDir>/dist-test/service/$1',
  },
};

export default config;
