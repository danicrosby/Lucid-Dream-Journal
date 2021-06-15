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

function Settings() {
  return (
    <Container className="sub-container mt-5">
      <Card>
        <CardBody>
          <div className="top-text">
            <h4>Settings</h4>
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
          <center>
            <Fab className="fab-icons mr-3 ml-3"><Link className="nav-link" to="/education"><CheckIcon /></Link></Fab>
          </center>
        </CardBody>
      </Card>
    </Container>
  );
}

export default Settings;
