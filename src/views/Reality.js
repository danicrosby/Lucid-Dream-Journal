import React from 'react';
import {
  Card,
  CardHeader,
  CardText,
  CardBody,
  CardTitle,
  Button
} from 'reactstrap';
import RealityPop from '../components/RealityPop';
// import CalmPop from '../components/CalmPop';

function Education() {
  return (
    <div className="education-card-container">
      <Card className="education-card">
        <CardBody className="education-card-body">
          <CardHeader className="ed-header">
            <span>Reality Checks</span>
            <div className="ed-icon">
              <span><a href="/calm-checks"><Button className="material-icons button">chevron_left</Button></a></span>
              <RealityPop />
              <span><a href="/lucid-checks"><Button className="material-icons button">navigate_next</Button></a></span>
            </div>
          </CardHeader>

          <CardTitle><h6 className="mt-4">Reality Checks</h6></CardTitle>
          <CardText className="card-text">
            Lucid dreams give you the ability to control your own dreams and steer them toward the direction you want. In the lucid state, you are more willing to confront threats and as a result, become more self confident. When you achieve lucidity, you can use it as a tool to improve your sports game, to rehearse for a speech,
            to fulfill your fantasies, or to solve a problem in your waking life.
          </CardText>
          <CardTitle><h6 className="mt-4">Palm Press</h6></CardTitle>
          <CardText>
            Lucid dreams give you the ability to control your own dreams and steer them toward the direction you want. In the lucid state, you are more willing to confront threats and as a result, become more self confident. When you achieve lucidity, you can use it as a tool to improve your sports game, to rehearse for a speech,
            to fulfill your fantasies, or to solve a problem in your waking life.
          </CardText>
          <CardTitle><h6 className="mt-4">Interact With Objects</h6></CardTitle>
          <CardText>
            Lucid dreams give you the ability to control your own dreams and steer them toward the direction you want. In the lucid state, you are more willing to confront threats and as a result, become more self confident. When you achieve lucidity, you can use it as a tool to improve your sports game, to rehearse for a speech,
            to fulfill your fantasies, or to solve a problem in your waking life.
          </CardText>
          <CardTitle><h6 className="mt-4">Remember, Remember, Remember</h6></CardTitle>
          <CardText>
            Lucid dreams give you the ability to control your own dreams and steer them toward the direction you want. In the lucid state, you are more willing to confront threats and as a result, become more self confident. When you achieve lucidity, you can use it as a tool to improve your sports game, to rehearse for a speech,
            to fulfill your fantasies, or to solve a problem in your waking life.
          </CardText>
        </CardBody>
      </Card>
    </div>
  );
}

export default Education;
