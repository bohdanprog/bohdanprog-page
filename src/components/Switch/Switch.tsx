import { useAppState } from '../../context/AppContext'
import { IconWrapper, SwitchWrapper } from './Switch.style'

import { ReactComponent as MoonIcon } from '../../assets/Switch/moon.svg'
import { ReactComponent as SunIcon } from '../../assets/Switch/sun.svg'
import { colorsDarkTheme } from '../../styles/theme'

export function Switch() {
  const { isDarkMode, toggleDarkMode } = useAppState()
  return (
    <SwitchWrapper onClick={toggleDarkMode}>
      {isDarkMode ? (
        <IconWrapper>
          <SunIcon color={'#fff'} />
        </IconWrapper>
      ) : (
        <IconWrapper>
          <MoonIcon color={colorsDarkTheme.background} />
        </IconWrapper>
      )}
    </SwitchWrapper>
  )
}
