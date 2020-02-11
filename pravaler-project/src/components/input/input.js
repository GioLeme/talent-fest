import React from 'react';
import './input.css'

export default function Input(props,e){
    return(
        <input className="input"
            value={props.value}
            type={props.type}
            onBlur={props.focusOut}
            placeholder={props.placeholder}
            onChange={props.onChange}
            >
        </input>
    )
}