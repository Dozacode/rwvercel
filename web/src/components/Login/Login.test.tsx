import { render } from '@redwoodjs/testing'

import Login from './Login'

describe('Login', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<Login />)
    }).not.toThrow()
  })
})
