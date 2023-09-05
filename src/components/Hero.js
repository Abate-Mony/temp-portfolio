import React from 'react'
import DisplayText from './DisplayText'
import Button from './Button'
import { Link } from 'react-router-dom'
import bgimage from "../assets/images/bgimage2.jpg"
import AnimatedText from './AnimateText'
const Hero = () => {
    return (
        <div className='min-h-[calc(100vh-60px)] hero-image text-white  grid place-content-center relative'
            style={{
                backgroundImage: `url(https://images.unsplash.com/photo-1534972195531-d756b9bfa9f2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fGNvZGV8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60)`,
                backgroundSize: "cover",
                backgroundRepeat: "no-repeat",
                backgroundPosition: "center center",
                "-webkit-backgroudn-size": "cover",
                backgroundAttachment: "fixed",
                transition: "bacground-image300ms ease-in 200ms"
                // backgroundPosition:"-10px 10px"
            }}
        >
            <div
                className='bg-black/25 z-[0] inset-0 absolute'
            >

            </div>
            <div className='relative z-[1]'
            >

                <AnimatedText
                    className='!text-4xl relief !mt-5 !max-w-2xl  md:!text-6xl  !text-white !font-bold !mb-10'
                    text={"Creative Developer specilized in creating websites"}
                />
                <DisplayText text="Hi , My Name Is Ako Bate Emmanuel " />
                <p
                    className='max-w-md text-lg mx-auto leading-normal tracking-wide pt-5 text-center'
                >
                    the main wohd ahdi fasgdiufg sauidg fsaidgfisaudg fsuadg fusgaduf gsaiugdf isadguiig
                </p>

                <div
                    className=' lg:flex justify-center gap-x-10 '
                >
                    <Link
                        to={"/contact"}
                    >
                        <Button
                            title="Hire Me"
                            className=" !rounded-full 
                     !py-2 !pb-3
                     !mt-5
                     !bg-black
                     !text-white
                     !border
                     !border-black
                     hover:!bg-transparent
                     hover:!border-white
                     !w-[min(350px,calc(100vw-10px))]
                    "
                        />
                    </Link>
                    <a href=''>
                        <Button
                            title="Download Cv"
                            className=" !rounded-full 
                   !py-2 !pb-3
                   !mt-5
                   !bg-transparent
                   !text-green-700 
                   !border
                   !border-black
                   hover:!bg-green-800
                   hover:!border-white
                   !w-[min(350px,calc(100vw-10px))]
                  "
                        />
                    </a>

                </div>
            </div>

        </div>
    )
}

export default Hero