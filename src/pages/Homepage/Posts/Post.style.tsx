import styled from 'styled-components'

export const PostWrapper = styled('div')`
  padding: 24px;
  border-radius: 5px;
  cursor: pointer;
  background-color: ${({ theme }) => theme.colors.secondaryBackground};
  width: 100%;
  margin-bottom: 10px;
`
export const PostTitle = styled.h3`
  margin-bottom: 10px;
  font-weight: bold;
  color: ${({ theme }) => theme.colors.fontColor};
`

export const PostDescription = styled('p')`
  color: ${({ theme }) => theme.colors.secondaryFontColor};
`

export const PostsWrapper = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  align-items: flex-start;
  margin: 28px 0 96px;
  gap: 32px;
  ${({ theme }) => theme.sizes.media.sm} {
    margin: 50px 0 50px;
  }
  ${({ theme }) => theme.sizes.media.xxl} {
    margin: 50px 0 50px;
  }
`

export const PostInformationWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`
