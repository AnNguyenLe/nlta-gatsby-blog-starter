import React from "react"
import styled from "styled-components"
import { Link } from "gatsby"

import logo from "../../assets/apricot-logo.png"

const NavWrapper = styled.nav`
  display: flex;
  justify-content: space-around;
  align-items: center;
  padding: 1rem 0;
`
const LogoWrapper = styled(Link)``

const Logo = styled.img`
  height: 4rem;
`
const MenuWrapper = styled.ul`
  display: flex;
  width: 20%;
  flex-direction: row;
  justify-content: space-between;
`

const MenuItem = styled(Link)`
  color: black;
`

const NavBar = () => {
  return (
    <NavWrapper>
      <LogoWrapper to="/">
        <Logo src={logo} alt="apricot logo" />
      </LogoWrapper>
      <MenuWrapper>
        <li>
          <MenuItem to="/about-us">About us</MenuItem>
        </li>
        <li>
          <MenuItem to="/contact-us">Contact us</MenuItem>
        </li>
      </MenuWrapper>
    </NavWrapper>
  )
}

export default NavBar
