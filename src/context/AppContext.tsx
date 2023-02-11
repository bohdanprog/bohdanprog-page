import { createContext, type ReactNode, useContext, useEffect, useState } from 'react'
import { getDarkModeFromStorage, setDarkModeInStorage } from '../utils/darkMode'
import type { AppState } from '../types/types'

const AppStateContext = createContext<AppState | null>(null)

export const AppStateContextProvider = ({ children }: { children: ReactNode }) => {
  const [isDarkMode, setDarkMode] = useState(false)

  useEffect(() => {
    setDarkMode(getDarkModeFromStorage())
  }, [])

  const toggleDarkMode = () => {
    setDarkMode((prevValue) => !prevValue)
    setDarkModeInStorage(!isDarkMode)
  }

  return (
    <AppStateContext.Provider
      value={{
        isDarkMode,
        toggleDarkMode,
      }}
    >
      {children}
    </AppStateContext.Provider>
  )
}

export const useAppState = () => {
  const appState = useContext(AppStateContext)
  if (!appState) {
    throw new Error('Missing AppStateContext Data')
  }
  return appState
}
