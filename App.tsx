import React from 'react'
import { ApolloProvider } from '@apollo/client'
import { apolloClient } from './apollo'
import StorybookUI from './storybook'
import { LOAD_STORYBOOK } from '@env'

import Router from './src/router'

const App = () => {
  return (
    <ApolloProvider client={apolloClient}>
      <Router />
    </ApolloProvider>
  )
}

export default LOAD_STORYBOOK === 'true' ? StorybookUI : App
