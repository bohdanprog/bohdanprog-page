import styled from 'styled-components'

export const HomepageWrapper = styled.section`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin: 68px 0 96px;
  gap: 32px;
  ${({ theme }) => theme.sizes.media.sm} {
    margin: 128px 0;
  }
  ${({ theme }) => theme.sizes.media.xxl} {
    margin: 176px 0;
  }
`
