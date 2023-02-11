import styled from 'styled-components'

export const StyledHeader = styled.h1`
  font-size: 28px;
  text-align: flex-start;
  color: ${({ theme }) => theme.colors.fontColor};
  ${({ theme }) => theme.sizes.media.lg} {
    font-size: 32px;
  }
  ${({ theme }) => theme.sizes.media.xl} {
    font-size: 30px;
  }
`

export const StyledText = styled.li`
  font-size: 16px;
  display: inline-block;
  color: ${({ theme }) => theme.colors.secondaryFontColor};
  width: 100%;
  ${({ theme }) => theme.sizes.media.lg} {
    font-size: 18px;
  }
  ${({ theme }) => theme.sizes.media.xl} {
    font-size: 20px;
  }
`
