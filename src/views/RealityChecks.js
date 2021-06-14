import React from 'react';
import { Link } from 'react-router-dom';
import {
  Card,
  CardTitle,
  CardBody,
  Container,
  CardText
} from 'reactstrap';

function RealityChecks() {
  return (
    <Container className="sub-container mt-5">
      <Card>
        <CardBody>
          <div className="top-text">
            <h4>Reality Checks</h4>
            <i className="material-icons dream-type-icon"> toggle_off </i>
          </div>
          <CardTitle><h6>The Reality Check</h6></CardTitle>
          <CardText>
            Lucid dreams give you the ability to control your own dreams and steer them toward the direction you want. In the lucid state, you are more willing to confront threats and as a result, become more self confident. When you achieve lucidity, you can use it as a tool to improve your sports game, to rehearse for a speech,
            to fulfill your fantasies, or to solve a problem in your waking life. In fact, some athletes utilize their lucid dreams to practice their tennis serve, golf stroke or bat swing. Even in your day to day life, you can use lucid dreams to ask  the boss for a raise, prepare for a first date, overcome phobias,  get over writer block, etc.
          </CardText>
          <CardTitle><h6>The Palm Press</h6></CardTitle>
          <CardText>
            Lucid dreams give you the ability to control your own dreams and steer them toward the direction you want. In the lucid state, you are more willing to confront threats and as a result, become more self confident. When you achieve lucidity, you can use it as a tool to improve your sports game, to rehearse for a speech,
            to fulfill your fantasies, or to solve a problem in your waking life. In fact, some athletes utilize their lucid dreams to practice their tennis serve, golf stroke or bat swing. Even in your day to day life, you can use lucid dreams to ask  the boss for a raise, prepare for a first date, overcome phobias,  get over writer block, etc.
          </CardText>
          <CardTitle><h6>Interact With Objects</h6></CardTitle>
          <CardText>
            Lucid dreams give you the ability to control your own dreams and steer them toward the direction you want. In the lucid state, you are more willing to confront threats and as a result, become more self confident. When you achieve lucidity, you can use it as a tool to improve your sports game, to rehearse for a speech,
            to fulfill your fantasies, or to solve a problem in your waking life. In fact, some athletes utilize their lucid dreams to practice their tennis serve, golf stroke or bat swing. Even in your day to day life, you can use lucid dreams to ask  the boss for a raise, prepare for a first date, overcome phobias,  get over writer block, etc.
          </CardText>
          <CardTitle><h6>Remember, Remember, Remember</h6></CardTitle>
          <CardText>
            Lucid dreams give you the ability to control your own dreams and steer them toward the direction you want. In the lucid state, you are more willing to confront threats and as a result, become more self confident. When you achieve lucidity, you can use it as a tool to improve your sports game, to rehearse for a speech,
            to fulfill your fantasies, or to solve a problem in your waking life. In fact, some athletes utilize their lucid dreams to practice their tennis serve, golf stroke or bat swing. Even in your day to day life, you can use lucid dreams to ask  the boss for a raise, prepare for a first date, overcome phobias,  get over writer block, etc.
          </CardText>
          <center>
            <Link
              className="nav-link"
              to="/dreams">
              <i className="material-icons"
                id="expand-arrow"> keyboard_arrow_down </i>
            </Link>
          </center>
        </CardBody>
      </Card>
    </Container>
  );
}

export default RealityChecks;
