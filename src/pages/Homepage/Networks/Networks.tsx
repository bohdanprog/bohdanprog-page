import GitHubIcon from '@mui/icons-material/GitHub'
import TwitterIcon from '@mui/icons-material/Twitter'
import LinkedInIcon from '@mui/icons-material/LinkedIn'
import EmailIcon from '@mui/icons-material/Email'
import { IconLinkWrapper, NetworksWrapper } from './Networks.style'

export function Networks() {
  return (
    <NetworksWrapper>
      <IconLinkWrapper href={'https://github.com/bohdanprog'} title={'Github'}>
        <GitHubIcon style={{ width: 26, height: 26, marginRight: 10 }} />
      </IconLinkWrapper>
      <IconLinkWrapper href="https://twitter.com/bohdanprog" title="Twitter">
        <TwitterIcon style={{ width: 26, height: 26, marginRight: 10 }} />
      </IconLinkWrapper>
      <IconLinkWrapper href="https://www.linkedin.com/in/bohdanprog/" title="LinkedIn">
        <LinkedInIcon style={{ width: 26, height: 26, marginRight: 10 }} />
      </IconLinkWrapper>
      <IconLinkWrapper href="mailto:bohdanprogf@gmail.com" title="email">
        <EmailIcon style={{ width: 26, height: 26, marginRight: 10 }} />
      </IconLinkWrapper>
    </NetworksWrapper>
  )
}
