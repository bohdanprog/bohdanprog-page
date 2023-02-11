import { Icon } from '@mui/material'
import { ReactNode } from 'react'
import styled from 'styled-components'

export const NetworksWrapper = styled.div`
  display: flex;
  align-items: center;
`

interface IconLinkWrapper {
  href: string
  title: string
  children: ReactNode
}

export const IconLinkWrapper = ({ href, title, children }: IconLinkWrapper) => {
  return (
    <a href={href} target="_blank" rel="noopener noreferrer me" title={title}>
      {children}
    </a>
  )
}
