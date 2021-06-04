import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import {
  Button, Form, FormGroup, Label,
  Input, Card, CardHeader, Container,
  CardFooter, CardBody, CardTitle,
} from 'reactstrap';
import PropTypes from 'prop-types';
import { addDream, updateDream } from '../helpers/data/DreamData';

const DreamForm = ({
  formTitle,
  setDreams,
  name,
  entry,
  firebaseKey
}) => {
  const [dream, setDream] = useState({
    name: name || '',
    entry: entry || '',
    firebaseKey: firebaseKey || null
  });
  const history = useHistory();

  const handleInputChange = (e) => {
    setDream((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (dream.firebaseKey) {
      updateDream(dream).then(setDreams);
    } else {
      addDream(dream).then((response) => {
        setDreams(response);
        history.push('/dreams');
      });

      setDream({
        name: '',
        entry: '',
        firebaseKey: null
      });
    }
  };

  return (
    <Container className="dream-form-container">
      <Card className="add-dream-card">
        <CardHeader><h2>{formTitle}</h2></CardHeader>
        <CardBody className="add-dream-card-body">
          <CardTitle tag="h5">Special Title Treatment</CardTitle>
          <Form id='add-dream-form' autoComplete='off' onSubmit={handleSubmit}>
          <FormGroup>
            <Label for="name"></Label>
            <Input
              name='name'
              id='name'
              value={dream.name}
              type='text'
              placeholder='Enter Dream Title'
              onChange={handleInputChange}
            />
          </FormGroup>

          <FormGroup>
            <Label for="entry"></Label>
            <Input
              name='entry'
              id='entry'
              value={dream.entry}
              type='text'
              placeholder='Dream Description'
              onChange={handleInputChange}
            />
          </FormGroup>

          <Button className="add-btn-submit float-right" type='submit'>Submit</Button>
        </Form>
        </CardBody>
        <CardFooter>Footer</CardFooter>
      </Card>
    </Container>
  );
};

DreamForm.propTypes = {
  formTitle: PropTypes.string.isRequired,
  setDreams: PropTypes.func,
  name: PropTypes.string,
  entry: PropTypes.string,
  firebaseKey: PropTypes.string
};

export default DreamForm;
