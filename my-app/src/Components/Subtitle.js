
import React from "react"

export default function Subtitle({title, color="gray-800", textColor="gray-700"}){

    return (
        <div className="w-2/3 m-5 ">
            <h2 className={`justify-self-start text-4xl px-4 py-3 font-semibold text-${textColor}`}>{title}</h2>
            <div className={`w-1/3 h-1 bg-${color}`}></div>
        </div>
    )

}