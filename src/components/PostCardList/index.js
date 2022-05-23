import React from "react"
import styled from "styled-components"

import PostCard from "./PostCard"

const NoContent = styled.div``

const PostCardListWrapper = styled.div``

const PostCardList = ({ postList }) => {
  if (!postList.length) return <NoContent>No post available</NoContent>
  return (
    <PostCardListWrapper>
      {postList.map(post => {
        const { excerpt, frontmatter } = post
        const {
          thumbnail,
          title,
          category,
          author,
          date,
          readTime,
          isFeaturedPost,
        } = frontmatter

        return (
          <PostCard
            key={post.id}
            excerpt={excerpt}
            thumbnail={thumbnail}
            title={title}
            category={category}
            author={author}
            date={date}
            readTime={readTime}
            isFeaturedPost={isFeaturedPost}
          />
        )
      })}
    </PostCardListWrapper>
  )
}

export default PostCardList
