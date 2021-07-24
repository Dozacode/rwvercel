import { Link, routes } from '@redwoodjs/router'
import Navbarr from 'src/components/Navbarr/Navbarr'
import Login from 'src/components/Login/Login'
import Supabase from 'src/components/Supabase/Supabase'
const HomePage = () => {
  return (
    <>
      <Navbarr />

      <div
        className="min-h-screen flex flex-col md:flex-row bg-grey-900 "
        style={{
          backgroundImage:
            'url(https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2280&q=80)',
        }}
      >
        <div className="m-auto text-center">
          <Login />
        </div>
      </div>
    </>
  )
}

export default HomePage
