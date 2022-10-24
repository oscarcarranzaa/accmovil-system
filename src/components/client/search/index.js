import CloseSVG from '@/components/icons/Close'
import SearchSVG from 'components/icons/search'
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'

export default function Search() {
  const Router = useRouter()
  const [search, setSearch] = useState('')
  console.log(`${Router.pathname}?q=${search}`)
  useEffect(() => {
    const query = `${Router.pathname}?q=${search}`
    search.length > 0 ? Router.push(query) : Router.push(Router.pathname)
  }, [search])
  console.log(Router.query.q)
  return (
    <>
      <label className="w-full border rounded-2xl bg-slate-50 border-primary flex items-center overflow-hidden">
        <div className="pl-4">
          <SearchSVG size={20} fill={'#111'} />
        </div>
        <input
          type="text"
          placeholder="Buscar"
          value={search}
          className="w-full p-2 pl-3 bg-transparent"
          onChange={(e) => setSearch(e.target.value)}
        />
        <button
          className={`${
            search.length === 0 ? 'hidden' : 'block'
          } mr-3 p-1 rounded-full`}
          onClick={() => {
            setSearch('')
          }}
        >
          <CloseSVG size={15} fill={'#111'} />
        </button>
      </label>
    </>
  )
}
