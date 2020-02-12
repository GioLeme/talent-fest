import React from 'react';
import './input.css'

export default function Input(props,e){
    return(
        <input className={props.className}
            value={props.value}
            type={props.type}
            onBlur={props.focusOut}
            placeholder={props.placeholder}
            onChange={props.onChange}
            maxLength={props.maxlength}
            // pattern={props.pattern}
            >
        </input>
    )
}