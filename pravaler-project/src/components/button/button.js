import React from 'react';
export default function Button(props){
    return(
        <button className={props.class}
            type= "submit"
            onClick={props.handleClick}
            disabled={props.disabled}
            >
                {props.title}
        </button>
    )
}