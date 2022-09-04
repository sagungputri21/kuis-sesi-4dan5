import React from "react";
import MembersCard from "../Cards/MembersCard";
import Title from "../CustomTitle/CustomTitle";

const MembersSection = () => {
    return (
      <div className="mx-10 mt-8">
        <Title 
            title="Members" 
            customStyle={"text-3xl text-blue-900 font-bold mb-5 -mx-16"}
            more="See all"
        />
        <div className="mx-8">
        <MembersCard 
            photoURL={"https://source.unsplash.com/random/people"}
            role={"Organizers"}
            name={"Adhy Wiranata"}
            count={4}
        />
        </div>
      </div>
    )
}

export default MembersSection;