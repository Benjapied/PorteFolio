export default function ProjectFrame({data}){

    return (
        <div className="w-2/3 h-20 bg-rose-300">
            <h2>
                Title
            </h2>
            <p>
                Date projet, type de projet, <br/>
                langage/moteur, temps de travail, taille équipe <br/>
                Description projet <br/>
                Compétences aquises, liens (github, itchiio)
            </p>
        </div>
    )

}