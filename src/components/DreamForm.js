import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
// import { format } from 'date-fns';
// import { enGB } from 'date-fns/locale';
// import { DatePicker } from 'react-nice-dates';
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
  CardFooter
  // Label
} from 'reactstrap';
import PropTypes from 'prop-types';
import { addDream, updateDream } from '../helpers/data/DreamData';
// import Interp from '../helpers/data/Interp';

const DreamForm = ({
  formTitle,
  setDreams,
  setSingleDream,
  name,
  entry,
  date,
  dreamType,
  emotion,
  people,
  place,
  thing,
  action,
  color,
  followUp,
  realization,
  setEditing,
  firebaseKey
}) => {
  const [dream, setDream] = useState({
    name: name || '',
    entry: entry || '',
    dreamType: dreamType || '',
    date: date || '',
    emotion: emotion || '',
    people: people || '',
    place: place || '',
    thing: thing || '',
    action: action || '',
    color: color || '',
    followUp: followUp || '',
    realization: realization || '',
    firebaseKey: firebaseKey || null
  });
  const history = useHistory();
  // const [date, setDate] = useState();

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
      setEditing(false);
    } else {
      addDream(dream).then((response) => {
        setDreams(response);
        // setEditing(false);
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
      <Card className="add-dream-form mb-5">
        <CardHeader><h2>{formTitle}</h2>
          {/* {date ? format(date, 'MMMM dd, yyyy', { locale: enGB }) : 'Enter Date'} */}
        </CardHeader>
        <CardBody className="add-dream-card-body">

          <Form id='add-dream-form' autoComplete='off' onSubmit={handleSubmit}>
            <FormGroup>
              {/* <Label for="place">Title</Label> */}
              <Input
                className="input-text"
                name='name'
                id='name'
                value={dream.name}
                type='text'
                placeholder='Title'
                onChange={handleInputChange}
              />
            </FormGroup>

            <FormGroup>
              {/* <Label for="place">Record Dream</Label> */}
              <Input
                name='entry'
                id='entry'
                value={dream.entry}
                type='textarea'
                placeholder='What was your dream about...'
                onChange={handleInputChange}
              />
            </FormGroup>

            <FormGroup>
              {/* <Label for="place">Date</Label> */}
              <Input
                name='date'
                id='date'
                value={dream.date}
                type='text'
                placeholder='Date'
                onChange={handleInputChange}
              />
            </FormGroup>

            {/* Store date value on cards and edit forms */}
            {/* <FormGroup>
              <Label for="place">Date</Label>
              <DatePicker
                className="date-input"
                name="date"
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
            </FormGroup> */}

            <FormGroup>
              {/* <Label for="type">Dream Type</Label> */}
              <Input
                name='dreamType'
                id='dreamType'
                value={dream.dreamType}
                type='text'
                placeholder='Dream Type'
                onChange={handleInputChange}
              />
            </FormGroup>

            <FormGroup>
              {/* <Label for="emotion">Emotion</Label> */}
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
              {/* <Label for="people">People</Label> */}
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
              {/* <Label for="place">Place</Label> */}
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
              {/* <Label for="thing">Thing</Label> */}
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
              {/* <Label for="action">Action</Label> */}
              <Input
                name='action'
                id='action'
                value={dream.action}
                type='text'
                placeholder='Action'
                onChange={handleInputChange}
              />
            </FormGroup>

            <FormGroup>
              {/* <Label for="color">Ambient Color</Label> */}
              <Input
                name='color'
                id='color'
                value={dream.color}
                type='text'
                placeholder='Ambient Color'
                onChange={handleInputChange}
              />
            </FormGroup>

            <FormGroup>
              {/* <Label for="followUp">Follow Up</Label> */}
              <Input
                name='followUp'
                id='followUp'
                value={dream.followUp}
                type='text'
                placeholder='More Details'
                onChange={handleInputChange}
              />
            </FormGroup>

            <FormGroup>
              {/* <Label for="realization">Realization</Label> */}
              <Input
                name='realization'
                id='realization'
                value={dream.realization}
                type='text'
                placeholder='Realization'
                onChange={handleInputChange}
              />
            </FormGroup>

            <center><Fab className="add-btn-submit" type='submit'><CheckIcon /></Fab></center>
          </Form>
        </CardBody>
        <CardFooter>footer</CardFooter>
      </Card>
    </Container >
  );
};

DreamForm.propTypes = {
  formTitle: PropTypes.string.isRequired,
  setSingleDream: PropTypes.func,
  setDreams: PropTypes.func,
  setEditing: PropTypes.func,
  name: PropTypes.string,
  entry: PropTypes.string,
  date: PropTypes.string,
  dreamType: PropTypes.string,
  emotion: PropTypes.string,
  people: PropTypes.string,
  place: PropTypes.string,
  thing: PropTypes.string,
  action: PropTypes.string,
  color: PropTypes.string,
  followUp: PropTypes.string,
  realization: PropTypes.string,
  firebaseKey: PropTypes.string,
  user: PropTypes.any
};

export default DreamForm;
