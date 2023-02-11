import { Networks } from './Networks/Networks'
import { WelcomeText } from './WelcomeText/WelcomeText'
import { HomepageWrapper } from './styles'

export function Homepage() {
  return (
    <HomepageWrapper>
      <WelcomeText />
      <Networks />
    </HomepageWrapper>
  )
}
