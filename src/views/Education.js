import React from 'react';
import {
  Card,
  CardText,
  CardBody,
} from 'reactstrap';
import RealityMenu from '../components/RealityMenu';
import CalmMenu from '../components/CalmMenu';
import LucidMenu from '../components/LucidMenu';

function Education() {
  return (
    <div className="education-sub-container">
      <div className="education-card-container">
        <Card className="education-card">
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

        <Card className="education-card">
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

        <Card className="education-card">
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
    </div>
  );
}

export default Education;
