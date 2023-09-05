import React from 'react'
import { motion, useInView } from 'framer-motion'
import { useState, useEffect, useRef } from 'react'
import Button from '../components/Button'
import { BsCodeSlash } from 'react-icons/bs'
const Project = ({ name,decription ,techs,liveLink}) => {
    const ref = useRef(null)
    const isInView = useInView(ref, { once: true, amount: 1, margin: "5px" })
    const animate = {
        y: 0, opacity: 1
    }
    useEffect(() => {
        if (isInView) {
            console.log("element is in view")
        }
    }, [isInView])

    return (<motion.div
        ref={ref}

        initial={{ y: 100, opacity: 0.5 }}
        transition={{ duration: 0.7 }}
        whileInView={animate}
        className={`${isInView && "active"} mx-1   group  min-h-[10rem] z-[20]  cursor-pointer -bg-black relative  rounded-md`}
    >
        <div
            className='relative z-[20] bg-white w-full h-full pb-3'
        >
            <div className='relative'>

                <img src='https://static.wixstatic.com/media/c6730f_abb77f6776c04e5a822686dbca808595~mv2.jpg/v1/fill/w_585,h_433,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/thumbnail%20portfolio%20inq.jpg'
                />
                <div
                    className='absolute group-[.active]:left-full transition-all duration-1000 inset-0 bg-white'
                ></div>
            </div>
            <h3 className='text-start mb-1 mt-3 pl-3 text-xl text-slate-800 font-bold capitalize'>{name}</h3>
            <p
                className='max-w-[330px] mb-2 text-xl  text-start leading-tight pl-2 '
            >
               {decription}
            </p>
            <p
                className='text-start text-gray-700 font-medium mb-1 pl-2 text-lg'
            >
            {
            techs?.map((item,index)=>` | ${item}`)
            }
            </p>
            <a
                target='_blank'
                href='ecommercewebsitewithbootstrap.vercel.app'
            >

                <Button
                    title={`<Code />`}
                    className="!w-[min(400px,calc(100%-10px))]
                group-[.active]:!translate-y-0
                !translate-y-[40px]
                !transition-all !duration-1000
                !mx-auto !block !pb-2.5 !pt-2"
                />
            </a>
            <a
                target='_blank'
                href={liveLink}
            >
                <Button
                    title="Live Demo"
                    className="!w-[min(400px,calc(100%-10px))]
                group-[.active]:!translate-y-0
                !translate-y-[40px]
                !transition-all !duration-1000
                !mx-auto !block !pb-2.5 !pt-2
                !bg-green-900
                "
                />
            </a>
        </div>
        <div
            className='absolute transition-all duration-1000  bg-black inset-0 -z-[1] w-full h-full group-[.active]:left-1.5 group-[.active]:top-1.5 rounded-r-md '
        >

        </div>
    </motion.div>)
}

export default Project