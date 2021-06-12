import React from 'react';
import { Link } from 'react-router-dom';
import {
  Card,
  CardTitle,
  CardBody,
  Container,
  CardText
} from 'reactstrap';

function Calming() {
  return (
    <Container>
    <h4>Calming Techniques</h4>

    <Card className="sub-card">
      <CardBody className="sub-card-body">
        <div className="top-text">
          <h5>Account Info Here</h5>
          <i className="material-icons dream-type-icon"> cloud </i>
        </div>
        <CardTitle>Settings</CardTitle>
      <CardText>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Odio eu feugiat pretium nibh ipsum consequat nisl vel. Amet mattis vulputate enim nulla aliquet porttitor.
      Nunc faucibus a pellentesque sit amet porttitor eget dolor. Tellus id interdum velit laoreet id donec ultrices tincidunt arcu. Maecenas ultricies mi eget mauris pharetra et ultrices neque ornare. Orci phasellus egestas tellus rutrum tellus pellentesque eu tincidunt tortor. Sit amet nulla facilisi morbi tempus iaculis urna id. Facilisis magna etiam tempor orci eu lobortis elementum. Velit euismod in pellentesque massa. Enim nunc faucibus a pellentesque sit amet porttitor eget dolor. Vitae turpis massa sed elementum tempus.
      Volutpat lacus laoreet non curabitur gravida arcu ac tortor dignissim. Euismod quis viverra nibh cras pulvinar mattis.
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

export default Calming;
