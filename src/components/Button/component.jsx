import React from 'react'
import './style.css'

const Button = (props) => {
    return(
        <div className="btn-wrapper" style={{
            backgroundColor: props.bgColor ? props.bgColor : "black",
            width: props.width ? props.width : 200,
            height: props.height ? props.height : 45,
        }}>
            <button style={{
                width: props.width ? props.width : 200,
                height: props.height ? props.height : 45,
            }}>
                {props.text}
            </button>
        </div>
    )
}

export default Button