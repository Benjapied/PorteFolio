import  Subtitle  from "./Subtitle.js"
import {ProjecFrame} from "./Frame.js"
import Section from './Section.js'
import ProjectCarousel from './Carousel.js'

export default function Projects(){

    const projects = [
        {id:1, title:"Projet test", description : "blablabla", images : "Images/lol.jpg"}
    ]

    return (
        <>
        <Section bgColor="gray-700">
            <Subtitle title='Projets' textColor="white"/> 
            <div className="h-80">
                <ProjectCarousel/>
            </div>
        </Section>
        </>
    )

}