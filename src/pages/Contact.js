import React from 'react'
import AnimatedText from '../components/AnimateText'
import Button from '../components/Button'

const Contact = () => {
    return (
        <div>
            <div
                className='relative py-6 bg-black/75 '
            >
                <h1
                    className='text-6xl text-slate-500 font-bold uppercase'
                >About Me</h1>
                <h3
                    className='absolute font-black top-1/2 w-full text-center text-4xl text-white -translate-y-1/2 '
                >know about me </h3>
            </div>
            <AnimatedText
                className='!text-5xl md:!text-6xl lg:!text-8'

                text={"Let Get In Touch"}
            />
            <div
                className='md:flex gap-x-5'
            >
                <div>left side</div>
                <div className='flex-none'>
                    <form
                        className='px-4 pb-5'
                    >
                        <input
                            type='email'
                            name='email'
                            placeholder='Email Address'
                            className='min-h-[50px] w-full outline-none  bg-slate-100  rounded-md 
                         hover:ring-1 pl-2 !text-lg mb-3
                            '
                        />
                        <input
                            type='email'
                            name='email'
                            placeholder='Email Address'
                            className='min-h-[50px] w-full outline-none  bg-slate-100  rounded-md 
                         hover:ring-1 pl-2 !text-lg mb-3
                            '
                        />
                        <Button
                            title="Send Message"
                            className="!w-[min(400px,calc(100%-20px))] rounded-2xl mx-auto !pb-2.5 !pt-2"
                        />
                    </form>
                </div>

            </div>
        </div>
    )
}

export default Contact