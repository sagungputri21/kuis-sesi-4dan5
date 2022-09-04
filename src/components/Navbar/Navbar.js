import React from "react"
import Button from "../Button/Button";

const Navbar = () => {
    return (
        <nav className="flex justify-between px-10 bg-blue-900 py-5">
          <div className="flex items-center gap-16">
            <h1 className="text-5xl text-orange-400 font-bold flex -mt-3 items-center">Qtemu</h1>
            <ul className="flex gap-16 text-white focus:outline-none">
                <li><a href="/">Create Meetup</a></li>
                <li><a href="/">Explore</a></li>
            </ul>
          </div>
          <div className="flex items-center">
          <Button
            customStyle={"border-2 border-orange-400 text-orange-500 font-bold py-2 hover:bg-orange-500 rounded-lg hover:text-white"}
            title={"LOGIN"}
          />
          </div>
        </nav>
    )
}

export default Navbar;