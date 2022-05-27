import React from "react"
import Layout from "../components/Layout"
import Seo from "../components/Seo"
// import Hero from "../components/Hero"
import styled from "styled-components"
// import { GatsbyImage, getImage } from "gatsby-plugin-image"
// import Banner from "../components/Banner"
import { graphql } from "gatsby"
import { MDXRenderer } from "gatsby-plugin-mdx"

const Title = styled.div`
  font-size: 3rem;
  font-weight: bolder;
`

const BlogPostContentWrapper = styled.article`
  display: flex;
  flex-direction: column;
  align-items: center;
`

const BlogPostContent = styled(MDXRenderer)`
  width: 80%;
`

const PostInfo = styled.div``

const Category = styled.h2``

const Date = styled.div`
  color: gray;
`
const ReadTime = styled.div`
  color: gray;
`

const BlogPostTemplate = ({ data }) => {
  const {
    currentPostInfo: {
      body: postContent,
      frontmatter: { category, date, readTime, title },
    },
    previousPostInfo,
    nextPostInfo,
  } = data

  return (
    <Layout>
      <Seo title={title} />
      <BlogPostContentWrapper>
        <PostInfo>
          <Title>{title}</Title>
          <Category>{category}</Category>
          <Date>{date}</Date>
          <ReadTime>{readTime} mins read</ReadTime>
        </PostInfo>
        <BlogPostContent>{postContent}</BlogPostContent>
      </BlogPostContentWrapper>
    </Layout>
  )
}

export const query = graphql`
  query GetSinglePost(
    $id: String
    $previousPostId: String
    $nextPostId: String
  ) {
    currentPostInfo: mdx(id: { eq: $id }) {
      frontmatter {
        title
        category
        date(formatString: "MMMM Do, YYYY")
        readTime
        slug
      }
      body
    }

    previousPostInfo: mdx(id: { eq: $previousPostId }) {
      frontmatter {
        title
        readTime
        slug
      }
    }

    nextPostInfo: mdx(id: { eq: $nextPostId }) {
      frontmatter {
        title
        readTime
        slug
      }
    }
  }
`

export default BlogPostTemplate
