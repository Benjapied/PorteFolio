
import Section from './Section.js'

export default function Description(){
 
    return (<>
        <Section bgColor="gray-600">
            <div className="h-full flex items-center">
                <div className="w-full bg-gray-800 min-h-60 rounded-md md:h-20">
                    <h2 className="text-white text-4xl px-4 py-3 font-semibold" >
                        Coucou c'est moi
                    </h2>
                    <div className="px-5 py-2">
                        <p className="text-white">
                            Blablabla je suis le goat <br/>
                            Blablabla je vais coder fortnite en 48h :000
                        </p>
                    </div>
                </div>
            </div>
        </Section>
    </>)
    
}