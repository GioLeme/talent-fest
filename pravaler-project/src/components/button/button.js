import React from 'react';
export default function Button(props){
    return(
        <button className={props.class}
            type= "submit"
            onClick={props.handleClick}
            title={props.title}
            >
        </button>
    )
}