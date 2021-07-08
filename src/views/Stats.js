import React from 'react';
import {
  Card,
  CardHeader,
  CardImg,
  CardText,
  CardBody,
  CardTitle,
  Button
} from 'reactstrap';
import DreamTypeStats from '../styles/Assets/DreamTypeStats.png';
import Recurring from '../styles/Assets/RecurringStats.png';
import ColorStats from '../styles/Assets/ColorStats.png';

function Stats2() {
  return (
    <div className="education-card-container">
      <Card className="education-card">
        <CardBody className="education-card-body">
          <CardHeader className="ed-header">
            <span>Stats & Analytics</span>
            <div className="ed-icon">
            <span><a href="/dreams"><Button className="material-icons submit-btn">done</Button></a></span>
            </div>
          </CardHeader>

          <CardTitle><h6 className="mt-4">Dream Type</h6></CardTitle>
          <CardText className="card-text">
            Dream Types are associated with and give you the ability to control your own dreams and steer them toward the direction you want. In the lucid state, you are more willing to confront threats and as a result, become more self confident. When you achieve lucidity, you can use it as a tool to improve your sports game, to rehearse for a speech,
            to fulfill your fantasies, or to solve a problem in your waking life.
            Dream Types are associated with and give you the ability to control your own dreams and steer them toward the direction you want.
            <CardImg top width="100%" src={DreamTypeStats} />
          </CardText>
          <CardTitle><h6 className="mt-4">Colors</h6></CardTitle>
          <CardText>
            Colors in dreams give you the ability to control your own dreams and steer them toward the direction you want. In the lucid state, you are more willing to confront threats and as a result, become more self confident. When you achieve lucidity, you can use it as a tool to improve your sports game, to rehearse for a speech,
            to fulfill your fantasies, or to solve a problem in your waking life. Dream Types are associated with and give you the ability to control your own dreams and steer them toward the direction you want.
            Dream Types are associated with and give you the ability to control your own dreams and steer them toward the direction you want.
            <CardImg top width="100%" src={ColorStats} />
          </CardText>
          <CardTitle><h6 className="mt-4">Recurring Dreams</h6></CardTitle>
          <CardText>
            Recurring dreams give you the ability to control your own dreams and Dream Types are associated with and give you the ability to control your own dreams and steer them toward the direction you want.
            steer them toward the direction you want. In the lucid state, you are more willing to confront threats and as a result, become more self confident. When you achieve lucidity, you can use it as a tool to improve your sports game, to rehearse for a speech,
            to fulfill your fantasies, or to solve a problem in your waking life.
            <CardImg top width="100%" src={Recurring} />
          </CardText>
        </CardBody>
      </Card>
    </div>
  );
}

export default Stats2;
