import { ThemeSettingsProvider } from 'context/themeContext'
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  return (
    <ThemeSettingsProvider>
      <Component {...pageProps} />
    </ThemeSettingsProvider>
  )
}

export default MyApp
