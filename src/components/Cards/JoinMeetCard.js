import React from "react"
import Button from "../Button/Button";
import Title from "../CustomTitle/CustomTitle";
import TableForm from "../DataTable/TableForm";

const JoinCard = () => {
    return (
        <section>
            <div className="mx-10 p-5 border bg-white shadow-md mt-6">
            <div className="flex gap-10">
              <img src="/logo-hacktiv8.png" alt="logo hactiv8" className="w-[180px] bg-blue-400"/>
              <div className="flex flex-col items-start">
                <Title customStyle={"font-bold text-3xl -ml-16 mb-3"} title={"Hacktiv8 Meetup"}/>
                <TableForm/>
                <Button 
                    customStyle={"bg-orange-600 text-white font-bold text-md rounded-md py-2 px-9 mt-3"} 
                    title={"Join Us"}
                />
              </div>
            </div>
            </div>
        </section>
    )
}

export default JoinCard;