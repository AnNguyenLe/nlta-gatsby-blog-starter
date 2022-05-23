import React from "react"
import styled from "styled-components"

import NavBar from "./NavBar"

const HeaderWrapper = styled.div`
  background-color: #faeddc;
`

const Hero = styled.div`
  padding-top: 2rem;
  padding-bottom: 5rem;
`

const Title = styled.div`
  color: white;
  font-size: 8rem;
  font-weight: bolder;
  text-align: center;
`

const Subtitle = styled.div`
  color: lightgrey;
  font-size: 3rem;
  font-weight: bolder;
  text-align: center;
`

const Header = () => {
  return (
    <HeaderWrapper>
      <NavBar />
      <Hero>
        <Title>Best Blog Ever!</Title>
        <Subtitle>You will like this blog</Subtitle>
      </Hero>
    </HeaderWrapper>
  )
}

export default Header
