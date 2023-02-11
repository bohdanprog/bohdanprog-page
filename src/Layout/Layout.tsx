import { Footer } from './Footer/Footer'
import { Main } from './Main/Main'
import { Header } from './Header/Header'
import { Navbar } from './Navbar/Navbar'
import { useTheme } from '../hooks/useTheme'
import { DefaultView, LayoutWrapper } from './styles'
import { ThemeProvider } from 'styled-components'
import { GlobalStyle } from '../styles/globalStyles'
import { Homepage } from '../pages/Homepage/Homepage'
import { Posts } from '../pages/Homepage/Posts/Posts'

export default function Layout() {
  const { theme } = useTheme()

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <LayoutWrapper>
        <DefaultView>
          <Header>
            <Navbar />
          </Header>
          <Main>
            <Homepage />
            <Posts />
          </Main>
          <Footer />
        </DefaultView>
      </LayoutWrapper>
    </ThemeProvider>
  )
}
