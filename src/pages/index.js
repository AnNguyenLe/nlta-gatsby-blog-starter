import React from "react"
import { graphql } from "gatsby"
import styled from "styled-components"

import Layout from "../components/Layout"
import Seo from "../components/Seo"
import PostCardList from "../components/PostCardList"

const CustomizedLayout = styled(Layout)`
  display: flex;
  justify-content: center;
`

const Hero = styled.div`
  padding-top: 1rem;
  padding-bottom: 4rem;
  background-color: #faeddc;
`

const Title = styled.div`
  color: white;
  font-size: 4rem;
  text-align: center;
  font-family: "Lobster Two";
`

const Subtitle = styled.div`
  color: lightgrey;
  font-size: 2rem;
  text-align: center;
  font-family: "Lobster Two";
`

const HomePageContentWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  padding: 3rem 0;
`

const HomePageContent = styled.div`
  width: 85%;
  display: flex;
  flex-direction: column;
  align-items: center;
`

const ClassifyingPostCategory = styled.div`
  width: 100%;
  font-size: 1.5rem;
  font-weight: bold;
  border-bottom: 1px solid black;
  padding-bottom: 0.2rem;
  margin-bottom: 3rem;
`

export default function Home({ data }) {
  const postList = data.allMdx.nodes
  return (
    <CustomizedLayout>
      <Seo title="All posts" />
      <Hero>
        <Title>Best Blog Ever!</Title>
        <Subtitle>You will like this blog</Subtitle>
      </Hero>
      <HomePageContentWrapper>
        <HomePageContent>
          <ClassifyingPostCategory>All Posts</ClassifyingPostCategory>
          <PostCardList postList={postList} />
        </HomePageContent>
      </HomePageContentWrapper>
    </CustomizedLayout>
  )
}

export const pageQuery = graphql`
  query BlogList {
    allMdx(sort: { fields: frontmatter___date, order: DESC }) {
      nodes {
        id
        frontmatter {
          author
          category
          date(formatString: "MMM, Do YYYY")
          readTime
          slug
          title
          isFeaturedPost
          thumbnail {
            childImageSharp {
              gatsbyImageData
            }
          }
        }
        excerpt
      }
    }
  }
`
