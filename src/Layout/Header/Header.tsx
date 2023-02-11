import { type ReactNode } from 'react'
import { StyledHeader } from './Header.style'

interface HeaderProps {
  children: ReactNode
}

export const Header = ({ children, ...props }: HeaderProps) => {
  return <StyledHeader {...props}>{children}</StyledHeader>
}
