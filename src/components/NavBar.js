import React from 'react'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { MdOutlineMenu } from 'react-icons/md'
import { useMemo } from 'react'
import { BsFacebook } from 'react-icons/bs'
import { PiInstagramLogo } from 'react-icons/pi'
import { BsPinterest } from 'react-icons/bs'
import { FiDribbble } from 'react-icons/fi'
import logo from "../assets/images/logo.png"
const IconLink = ({ href, icon: Icon }) => {
  return (
    <motion.li
      transition={{ duration: 0.2 }}
      whileHover={{
        y: -5
      }}
      whileTap={{
        scale: 1.2
      }}
      className='h-10 w-10 flex justify-center items-center bg-black/10 rounded-full'
    ><a href={href}>
        {Icon}
      </a></motion.li>

  )
}
const NavBar = ({ setIsOpen }) => {
  const links = useMemo(() => [
    {
      href: "https://www.facebook.com",
      icon: <BsFacebook size={26} />
    },
    {
      href: "https://www.facebook.com",
      icon: <PiInstagramLogo size={26} />
    },
    {
      href: "https://www.facebook.com",
      icon: <BsPinterest size={26} />
    },
    {
      href: "https://www.facebook.com",
      icon: <FiDribbble size={26} />
    },
  ], [])
  return (
    <header
      className='sticky 
      shadow bg-white
      top-0 left-0 w-full px-2 md:px-10 py-3 pb-4 z-[100]'
    >
      <nav
        className='flex container mx-auto justify-between items-center '
      >
        <Link to="/"

        >
          <img 
          className='w-10 h-10 rounded-full'
          src={logo}/>
        </Link>
        <ul
          className='flex gap-x-2 items-center'
        >
          {
            links.map((link, index) => <IconLink key={index} {...link} />)

          }
          <div
            onClick={() => setIsOpen(true)}
            className='hidden md:flex rounded-full shadow  h-10 w-10 bg-black/75  items-center justify-center '
          >
            <MdOutlineMenu
              size={26}
              color="white"
            />
          </div>
        </ul>
      </nav>
    </header>
  )
}

export default NavBar