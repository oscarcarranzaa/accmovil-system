import CloseSVG from '@/components/icons/Close'
import SearchSVG from 'components/icons/search'
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'

export default function Search() {
  const Router = useRouter()
  const [searchLength, setSearchLength] = useState('')
  const [search, setSearch] = useState('')
  useEffect(() => {
    const query = `${Router.pathname}?q=${search}`
    console.log(search.length)
    search.length > 0 ? Router.push(query) : Router.push(Router.pathname)
  }, [search])
  console.log(search)
  const sendSearch = (e) => {
    e.preventDefault()
    setSearch(e.target.search.value)
  }
  return (
    <>
      <form onSubmit={sendSearch}>
        <label className="w-full border rounded-md border-slate-500 flex items-center overflow-hidden">
          <div className="pl-4">
            <SearchSVG size={20} fill={'#555'} />
          </div>
          <input
            type="text"
            placeholder="Buscar"
            name="search"
            value={searchLength}
            autoCapitalize="off"
            autoComplete="off"
            className="w-full p-2 pl-3 bg-transparent"
            onChange={(e) => {
              setSearchLength(e.target.value)
            }}
          />
          <button
            type="button"
            className={`${
              searchLength.length === 0 ? 'hidden' : 'block'
            } mr-3 p-1 rounded-full`}
            onClick={() => {
              setSearchLength('')
              setSearch('')
            }}
          >
            <CloseSVG size={15} fill={'#111'} />
          </button>
        </label>
      </form>
    </>
  )
}
