import { Link, routes } from '@redwoodjs/router'
import Supabase from 'src/components/Supabase/Supabase'
import Navbarr from 'src/components/Navbarr/Navbarr'
import Signup from 'src/components/Signup/Signup'

const SignupPage = () => {
  return (
    <>
      <Navbarr />
      <Signup />
      <Supabase />
    </>
  )
}

export default SignupPage
