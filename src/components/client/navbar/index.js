import Image from 'next/image'
import Link from 'next/link'
import { useState, useEffect, useRef } from 'react'
import Arrows from 'components/icons/arrows'
import Plus from 'components/icons/plus'

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const ref = useRef()
  useEffect(() => {
    const checkOutsideClick = (e) => {
      if (open && ref.current && !ref.current.contains(e.target)) {
        setOpen(false)
        console.log('cerrado')
      }
    }
    document.addEventListener('mousedown', checkOutsideClick)
    return () => {
      document.removeEventListener('mousedown', checkOutsideClick)
    }
  }, [open])

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
              <div className="ml-2 flex items-center relative">
                <div className="flex items-center">
                  <p className="bg-slate-900 text-white pl-2 pr-2 rounded-3xl text-sm font-medium">
                    San Lorenzo
                  </p>
                </div>
                <div ref={ref}>
                  <div>
                    <button
                      className="p-2 ml-1 hover:bg-slate-300 rounded-md"
                      onClick={() => {
                        setOpen(!open)
                      }}
                    >
                      <Arrows />
                    </button>
                  </div>
                  <div
                    className={`absolute top-12 left-0 bg-white p-3 border border-zinc-400 rounded-md min-w-[250px] ${
                      open ? 'block' : 'hidden'
                    }`}
                    tabIndex={-1}
                  >
                    <small className="text-slate-600">Seleccione Tienda</small>
                    <ul>
                      {[
                        'Accmovil Principal',
                        'Accmovil Unimall',
                        'Accmovil San Lorenzo',
                        'Accmovil Almacen'
                      ].map((item) => {
                        return (
                          <li key={item} className="flex mt-1">
                            <a
                              href="/login"
                              className="p-1 flex items-center w-full hover:bg-slate-300 rounded-md font-semibold text-sm"
                            >
                              <div>
                                <div className="bg-gradient-to-r from-[#fe1501] via-[#FF3F10] to-[#FA9100] w-6 h-6 rounded-full mr-2"></div>
                              </div>
                              {item}
                            </a>
                          </li>
                        )
                      })}
                      <hr className="mt-1" />
                      <li className="flex mt-1">
                        <a
                          href="/"
                          className="p-1 flex items-center w-full hover:bg-slate-300 rounded-md font-semibold text-sm"
                        >
                          <div>
                            <div className="w-6 h-6 rounded-full mr-2 border border-[#FF3F10] flex justify-center items-center">
                              <Plus fill={'#FF3F10'} size={15} />
                            </div>
                          </div>
                          Crear Tienda
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
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
