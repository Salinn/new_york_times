import React from 'react'
import { Alert } from 'reactstrap'

const ToastMessages = (props) => {
    const { toasts } = props
    const toastMessages = toasts.map(({ message, color }, index) => {
        return <Alert key={index} color={color} >{message}</Alert>
    })
    return (
        <div>
            { toastMessages }
        </div>
    )
}

export default ToastMessages