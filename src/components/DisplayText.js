import React from 'react'
import { useState, useEffect, useRef } from "react"
const DisplayText = ({ text = "no text was pass to this " }) => {
    const ref = useRef()
    const [display, setDislay] = useState("")
    useEffect(() => {
        var _text = text, i = 0
        ref.current = setInterval(() => {
            const temp = _text.slice(0, Math.abs(i))
            setDislay(temp)
            i > _text.length - 1 ? i *= -1 : i += 1
        }, 120);

        return () => {
            clearInterval(ref.current)
        }
    }, [])

    return (
        <hi
            className="max-w-5xl !font-black mx-auto break-words inline-block !text-center  px-4 md:px-4 lg:px-10   w-full text-dark  capitalize text-4xl md:text-5xl  lg:text-6xl "
        >
            {display}
        </hi>
    )
}

export default DisplayText