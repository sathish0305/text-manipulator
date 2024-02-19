import React from 'react'

function AlertComponent(props) {
    return (
        <div style={{height:"50px"}}>
            {props.alert && <div className={`alert alert-${props.alert.type}`} role="alert">
                <strong>{props.alert.type}</strong>: Text Changed to {props.alert.msg} form.
            </div>}
        </div>
    )
}

export default AlertComponent