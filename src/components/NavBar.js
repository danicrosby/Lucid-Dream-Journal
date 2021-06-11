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

  return (
    <div>
      <Navbar className="navBar" color="transparent" light expand="md">
        <Link className="navbar-brand" to="/dreams">Lucid</Link>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="ml-auto" navbar>
            {
              user !== null
              && <NavItem>
                {
                  user
                    ? <Button className="sign-in-out-button" color='transparent' onClick={signOutUser}><i className="material-icons sign-in-out-btn"> wb_cloud </i></Button>
                    : <Button className="sign-in-out-button" color='transparent' onClick={signInUser}><i className="material-icons sign-in-out-btn"> wb_cloud </i></Button>
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
