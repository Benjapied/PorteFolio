import  Subtitle  from "../Subtitle.js"
import {ProjecFrame} from "./ProjectFrame.js"
import Section from '../Section.js'
import ProjectCarousel from './Carousel.js'
import { useLanguage } from "../../LanguageContext.js"

import data from "../../Model/Projects.json"

export default function Projects(){

    const { language } = useLanguage();

    return (
        <>
        <Section bgColor="gray-700" identity="project">
            <div className="my-5">
                <Subtitle title={data.global[language].mainTitle} textColor="white"/> 
                <div className="lg:min-w-2/3 items-center">
                    <ProjectCarousel projects={data.projects[language]} globalParam={data.global[language]}/>
                </div>
                
            </div>
        </Section>
        </>
    )

}