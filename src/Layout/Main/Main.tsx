import { type ReactNode } from 'react'

import { StyledMain } from './Main.style'

interface MainProps {
  children: ReactNode
}

export const Main = ({ children, ...props }: MainProps) => {
  return <StyledMain {...props}>{children}</StyledMain>
}
