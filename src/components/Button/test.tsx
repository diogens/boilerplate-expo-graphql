import React from 'react'
import { render } from '@testing-library/react-native'

import Button from '.'

describe('<Button />', () => {
  it('should render the heading', () => {
    const { container, toJSON, getByText, debug } = render(
      <Button title="Button" onpress={() => console.log()} />
    )

    debug()

    expect(getByText('Button'))
  })
})
