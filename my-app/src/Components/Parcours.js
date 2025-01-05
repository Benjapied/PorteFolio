import  Subtitle  from "./Subtitle.js"
import Section from "./Section.js"

export default function Parcours(){  

    return(
        <>
        <Section>
            <Subtitle title="J'ai rien fait de ma vie" color="gray-800"/>
            <div className="flex justify-center">
                <div className="flex flex-col items-center w-2/3 h-full ">
                    <p className='p-10'>frise chronologique vide pask jss mauvé</p>
                    <div className={`relative w-full h-1 bg-gray-800`}></div>
                </div>
            </div>
        </Section>
        </>
    )
}