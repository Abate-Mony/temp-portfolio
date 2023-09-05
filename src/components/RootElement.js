import React, { useState } from 'react'
import { Outlet } from "react-router-dom"
import SideBar from './SideBar'
import NavBar from './NavBar'
import Footer from './Footer'
import {AiOutlineMinus} from 'react-icons/ai'
import { CgMenuMotion } from "react-icons/cg"
const RootElement = () => {
    const [isOpen, setIsOpen] = useState(false)
    return (
        <div
            className='container- -mx-auto'
        >
            <div
                onClick={() => setIsOpen(true)}
                className='w-14 flex items-center justify-center h-14 rounded-full md:hidden bg-black/95 fixed bottom-10 right-8  z-[100]'
            >
                {
                    isOpen ? <AiOutlineMinus
                        size={27}
                        color='white'
                    /> : <CgMenuMotion
                        size={27}
                        color='white'
                    />
                }
            </div>
            <NavBar setIsOpen={setIsOpen} />
            <SideBar
                isOpen={isOpen}
                setIsOpen={setIsOpen}
            />
            <Outlet />
            <Footer />
        </div>
    )
}

export default RootElement