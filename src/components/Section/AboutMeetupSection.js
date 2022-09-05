import React from "react";
import Title from "../CustomTitle/CustomTitle";

const AboutMeetupSection = () => {
    return (
        <div className="mx-10 mt-8">
        <Title 
            title="About Meetup" 
            customStyle={"text-3xl text-blue-900 font-bold mb-5 -mx-16"}
        />
        <div className="mx-8">
            <p className="text-lg">" Come and meet other developers interested in the JS and it's library in the Greater Jakarta Area "</p>
            <p>Twiter : <span className="text-blue-700">@JakartaJS </span>
                and we use the hastag 
                <span className="text-blue-700"
                > #jakartajs</span>
            </p>
        </div>
      </div>
    ) 
}

export default AboutMeetupSection;