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
  addDetails,
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
    addDetails: addDetails || '',
    realization: realization || '',
    firebaseKey: firebaseKey || null
  });
  const history = useHistory();
  const [xdate, xsetDate] = useState();

  const handleInputChange = (e) => {
    setDream((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dream.date = xdate;
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
        addDetails: '',
        realization: '',
        firebaseKey: null
      });
    }
  };

  return (
    <Card className="add-dream-form">
      <CardHeader><h5>{formTitle}</h5>
        {xdate ? format(xdate, 'MMMM dd, yyyy', { locale: enGB }) : ''}
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
              <DatePicker
                className="input-text"
                name="date"
                date={xdate}
                value={xdate ? format(xdate, 'MMMM dd, yyyy', { locale: enGB }) : 'Enter Date'}
                onDateChange={xsetDate}
                format='MMMM dd, yyyy'
                locale={enGB}>
                {({ inputProps, focused }) => (
                  <input
                  id="date-input"
                    className={`input${focused ? ' -focused' : ''}`}
                    {...inputProps}
                    placeholder='    Date'
                  />
                )}
              </DatePicker>
            </FormGroup>

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
              <option>Bliss</option>
              <option>Epic</option>
              <option>Good</option>
              <option>False Awakening</option>
              <option>False Awakening Loop</option>
              <option>Frustrating</option>
              <option>Angry</option>
              <option>Funny</option>
              <option>Lucid</option>
              <option>Neutral</option>
              <option>Nightmare</option>
              <option>Omnious</option>
              <option>Premonition</option>
              <option>Realism and Non-Realism</option>
              <option>Stress</option>
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
              <option>Elated</option>
              <option>Embarrassed</option>
              <option>Envy</option>
              <option>Excited</option>
              <option>Fear</option>
              <option>Frustrated</option>
              <option>Guilty</option>
              <option>Happy</option>
              <option>Jealous</option>
              <option>Loved</option>
              <option>Neutral</option>
              <option>Pain</option>
              <option>Panic</option>
              <option>Parranoid</option>
              <option>Peace</option>
              <option>Pride</option>
              <option>Rage</option>
              <option>Rejection</option>
              <option>Sad</option>
              <option>Scared</option>
              <option>Terror</option>
              <option>Terrified</option>
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
              <option>Amusement Park</option>
              <option>Backyard</option>
              <option>Bathroom</option>
              <option>Beach</option>
              <option>Bus</option>
              <option>Building</option>
              <option>Bathroom</option>
              <option>Classroom</option>
              <option>College</option>
              <option>Darkness</option>
              <option>Forest</option>
              <option>Fortress</option>
              <option>Game Show</option>
              <option>Hills</option>
              <option>Home</option>
              <option>House</option>
              <option>Hut</option>
              <option>Ledge</option>
              <option>Mountain</option>
              <option>Ocean</option>
              <option>Outside</option>
              <option>Post-Apocalypse</option>
              <option>River</option>
              <option>Rock</option>
              <option>Rocks</option>
              <option>Road</option>
              <option>Salon</option>
              <option>Ship</option>
              <option>Sun</option>
              <option>Titanic</option>
              <option>Toilet</option>
              <option>Trail</option>
              <option>Underwater</option>
              <option>University</option>
              <option>Void</option>
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
              <option>Alien</option>
              <option>Ambulance</option>
              <option>Angel</option>
              <option>Animal</option>
              <option>Apocalypse</option>
              <option>Aquarium</option>
              <option>Arcade</option>
              <option>Backyard</option>
              <option>Balloon</option>
              <option>Bathroom</option>
              <option>Bed</option>
              <option>Beach</option>
              <option>Blanket</option>
              <option>Bird</option>
              <option>Bridge</option>
              <option>Building</option>
              <option>Buzzer</option>
              <option>Car</option>
              <option>Bus</option>
              <option>Bridge</option>
              <option>Casket</option>
              <option>Classmates</option>
              <option>Computer</option>
              <option>Desk</option>
              <option>Dinosaur</option>
              <option>Dirt</option>
              <option>Door</option>
              <option>Eyes</option>
              <option>Exam</option>
              <option>Fire</option>
              <option>Forest</option>
              <option>Fortress</option>
              <option>Ghost</option>
              <option>Graduation</option>
              <option>Gun</option>
              <option>Hair</option>
              <option>Hills</option>
              <option>Homework</option>
              <option>House</option>
              <option>Hut</option>
              <option>Ledge</option>
              <option>Library</option>
              <option>Ocean</option>
              <option>Path</option>
              <option>Machine</option>
              <option>Monolith</option>
              <option>Mountain</option>
              <option>Raptor</option>
              <option>River</option>
              <option>Road</option>
              <option>Robot</option>
              <option>Ship</option>
              <option>Skateboard</option>
              <option>Stone</option>
              <option>Sun</option>
              <option>Teacher</option>
              <option>Teeth</option>
              <option>Titanic</option>
              <option>Toilet</option>
              <option>Tooth</option>
              <option>Trail</option>
              <option>Tsumani</option>
              <option>Turkey</option>
              <option>Tiger</option>
              <option>Underwear</option>
              <option>Wall</option>
              <option>Water</option>
              <option>Window</option>
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
              <option>Going To The Bathroom</option>
              <option>Bitten</option>
              <option>Breathless</option>
              <option>Chased</option>
              <option>Climbing</option>
              <option>Driving</option>
              <option>Falling</option>
              <option>Floating</option>
              <option>Fighting</option>
              <option>Hiking</option>
              <option>Flying</option>
              <option>Out Of Breath</option>
              <option>Panicking</option>
              <option>Playing</option>
              <option>Naked</option>
              <option>Skating</option>
              <option>Reaching</option>
              <option>Running</option>
              <option>Searching</option>
              <option>Sleeping</option>
              <option>Stumbling</option>
              <option>Swimming</option>
              <option>Sweating</option>
              <option>Sweat</option>
              <option>Talking</option>
              <option>Training</option>
              <option>Urinating</option>
              <option>Walking</option>
              <option>Watching</option>
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
              name='addDetails'
              id='addDetails'
              value={dream.addDetails}
              type='text'
              placeholder='Additional Details'
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
  addDetails: PropTypes.string,
  realization: PropTypes.string,
  firebaseKey: PropTypes.string,
  user: PropTypes.any
};

export default DreamForm;
