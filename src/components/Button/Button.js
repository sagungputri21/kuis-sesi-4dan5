import React from "react"

const Button = ({ title, customStyle  }) => {
    return (
        <button 
          className={`px-5 py-3 ${customStyle}`}
        >
          {title}
        </button>
    )
}

export default Button;