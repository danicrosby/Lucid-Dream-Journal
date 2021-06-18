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

function Calming() {
  return (
    <Container>
      <Card className="sub-card mt-5">
        <CardBody className="sub-card-body">
          <div className="top-text mb-5">
            <h2 className="mb-3">Calming Sounds & Techniques</h2>
            <i className="material-icons dream-type-icon"> headphones </i>
          </div>
          <CardTitle><h6>Calming Technique</h6></CardTitle>
          <CardText>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Odio eu feugiat pretium nibh ipsum consequat nisl vel. Amet mattis vulputate enim nulla aliquet porttitor.
            Nunc faucibus a pellentesque sit amet porttitor eget dolor. Tellus id interdum velit laoreet id donec ultrices tincidunt arcu. Maecenas ultricies mi eget mauris pharetra et ultrices neque ornare. Orci phasellus egestas tellus rutrum
            tellus pellentesque eu tincidunt tortor. Sit amet nulla facilisi morbi tempus iaculis urna id. Facilisis magna etiam tempor orci eu lobortis elementum. Velit euismod in pellentesque massa.
          </CardText>
          <CardTitle><h6 className="mt-4">Calming Technique</h6></CardTitle>
          <CardText>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Odio eu feugiat pretium nibh ipsum consequat nisl vel. Amet mattis vulputate enim nulla aliquet porttitor.
            Nunc faucibus a pellentesque sit amet porttitor eget dolor. Tellus id interdum velit laoreet id donec ultrices tincidunt arcu.
          </CardText>
          <CardTitle><h6 className="mt-4">Calming Technique</h6></CardTitle>
          <CardText>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Odio eu feugiat pretium nibh ipsum consequat nisl vel. Amet mattis vulputate enim nulla aliquet porttitor.
            Nunc faucibus a pellentesque sit amet porttitor eget dolor. Tellus id interdum velit laoreet id donec ultrices tincidunt arcu. Maecenas ultricies mi eget mauris pharetra et ultrices neque ornare. Orci phasellus egestas tellus rutrum
            tellus pellentesque eu tincidunt tortor. Sit amet nulla facilisi morbi tempus iaculis urna id. Facilisis magna etiam tempor orci eu lobortis elementum. Velit euismod in pellentesque massa.
          </CardText>
          <center>
            <div className="check-icon mt-4">
              <Fab className="fab-icons mr-3 ml-3 mt-4"><Link className="nav-link" to="/education"><CheckIcon /></Link></Fab>
            </div>
          </center>
        </CardBody>
      </Card>
      <Footer />
    </Container>
  );
}

export default Calming;
