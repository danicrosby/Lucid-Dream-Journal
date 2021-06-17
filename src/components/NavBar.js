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
      <NavItem>
        <Link className="nav-link" to="/dreams">Dream</Link>
      </NavItem>
      <NavItem>
        <Link className="nav-link mr-3" to="/add-dream">Add Dream</Link>
      </NavItem>
    </>
  );

  return (
    <div>
      <Navbar className="navBar" color="transparent" light expand="md">
        <Link className="navbar-brand" to="/dreams">Lucid</Link>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="ml-auto" navbar>
          { user && authenticated() }
            {
              user !== null && <NavItem>
                {
                  user
                    ? <Button className="sign-in-out-button" color='transparent' onClick={signOutUser}>OUT</Button>
                    : <Button className="sign-in-out-button" color='danger' onClick={signInUser}>IN</Button>
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
