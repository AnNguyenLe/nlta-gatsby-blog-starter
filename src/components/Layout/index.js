import React from "react"
import styled from "styled-components"

import Header from "./Header"
import Footer from "./Footer"

const PageWrapper = styled.div`
  margin: 0;
  color: antiquewhite;
`

const Layout = ({ children }) => {
  return (
    <PageWrapper>
      <Header />
      <main>{children}</main>
      <Footer />
    </PageWrapper>
  )
}

export default Layout
