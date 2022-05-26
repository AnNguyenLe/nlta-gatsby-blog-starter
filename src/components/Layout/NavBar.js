import React from "react"
import styled from "styled-components"
import { Link } from "gatsby"

import logo from "../../assets/apricot-logo.png"

const NavWrapper = styled.nav`
  display: flex;
  justify-content: space-around;
  align-items: center;
  padding: 0.5rem 0;
  height: 3rem;
`
const LogoWrapper = styled(Link)``

const Logo = styled.img`
  height: 3rem;
`
const MenuWrapper = styled.ul`
  display: flex;
  width: 20%;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding-inline-start: 0;
`

const MenuItem = styled(Link)`
  color: black;
  font-family: "Oxygen";
`

const ButtonLike = styled.div`
  height: 2.5rem;
  width: 7rem;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #3ded97;
  box-shadow: 0 0 5px -1px rgba(0, 0, 0, 0.2);
  border-radius: 0.5rem;
  color: black;

  &:hover {
    background-color: #03ac13;
    color: white;
  }
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
          <MenuItem to="/contact-us">
            <ButtonLike>Contact us</ButtonLike>
          </MenuItem>
        </li>
      </MenuWrapper>
    </NavWrapper>
  )
}

export default NavBar
