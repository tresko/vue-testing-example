const path = require('path')

module.exports = {
  ...require('./jest-common'),
  displayName: 'client',
  snapshotSerializers: ['jest-serializer-vue'],
  coverageDirectory: path.join(__dirname, '../coverage/client'),
  testEnvironment: 'jest-environment-jsdom-fifteen',
  testMatch: ['**/tests/unit/**/*.spec.[jt]s?(x)', '**/__tests__/*.[jt]s?(x)'],
  setupFilesAfterEnv: ['@testing-library/jest-dom/extend-expect', 'jest-axe/extend-expect'],
}
