import Link from 'next/link'
import { useRouter } from 'next/router'
import { useEffect, useState, useRef } from 'react'
import Arrows from 'components/icons/arrows'
import Plus from 'components/icons/plus'

export default function MenuOptions({ action }) {
  const [statusURL, setStatusURL] = useState(false)
  const Router = useRouter()
  const { asPath, query, isReady } = Router
  useEffect(() => {
    setStatusURL(isReady)
  }, [isReady])
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
  return (
    <>
      <div className=" bg-slate-100 p-2 pl-5 pr-5 rounded-xl block justify-between xl:flex">
        <div className="flex w-full">
          <div className="flex items-center relative">
            <div className="flex items-center">
              <p className="mr-2 font-medium">Compañía:</p>
              <p className="bg-slate-300  p-1 pl-3 pr-3  rounded-3xl text-sm font-medium">
                Accmovil San Lorenzo
              </p>
            </div>
            <div ref={ref}>
              <div>
                <button
                  className="p-2 ml-1 hover:bg-slate-200 rounded-md"
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
        <div className="flex gap-3">
          {action.map((menu, index) => {
            const path = asPath.split('?')
            return (
              <div key={menu.link} className="">
                <Link href={`${path[0]}?${menu.query}=${menu.link}`}>
                  <a
                    className={`flex gap-1 items-center h-12 rounded-full p-3 overflow-hidden ${
                      statusURL && menu.link === query.action
                        ? 'bg-slate-300 hover:bg-slate-300 '
                        : statusURL && !query.action && index === 0
                        ? 'bg-slate-300'
                        : 'hover:bg-slate-200'
                    }`}
                    title={menu.name}
                  >
                    <div>{menu.icon}</div>
                    <span
                      className={
                        statusURL && menu.link === query.action
                          ? 'flex'
                          : !query.action && statusURL && index === 0
                          ? 'flex'
                          : 'hidden'
                      }
                    >
                      {menu.name}
                    </span>
                  </a>
                </Link>
              </div>
            )
          })}
        </div>
      </div>
    </>
  )
}
