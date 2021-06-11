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
  // Label
} from 'reactstrap';
import PropTypes from 'prop-types';
import { addDream, updateDream } from '../helpers/data/DreamData';

const DreamForm = ({
  formTitle,
  setDreams,
  name,
  entry,
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
    type: type || '',
    emotion: emotion || '',
    people: people || '',
    place: place || '',
    thing: thing || '',
    color: color || '',
    firebaseKey: firebaseKey || null
  });
  const history = useHistory();
  const [date, setDate] = useState();

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
              className="date-input"
              date={date}
              onDateChange={setDate}
              format='MMMM dd, yyyy'
              locale={enGB}>
              {({ inputProps, focused }) => (
                <input
                  className={`input${focused ? ' -focused' : ''}`}
                  {...inputProps}
                  placeholder='  Date'
                />
              )}
            </DatePicker>

            {/* <FormGroup>
              <Label for="dream-type">Dream Type</Label>
              <Input
                type="select"
                name="dream-type"
                id="dream-type"
                onChange={handleInputChange}>
                  <option>Good Dream</option>
                  <option>Bad Dream</option>
                  <option>Nightmare Dream</option>
                  <option>Lucid Dream</option>
                  <option>Premonition Dream</option>
              </Input>
            </FormGroup>

            <FormGroup>
              <Label for="emotion">Emotion</Label>
              <Input
                type="select"
                name="emotion"
                id="emotion"
                onChange={handleInputChange}>
                  <option>Happy</option>
                  <option>Sad</option>
                  <option>Angry</option>
                  <option>Loved</option>
                  <option>Hurt</option>
              </Input>
            </FormGroup>

            <FormGroup>
              <Label for="people">People</Label>
              <Input
                type="select"
                name="people"
                id="exampleSelect"
                onChange={handleInputChange}>
                  <option>Jon</option>
                  <option>Dani</option>
                  <option>Egan</option>
                  <option>Logan</option>
                  <option>Stranger</option>
              </Input>
            </FormGroup>

            <FormGroup>
              <Label for="place">Place</Label>
              <Input
                type="select"
                name="place"
                id="place"
                onChange={handleInputChange}>
                  <option>House</option>
                  <option>School</option>
                  <option>Paris</option>
                  <option>Missouri</option>
                  <option>NSS</option>
              </Input>
            </FormGroup>

            <FormGroup>
              <Label for="thing">Thing</Label>
              <Input
                type="select"
                name="thing"
                id="thing"
                onChange={handleInputChange}>
                  <option>car</option>
                  <option>boat</option>
                  <option>hammer</option>
                  <option>computer</option>
                  <option>keyboard</option>
              </Input>
            </FormGroup>

            <FormGroup>
              <Label for="color">Color</Label>
              <Input
                type="select"
                name="color"
                id="color"
                onChange={handleInputChange}>
                  <option>Blue</option>
                  <option>Black</option>
                  <option>Red</option>
                  <option>Orange</option>
                  <option>Green</option>
              </Input>
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
    </Container >
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
