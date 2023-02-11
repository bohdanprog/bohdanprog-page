import type { HexColor } from 'types/types'

export interface MediaQueries {
  [key: string]: `@media (min-width: ${number}px)`
}

export interface SizesType {
  width: `${number}px`
  media: MediaQueries
}

export interface ColorsType {
  background: HexColor
  secondaryBackground: HexColor
  border: HexColor
  fontColor: HexColor
  secondaryFontColor: HexColor
}

declare module 'styled-components' {
  export interface DefaultTheme {
    sizes: SizesType
    colors: ColorsType
  }
}
