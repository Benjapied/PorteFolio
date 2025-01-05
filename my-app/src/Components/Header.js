

function Header({title}){

    return (
       <header className="bg-white shadow">
        <div className="mx-auto max-w-7xl px-4 py-6 ">
            <h1 className="text-6xl font-bold tracking-tight text-gray-900 py-20 text-center md:pl-20 md:text-left">{title}</h1>
        </div>
       </header>
    )

}

export default Header;