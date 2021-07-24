import { render } from '@redwoodjs/testing'

import Supabase from './Supabase'

describe('Supabase', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<Supabase />)
    }).not.toThrow()
  })
})
