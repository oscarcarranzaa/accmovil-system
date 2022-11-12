import MenuOptions from 'components/client/menuOptionPages'
import BoxMadeSVG from 'components/icons/boxMade'
import BoxPlusSVG from 'components/icons/boxPlus'
import BoxReceivedSVG from 'components/icons/boxReceived'
import BoxRequestsSVG from 'components/icons/boxRequests'
import BoxSendSVG from 'components/icons/BoxSend'
import ClockHistorySVG from 'components/icons/clockHistory'
import StockMenu from 'components/client/sideMenu/stock'
import Wrapper from 'components/client/wrapper'
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'
import CardRequestBox from '@/components/client/cardRequestBox'

export default function Transfer() {
  const [company, SetCompany] = useState()
  const Router = useRouter()
  const { id } = Router.query
  useEffect(() => {
    SetCompany(id)
  }, [id])
  console.log(company)
  const size = 24
  const actions = [
    {
      name: 'Solicitudes',
      link: 'solicitudes',
      icon: <BoxRequestsSVG size={24} />,
      query: 'action'
    },
    {
      name: 'Realizados',
      link: 'realizados',
      icon: <BoxMadeSVG size={size} />,
      query: 'action'
    },
    {
      name: 'Recibidos',
      link: 'recibido',
      icon: <BoxReceivedSVG size={size} />,
      query: 'action'
    },
    {
      name: 'enviados',
      link: 'enviado',
      icon: <BoxSendSVG size={size} />,
      query: 'action'
    },
    {
      name: 'Pedir',
      link: 'pedir',
      icon: <BoxPlusSVG size={size} />,
      query: 'action'
    },
    {
      name: 'Historial',
      link: 'historial',
      icon: <ClockHistorySVG size={size} />,
      query: 'action'
    }
  ]
  return (
    <>
      <Wrapper>
        <StockMenu>
          <div>
            <MenuOptions
              action={actions}
              path={'inventario/traslado-de-bodegas/'}
            />
            <div className="mt-10 grid grid-cols-2 justify-between gap-5">
              <CardRequestBox />
              <CardRequestBox />
            </div>
          </div>
        </StockMenu>
      </Wrapper>
    </>
  )
}
