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
      <Card className="mt-5">
        <CardBody>
          <div className="top-text">
            <h4>Calming Sounds & Techniques</h4>
            <i className="material-icons dream-type-icon"> cloud </i>
          </div>
          <CardTitle>Techniques</CardTitle>
          <CardText>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Odio eu feugiat pretium nibh ipsum consequat nisl vel. Amet mattis vulputate enim nulla aliquet porttitor.
            Nunc faucibus a pellentesque sit amet porttitor eget dolor. Tellus id interdum velit laoreet id donec ultrices tincidunt arcu. Maecenas ultricies mi eget mauris pharetra et ultrices neque ornare. Orci phasellus egestas tellus rutrum tellus pellentesque eu tincidunt tortor. Sit amet nulla facilisi morbi tempus iaculis urna id. Facilisis magna etiam tempor orci eu lobortis elementum. Velit euismod in pellentesque massa. Enim nunc faucibus a pellentesque sit amet porttitor eget dolor. Vitae turpis massa sed elementum tempus.
            Volutpat lacus laoreet non curabitur gravida arcu ac tortor dignissim. Euismod quis viverra nibh cras pulvinar mattis.
          </CardText>
          <center>
            <Fab className="fab-icons mr-3 ml-3"><Link className="nav-link" to="/education"><CheckIcon /></Link></Fab>
          </center>
        </CardBody>
      </Card>
      <Footer />
    </Container>
  );
}

export default Calming;
