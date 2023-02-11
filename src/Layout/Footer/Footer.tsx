import { CopyrightInfo, FooterContent, StyledFooter } from './Footer.style'

export const Footer = ({ ...props }) => {
  return (
    <StyledFooter {...props}>
      <FooterContent className="footer">
        <CopyrightInfo>© {new Date(Date.now()).getUTCFullYear()} Bohdan Artiukhov</CopyrightInfo>
      </FooterContent>
    </StyledFooter>
  )
}
