import { createContext, useContext, useEffect, useState } from 'react'

const ThemeSettings = createContext()
export function ThemeSettingsProvider({ children }) {
  const [theme, setTheme] = useState()
  useEffect(() => {
    const getSettings = window.localStorage.getItem('theme-items')
    !getSettings ? setTheme(getSettings) : setTheme(getSettings)
  }, [])
  console.log(theme)
  return (
    <ThemeSettings.Provider value={{ theme }}>
      {children}
    </ThemeSettings.Provider>
  )
}
export function useThemeSettings() {
  const themeContext = useContext(ThemeSettings)
  if (themeContext === undefined) {
    throw new Error('add themeContext to _app.js')
  }
  return themeContext
}
