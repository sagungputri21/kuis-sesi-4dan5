import React from "react";

const MessageCard = ({subject, date, mainText, sender }) => {
    return (
      <div className="bg-white rounded-md shadow-inner p-5">
      <div className="flex flex-col gap-2 items-start bg-blue-100 p-5">
        <div className="gap-1 text-start">
          <p className="font-bold text-xl">{subject}</p>
          <p className="text-sm text-blue-500">{date}</p>
        </div>
        <p className="text-gray-700 text-start w-[90%]">{mainText}</p>
        <p>{sender}</p>
      </div>
      </div>
    )
}

export default MessageCard;