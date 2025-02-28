import  Subtitle  from "../Subtitle.js"
import {ProjecFrame} from "./ProjectFrame.js"
import Section from '../Section.js'
import ProjectCarousel from './Carousel.js'

import data from "../../Model/Projects.json"

export default function Projects(){

    return (
        <>
        <Section bgColor="gray-700" identity="project">
            <div className="my-5">
                <Subtitle title='Projets' textColor="white"/> 
                <div className="lg:min-w-2/3 items-center">
                    <ProjectCarousel projects={data.projects}/>
                </div>
                
            </div>
        </Section>
        </>
    )

}