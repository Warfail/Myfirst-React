import React from 'react'
import { Collapse, DropdownItem, DropdownMenu, DropdownToggle, Nav, Navbar, NavbarBrand, NavbarText, NavbarToggler, NavItem, NavLink, UncontrolledDropdown } from 'reactstrap'






export const Header = () => {
  return (
    <div>
    <Navbar
      color="secondary"
      dark
      expand="md"
      // fixed="top"
      className="mb-auto"
    >
      <NavbarBrand href="/">
        Portofolio
      </NavbarBrand>
      <NavbarToggler onClick={function noRefCheck(){}} />
      <Collapse navbar>
        <Nav
          className="me-auto"
          navbar
        >
          <NavItem>
            <NavLink href="../Question">
              Bio Singkat
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="https://github.com/Warfail">
              GitHub
            </NavLink>
          </NavItem>
          <UncontrolledDropdown
            inNavbar
            nav
          >
            <DropdownToggle
              caret
              nav
            >
              Skill
            </DropdownToggle>
            <DropdownMenu right>
              <DropdownItem>
                PHP
              </DropdownItem>
              <DropdownItem>
                C/C++
              </DropdownItem>
              <DropdownItem>
                JavaScript
              </DropdownItem>
              {/* <DropdownItem divider /> */}
            </DropdownMenu>
          </UncontrolledDropdown>
        </Nav>
        <NavbarText>
          Rezky A.K
        </NavbarText>
      </Collapse>
    </Navbar>
  </div>
  )
}


