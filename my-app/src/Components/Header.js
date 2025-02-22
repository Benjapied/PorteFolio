

function Header({title}){

    return (
       <header className="bg-white shadow bg-banner-header w-full">
            <div className="flex justify-center items-center md:justify-start flex-col md:flex-row mx-auto max-w-7xl px-2 py-6 h-full md:h-full">
                <img
                    src="/Images/Banners/profile-pic_1.png"
                    className="w-1/2 md:h-60 md:w-auto"
                    alt={`Arhancet Benhjamin's face`}
                />
                <h1 className="text-6xl font-bold tracking-tight text-orange-50 py-20 text-center md:pl-20 md:text-left ">{title}</h1>
            </div>
       </header>
    )
}

export default Header;