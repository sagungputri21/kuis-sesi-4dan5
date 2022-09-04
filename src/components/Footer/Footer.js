import React from 'react'

const Footer = () => {
    return (
        <footer 
          className="w-full h-24 mt-10 relative">
          <div className='flex items-center justify-center w-full h-24 mt-10 bg-slate-900 inset-x-0 bottom-0 absolute'>
            <h2 className="text-white text-lg">
                GP | <span className="text-lg font-sans text-blue-300"> Copyright Hacktiv8 2022</span>
            </h2>
        </div>
        </footer>
    )
}

export default Footer;