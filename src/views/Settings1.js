import React from 'react';
import { Link } from 'react-router-dom';
import Fab from '@material-ui/core/Fab';
import CheckIcon from '@material-ui/icons/Check';
import {
  Card,
  CardBody,
  Container,
  // Button,
  Form, FormGroup, Label, Input
} from 'reactstrap';
import Footer from '../components/Footer';

function Settings() {
  return (
    <Container className="sub-container">
      <Card className="sub-card">
        <CardBody className="sub-card-body">
          <div className="top-text mb-4">
            <h5 className="mb-3">Settings</h5>
            <i className="material-icons dream-type-icon"> settings_suggest </i>
          </div>

          {/* <Form id='settings-form' autoComplete='off' onSubmit={handleSubmit}> */}
          <Form id='settings-form' autoComplete='off'>
            <FormGroup>
              <Label for="fname">First Name</Label>
              <Input type="text" name="fname" id="fname" />
            </FormGroup>
            <FormGroup>
              <Label for="lname">Last Name</Label>
              <Input type="text" name="lname" id="lname" />
            </FormGroup>
            <FormGroup>
              <Label for="exampleEmail">Email</Label>
              <Input type="email" name="email" id="exampleEmail" />
            </FormGroup>
            <FormGroup>
              <Label for="password">Password</Label>
              <Input type="password" name="password" id="password" />
            </FormGroup>
          </Form>
        </CardBody>
        <center>
          <Fab className="fab-icons mr-3 ml-3 mt-3"><Link className="nav-link" to="/education"><CheckIcon /></Link></Fab>
        </center>
      </Card>
      <Footer />
    </Container>
  );
}

export default Settings;
