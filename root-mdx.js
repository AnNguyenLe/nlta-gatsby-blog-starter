import React from "react"
import { MDXProvider } from "@mdx-js/react"
// import {
//   Headings,
//   Blockquote,
//   Code,
//   PrismSetup,
// } from './src/components/BlogPostElements'

const components = {
  h1: () => <h1>This is H1 element hoho</h1>,
  h2: () => <h2>This is H2 element</h2>,
  ahaha: () => <div>This is DIV</div>,
}
export const wrapMDX = ({ element }) => {
  return <MDXProvider components={components}>{element}</MDXProvider>
}
