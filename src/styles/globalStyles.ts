import { createGlobalStyle } from 'styled-components'
import { normalize } from 'styled-normalize'

const styled = { createGlobalStyle }

export const GlobalStyle = styled.createGlobalStyle`
  ${normalize}
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    line-height: 200%;
  }
  html {
    font-size: 16px;
    scroll-behavior: smooth;
  }
  body {
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    -webkit-tap-highlight-color: transparent;
    color: ${({ theme }) => theme.colors.fontColor};
    font-family: 'Readex Pro', sans-serif;
    font-weight: 400;
    background-color: ${({ theme }) => theme.colors.background};
  }
  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    font-weight: 700;
    line-height: 120%;
    margin: 0;
  }
  a {
    color: inherit;
    text-decoration: none;
    cursor: pointer;
  }
  section {
    width: 100%;
    margin: 48px 0 96px;
    ${({ theme }) => theme.sizes.media.sm} {
      margin: 128px 0;
    }
    ${({ theme }) => theme.sizes.media.xxl} {
      margin: 176px 0;
    }
  }
  nav {
    max-width: ${({ theme }) => theme.sizes.width};
    margin: 0 auto;
    padding: 0px 14px;
    ${({ theme }) => theme.sizes.media.lg} {
      padding: 0px 80px;
    }
    ${({ theme }) => theme.sizes.media.xxl} {
      padding: 0px 208px;
    }
  }

  main {
    max-width: 1000px;
    padding: 0px 14px;
    margin: 0 auto;
  }

  .footer {
    display: flex;
    justify-content: center;
  }
`
