module.exports = {
  testPathIgnorePatterns: ['/node_modules/'],
  collectCoverage: true,
  collectCoverageFrom: [
    'src/**/*.ts',
    '!src/**/stories.ts',
    '!src/screens/**/*.ts',
    '!src/styles/**/*.ts',
    '!src/context/**/*.ts',
    '!src/services/api.ts',
    '!src/hooks/**/*.ts',
    '!src/routers/**/*.ts',
    '!src/graphql/**/*.ts'
  ],
  preset: 'react-native',
  setupFilesAfterEnv: ['@testing-library/jest-native/extend-expect'],
  modulePaths: ['<rootDir>/src/', '<rootDir>/.jest']
  /* moduleNameMapper: {
    '^styled-components':
      '<rootDir>/node_modules/styled-components/dist/styled-components.browser.cjs.js'
  } */
}

/* setupFilesAfterEnv: ['<rootDir>/.jest/setup.js'], */
/* "jest": {
  "preset": "react-native",
  "setupFilesAfterEnv": [
    "@testing-library/jest-native/extend-expect"
  ]
}, */
