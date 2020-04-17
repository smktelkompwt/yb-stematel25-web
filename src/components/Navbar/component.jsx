import React, { useState } from 'react';
import './style.css';
import IMAGES from '../../config/images';
import { NavLink as RRNavLink } from 'react-router-dom';

const Navigationbar = (props) => {

  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);
  
  return (
      <nav class="navbar navbar-expand-lg">
        <div className="container">
          <a class="navbar-brand" href="#">Stematel25</a>
          <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
              <img src={IMAGES.more} alt=""/>
          </button>
          <div class="collapse navbar-collapse" id="navbarNav">
            <ul class="navbar-nav mx-auto">
              <li class="nav-item active">
                <a class="nav-link" href="#">Jurusan <span class="sr-only">(current)</span></a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">Kesan Pesan</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">Guru</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">Video</a>
              </li>
            </ul>
            <a className="nav-link btn-login" href="">Login</a>
          </div>
        </div>
      </nav>
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


