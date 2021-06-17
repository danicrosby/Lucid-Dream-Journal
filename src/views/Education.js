import React from 'react';
import { Link } from 'react-router-dom';
import {
  Card,
  CardText,
  CardBody,
  Container
} from 'reactstrap';
import NavBar from '../components/NavBar';
import Footer from '../components/Footer';

function Education() {
  return (
    <Container className="sub-container">
      <NavBar />
      <center><h3 className="">Education</h3></center>
      <Card className="dream-card">
        <CardBody className="dream-card-body">
          <div className="top-text">
            <h5>Reality Checks</h5>
            <i className="material-icons dream-type-icon"> toggle_on </i>
          </div>
          <CardText className="date">daily reality checkins</CardText>
        </CardBody>
        <center>
          <Link
            className="nav-link"
            to="/reality-checks">
            <i className="material-icons"
              id="expand-arrow"> keyboard_arrow_down </i>
          </Link>
        </center>
      </Card>

      <Card className="dream-card">
        <CardBody className="dream-card-body">
          <div className="top-text">
            <h5>Lucid Dream Techniques</h5>
            <i className="material-icons dream-type-icon"> visibility </i>
          </div>
          <CardText className="date">learn how to lucid dream everynight</CardText>
        </CardBody>
        <center>
          <Link
            className="nav-link"
            to="/techniques">
            <i className="material-icons"
              id="expand-arrow"> keyboard_arrow_down </i>
          </Link>
        </center>
      </Card>

      <Card className="dream-card">
        <CardBody className="dream-card-body">
          <div className="top-text">
            <h5>Calming Sounds</h5>
            <i className="material-icons dream-type-icon"> headphones </i>
          </div>
          <CardText className="date">find tranquil calming music</CardText>
        </CardBody>
        <center>
          <Link
            className="nav-link"
            to="/calming">
            <i className="material-icons"
              id="expand-arrow"> keyboard_arrow_down </i>
          </Link>
        </center>
      </Card>
      <Footer />
    </Container>
  );
}

export default Education;
