import React from 'react'
import { useRouteError } from 'react-router-dom'
const ErrorElement = (payload) => {
console.log(payload,"this is the payload here")
    const error = useRouteError()
    console.log(error.statusCode)
    return (
        <div
        style={{color:"red"}}
        >ErrorElement : {error.message}</div>
    )
}

export default ErrorElement