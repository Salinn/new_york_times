import React from 'react'
import { Alert } from 'reactstrap'

const ToastComponent = (props) => {
    const { toasts, removeToast } = props

    const generatedToasts = toasts.map(toast => {
        const toggle = () => removeToast({ id: toast.id })

        return (
            <Alert key={toast.id} color={toast.color} toggle={toggle}>
                {toast.message}
            </Alert>
        )
    })

    return (
        <div>
            { generatedToasts }
        </div>
    )
}

export default ToastComponent