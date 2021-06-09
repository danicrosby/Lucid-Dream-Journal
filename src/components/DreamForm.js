import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { enGB } from 'date-fns/locale';
import { DatePicker } from 'react-nice-dates';
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
import { addDream, updateDream } from '../helpers/data/DreamData';

const DreamForm = ({
  formTitle,
  setDreams,
  name,
  entry,
  // date,
  type,
  emotion,
  people,
  place,
  thing,
  color,
  firebaseKey
}) => {
  const [dream, setDream] = useState({
    name: name || '',
    entry: entry || '',
    // date: date || '',
    type: type || '',
    emotion: emotion || '',
    people: people || '',
    place: place || '',
    thing: thing || '',
    color: color || '',
    firebaseKey: firebaseKey || null
  });
  const [date, setDate] = useState();
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
        emotion: '',
        people: '',
        place: '',
        thing: '',
        color: '',
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
                className="input-text"
                name='name'
                id='name'
                value={dream.name}
                type='text'
                placeholder='Dream Title'
                onChange={handleInputChange}
              />
            </FormGroup>

            <FormGroup>
              <Input
                name='entry'
                id='entry'
                value={dream.entry}
                type='textarea'
                placeholder='What was your dream about...'
                onChange={handleInputChange}
              />
            </FormGroup>

            <DatePicker
              date={date}
              onDateChange={setDate}
              format='MMMM d, yyyy'
              locale={enGB}>
              {({ inputProps, focused }) => (
                <input
                  className={`input${focused ? ' -focused' : ''}`}
                  {...inputProps}
                />
              )}
            </DatePicker>

            {/* <FormGroup>
              <Input
                name='date'
                id='date'
                value={dream.date}
                type='text'
                placeholder='Date'
                onChange={handleInputChange}
              />
            </FormGroup> */}

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

            <FormGroup>
              <Input
                name='emotion'
                id='emotion'
                value={dream.emotion}
                type='text'
                placeholder='Emotion'
                onChange={handleInputChange}
              />
            </FormGroup>

            <FormGroup>
              <Input
                name='people'
                id='people'
                value={dream.people}
                type='text'
                placeholder='People'
                onChange={handleInputChange}
              />
            </FormGroup>

            <FormGroup>
              <Input
                name='place'
                id='place'
                value={dream.place}
                type='text'
                placeholder='Place'
                onChange={handleInputChange}
              />
            </FormGroup>

            <FormGroup>
              <Input
                name='thing'
                id='thing'
                value={dream.thing}
                type='text'
                placeholder='Thing'
                onChange={handleInputChange}
              />
            </FormGroup>

            <FormGroup>
              <Input
                name='color'
                id='color'
                value={dream.color}
                type='text'
                placeholder='Color'
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
  emotion: PropTypes.string,
  people: PropTypes.string,
  place: PropTypes.string,
  thing: PropTypes.string,
  color: PropTypes.string,
  firebaseKey: PropTypes.string,
};

export default DreamForm;
