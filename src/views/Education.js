import React from 'react';
import {
  Card,
  CardText,
  CardBody,
} from 'reactstrap';
import NavBar from '../components/NavBar';
import RealityMenu from '../components/RealityMenu';
import CalmMenu from '../components/CalmMenu';
import LucidMenu from '../components/LucidMenu';

function Education() {
  return (
    <div className="education-sub-container">
      <NavBar />
      <Card className="education-card mt-5 mb-3 ml-5">
        <CardBody className="education-card-body">
          <div className="top-text">
            <h6>Reality Checks</h6>
          </div>
          <CardText className="date">daily reality checkins</CardText>
        </CardBody>
        <center>
        <RealityMenu />
        </center>
      </Card>

      <Card className="education-card mb-3 ml-5">
        <CardBody className="education-card-body">
          <div className="top-text">
            <h6>Lucid Dream Techniques</h6>
          </div>
          <CardText className="date">learn how to lucid dream everynight</CardText>
        </CardBody>
        <center>
          <LucidMenu />
        </center>
      </Card>

      <Card className="education-card ml-5">
        <CardBody className="education-card-body">
          <div className="top-text">
            <h6>Calming Sounds</h6>
          </div>
          <CardText className="date">find tranquil calming music</CardText>
        </CardBody>
        <center>
          <CalmMenu />
        </center>
      </Card>
    </div>
  );
}

export default Education;
