import React, { useState } from 'react';
import './style.css';
import IMAGES from '../../config/images';
import { NavLink as RRNavLink } from 'react-router-dom';
import {
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
            <div className="toggle-nav-wrapper">
              <img src={IMAGES.toggleNav} alt=""/>
            </div>
          </div>
        </nav>
          <div className="nav-2" >
            <div className="container">
                <div className="row">
                  <div className="col">
                    <img className="close-icon" src={IMAGES.close} alt=""/>
                  </div>
                </div>
              <div className="row">
                <div className="col">
                    <a href="">
                      <img className="mb-3" src={IMAGES.home} alt=""/>
                    </a>
                    <a href="#">
                      <h1>Pesan dan Kesan</h1>
                    </a>
                    <a href="#">
                      <h1>Daftar Guru</h1>
                    </a>
                    <a href="#">
                      <h1>Daftar Siswa</h1>
                    </a>
                    <a href="#">
                      <h1>Tentang Kami</h1>
                    </a>
                    <a href="#">
                      <h1>Login</h1>
                    </a>
                </div>
              </div>
            </div>
          </div>

    </section>
  );
}

export default Navigationbar;

// import React, { useState } from 'react';
// import './style.css';
// import { NavLink as RRNavLink } from 'react-router-dom';
// import {
//   Container,
//   Collapse,
//   Navbar,
//   NavbarToggler,
//   NavbarBrand,
//   Nav,
//   NavItem,
//   NavLink,
//   NavbarText
// } from 'reactstrap';

// const Navigationbar = (props) => {

//   const [isOpen, setIsOpen] = useState(false);
//   const toggle = () => setIsOpen(!isOpen);
  
//   return (
//     <div>
//       <Navbar className="navbar-wrapper" dark expand="md">
//         <Container>
//           <NavbarBrand href="/">Stematel25</NavbarBrand>
//           <NavbarToggler onClick={toggle} />
//           <Collapse isOpen={isOpen} navbar>
//             <Nav className="m-auto" navbar>
//               <NavItem>
//                 <NavLink tag={RRNavLink} exact to="/major">Jurusan</NavLink>
//               </NavItem>
//               <NavItem>
//                 <NavLink tag={RRNavLink} exact to="/impression">Kesan Pesan</NavLink>
//               </NavItem>
//               <NavItem>
//                 <NavLink tag={RRNavLink} exact to="/teacher">Guru</NavLink>
//               </NavItem>
//               <NavItem>
//                 <NavLink tag={RRNavLink} exact to="/video">Video</NavLink>
//               </NavItem>
//             </Nav>
//             <NavbarText>Login</NavbarText>
//           </Collapse>
//         </Container>
//       </Navbar>
//     </div>
//   );
// }

// export default Navigationbar;


