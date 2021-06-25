import React from 'react';
import {
  Card,
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
            <div className="sub-top-text">
              <h6 className="sub-card-title">Reality Checks</h6>
              <RealityMenu />
            </div>
          </CardBody>
        </Card>

        <Card className="education-card">
          <CardBody className="education-card-body">
            <div className="sub-top-text">
              <h6>Lucid Dream Techniques</h6>
              <LucidMenu />
            </div>
          </CardBody>
        </Card>

        <Card className="education-card">
          <CardBody className="education-card-body">
            <div className="sub-top-text">
              <h6>Calming Sounds</h6>
              <CalmMenu />
            </div>
          </CardBody>
        </Card>
      </div>
    </div>
  );
}

export default Education;
