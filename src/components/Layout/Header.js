import React from "react"
import styled from "styled-components"

import NavBar from "./NavBar"

const HeaderWrapper = styled.div`
  background-color: #faeddc;
  position: sticky;
  top: 0;
  z-index: 1;
`

const Header = () => {
  return (
    <HeaderWrapper>
      <NavBar />
    </HeaderWrapper>
  )
}

export default Header
