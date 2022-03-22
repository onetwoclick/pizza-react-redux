import React from "react";

function Button({url, className, children}){
    console.log();
    return(
        <button
            href={url}
            className={className}
        >
            {children}
        </button>
    )
}

export default Button;