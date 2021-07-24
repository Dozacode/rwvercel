import { useState } from 'react'
import { Link, routes } from '@redwoodjs/router'

const Navbarr = () => {
  const [open, setOpen] = useState(false)
  const toggle = () => {
    setOpen((prevState) => !prevState)
  }
  return (
    <Navbar bgColor="bg-black" textColor="text-white">
      <NavbarBrand href="#">
        <svg
          height="25"
          preserveAspectRatio="xMidYMid"
          width="25"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 256 153.6"
        >
          <linearGradient id="a" x1="-2.778%" y1="32%" y2="67.556%">
            <stop offset="0" stopColor="#2298bd" />
            <stop offset="1" stopColor="#0ed7b5" />
          </linearGradient>
          <path
            d="M128 0C93.867 0 72.533 17.067 64 51.2 76.8 34.133 91.733 27.733 108.8 32c9.737 2.434 16.697 9.499 24.401 17.318C145.751 62.057 160.275 76.8 192 76.8c34.133 0 55.467-17.067 64-51.2-12.8 17.067-27.733 23.467-44.8 19.2-9.737-2.434-16.697-9.499-24.401-17.318C174.249 14.743 159.725 0 128 0zM64 76.8C29.867 76.8 8.533 93.867 0 128c12.8-17.067 27.733-23.467 44.8-19.2 9.737 2.434 16.697 9.499 24.401 17.318C81.751 138.857 96.275 153.6 128 153.6c34.133 0 55.467-17.067 64-51.2-12.8 17.067-27.733 23.467-44.8 19.2-9.737-2.434-16.697-9.499-24.401-17.318C110.249 91.543 95.725 76.8 64 76.8z"
            fill="url(#a)"
          />
        </svg>
      </NavbarBrand>
      <NavbarToggler toggle={toggle} />
      <NavbarCollapse open={open}>
        <NavbarNav position="left">
          <NavbarItem>
            <NavbarLink href="#"></NavbarLink>
            <Link to={routes.home()}>Home</Link>
          </NavbarItem>
        </NavbarNav>
        <NavbarNav position="right">
          <NavbarItem>
            <NavbarLink href="#">About</NavbarLink>
          </NavbarItem>
          <NavbarItem>
            <NavbarLink href="#">
              <Link to={routes.signup()}>Signup</Link>
            </NavbarLink>
          </NavbarItem>
        </NavbarNav>
      </NavbarCollapse>
    </Navbar>
  )
}
/* Navbar logic */
const style = {
  toggler: `float-right block md:hidden pt-1.5 text-3xl focus:outline-none focus:shadow`,
  link: `block cursor-pointer py-1.5 md:py-1 px-4 md:px-2 hover:text-gray-400 font-medium`,
  brand: `inline-block pt-1.5 pb-1.5 mr-4 cursor-pointer text-2xl font-bold whitespace-nowrap hover:text-gray-400`,
  navbar: `font-light text-white md:relative md:flex md:items-center shadow py-2 px-4 md:flex md:flex-row md:justify-start`,
  collapse: {
    default: `md:flex-grow md:items-center md:flex`,
    open: `visible opacity-1 transition-all ease-out duration-500 md:transition-none`,
    close: `invisible h-0 opacity-0 md:visible md:opacity-100 md:h-auto`,
  },
  nav: {
    left: `block pl-0 mb-0 mr-auto md:flex md:pl-0 md:mb-0`,
    center: `block pl-0 mb-0 ml-auto md:flex md:pl-0 md:mb-0 md:mx-auto `,
    right: `block pl-0 mb-0 ml-auto md:flex md:pl-0 md:mb-0`,
  },
}
function Navbar({ bgColor, textColor, children }) {
  return (
    <nav className={`${bgColor} ${textColor} ${style.navbar}`}>{children}</nav>
  )
}
/* You can wrap the a tag with Link and pass href to Link if you are using either Create-React-App, Next.js or Gatsby */
function NavbarBrand({ children, href }) {
  return (
    <a href={href} className={style.brand}>
      <strong>{children}</strong>
    </a>
  )
}
function NavbarToggler({ toggle }) {
  return (
    <button
      type="button"
      aria-expanded="false"
      aria-label="Toggle navigation"
      className={style.toggler}
      onClick={toggle}
    >
      &#8801;
    </button>
  )
}
function NavbarCollapse({ children, open }) {
  return (
    <div
      className={`${style.collapse.default}
        ${open ? style.collapse.open : style.collapse.close}  `}
    >
      {children}
    </div>
  )
}
/*
The navbar nav has three positions
 - left
 - center
 - right
* */
function NavbarNav({ children, position }) {
  return <ul className={style.nav[position]}>{children}</ul>
}
function NavbarItem({ children }) {
  return <li>{children}</li>
}
/* You can wrap the a tag with Link and pass href to Link if you are using either Create-React-App, Next.js or Gatsby */
function NavbarLink({ children, href }) {
  return (
    <a href={href} className={style.link}>
      {children}
    </a>
  )
}

export default Navbarr
