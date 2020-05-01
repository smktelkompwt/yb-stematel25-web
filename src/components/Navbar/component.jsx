import React, { useState } from 'react';
import './style.css';
import IMAGES from '../../config/images';
import { NavLink as RRNavLink } from 'react-router-dom';
import {
  Collapse,
  NavItem,
  NavLink
} from 'reactstrap';

const Navigationbar = (props) => {

  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);
  
  return (
    <section>
      <nav>
        <div className="content d-flex">
          <div className="jurusan-title-wrapper">
            <h4>RPL25</h4>
          </div>
          <button onClick={toggle} className="toggle-nav-wrapper">
              <img src={IMAGES.toggleNav} alt=""/>
          </button>
        </div>
      </nav>
      <Collapse isOpen={isOpen} navbar className="nav-2">
        <div className="container">
          <NavItem className="navbar-wrapper">
            <NavLink tag={RRNavLink} exact to="/" onClick={toggle}><img className="mb-3" src={IMAGES.home} alt=""/></NavLink>
          </NavItem>
          <NavItem className="navbar-wrapper">
            <NavLink className="navbar-link" tag={RRNavLink} exact to="/impression" onClick={toggle}>Pesan dan Kesan</NavLink>
          </NavItem>
          <NavItem className="navbar-wrapper">
            <NavLink className="navbar-link" tag={RRNavLink} exact to="/teacher" onClick={toggle}>Daftar Guru</NavLink>
          </NavItem>
          <NavItem className="navbar-wrapper">
            <NavLink className="navbar-link" tag={RRNavLink} exact to="/student" onClick={toggle}>Daftar Siswa</NavLink>
          </NavItem>
          <NavItem className="navbar-wrapper">
            <NavLink className="navbar-link" tag={RRNavLink} exact to="/video" onClick={toggle}>Tentang Kami</NavLink>
          </NavItem>
          <NavItem className="navbar-wrapper">
            <NavLink className="navbar-link" tag={RRNavLink} exact to="/" onClick={toggle}>Login</NavLink>
          </NavItem>
        </div>
      </Collapse>
    </section>
  );
}

export default Navigationbar;