import React from 'react'
import styled from 'styled-components'
import renderer from 'react-test-renderer'
import 'jest-styled-components'
import Message from './Message'

const StyledMessage = styled(Message)`
  color: red;
`

test('it works', () => {
  const tree = renderer.create(<StyledMessage>hello test</StyledMessage>).toJSON()
  expect(tree).toMatchSnapshot()
})