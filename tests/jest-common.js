const path = require('path')

// module.exports = {
//   preset: '@vue/cli-plugin-unit-jest/presets/typescript-and-babel',
// }

module.exports = {
  rootDir: path.join(__dirname, '..'),
  globals: {
    'ts-jest': {
      babelConfig: true,
    },
  },
  moduleFileExtensions: [
    'js',
    'jsx',
    'ts',
    'tsx',
    'json',
    // tell Jest to handle *.vue files
    'vue',
  ],
  transform: {
    // process *.vue files with vue-jest
    '^.+\\.vue$': require.resolve('vue-jest'),
    '.+\\.(css|styl|less|sass|scss|svg|png|jpg|ttf|woff|woff2)$': require.resolve(
      'jest-transform-stub',
    ),
    '^.+\\.js?(x)?$': require.resolve('babel-jest'),
    '^.+\\.ts?(x)?$': require.resolve('ts-jest'),
  },
  transformIgnorePatterns: ['/node_modules/'],
  // support the same @ -> src alias mapping in source code
  moduleNameMapper: {
    '^@/(.*)$': '<rootDir>/src/$1',
  },
  // https://github.com/facebook/jest/issues/6766
  testURL: 'http://localhost/',
  watchPlugins: [
    require.resolve('jest-watch-typeahead/filename'),
    require.resolve('jest-watch-typeahead/testname'),
    require.resolve('jest-watch-select-projects'),
  ],
}
