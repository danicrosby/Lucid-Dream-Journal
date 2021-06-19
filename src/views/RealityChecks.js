import React from 'react';
import { Link } from 'react-router-dom';
import Fab from '@material-ui/core/Fab';
import CheckIcon from '@material-ui/icons/Check';
import {
  Card,
  CardTitle,
  CardBody,
  Container,
  CardText
} from 'reactstrap';
import Footer from '../components/Footer';

function RealityChecks() {
  return (
    <Container className="sub-container">
      <Card className="sub-card">
        <CardBody className="sub-card-body">
          <div className="top-text mb-4">
            <h5 className="mb-3">Reality Checks</h5>
            <i className="material-icons dream-type-icon"> toggle_on </i>
          </div>
          <CardTitle>The Reality Check</CardTitle>
          <CardText className="sub-card-text">
            Lucid dreams give you the ability to control your own dreams and steer them toward the direction you want. In the lucid state, you are more willing to confront threats and as a result, become more self confident. When you achieve lucidity, you can use it as a tool to improve your sports game, to rehearse for a speech,
            to fulfill your fantasies, or to solve a problem in your waking life.
          </CardText>
          <CardTitle className="sub-card-title">The Palm Press</CardTitle>
          <CardText>
            Lucid dreams give you the ability to control your own dreams and steer them toward the direction you want. In the lucid state, you are more willing to confront threats and as a result, become more self confident. When you achieve lucidity, you can use it as a tool to improve your sports game, to rehearse for a speech,
            to fulfill your fantasies, or to solve a problem in your waking life.
          </CardText>
          <CardTitle>Interact With Objects</CardTitle>
          <CardText>
            Lucid dreams give you the ability to control your own dreams and steer them toward the direction you want. In the lucid state, you are more willing to confront threats and as a result, become more self confident. When you achieve lucidity, you can use it as a tool to improve your sports game, to rehearse for a speech,
            to fulfill your fantasies, or to solve a problem in your waking life.
          </CardText>
          <CardTitle>Remember, Remember, Remember</CardTitle>
          <CardText>
            Lucid dreams give you the ability to control your own dreams and steer them toward the direction you want. In the lucid state, you are more willing to confront threats and as a result, become more self confident. When you achieve lucidity, you can use it as a tool to improve your sports game, to rehearse for a speech,
            to fulfill your fantasies, or to solve a problem in your waking life.
          </CardText>
        </CardBody>
        <center>
          <Fab className="fab-icons mr-3 ml-3 mt-4"><Link className="nav-link" to="/education"><CheckIcon /></Link></Fab>
        </center>
      </Card>
      <Footer />
    </Container>
  );
}

export default RealityChecks;
