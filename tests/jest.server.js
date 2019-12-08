const path = require('path')

module.exports = {
  ...require('./jest-common'),
  displayName: 'server',
  coverageDirectory: path.join(__dirname, '../coverage/server'),
  testEnvironment: 'jest-environment-node',
  testMatch: ['**/tests/unit/**/*.spec-server.[jt]s?(x)', '**/__server_tests__/*.[jt]s?(x)'],
}
