module.exports = {
  ...require('./tests/jest-common'),
  collectCoverageFrom: ['**/src/**/*.(vue|ts)', '!**/src/test.ts'],
  coverageThreshold: {
    global: {
      statements: 3,
      branches: 0,
      functions: 0,
      lines: 3,
    },
  },
  projects: ['./tests/jest.client.js', './tests/jest.server.js', './tests/jest.lint.js'],
}
