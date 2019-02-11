import React from 'react';
import { Alert } from 'reactstrap'
const ToastContainer = (props) => {
    const { toasts } = props

    const generatedToasts = toasts.map(toast => {
        return (
            <div className='mb-3'>
                <Alert color={toast.color || 'info'}>
                    { toast.message }
                </Alert>
            </div>
        )
    })

    return (
        <div>
            { generatedToasts }
        </div>
    );
}