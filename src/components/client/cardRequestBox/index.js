import BoxCheck from '@/components/icons/boxCheck'
import BoxClock from '@/components/icons/boxCLock'
import BoxClose from '@/components/icons/boxClose'
import GoLink from '@/components/icons/goLink'
import Link from 'next/link'
import styles from './index.module.css'

export default function CardRequestBox() {
  return (
    <>
      <Link href={'/inventario/traslado-de-bodegas/hola1'}>
        <a>
          <div
            className={`container bg-slate-100 p-4 rounded-xl relative ${styles.cont_hover}`}
          >
            <div className={`absolute right-0 top-0 ${styles.button_go_link}`}>
              <GoLink size={18} />
            </div>
            <div>
              <p className="text-xl font-semibold line-clamp-1">
                Pedido Noviembre
              </p>
              <p className="text-sm">Accmovil San Lorenzo</p>
              <p className="text-sm">06-10-20</p>
            </div>
            <div className="flex justify-around mt-3">
              <div className="flex justify-center flex-col items-center fill-blue-600">
                <BoxClock size={48} />
                <p className="text-lg font-medium text-slate-800">33</p>
              </div>
              <div className="flex justify-center flex-col items-center fill-green-600">
                <BoxCheck size={48} />
                <p className="text-lg font-medium text-slate-800">6</p>
              </div>
              <div className="flex justify-center flex-col items-center fill-red-600">
                <BoxClose size={48} />
                <p className="text-lg font-medium text-slate-800">10</p>
              </div>
            </div>
            <div className="flex justify-between mt-3">
              <p className="font-medium text-sm">ID: Htg67G</p>
              <p className="font-medium text-sm">Acción: Solicitud</p>
            </div>
          </div>
        </a>
      </Link>
    </>
  )
}
