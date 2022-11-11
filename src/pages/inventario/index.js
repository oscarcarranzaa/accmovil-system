import Wrapper from 'components/client/wrapper'
import useFetch from 'hooks/useFetch'
import Produts from 'components/client/product/productList'
import MenuSearch from '@/components/client/menuSearch'
import StockMenu from '@/components/client/sideMenu/stock'

export default function Inventario() {
  const { data: products } = useFetch('/api/products')
  return (
    <>
      <Wrapper>
        <StockMenu>
          <div className="">
            <MenuSearch />
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
        </StockMenu>
      </Wrapper>
    </>
  )
}
