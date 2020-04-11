import React, { useState } from 'react';
import './style.css';
import { NavLink as RRNavLink } from 'react-router-dom';
import {
  Container,
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  NavbarText
} from 'reactstrap';

const Navigationbar = (props) => {

  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);
  
  return (
    <div>
      <Navbar style={{ backgroundColor: "#DA4040"}} dark expand="md">
        <Container>
          <NavbarBrand href="/">Stematel25</NavbarBrand>
          <NavbarToggler onClick={toggle} />
          <Collapse isOpen={isOpen} navbar>
            <Nav className="m-auto" navbar>
              <NavItem>
                <NavLink tag={RRNavLink} exact to="/major" activeClassName="active">Jurusan</NavLink>
              </NavItem>
              <NavItem>
                <NavLink tag={RRNavLink} exact to="/impression" activeClassName="active">Kesan Pesan</NavLink>
              </NavItem>
              <NavItem>
                <NavLink tag={RRNavLink} exact to="/teacher" activeClassName="active">Guru</NavLink>
              </NavItem>
              <NavItem>
                <NavLink tag={RRNavLink} exact to="/video" activeClassName="active">Video</NavLink>
              </NavItem>
            </Nav>
            <NavbarText>Login</NavbarText>
          </Collapse>
        </Container>
      </Navbar>
    </div>
  );
}

export default Navigationbar;
