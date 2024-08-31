import { StyledHeader, StyledText } from './WelcomeText.style'

export const WelcomeText = () => {
  return (
    <>
      <StyledHeader>Hello everyone 👋</StyledHeader>
      <ul>
        <StyledText>Hi, I'm Bohdan.</StyledText>
        <StyledText>
          This is my personal blog where I document my journey in finding my purpose in life.
        </StyledText>
        <StyledText>I'm a Software Engineer at Software Mansion.</StyledText>
      </ul>
    </>
  )
}
