
import React from "react"

export default function Section({children, bgColor="bg-gray-200"}){

    return (
        <div className= {`flex justify-center w-full bg-${bgColor} min-h-96 md:min-h-80`}>
            <div className="flex flex-col md:w-2/3 w-full">
                {children}
            </div>
        </div>
    )

}