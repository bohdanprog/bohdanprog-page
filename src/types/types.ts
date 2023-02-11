export interface AppState {
  isDarkMode: boolean
  toggleDarkMode: () => void
}

export interface PostData {
  id: number
  title: string
  description: string
  subTitle: string
  link: string
  author: string
  date: string
}
