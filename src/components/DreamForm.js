import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { format } from 'date-fns';
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
  Label
} from 'reactstrap';
import PropTypes from 'prop-types';
import { addDream, updateDream } from '../helpers/data/DreamData';
import Interp from '../helpers/data/Interp';

const DreamForm = ({
  formTitle,
  setDreams,
  setSingleDream,
  name,
  entry,
  type,
  emotion,
  people,
  place,
  thing,
  color,
  followUp,
  realization,
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
    followUp: followUp || '',
    realization: realization || '',
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
      updateDream(dream).then(setSingleDream);
      switch (dream.thing) {
        case 'chased':
          console.warn(Interp.chased);
          break;
        case 'falling':
          console.warn(Interp.falling);
          break;
        case 'flying':
          console.warn(Interp.flying);
          break;
        case 'naked':
          console.warn(Interp.naked);
          break;
        case 'tiger':
          console.warn(Interp.tiger);
          break;
        default:
          console.warn('nothing selected');
      }
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
        followUp: '',
        realization: '',
        firebaseKey: null
      });
    }
  };

  return (
    <Container className="dream-form-container">
      <Card className="add-dream-form">
        <CardHeader><h2>{formTitle}</h2>
          {date ? format(date, 'MMMM dd, yyyy', { locale: enGB }) : 'Enter Date'}
        </CardHeader>
        <CardBody className="add-dream-card-body">

          <Form id='add-dream-form' autoComplete='off' onSubmit={handleSubmit}>
            <FormGroup>
              <Label for="place">Title</Label>
              <Input
                className="input-text"
                name='name'
                id='name'
                value={dream.name}
                type='text'
                onChange={handleInputChange}
              />
            </FormGroup>

            <FormGroup>
              <Label for="place">Record Dream</Label>
              <Input
                name='entry'
                id='entry'
                value={dream.entry}
                type='textarea'
                placeholder='What was your dream about...'
                onChange={handleInputChange}
              />
            </FormGroup>

            {/* Store date value on cards and edit forms */}
            <FormGroup>
              <Label for="place">Date</Label>
              <DatePicker
                className="date-input"
                date={date}
                value={date ? format(date, 'MMMM dd, yyyy', { locale: enGB }) : 'Enter Date'}
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
            </FormGroup>

            <FormGroup>
              <Label for="type">Dream Type</Label>
              <Input
                name='type'
                id='type'
                value={dream.type}
                type='text'
                onChange={handleInputChange}
              />
            </FormGroup>

            <FormGroup>
              <Label for="emotion">Emotion</Label>
              <Input
                name='emotion'
                id='emotion'
                value={dream.emotion}
                type='text'
                onChange={handleInputChange}
              />
            </FormGroup>

            <FormGroup>
              <Label for="people">People</Label>
              <Input
                name='people'
                id='people'
                value={dream.people}
                type='text'
                onChange={handleInputChange}
              />
            </FormGroup>

            <FormGroup>
              <Label for="place">Place</Label>
              <Input
                name='place'
                id='place'
                value={dream.place}
                type='text'
                onChange={handleInputChange}
              />
            </FormGroup>

            <FormGroup>
              <Label for="thing">Thing</Label>
              <Input
                name='thing'
                id='thing'
                value={dream.thing}
                type='text'
                onChange={handleInputChange}
              />
            </FormGroup>

            <FormGroup>
              <Label for="color">Ambient Color</Label>
              <Input
                name='color'
                id='color'
                value={dream.color}
                type='text'
                onChange={handleInputChange}
              />
            </FormGroup>

            <FormGroup>
              <Label for="realization">Realization</Label>
              <Input
                name='realization'
                id='realization'
                value={dream.realization}
                type='text'
                onChange={handleInputChange}
              />
            </FormGroup>

            <FormGroup>
              <Label for="followUp">Follow Up</Label>
              <Input
                name='followUp'
                id='followUp'
                value={dream.followUp}
                type='text'
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

DreamForm.propTypes = {
  formTitle: PropTypes.string.isRequired,
  setSingleDream: PropTypes.func,
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
  followUp: PropTypes.string,
  realization: PropTypes.string,
  firebaseKey: PropTypes.string,
  user: PropTypes.any
};

export default DreamForm;
