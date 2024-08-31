import GitHubIcon from '@mui/icons-material/GitHub'
import XIcon from '@mui/icons-material/X'
import LinkedInIcon from '@mui/icons-material/LinkedIn'
import EmailIcon from '@mui/icons-material/Email'
import { IconLinkWrapper, NetworksWrapper } from './Networks.style'
import { ReactComponent as Leetcode } from '../../../assets/leetcode.svg'
import styled from 'styled-components'

const LeetcodeIcon = styled(Leetcode)`
  fill: ${({ theme }) => theme.colors.fontColor};
  width: 26px;
  height: 26px;
  margin-right: 10px;
`

export function Networks() {
  return (
    <NetworksWrapper>
      <IconLinkWrapper href={'https://leetcode.com/bohdanprog/'} title={'Leetcode'}>
        <LeetcodeIcon />
      </IconLinkWrapper>
      <IconLinkWrapper href={'https://github.com/bohdanprog'} title={'Github'}>
        <GitHubIcon style={{ width: 26, height: 26, marginRight: 10 }} />
      </IconLinkWrapper>
      <IconLinkWrapper href="https://x.com/bohdanprog" title="Twitter">
        <XIcon style={{ width: 26, height: 26, marginRight: 10 }} />
      </IconLinkWrapper>
      <IconLinkWrapper href="https://www.linkedin.com/in/bohdanprog/" title="LinkedIn">
        <LinkedInIcon style={{ width: 26, height: 26, marginRight: 10 }} />
      </IconLinkWrapper>
      <IconLinkWrapper href="mailto:bohdanprog@gmail.com" title="email">
        <EmailIcon style={{ width: 26, height: 26, marginRight: 10 }} />
      </IconLinkWrapper>
    </NetworksWrapper>
  )
}
