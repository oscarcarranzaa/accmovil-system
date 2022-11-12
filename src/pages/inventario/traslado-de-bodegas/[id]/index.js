import StockMenu from '@/components/client/sideMenu/stock'
import Wrapper from '@/components/client/wrapper'
import AngleArrow from '@/components/icons/angleArrow'
import Img from '@/components/img'
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'

export default function Request() {
  const [Url, SetUrl] = useState('Cargando datos')
  const [open, setOpen] = useState(false)
  const Router = useRouter()
  const { query } = Router
  useEffect(() => {
    SetUrl(query.id)
  }, [query])
  console.log(Url)
  return (
    <>
      <Wrapper>
        <StockMenu>
          <div>
            <h3 className="text-2xl font-semibold line-clamp-2">
              Pedido San Lorenzo
            </h3>
            <div className="mt-5 bg-slate-100 p-5 pb-2 rounded-xl">
              <div className="flex justify-between items-center">
                <div className="flex items-center">
                  <div className="w-12 items-center rounded-full overflow-hidden">
                    <Img
                      src={
                        'https://i.ibb.co/YkpWhbf/69be63da-065a-4eb2-9950-9d4f3d743f6a.jpg'
                      }
                      width={100}
                      height={100}
                    />
                  </div>
                  <div className="ml-2">
                    <p className=" font-medium text-lg">Jose Cruz</p>
                    <p className="text-xs text-slate-600">
                      Accmovil San Lorenzo
                    </p>
                  </div>
                </div>
                <div className="flex flex-col items-end">
                  <p className="font-medium">ID: Whsyh78</p>
                  <p className="text-">29 de noviembre 2022</p>
                </div>
              </div>
              <div
                style={{ transition: 'height 200ms ease' }}
                className={`mt-3 grid overflow-hidden grid-cols-2 ${
                  !open ? 'h-0' : 'h-auto'
                }`}
              >
                <div>
                  <h4 className="font-medium mb-2 text-xl">Nota</h4>
                  <div className="bg-blue-400 inline-block p-3 pb-5 rounded-xl text-white w-10/12">
                    <p>
                      Favor entregar para el día solicitado, tengan cuidado con
                      el producto que envia por favor
                    </p>
                  </div>
                </div>
                <div>
                  <h4 className="font-medium mb-2 text-xl">Información</h4>
                  <div>
                    <ul>
                      <li>
                        <span className="font-medium mr-1">Estado:</span>En
                        proceso
                      </li>
                      <li>
                        <span className="font-medium mr-1">total piezas:</span>
                        50
                      </li>
                      <li>
                        <span className="font-medium mr-1">
                          piezas aceptadas:
                        </span>
                        34
                      </li>
                      <li>
                        <span className="font-medium mr-1">
                          piezas pendientes:
                        </span>
                        12
                      </li>
                      <li>
                        <span className="font-medium mr-1">
                          piezas rechazadas:
                        </span>
                        12
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="mt-2 w-full flex justify-center">
                <button
                  className="flex items-center"
                  onClick={() => setOpen(!open)}
                >
                  <div className="mr-1">
                    <AngleArrow size={14} />
                  </div>
                  <p>Menos</p>
                </button>
              </div>
            </div>
          </div>
        </StockMenu>
      </Wrapper>
    </>
  )
}
