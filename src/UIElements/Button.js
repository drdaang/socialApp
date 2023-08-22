import React from 'react';
import './Button.css';
const Button = (props) => {
    return (
        <button className={`card-btn`} {...props}>{props.children}</button>
    );
}
export default Button;