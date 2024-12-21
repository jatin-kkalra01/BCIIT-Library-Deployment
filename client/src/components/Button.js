import React from "react";
// import { Button } from 'antd';

function Button({ 
    title,
    variant = "contained",
    color = "primary",
    type = "button",
    onClick,
    fullWidth = false,
    disabled
}) {
    let className = fullWidth ? "w-100 rounded " : "pr-2 pl-2 rounded cursor-pointer " ;
    if(variant === 'contained' && !disabled){
        className += "bg-" + color + " text-white";
    } else if(variant === 'outlined' && !disabled) {
        className += "border-" + color + " text-" + color;
    }

    if (disabled) {
        className += "disabled-btn";
      }

    return (
        <button className={className} type={type} onClick={onClick}>
            {title}
        </button>
    );
    
}

export default Button;