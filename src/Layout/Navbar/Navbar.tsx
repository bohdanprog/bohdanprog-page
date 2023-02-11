import { Switch } from '../../components/Switch/Switch'
import { StyledLogo, StyledNavbar } from './Navbar.style'

export const Navbar = () => {
  return (
    <StyledNavbar>
      <StyledLogo href={'/'} className="flex-center">
        Bohdan Artiukhov
      </StyledLogo>
      <Switch />
    </StyledNavbar>
  )
}
