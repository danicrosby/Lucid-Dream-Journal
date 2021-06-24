import React from 'react';
import {
  Card,
  CardBody,
  CardImg
} from 'reactstrap';
import DreamTypeStats from '../styles/Assets/DreamTypeStats.png';
import Recurring from '../styles/Assets/RecurringStats.png';
import ColorStats from '../styles/Assets/ColorStats.png';

function Education() {
  return (
    <div className="stats-sub-container">
      <div className="education-card-container">
        <Card className="education-card">
          <CardBody className="education-card-body">
          <CardImg top width="100%" src={DreamTypeStats} />
          </CardBody>
        </Card>

        <Card className="education-card">
          <CardBody className="education-card-body">
          <CardImg top width="100%" src={Recurring} />
          </CardBody>
        </Card>

        <Card className="education-card">
          <CardBody className="education-card-body">
          <CardImg top width="100%" src={ColorStats} />
          </CardBody>
        </Card>
      </div>
    </div>
  );
}

export default Education;
