import React from 'react'
import { ApolloProvider } from '@apollo/client'
import { apolloClient } from './apollo'
import StorybookUI from './storybook'
import { LOAD_STORYBOOK } from '@env'

import Router from './src/router'
import theme from './src/styles/theme'
import { ThemeProvider } from 'styled-components/native'

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <ApolloProvider client={apolloClient}>
        <Router />
      </ApolloProvider>
    </ThemeProvider>
  )
}

const StoryBook = () => {
  return (
    <ThemeProvider theme={theme}>
      <StorybookUI />
    </ThemeProvider>
  )
}

export default LOAD_STORYBOOK === 'true' ? StoryBook : App
