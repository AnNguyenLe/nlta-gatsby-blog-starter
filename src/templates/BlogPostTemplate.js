import React from "react"
import Layout from "../components/Layout"
import Seo from "../components/Seo"
// import Hero from "../components/Hero"
import styled from "styled-components"
// import { GatsbyImage, getImage } from "gatsby-plugin-image"
// import Banner from "../components/Banner"
import { graphql } from "gatsby"
// import { MDXRenderer } from "gatsby-plugin-mdx"
const BlogPostTemplate = () => {
  return (
    <Layout>
      <Seo />
      This is the template
    </Layout>
  )
}

export const query = graphql`
  query BlogListTemporary {
    allMdx(sort: { fields: frontmatter___date, order: DESC }) {
      nodes {
        frontmatter {
          author
          category
          date(formatString: "MMM, Do YYYY")
          readTime
          slug
          title
        }
        excerpt
      }
    }
  }
`

const Wrapper = styled.section``

export default BlogPostTemplate
