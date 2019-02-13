import React from 'react';
import { Alert } from 'reactstrap';

const ToastContainer = (props) => {
    const { 
        toasts, 
        removeToast 
    } = props

    const generateToasts = toasts.map(({ message, color, id }) => {
        const onClick = () => removeToast({ id })

        return (
            <Alert key={id} color={color} toggle={onClick}>
                { message }
            </Alert>
        )
    })

    return <div id='ToastContainer'> { generateToasts } </div>
}

export default ToastContainer