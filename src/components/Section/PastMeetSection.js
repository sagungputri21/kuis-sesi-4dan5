import React from "react";
import JoinCard from "../Cards/JoinMeetCard";
import PastMeetCard from "../Cards/PastMeetCard";
import Title from "../CustomTitle/CustomTitle";

const PastMeetSection = () => {
    return (
        <div className="mx-10 mt-10">
        <Title 
            title="PastMeetups" 
            customStyle={"text-3xl text-blue-900 font-bold mb-5 -mx-16"}
            more="See all"
        />
        <div className="mx-8">
        <PastMeetCard/>
        </div>
      </div>
    )
}

export default PastMeetSection;