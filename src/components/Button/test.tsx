import React from 'react'
import { render, screen } from '@testing-library/react-native'

import Button from '.'

describe('<Button />', () => {
  it('should render the heading', () => {
    const { container, toJSON, getByText, debug } = render(<Button />)

    debug()

    expect(getByText('Button'))

    expect(toJSON()).toMatchSnapshot()
  })
})
