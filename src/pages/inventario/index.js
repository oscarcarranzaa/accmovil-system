import TransferProdutsSVG from 'components/icons/transferProducts'
import SideMenu from 'components/client/sideMenu'
import Wrapper from 'components/client/wrapper'
import RoundedPlusSVG from 'components/icons/roundedPlus'
import OpenBoxSVG from 'components/icons/openBox'
import DemanagedSVG from 'components/icons/demanaged'
import useFetch from 'hooks/useFetch'
import Produts from 'components/client/product/productList'
import Search from '@/components/client/search'

export default function Inventario() {
  const { data: products } = useFetch('/api/products')
  const Links = [
    {
      name: 'Productos',
      link: '/inventario/productos',
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
      <Wrapper>
        <h1 className="text-2xl font-medium pt-3 pb-3">
          Inventario y facturación
        </h1>
        <div className="grid grid-cols-12 mt-8 gap-5">
          <div className="col-span-3">
            <SideMenu elements={Links} />
          </div>
          <div className="col-span-9">
            <div className="">
              <div className="w-4/12">
                <Search />
              </div>
            </div>
            <ul className="mt-5">
              {!products && 'cargandoooo'}
              {products &&
                products.map((pro) => {
                  return (
                    <li key={pro.id}>
                      <Produts item={pro} />
                    </li>
                  )
                })}
            </ul>
          </div>
        </div>
      </Wrapper>
    </>
  )
}
