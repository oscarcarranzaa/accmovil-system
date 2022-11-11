import Image from 'next/image'
import Link from 'next/link'
export default function Navbar() {
  const linkNav = [
    {
      nav: 'Inicio',
      href: '/ '
    },
    {
      nav: 'Inventario',
      href: '/inventario'
    },
    {
      nav: 'Tienda web',
      href: '/proformas'
    },
    {
      nav: 'Equipo',
      href: '/Equipo'
    },
    {
      nav: 'Ventas',
      href: '/login'
    }
  ]
  return (
    <>
      <header className="pb-0 pt-3 bg-white border-b border-slate-300 shadow-md min-w-[800px]">
        <div className="w-11/12 m-auto max-w-7xl">
          <div className="flex justify-between flex-wrap mb-2">
            <div className="flex">
              <div>
                <Image
                  src={'/Logo-nombre.webp'}
                  width={200}
                  height={40}
                  objectFit="cover"
                ></Image>
              </div>
            </div>
            <div className="flex items-center">
              <div className="rounded-full overflow-hidden w-9 h-9">
                <Image
                  src={'/avatar/profile.jpg'}
                  width={36}
                  height={36}
                  objectFit="cover"
                ></Image>
              </div>
              <div className="text-lg font-bold ml-2">
                <span>Oscar Carranza</span>
              </div>
            </div>
          </div>
          <nav>
            <ul className="flex">
              {linkNav.map((i) => {
                return (
                  <li key={i.href} className="mr-1 mb-3 font-medium">
                    <Link href={i.href}>
                      <a className="p-1 pl-3 pr-3 hover:bg-zinc-300 text-zinc-500 hover:text-black rounded">
                        {i.nav}
                      </a>
                    </Link>
                  </li>
                )
              })}
            </ul>
          </nav>
        </div>
      </header>
    </>
  )
}
