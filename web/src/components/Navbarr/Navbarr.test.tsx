import { render } from '@redwoodjs/testing'

import Navbarr from './Navbarr'

describe('Navbarr', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<Navbarr />)
    }).not.toThrow()
  })
})
