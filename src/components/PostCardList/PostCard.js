import React from "react"
import styled from "styled-components"
import { GatsbyImage, getImage } from "gatsby-plugin-image"

const PostCardWrapper = styled.div`
  width: 100%;
  position: relative;
  display: flex;
  flex-direction: column;
`

const Thumbnail = styled(GatsbyImage)`
  width: 18rem;
  height: 10rem;
  border-radius: 8px;
`

const FeaturedTag = styled.div`
  height: 2rem;
  width: 5rem;
  background-color: whitesmoke;
  color: black;
  position: absolute;
  top: 1rem;
  left: -0.3rem;
  font-family: "Playfair Display";
  display: flex;
  border-end-end-radius: 0.5rem;
  border-start-end-radius: 0.5rem;
  justify-content: center;
  align-items: center;
  box-shadow: 20px 20px 50px 15px black;
`

const Category = styled.div`
  font-size: 2rem;
  font-weight: bold;
  color: grey;
  background-color: aliceblue;
  width: 100%;
  height: 1rem;
  border-radius: 0.5rem;
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
      {isFeaturedPost && <FeaturedTag>Featured</FeaturedTag>}
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
