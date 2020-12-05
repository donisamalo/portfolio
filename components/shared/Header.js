import React, { useState } from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  Nav,
  NavItem
} from 'reactstrap';
import Link from 'next/link';

const BsNavLink = props => {
  const {title, url} = props;
  return (
    <Link href={url}>
      <a className="nav-link port-navbar-link">
        {title}
      </a>
    </Link>
  )
}

const BsNavBrand = () =>
  <Link href="/">
    <a className="navbar-brand port-navbar-brand">Doni Samalo</a>
  </Link>

const LoginLink = () =>
  <span className="nav-link port-navbar-link clickable">Login</span>

const LogoutLink = () =>
  <span className="nav-link port-navbar-link clickable">Logout</span>

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);

  return (
    <Navbar
      className="port-navbar port-default absolute"
      color="transparent"
      dark
      expand="md"
    >
      <BsNavBrand />
      <NavbarToggler onClick={toggle} />
      <Collapse isOpen={isOpen} navbar>
        <Nav className="mr-auto" navbar>
          <NavItem className="port-navbar-item">
            <BsNavLink url="/" title="Home" />
          </NavItem>
          <NavItem className="port-navbar-item">
            <BsNavLink url="/about" title="About" />
          </NavItem>
          <NavItem className="port-navbar-item">
            <BsNavLink url="/portfolio" title="Portfolio" />
          </NavItem>
          <NavItem className="port-navbar-item">
            <BsNavLink url="/blogs" title="Blog" />
          </NavItem>
          <NavItem className="port-navbar-item">
            <BsNavLink url="/cv" title="CV" />
          </NavItem>
        </Nav>
        <Nav navbar>
        <NavItem className="port-navbar-item">
          <LoginLink />
        </NavItem>
        <NavItem className="port-navbar-item">
          <LogoutLink />
        </NavItem>
        </Nav>
      </Collapse>
    </Navbar>
  )
};

export default Header;
