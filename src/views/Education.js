import React from 'react';
import {
  Card,
  CardText,
  CardBody,
  Container
} from 'reactstrap';
import NavBar from '../components/NavBar';
import RealityMenu from '../components/RealityMenu';
import CalmMenu from '../components/CalmMenu';
import LucidMenu from '../components/LucidMenu';

function Education() {
  return (
    <Container className="education-sub-container">
      <NavBar />
      <Card className="dream-card">
        <CardBody className="dream-card-body">
          <div className="top-text">
            <h6>Reality Checks</h6>
          </div>
          <CardText className="date">daily reality checkins</CardText>
        </CardBody>
        <center>
        <RealityMenu />
        </center>
      </Card>

      <Card className="dream-card">
        <CardBody className="dream-card-body">
          <div className="top-text">
            <h6>Lucid Dream Techniques</h6>
          </div>
          <CardText className="date">learn how to lucid dream everynight</CardText>
        </CardBody>
        <center>
          <LucidMenu />
        </center>
      </Card>

      <Card className="dream-card">
        <CardBody className="dream-card-body">
          <div className="top-text">
            <h6>Calming Sounds</h6>
          </div>
          <CardText className="date">find tranquil calming music</CardText>
        </CardBody>
        <center>
          <CalmMenu />
        </center>
      </Card>
    </Container>
  );
}

export default Education;
