import type { DefaultTheme } from 'styled-components'
import { MediaQueries } from './styled'

export const colorsDarkTheme: DefaultTheme['colors'] = {
  background: '#1d1e20',
  secondaryBackground: '#2e2e33',
  border: '#182E49',
  fontColor: '#dadadb',
  secondaryFontColor: '#6c6c6c',
}

export const colorsLightTheme: DefaultTheme['colors'] = {
  background: '#f5f5f5',
  secondaryBackground: '#fff',
  border: '#EDEDED',
  fontColor: '#1e1e1e',
  secondaryFontColor: '#6c6c6c',
}

const BREAKPOINTS: MediaQueries = {
  sm: '@media (min-width: 640px)',
  md: '@media (min-width: 768px)',
  lg: '@media (min-width: 1024px)',
  xl: '@media (min-width: 1280px)',
  xxl: '@media (min-width: 1536px)',
}

export const sizesTheme: DefaultTheme['sizes'] = {
  width: '1920px',
  media: BREAKPOINTS,
}
