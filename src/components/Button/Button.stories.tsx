import React from 'react'
import { action } from '@storybook/addon-actions'
import { storiesOf } from '@storybook/react-native'
import { SafeAreaView, View } from 'react-native'
import { StatusBar } from 'expo-status-bar'

import Button from '.'

export default {
  title: 'Button'
}

export const Btn = () => (
  <SafeAreaView style={{ flex: 1, justifyContent: 'center' }}>
    <StatusBar style="dark" />
    <Button title="Hello Button" onpress={action('test')} />
  </SafeAreaView>
)

export const Btn2 = () => (
  <SafeAreaView style={{ flex: 1, justifyContent: 'center' }}>
    <StatusBar style="dark" />
    <Button title="Button text', 'Hello Button" onpress={action('text')} />
  </SafeAreaView>
)

export const Btn3 = () => (
  <SafeAreaView style={{ flex: 1, justifyContent: 'center' }}>
    <StatusBar style="dark" />
    <Button title="😀 😎 👍 💯" onpress={action('emoji')} />
  </SafeAreaView>
)

// On-Device Register
storiesOf('Button', module)
  .add('Button1', Btn)
  .add('Button2', Btn2)
  .add('Button3', Btn3)
