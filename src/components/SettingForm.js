import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import 'react-nice-dates/build/style.css';
import Fab from '@material-ui/core/Fab';
import CheckIcon from '@material-ui/icons/Check';
import {
  Form,
  FormGroup,
  Input,
  Card,
  CardHeader,
  Container,
  CardBody,
} from 'reactstrap';
import PropTypes from 'prop-types';
import { addSettings, updateSettings } from '../helpers/data/SettingsData';

const SettingsForm = ({
  setSettings,
  name,
  lastName,
  email,
  password,
  firebaseKey
}) => {
  const [setting, setSetting] = useState({
    name: name || '',
    lastName: lastName || '',
    email: email || '',
    password: password || '',
    firebaseKey: firebaseKey || null
  });
  const history = useHistory();

  const handleInputChange = (e) => {
    setSetting((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (setting.firebaseKey) {
      updateSettings(setting);
    } else {
      addSettings(setting).then((response) => {
        setSettings(response);
        history.push('/settings');
      });

      setSetting({
        name: '',
        lastName: '',
        email: '',
        password: '',
        firebaseKey: null
      });
    }
  };

  return (
    <Container className="dream-form-container">
      <Card className="add-dream-form">
        <CardHeader><h2>Settings</h2>
        </CardHeader>
        <CardBody className="add-dream-card-body">

          <Form id='add-dream-form' autoComplete='off' onSubmit={handleSubmit}>
            <FormGroup>
              <Input
                className="input-text"
                name='firstName'
                id='firstName'
                value={setting.name}
                type='text'
                placeholder='First Name'
                onChange={handleInputChange}
              />
            </FormGroup>

            <FormGroup>
              <Input
                name='lastName'
                id='lastName'
                value={setting.lastName}
                type='text'
                placeholder='Last Name'
                onChange={handleInputChange}
              />
            </FormGroup>

            <FormGroup>
              <Input
                name='email'
                id='email'
                value={setting.email}
                type='email'
                placeholder='Email'
                onChange={handleInputChange}
              />
            </FormGroup>

            <FormGroup>
              <Input
                name='password'
                id='password'
                value={setting.password}
                type='password'
                placeholder='Password'
                onChange={handleInputChange}
              />
            </FormGroup>

            <center><Fab className="add-btn-submit" type='submit'><CheckIcon /></Fab></center>
          </Form>
        </CardBody>
      </Card>
    </Container >
  );
};

SettingsForm.propTypes = {
  formTitle: PropTypes.string.isRequired,
  setSettings: PropTypes.func,
  name: PropTypes.string,
  lastName: PropTypes.string,
  email: PropTypes.string,
  password: PropTypes.string,
  firebaseKey: PropTypes.string,
  user: PropTypes.any
};

export default SettingsForm;
