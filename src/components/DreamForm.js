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
  CardBody,
  CardFooter,
} from 'reactstrap';
import PropTypes from 'prop-types';
import { addDream, updateDream } from '../helpers/data/DreamData';

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
    <Card className="add-dream-form mt-5 mb-5">
      <CardHeader><h5>{formTitle}</h5>
        {/* {date ? format(date, 'MMMM dd, yyyy', { locale: enGB }) : 'Enter Date'} */}
      </CardHeader>
      <Form id='add-dream-form' autoComplete='off' onSubmit={handleSubmit}>
        <CardBody className="add-dream-card-body">
          <FormGroup>
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
            <Input
              className="input-text"
              name='entry'
              id='entry'
              value={dream.entry}
              type='textarea'
              placeholder='What was your dream about...'
              onChange={handleInputChange}
            />
          </FormGroup>

          <FormGroup>
            <Input
              className="input-text"
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
            <Input
              className="input-text"
              type="select"
              name="dreamType"
              id="dreamType"
              placeholder='Dream Type'
              onChange={handleInputChange}>
              <option>Dream Type</option>
              <option>Daydreams</option>
              <option>Epic</option>
              <option>Good</option>
              <option>Frustrating</option>
              <option>Funny</option>
              <option>Lucid</option>
              <option>Nightmare</option>
              <option>Premonition</option>
              <option>Recurring</option>
              <option>Unsettling</option>
            </Input>
          </FormGroup>

          <FormGroup>
            <Input
              className="input-text"
              name='emotion'
              id='emotion'
              value={dream.emotion}
              type='select'
              placeholder='Emotion'
              onChange={handleInputChange}>
              <option>Emotion</option>
              <option>Afraid</option>
              <option>Angry</option>
              <option>Annoyed</option>
              <option>Anxious</option>
              <option>Betrayed</option>
              <option>Confused</option>
              <option>Depressed</option>
              <option>Despair</option>
              <option>Embarrassed</option>
              <option>Envy</option>
              <option>Excited</option>
              <option>Fear</option>
              <option>Frustrated</option>
              <option>Guilty</option>
              <option>Happy</option>
              <option>Jealous</option>
              <option>Loved</option>
              <option>Pain</option>
              <option>Panic</option>
              <option>Parranoid</option>
              <option>Peace</option>
              <option>Pride</option>
              <option>Rage</option>
              <option>Rejection</option>
              <option>Scared</option>
              <option>Sad</option>
            </Input>
          </FormGroup>

          <FormGroup>
            <Input
              className="input-text"
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
              className="input-text"
              name='place'
              id='place'
              value={dream.place}
              type='select'
              placeholder='Place'
              onChange={handleInputChange}>
              <option>Location</option>
              <option>Beach</option>
              <option>Bus</option>
              <option>Classroom</option>
              <option>College</option>
              <option>Home</option>
              <option>Ocean</option>
              <option>Outside</option>
              <option>Salon</option>
              <option>Underwater</option>
            </Input>
          </FormGroup>

          <FormGroup>
            <Input
              className="input-text"
              name='thing'
              id='thing'
              value={dream.thing}
              type='select'
              placeholder='Thing'
              onChange={handleInputChange}>
              <option>Thing</option>
              <option>Afterlife</option>
              <option>Airplane</option>
              <option>Alcohol</option>
              <option>Alligator</option>
              <option>Ambulance</option>
              <option>Angel</option>
              <option>Animal</option>
              <option>Apocalypse</option>
              <option>Aquarium</option>
              <option>Arcade</option>
              <option>Bed</option>
              <option>Beach</option>
              <option>Bird</option>
              <option>bridge</option>
              <option>Car</option>
              <option>Bus</option>
              <option>Bridge</option>
              <option>Casket</option>
              <option>Classmates</option>
              <option>Computer</option>
              <option>Desk</option>
              <option>Dinosaur</option>
              <option>Eyes</option>
              <option>Exam</option>
              <option>Fire</option>
              <option>Graduation</option>
              <option>Homework</option>
              <option>Library</option>
              <option>Ocean</option>
              <option>Monolith</option>
              <option>Raptor</option>
              <option>Skateboard</option>
              <option>Teacher</option>
              <option>Tooth</option>
              <option>Turkey</option>
              <option>Tiger</option>
              <option>Water</option>

            </Input>
          </FormGroup>

          <FormGroup>
            <Input
              className="input-text"
              name='action'
              id='action'
              value={dream.action}
              type="select"
              placeholder='Action'
              onChange={handleInputChange}>
              <option>Action</option>
              <option>Bitten</option>
              <option>Chased</option>
              <option>Driving</option>
              <option>Falling</option>
              <option>Fighting</option>
              <option>Flying</option>
              <option>Walking</option>
              <option>OutOfBreath</option>
              <option>Naked</option>
              <option>Skating</option>
              <option>Swimming</option>
              <option>Running</option>
              <option>Sleeping</option>
              <option>Urinating</option>
            </Input>
          </FormGroup>

          <FormGroup>
            <Input
              className="input-text"
              name='color'
              id='color'
              value={dream.color}
              type="select"
              placeholder='Ambient Color'
              onChange={handleInputChange}>
              <option>Color</option>
              <option>Amber</option>
              <option>Beige</option>
              <option>Black</option>
              <option>Blue</option>
              <option>Brown</option>
              <option>Floresent</option>
              <option>Fosphorescent</option>
              <option>Gold</option>
              <option>Grey</option>
              <option>Green</option>
              <option>Pink</option>
              <option>Multicolor</option>
              <option>Neon</option>
              <option>Orange</option>
              <option>Purple</option>
              <option>Red</option>
              <option>White</option>
              <option>Yellow</option>

            </Input>
          </FormGroup>

          <FormGroup>
            <Input
              className="input-text"
              name='followUp'
              id='followUp'
              value={dream.followUp}
              type='text'
              placeholder='More Details'
              onChange={handleInputChange}
            />
          </FormGroup>

          <FormGroup>
            <Input
              className="input-text"
              name='realization'
              id='realization'
              value={dream.realization}
              type='text'
              placeholder='Realization'
              onChange={handleInputChange}
            />
          </FormGroup>
        </CardBody>
        <CardFooter>
          <center><Fab className="add-btn-submit" size="small" type='submit'><CheckIcon /></Fab></center>
        </CardFooter>
      </Form>
    </Card>
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
