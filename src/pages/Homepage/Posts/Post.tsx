import React from 'react'
import { PostData } from '../../../types/types'
import { PostDescription, PostInformationWrapper, PostTitle, PostWrapper } from './Post.style'

export function Post({ title, description, subTitle, link, author, date }: PostData) {
  return (
    <PostWrapper onClick={() => window.open(link, '_blank')}>
      <PostTitle>{title}</PostTitle>
      <PostDescription>{description}</PostDescription>
      <PostDescription>{subTitle}</PostDescription>
      <PostInformationWrapper>
        <PostDescription style={{ marginRight: 10 }}>{date}</PostDescription>
        <PostDescription>{author}</PostDescription>
      </PostInformationWrapper>
    </PostWrapper>
  )
}
