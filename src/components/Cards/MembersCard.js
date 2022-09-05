import React from "react";

const MembersCard = ({ photoURL, role, name, count }) => {
    return (
      <div className="flex gap-8 items-center py-5 px-8 rounded-md bg-white shadow-inner">
        <img src={photoURL} alt="member-photo" className="w-20 h-20 rounded-full"/>
        <div className="flex flex-col w-52 items-start">
          <p className="text-xl font-semibold mb-2">{role}</p>
          <div className="flex justify-between">
            <div className="flex gap-12">
                <p className="text-sm text-blue-500">{name}</p>
                <p className="text-sm text-blue-500">{count} others</p>
            </div>
          </div>
        </div>
      </div>
    )
}

export default MembersCard;