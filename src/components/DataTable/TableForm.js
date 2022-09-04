import React from "react"

const dataTabel = [
    {
        label: "Location",
        data: "Jakarta Selatan, Indonesia"
    },
    {
        label: "Member",
        data: "1,078"
    },
    {
        label: "Organizer",
        data: "Adhy Wiranata"
    }
];

const TableForm = ({ data }) => {
    return (
        <div className="flex items-start text-lg">
        <table className="flex flex-col">
        {dataTabel.map(({ label, data }) => (
            <tr>
            <td>
                <label>{label}</label>
            </td>
            <td className="pl-10">: {data}</td>
          </tr>
        ))}
        </table>
        </div>
    )
}

export default TableForm;