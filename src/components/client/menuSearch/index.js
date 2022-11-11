import Search from 'components/client/search'
import GridSVG from 'components/icons/grid'
import ListSVG from 'components/icons/list'
import { useEffect } from 'react'
import { useThemeSettings } from 'context/themeContext'

export default function MenuSearch() {
  const { theme } = useThemeSettings()
  console.log(theme)
  useEffect(() => {
    const theme = window.localStorage.getItem('theme-items')
    console.log(theme)
    if (theme === null) {
      console.log('es nulo')
    }
  }, [])
  return (
    <div className="flex justify-between items-center">
      <div className="w-full mr-5">
        <Search />
      </div>
      <div className="flex border border-slate-500 rounded-md">
        <div>
          <button
            className="p-2 bg-slate-600"
            onClick={() => localStorage.setItem('theme-items', 'grid')}
          >
            <GridSVG size={24} fill={'#000'} />
          </button>
        </div>
        <div>
          <button
            className="p-2 bg-slate-600"
            onClick={() => localStorage.setItem('theme-items', 'list')}
          >
            <ListSVG size={24} fill={'#fff'} />
          </button>
        </div>
      </div>
    </div>
  )
}
