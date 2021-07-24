import { render } from '@redwoodjs/testing'

import Signup from './Signup'

describe('Signup', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<Signup />)
    }).not.toThrow()
  })
})
