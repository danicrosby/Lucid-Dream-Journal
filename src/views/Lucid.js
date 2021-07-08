import React from 'react';
import {
  Card,
  CardHeader,
  CardText,
  CardBody,
  CardTitle,
  Button
} from 'reactstrap';
import LucidPop from '../components/LucidPop';

function Lucid() {
  return (
    <div className="education-card-container">
      <Card className="education-card">
        <CardBody className="education-card-body">
          <CardHeader className="ed-header">
            <span>Lucid Dreaming Techniques</span>
            <div className="ed-icon">
              <span><a href="/reality-checks"><Button className="material-icons button">chevron_left</Button></a></span>
              <LucidPop />
              <span><a href="/calm-checks"><Button className="material-icons button">navigate_next</Button></a></span>
            </div>
          </CardHeader>

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
      </Card>
    </div>
  );
}

export default Lucid;
