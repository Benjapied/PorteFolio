import { Disclosure, DisclosureButton, DisclosurePanel } from '@headlessui/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
import { useEffect } from 'react'
import toast, { Toaster } from 'react-hot-toast';


export default function Navbar() {

  const networks = [
    { name: "Linkedin", href: "https://www.linkedin.com/in/benjamin-arhancet-4aa356273/", icon: "icon-linkedin"},
    { name: "Github", href: "https://github.com/Benjapied", icon: "icon-github"},
    { name: "Gmail", href: "#", icon: "icon-gmail"}
  ]
  
  const navigation = [
    { name: 'Accueil', href: '#', current: true },
    //{ name: 'Mon expérience', href: '#', current: false },
    { name: 'Projets', href: '#project', current: false },
    //{ name: 'Galerie', href: '#', current: false },
  ]

  useEffect(() => {
    var obj = document.getElementsByClassName('icon-gmail');


    const handleClick = () => {
      navigator.clipboard.writeText("barhancet@gaming.tech");
      toast.success('Email copié !');
    };

    Array.from(obj).forEach(element => {
        element.addEventListener('click', handleClick);
    })

    return () => {
      Array.from(obj).forEach(element => {
        element.removeEventListener('click', handleClick);
      })
    }
        
  }, [])

  return (
    <>
      <Toaster
        position="top-center"
        reverseOrder={false}
      />

      {
      //--------------- Panel grand format -----------------
      }

      <div className="min-h-full sticky top-0 z-50">
        <Disclosure as="nav" className="bg-slate-800 sticky trop-0">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8"> { /* Contient tout panel qui s'affiche en résolution pc */}
            <div className="flex h-16 items-center justify-between">
              <div className="items-center hidden md:flex ml-10 space-x-4"> { /* Contient les éléments de la navbar */}
                {navigation.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    aria-current={item.current ? 'page' : undefined}
                    className= 'text-gray-300 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium'
                  >
                    {item.name}
                  </a>
                ))}
              </div>
              
              <div className="hidden md:flex w-40 h-full justify-end"> {/* Icones de réseaux */}
                  {networks.map((net) => (
                    <a key={net.name} 
                      href={net.href} 
                      target="_blank"
                      className="flex items-center justify-center h-full px-2"
                    >
                      <span className={`${net.icon} myIcon hover:scale-110 transition duration-200`}></span>
                    </a>
                  ))}    
              </div>
              <div className="-mr-2 flex md:hidden"> {/* Button pour fermer menu lorsque on est sur tel */}
                <DisclosureButton className="group relative inline-flex items-center justify-center rounded-md bg-gray-800 p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800">
                  <span className="absolute -inset-0.5" />
                  <span className="sr-only">Open main menu</span>
                  <Bars3Icon aria-hidden="true" className="block size-6 group-data-[open]:hidden" />
                  <XMarkIcon aria-hidden="true" className="hidden size-6 group-data-[open]:block" />
                </DisclosureButton>
              </div>
            </div>
          </div>

          {
          //--------------- Panel petit format -----------------
          }

          <DisclosurePanel className="md:hidden absolute bg-gray-800 w-full">
            <div className="space-y-1 px-2 pb-3 pt-2 sm:px-3">
              {navigation.map((item) => (
                <DisclosureButton
                  key={item.name}
                  as="a"
                  href={item.href}
                  aria-current={item.current ? 'page' : undefined}
                  className= 'text-gray-300 hover:bg-gray-700 hover:text-white block rounded-md px-3 py-2 text-base font-medium'                  
                >
                  {item.name}
                </DisclosureButton>
              ))}
            </div>
            <div className="border-t border-gray-700 pb-3">              
              <div className="mt-3 space-y-1 px-2">
                {networks.map((net) => (
                  <DisclosureButton
                    key={net.name}
                    as="a"
                    href={net.href}
                    className="flex rounded-md px-3 py-2 text-base font-medium text-gray-400 hover:bg-gray-700 hover:text-white"
                  >
                    <span className={`${net.icon} myIcon`}></span>
                    
                    <div className="flex items-center px-3">
                      {net.name}
                    </div>
                  </DisclosureButton>
                ))}
              </div>
            </div>
          </DisclosurePanel>
        </Disclosure>
      </div>
    </>
  )
}