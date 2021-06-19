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

function Techniques() {
  return (
    <Container className="sub-container">
      <Card className="sub-card">
        <CardBody className="sub-card-body">
          <div className="top-text mb-4">
            <h5 className="mb-3">Lucid Dream Techniques</h5>
            <i className="material-icons dream-type-icon"> visibility </i>
          </div>
          <CardTitle><h6>What are Lucid Dreams?</h6></CardTitle>
          <CardText className="card-text">
            Lucid dreams give you the ability to control your own dreams and steer them toward the direction you want. In the lucid state, you are more willing to confront threats and as a result, become more self confident. When you achieve lucidity, you can use it as a tool to improve your sports game, to rehearse for a speech,
            to fulfill your fantasies, or to solve a problem in your waking life.
          </CardText>
          <CardTitle><h6 className="mt-4">Control</h6></CardTitle>
          <CardText>
            Lucid dreams give you the ability to control your own dreams and steer them toward the direction you want. In the lucid state, you are more willing to confront threats and as a result, become more self confident. When you achieve lucidity, you can use it as a tool to improve your sports game, to rehearse for a speech,
            to fulfill your fantasies, or to solve a problem in your waking life. In fact, some athletes utilize their lucid dreams to practice their tennis serve, golf stroke or bat swing. Even in your day to day life, you can use lucid dreams to ask  the boss for a raise, prepare for a first date, overcome phobias,  get over writer block, etc.
          </CardText>
          <CardTitle><h6 className="mt-4">Vividness</h6></CardTitle>
          <CardText>
            Lucid dreams give you the ability to control your own dreams and steer them toward the direction you want. In the lucid state, you are more willing to confront threats and as a result, become more self confident. When you achieve lucidity, you can use it as a tool to improve your sports game, to rehearse for a speech,
            to fulfill your fantasies, or to solve a problem in your waking life. In fact, some athletes utilize their lucid dreams to practice their tennis serve, golf stroke or bat swing. Even in your day to day life, you can use lucid dreams to ask  the boss for a raise, prepare for a first date, overcome phobias,  get over writer block, etc.
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

export default Techniques;
