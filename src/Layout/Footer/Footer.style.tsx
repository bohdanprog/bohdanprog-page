import styled from 'styled-components'

export const StyledFooter = styled.footer`
  width: 100%;
  background: ${({ theme }) => theme.colors.background};
  padding: 24px 0px;
  justify-content: center;
`
export const FooterContent = styled('div')`
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  font-size: 14px;
  row-gap: 48px;
  ${({ theme }) => theme.sizes.media.lg} {
    flex-direction: row;
    column-gap: 48px;
    padding: 24px;
  }
`

export const CopyrightInfo = styled.div`
  font-weight: 400;
  justify-content: center;
  display: flex;
  color: ${({ theme }) => theme.colors.fontColor};
`
