import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  Nav,
  NavItem,
  Button
} from 'reactstrap';
import { signInUser, signOutUser } from '../helpers/auth';

const NavBar = ({ user }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  const authenticated = () => (
    <>
      <NavItem><Link className="nav-link links" to="/dreams">Dreams</Link></NavItem>
      <NavItem><Link className="nav-link links mr-3" to="/education">Education</Link></NavItem>
    </>
  );

  return (
    <div>
      <Navbar className="navbar" color="dark" expand="md">
        <Link className="navbar-brand" to="/">Lucid</Link>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="ml-auto" navbar>
            { user && authenticated() }
            {
              user !== null && <NavItem>
                {
                  user
                    ? <Button className="sign-btn" color='transparent' size="small" onClick={signOutUser}><span className="material-icons sign-cloud-icon">cloud</span></Button>
                    : <Button className="sign-btn" color='transparent' size="small" onClick={signInUser}><span className="material-icons sign-cloud-icon">cloud</span></Button>
                }
              </NavItem>
            }
          </Nav>
        </Collapse>
      </Navbar>
    </div>
  );
};

NavBar.propTypes = {
  user: PropTypes.any
};

export default NavBar;
