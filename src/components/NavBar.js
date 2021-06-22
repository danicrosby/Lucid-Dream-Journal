import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import {
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
    <>
      <Navbar color="dark" light expand="lg">
        <Link className="navbar-brand ml-5" to="/">lucid</Link>
        <NavbarToggler onClick={toggle} />
        <div className="cloud-nav ml-auto mr-5">
          <Nav className="navbar ml-auto" navbar>
            {user !== null && <NavItem>
              {
                user
                  ? <Button className="sign-in-out-button" color='transparent' onClick={signOutUser}><i className="material-icons sign-in-out-btn"> wb_cloud </i></Button>
                  : <Button className="sign-in-out-button" color='transparent' onClick={signInUser}><i className="material-icons sign-in-out-btn"> cloud </i></Button>
              }
              <NavItem className="education-text"><Link className="nav-link" to="/dreams">Dreams</Link></NavItem>
              <NavItem className="education-text"><Link className="nav-link" to="/education">Education</Link></NavItem>
            </NavItem>
            }
          </Nav>
        </div>
      </Navbar>
    </>
  );
};

NavBar.propTypes = {
  user: PropTypes.any
};

export default NavBar;
