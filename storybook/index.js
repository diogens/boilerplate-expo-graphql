/* eslint-disable @typescript-eslint/no-var-requires */
// if you use expo remove this line
import { AppRegistry, Platform } from 'react-native'
import {
  getStorybookUI,
  configure,
  addDecorator
} from '@storybook/react-native'
import { withKnobs } from '@storybook/addon-knobs'
import { loadStories } from './storyLoader'

import './rn-addons'

// enables knobs for all stories
addDecorator(withKnobs)

// import stories
configure(() => {
  loadStories()
  /* require('./stories/') */
  /* require('../src/components/Button/stories/') */
}, module)

// Refer to https://github.com/storybookjs/storybook/tree/master/app/react-native#start-command-parameters
// To find allowed options for getStorybookUI
const StorybookUIRoot = getStorybookUI({
  host: Platform.OS === 'android' ? '10.0.2.2' : '0.0.0.0',
  asyncStorage:
    require('react-native').AsyncStorage ||
    require('@react-native-async-storage/async-storage').default ||
    null
})

// If you are using React Native vanilla and after installation you don't see your app name here, write it manually.
// If you use Expo you should remove this line.
AppRegistry.registerComponent('%APP_NAME%', () => StorybookUIRoot)

export default StorybookUIRoot
