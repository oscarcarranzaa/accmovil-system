import RoundedPlusSVG from 'components/icons/roundedPlus'
import OpenBoxSVG from 'components/icons/openBox'
import DemanagedSVG from 'components/icons/demanaged'
import TransferProdutsSVG from 'components/icons/transferProducts'
import ItemsMenu from 'components/client/sideMenu/itemsMenu'

export default function StockMenu({ children }) {
  const Links = [
    {
      name: 'Productos',
      link: '/inventario',
      icon: <OpenBoxSVG size={24} />
    },
    {
      name: 'Traslado de bodegas',
      link: '/inventario/traslado-de-bodegas',
      icon: <TransferProdutsSVG size={24} />
    },
    {
      name: 'Nuevo',
      link: '/inventario/nuevo',
      icon: <RoundedPlusSVG size={24} />
    },
    {
      name: 'Averiados',
      link: '/inventario/averiados',
      icon: <DemanagedSVG size={24} />
    }
  ]
  return (
    <>
      <h1 className="text-2xl font-medium pt-3 pb-3">Inventario</h1>
      <div className="grid grid-cols-12 mt-8 gap-5">
        <div className="col-span-3">
          <ItemsMenu elements={Links} />
        </div>
        <div className="col-span-9 -mt-12">{children}</div>
      </div>
    </>
  )
}
