import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import {
  Button,
  Form,
  FormGroup,
  Label,
  Input
} from 'reactstrap';
import PropTypes from 'prop-types';
import { addDream, updateDream } from '../helpers/data/DreamData';

const DreamForm = ({
  formTitle,
  setDreams,
  name,
  entry,
  date,
  firebaseKey
}) => {
  const [dream, setDream] = useState({
    name: name || '',
    entry: entry || '',
    date: date || '',
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
    <div className='dream-form'>
      <Form id='addDreamForm' autoComplete='off' onSubmit={handleSubmit}>
        <h2>{formTitle}</h2>
        <FormGroup>
          <Label for="name"></Label>
          <Input
            name='name'
            id='name'
            value={dream.name}
            type='text'
            placeholder='Enter a dream Name'
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
            placeholder='Enter a entry Name'
            onChange={handleInputChange}
          />
        </FormGroup>

        <FormGroup>
          <Label for="date"></Label>
          <Input
            name='date'
            id='date'
            value={dream.date}
            type='text'
            placeholder='Enter a dream date'
            onChange={handleInputChange}
          />
        </FormGroup>

        <Button type='submit'>Submit</Button>
      </Form>
    </div>
  );
};

DreamForm.propTypes = {
  formTitle: PropTypes.string.isRequired,
  setDreams: PropTypes.func,
  name: PropTypes.string,
  entry: PropTypes.string,
  date: PropTypes.string,
  firebaseKey: PropTypes.string
};

export default DreamForm;
