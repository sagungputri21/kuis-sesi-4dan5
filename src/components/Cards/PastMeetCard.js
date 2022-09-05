import React from "react";
import Button from "../Button/Button";

const PastMeetCard = ({ date, id, partner, participants }) => {
    return (
      <div className="bg-white shadow-md rounded-md border-2 border-orange-500 w-72">
        <div className="flex flex-col gap-2 p-4">
          <h4 className="text-start font-bold">{date}</h4>
          <hr className="border border-blue-400"/>
          <div className="flex flex-col items-start text-start gap-3">
            <p className="text-blue-700 font-bold">{id} 
              <span className="text-black font-normal"
              > JakartaJS April Meetup with {partner}
              </span>
            </p>
            <p className="font-bold">{participants}
              <span className="text-gray-500 font-normal"> went</span>
            </p>
            <Button 
              title={"View"} 
              customStyle={"py-1 px-5 bg-orange-500 rounded-md text-white"}/>
          </div>
        </div>
      </div>
    )
}

export default PastMeetCard;