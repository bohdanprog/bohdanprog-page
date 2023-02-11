import { useAppState } from '../context/AppContext'
import { colorsDarkTheme, colorsLightTheme, sizesTheme } from '../styles/theme'

export const useTheme = () => {
  const { isDarkMode } = useAppState()
  const theme = {
    sizes: sizesTheme,
    colors: isDarkMode ? colorsDarkTheme : colorsLightTheme,
  }
  return { theme }
}
