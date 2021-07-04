import React from 'react'
import * as S from './styles'
import { Text, Button as Btn } from 'react-native'

export type ButtonType = {
  title: string
  onpress: () => void
}

const Button = ({ title = 'Teste', onpress }: ButtonType) => (
  <S.Wrapper>
    <Btn title={title} onPress={onpress} />
  </S.Wrapper>
)

export default Button
