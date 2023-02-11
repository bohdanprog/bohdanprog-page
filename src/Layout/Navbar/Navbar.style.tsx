import { Link } from '@mui/material'
import styled from 'styled-components'

export const StyledNavbar = styled.nav`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-start;
`

export const StyledLogo = styled(Link)`
  width: 150px;
  margin-right: 10px !important;
  text-decoration-line: none !important;
  font-weight: bold;
  color: ${({ theme }) => theme.colors.fontColor} !important;
`
