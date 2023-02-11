import { AppStateContextProvider } from './context/AppContext'
import Layout from './Layout/Layout'

function App() {
  return (
    <AppStateContextProvider>
      <Layout />
    </AppStateContextProvider>
  )
}

export default App
