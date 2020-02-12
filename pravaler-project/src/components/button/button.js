import React from 'react';
export default function Button(props){
    return(
        <button className={props.className}
            type= "submit"
            onClick={props.handleClick}
            disabled={props.disabled}
            >
                {props.title}
        </button>
    )
}