import React from 'react'
import { RatingBadge } from '../src'

describe('RatingBadge', () => {
  test('renders', () => {
    const json = rendererCreateWithTheme(<RatingBadge />).toJSON()
    expect(json).toMatchSnapshot()
  })
})
