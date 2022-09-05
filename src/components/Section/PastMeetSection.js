import React from "react";
import PastMeetCard from "../Cards/PastMeetCard";
import Title from "../CustomTitle/CustomTitle";
// import { data } from "../../../data/pastMeet.json"

const PastMeetSection = () => {
    return (
        <div className="mx-10 mt-10">
        <Title 
            title="PastMeetups" 
            customStyle={"text-3xl text-blue-900 font-bold mb-5 -mx-16"}
            more="See all"
        />
        <div className="mx-8">
            {/* {data.map((data) => {
                <PastMeetCard
                    id={data.id}
                    date={data.date}
                    partner={data.partner}
                    participants={data.count}
                />
            })} */}
            <PastMeetCard
                    id={"#39"}
                    date={"27 November 2017"}
                    partner={"Kumparan"}
                    participants={139}
                />
        </div>
      </div>
    )
}

export default PastMeetSection;