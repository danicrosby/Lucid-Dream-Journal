import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
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
import { addDream, updateDream } from '../helpers/data/DreamData';

const DreamForm = ({
  formTitle,
  setDreams,
  name,
  entry,
  date,
  type,
  firebaseKey
}) => {
  const [dream, setDream] = useState({
    name: name || '',
    entry: entry || '',
    date: date || '',
    type: type || '',
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
        date: '',
        firebaseKey: null
      });
    }
  };

  return (
    <Container className="dream-form-container">
      <Card className="add-dream-form">
        <CardHeader><h2>{formTitle}</h2></CardHeader>
        <CardBody className="add-dream-card-body">

          <Form id='add-dream-form' autoComplete='off' onSubmit={handleSubmit}>

            <FormGroup>
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
              <Input
                name='entry'
                id='entry'
                value={dream.entry}
                type='textarea'
                placeholder='Dream Description'
                onChange={handleInputChange}
              />
            </FormGroup>

            <FormGroup>
              <Input
                name='date'
                id='date'
                value={dream.date}
                type='text'
                placeholder='Dream Date'
                onChange={handleInputChange}
              />
            </FormGroup>

            <FormGroup>
              <Input
                name='type'
                id='type'
                value={dream.type}
                type='text'
                placeholder='Dream Type'
                onChange={handleInputChange}
              />
            </FormGroup>

            <Fab className="add-btn-submit" type='submit'><CheckIcon /></Fab>
          </Form>
        </CardBody>
      </Card>
    </Container>
  );
};

DreamForm.propTypes = {
  formTitle: PropTypes.string.isRequired,
  setDreams: PropTypes.func,
  name: PropTypes.string,
  entry: PropTypes.string,
  date: PropTypes.string,
  type: PropTypes.string,
  firebaseKey: PropTypes.string
};

export default DreamForm;
