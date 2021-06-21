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
      <Navbar color="light" light expand="lg">
        <Link className="navbar-brand" to="/">lucid</Link>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar></Collapse>
        <Nav className="ml-auto" navbar>

          {user !== null && <NavItem>
            {
              user
                ? <Button className="sign-in-out-button" color='transparent' onClick={signOutUser}><i className="material-icons sign-in-out-btn"> wb_cloud </i></Button>
                : <div className="d-flex justify-content-end">
                  <NavItem><Link className="nav-link mt-3" to="/eductation">Education</Link></NavItem>
                  <Button className="sign-in-out-button" color='transparent' onClick={signInUser}><i className="material-icons sign-in-out-btn"> cloud </i></Button>
                </div>
            }
          </NavItem>
          }
        </Nav>
      </Navbar>
  );
};

NavBar.propTypes = {
  user: PropTypes.any
};

export default NavBar;
