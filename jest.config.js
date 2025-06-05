module.exports = {
  testEnvironment: 'jsdom',
  transform: {
    '^.+\\.(ts|tsx)$': ['ts-jest', { tsconfig: 'tsconfig.json' }]
  },
  setupFilesAfterEnv: ['<rootDir>/jest.setup.ts'],
  moduleFileExtensions: ['ts', 'tsx', 'js'],
  testMatch: ['**/?(*.)+(spec|test).[tj]s?(x)'],
};
