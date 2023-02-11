import type { AppState } from '../types/types'

const DARKMODE_KEY = 'DARKMODE' as const

export const setDarkModeInStorage = (value: AppState['isDarkMode']) => {
  localStorage.setItem(DARKMODE_KEY, JSON.stringify(value))
}

export const getDarkModeFromStorage = () => {
  const valueFromStorage = localStorage.getItem(DARKMODE_KEY)
  if (!valueFromStorage) {
    return false
  }
  try {
    return JSON.parse(valueFromStorage) as boolean
  } catch {
    return false
  }
}
