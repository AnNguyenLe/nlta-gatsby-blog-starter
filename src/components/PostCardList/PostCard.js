import React from "react"
import styled from "styled-components"
import { GatsbyImage, getImage } from "gatsby-plugin-image"

const PostCardWrapper = styled.div`
  width: 30%;
  position: relative;
`

const Thumbnail = styled(GatsbyImage)`
  width: 100%;
  border-radius: 8px;
`

const FeaturedTag = styled.div`
  height: 2rem;
  width: 4rem;
  background-color: whitesmoke;
  color: black;
  position: absolute;
  top: 3rem;
  box-shadow: 5px 10px #888888;
`

const Category = styled.div`
  font-size: 1.5rem;
  font-weight: bold;
`
const Content = styled.div``

const Title = styled.div`
  font-size: 2rem;
  font-weight: bolder;
`

const Excerpt = styled.div``

const Author = styled.div``

const Date = styled.div``

const ReadTime = styled.div``

const PostCard = ({
  thumbnail,
  title,
  excerpt,
  category,
  author,
  date,
  readTime,
  isFeaturedPost,
}) => {
  return (
    <PostCardWrapper>
      <Thumbnail image={getImage(thumbnail)} alt={title} className="img" />
      {isFeaturedPost && <FeaturedTag>FEATURED</FeaturedTag>}
      <Category>{category}</Category>
      <Content>
        <Title>{title}</Title>
        <Excerpt>{excerpt}</Excerpt>
        <Author>{author}</Author>
        <Date>{date}</Date>
        <ReadTime>{readTime}</ReadTime>
      </Content>
    </PostCardWrapper>
  )
}

export default PostCard
