// import { MdOutlineClose } from "react-icons/md"
// import Brand from "./Brand"
import { motion } from 'framer-motion'
// import { useDispatch, useSelector } from 'react-redux'
// import { actions } from "../actions/openSidebar"
import { NavLink, useNavigate } from "react-router-dom"
const SideBar = ({ isOpen, setIsOpen }) => {
  const navigate = useNavigate();
  const toggleSideBar = () => setIsOpen(!isOpen);
  const list = [

    {

      value: "Home", link: "/"
    },
    {

      value: "Testimonials", link: "/#testimonials"
    },
    {

      value: "About", link: "about"
    },
    {

      value: "Contact Me", link: "contact"
    },
    {

      value: "Projects", link: "projects"
    },
    {

      value: "Whatsapp Us", link: "/"
    },

  ]
  return (
    <div className={`${isOpen ? "visible" : "invisible"} z-[101] text-white transition-[visibility] duration-300 inset-0 top-[-10px] bg-slate-400/10 fixed  bg-opacity-50  select-none`}
      onClick={toggleSideBar}
    >
      <div className="w-[min(300px,calc(100%-2rem))] flex flex-col    h-full " onClick={(e) => e.stopPropagation()}>
        <div className="flex  pt-4 items-center flex-none justify-between px-4 bg-black">
          <h1>brand</h1>

        </div>
        <div className="flex-1 bg-black flex items-center justify-center">
          <ul className="text-md" >
            {list.map((item, index) => {
              return (
                <NavLink to={item.link}
                  className={({ isActive }) => isActive ? "active group" : "group"}
                >
                  <motion.li
                    whileHover={{
                      scaleX: 1.2
                    }}
                    whileTap={{
                      scale: 1.4
                    }}
                    onClick={() => {
                      toggleSideBar()
                    }}
                    animate={{ x: isOpen ? 0 : -500 }}
                    transition={{ delay: index * .1 }}
                    className="text-2xl font-medium 
                     pb-1 relative text-center leading-8  
                    cursor-pointer " key={index}>{item.value}
                    <span
                      className='absolute
                      group-[:hover]:w-full transition-all duration-700
                      group-[.active]:w-full
                      max-w-[100px]
                      mx-auto left-1/2 -translate-x-1/2
                      bottom-0 w-0 rounded-full h-0.5 bg-slate-500  top-auto block'
                    >

                    </span>

                  </motion.li>

                </NavLink>
              )
            })}

          </ul>

        </div>
      </div>
    </div>
  )
}

export default SideBar