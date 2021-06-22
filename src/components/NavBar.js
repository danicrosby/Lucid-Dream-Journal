import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  Nav,
  NavItem,
  Button,
} from 'reactstrap';
import { signInUser, signOutUser } from '../helpers/auth';

const NavBar = ({ user }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  const authenticated = () => (
    <>
      <NavItem><Link className="nav-link" to="/dreams">Dreams</Link></NavItem>
      <NavItem><Link className="nav-link mr-3" to="/education">Education</Link></NavItem>
    </>
  );

  return (
    <div>
      <Navbar className="navbar" color="dark" light expand="md">
        <Link className="navbar-brand" to="/"><h4>Lucid</h4></Link>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="ml-auto" navbar>
            { user && authenticated() }
            {
              user !== null
              && <NavItem>
                {
                  user
                    ? <Button className="sign-in-out-btn" outline size="sm" color='danger' onClick={signOutUser}><i className="material-icons sign-icon"> wb_cloud </i></Button>
                    : <Button className="sign-in-out-btn" outline size="sm" color='info' onClick={signInUser}><i className="material-icons sign-icon"> wb_cloud </i></Button>
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
