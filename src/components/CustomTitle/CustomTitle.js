import React from "react"

const Title = ({ customStyle, title, more }) => {
    return (
        <div className="flex justify-between mx-16 items-center">
            <h1 className={`text-xl ${customStyle}`}>
                {title}
            </h1>
            { more ? <a className="text-lg text-blue" href="#">{more}</a> : null }
        </div>
    )
}

export default Title;