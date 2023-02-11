import React from 'react'
import { Post } from './Post'
import { data } from '../../../data/data'
import { PostsWrapper } from './Post.style'

export function Posts() {
  return (
    <PostsWrapper>
      {data.map((post) => (
        <Post
          id={post.id}
          key={post.id}
          title={post.title}
          description={post.description}
          subTitle={post.subTitle}
          link={post.link}
          author={post.author}
          date={post.date}
        />
      ))}
    </PostsWrapper>
  )
}
