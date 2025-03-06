
import Section from './Section.js'

export default function Description(){
 
    return (<>
        <Section bgColor="orange-200">
            <div className="h-full flex items-center ">
                <div className="w-full bg-gray-800 min-h-60 rounded-md md:min-h-20 p-5 my-5">
                    <h2 className="text-white text-4xl px-4 py-3 font-semibold" >
                        Qui suis-je ?
                    </h2>
                    <div className="p-3">
                        <p className="text-white">
                            Je suis Benjamin Arhancet et j'ai 20 ans. <br/>
                            Cela fait maintenant plusieurs années que mon objectif est de pouvoir créer mes propres jeux vidéo. <br />
                            Ayant beaucoup joué à toutes sortes de jeux depuis mon enfance, je me suis toujours demandé ce qu'il se cachait derrière ces systèmes complexes, ces paysages fabuleux et ces histoires passionnantes. <br />
                            C'est pour cela qu'en 2022, j'ai intégré le Gaming Campus: une école d'informatique pour apprendre le développement de jeu vidéo de A à Z. J'ai pendant ce cursus réalisé de nombreux projets qui m'ont permi de devenir chaque jour meilleur dans ce domaine. <br />
                            J'ai à présent les compétences pour créer mes propres jeux, et je suis actuellement à la recherche d'une alternance dans un studio. <br />
                            Sur ce site, vous pourrez observer les différents projets que j'ai réalisés durant mes études, je vous souhaite donc une bonne visite !<br />
         
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
                        Mon CV
                    </button>
                    </div>
                </div>
            </div>
        </Section>
    </>)
    
}