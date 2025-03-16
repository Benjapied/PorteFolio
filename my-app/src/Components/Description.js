
import Section from './Section.js'
import data from "../Model/Description.json"
import { useLanguage } from '../LanguageContext.js';
import { LanguageSwitcher } from '../LanguageSwitcher.js';
import { GetDescriptionLineBreak } from './Projects/MyModal.js';

export default function Description(){
 
    const { language } = useLanguage();

    return (<>
        <Section bgColor="orange-200">
            <div className="h-full flex items-center ">
                <div className="w-full bg-gray-800 min-h-60 rounded-md md:min-h-20 p-5 my-5">
                    <h2 className="text-white text-4xl px-4 py-3 font-semibold" >
                        {GetDescriptionLineBreak(data[language].title)}
                    </h2>
                    <div className="p-3">
                        <p className="text-white">
                            {GetDescriptionLineBreak(data[language].content)}
                        </p>
                    </div>
                    <div className="flex justify-center w-full my-5">
                    <button 
                        type="button" 
                        className="text-white bg-gray-700 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700"
                        onClick={() => {
                        // Force le téléchargement du PDF
                        const link = document.createElement("a");
                        link.href = `${process.env.PUBLIC_URL}/Resources/CV_Benjamin_Arhancet.pdf`; // Spécifie le chemin vers ton fichier PDF
                        link.download = "cv-benjamin-arhancet.pdf"; 
                        link.click();
                        }}
                    >
                        {data[language].resume}
                    </button>
                    </div>
                </div>
            </div>
        </Section>
    </>)
    
}