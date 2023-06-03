module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'jsdom',
  transform: {
    '^.+\\.ts?$': 'ts-jest',
  },
  transformIgnorePatterns: ['<rootDir>/node_modules/'],
  moduleDirectories: ['<rootDir>/node_modules', '<rootDir>/src'],
  setupFilesAfterEnv: ['<rootDir>/src/jest-setup.ts'],
};
