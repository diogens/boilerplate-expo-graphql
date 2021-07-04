module.exports = {
  testPathIgnorePatterns: ['/node_modules/'],
  transformIgnorePatterns: [
    'node_modules/(?!(jest-)?react-native|react-clone-referenced-element|@react-native-community|expo(nent)?|@expo(nent)?/.*|react-navigation|@react-navigation/.*|@unimodules/.*|unimodules|sentry-expo|native-base|@sentry/.*)'
  ],
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
  preset: 'jest-expo',
  setupFilesAfterEnv: ['@testing-library/jest-native/extend-expect'],
  modulePaths: ['<rootDir>/src/', '<rootDir>/.jest']
}
