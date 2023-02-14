
/** @type {import('ts-jest/dist/types').InitialOptionsTsJest} */

module.exports = {
    preset: 'ts-jest',
    testEnvironment: 'jsdom',
      transform: {
        '^.+\\.ts$': 'ts-jest',
        '^.+\\.js$': 'babel-jest',
        '^.+\\.mjs$': 'babel-jest',
      },
      moduleDirectories: ['node_modules', '<rootDir>/src'],
      moduleNameMapper: {
        '@controllers/(.*)': '<rootDir>/src/controllers/$1',
        '@middleware/(.*)': '<rootDir>/src/middleware/$1',
        '@models/(.*)': '<rootDir>/src/models/$1',
        '@routes/(.*)': '<rootDir>/src/routes/$1',
        '@types/(.*)': '<rootDir>/src/types/$1',
        '@util/(.*)': '<rootDir>/src/util/$1',
        '^(\\.{1,2}/.*)\\.js$': '$1',
      }
    };