import React from "react"
import styled from "styled-components"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import { BsDot } from "react-icons/bs"

const PostCardWrapper = styled.div`
  width: 100%;
  position: relative;
  display: flex;
  flex-direction: column;
`

const Thumbnail = styled(GatsbyImage)`
  height: 12rem;
  border-radius: 0.5rem;
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
  font-size: 0.8rem;
  font-weight: bolder;
  width: 100%;
  height: 1.5rem;
  color: grey;
  background-color: aliceblue;
  border-radius: 0.25rem;
  display: flex;
  align-items: center;
  box-sizing: border-box;
  margin-top: 0.5rem;
  padding-left: 0.5rem;
  font-family: "Roboto Slab";
`
const Content = styled.div`
  box-sizing: border-box;
  padding: 0.5rem;
`

const Title = styled.div`
  font-size: 1rem;
  font-weight: 500;
  font-family: "Playfair Display";
  max-height: 4rem;
  box-sizing: border-box;
  padding: 0.5rem 0.5rem 0.5rem 0;
`

const Excerpt = styled.div`
  color: gray;
`

const Author = styled.div`
  font-weight: bold;
  color: gray;
`

const DateAndReadTime = styled.div`
  display: flex;
  justify-content: flex-start;
  color: gray;
  font-size: 0.8rem;
`

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
        <Author> by {author}</Author>
        <DateAndReadTime>
          <Date>{date}</Date>
          <BsDot />
          <ReadTime>{readTime} mins</ReadTime>
        </DateAndReadTime>
      </Content>
    </PostCardWrapper>
  )
}

export default PostCard
