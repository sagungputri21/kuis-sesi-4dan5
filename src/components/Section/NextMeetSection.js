import React from "react";
import MessageCard from "../Cards/MessageCard";
import Title from "../CustomTitle/CustomTitle";

const NextMeetSection = () => {
    return (
      <div className="mx-10 mt-8">
        <Title 
            title="Next Meetup" 
            customStyle={"text-3xl text-blue-900 font-bold mb-5 -mx-16"}
        />
        <div className="mx-8">
          <MessageCard
            subject={"Awesome meetup and event"}
            mainText="Hello, Javascript & Node.js Ninjas! 
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. 
            Mollitia beatae illo est facilis, placeat tenetur nihil fugiat dolor expedita tempore inventore libero quaerat ab tempora commodi dignissimos sint dolorem. Blanditiis.
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Error illum accusantium voluptas ex non? Iste assumenda eligendi voluptatem necessitatibus voluptates, harum hic nihil similique voluptas, modi amet corrupti possimus. Sequi.
            Remember to bring a photo ID to get though building security"
            date={"25 January 2019"}
            sender="Best : Hengki, Giovanni, Sofian, Riza, dkk."
          />
        </div>
      </div>
    )
}

export default NextMeetSection;