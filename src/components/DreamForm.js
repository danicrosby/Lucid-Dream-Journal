import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { format } from 'date-fns';
import { enGB } from 'date-fns/locale';
import { DatePicker } from 'react-nice-dates';
import 'react-nice-dates/build/style.css';
import {
  Form,
  FormGroup,
  Input,
  Card,
  CardHeader,
  CardBody,
  Button,
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
  object,
  action,
  color,
  allTags,
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
    object: object || '',
    action: action || '',
    color: color || '',
    allTags: allTags || '',
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
        dreamType: '',
        emotion: '',
        people: '',
        place: '',
        object: '',
        color: '',
        addDetails: '',
        realization: '',
        firebaseKey: null
      });
    }
  };

  return (
    <Card className="form">
      <Form id='form' autoComplete='off' onSubmit={handleSubmit}>
        <CardHeader className="header">
          <span>{formTitle}</span>
          <span><Button className="material-icons submit-btn" type='submit'>done</Button></span>
        </CardHeader>
        <CardBody className="form-body">

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
              placeholder='What was your dream about . . .'
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
              onChange={handleInputChange}>
              <option>Dream Type</option>
              <option>Angry</option>
              <option>Daydreams</option>
              <option>Bliss</option>
              <option>Epic</option>
              <option>False Awakening</option>
              <option>False Awakening Loop</option>
              <option>Frustrating</option>
              <option>Funny</option>
              <option>Good</option>
              <option>Lucid</option>
              <option>Neutral</option>
              <option>Nightmare</option>
              <option>Omnious</option>
              <option>Premonition</option>
              <option>Realism and Non-Realism</option>
              <option>Recurring</option>
              <option>Stress</option>
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
              onChange={handleInputChange}>
              <option>Emotion</option>
              <option>None</option>
              <option>Afraid</option>
              <option>Alone</option>
              <option>Angry</option>
              <option>Annoyed</option>
              <option>Anxious</option>
              <option>Betrayed</option>
              <option>Confused</option>
              <option>Depressed</option>
              <option>Despair</option>
              <option>Disapointment</option>
              <option>Dishonest</option>
              <option>Ecstasy</option>
              <option>Elated</option>
              <option>Embarrassed</option>
              <option>Emptiness</option>
              <option>Envy</option>
              <option>Excited</option>
              <option>Fear</option>
              <option>Frustrated</option>
              <option>Guilty</option>
              <option>Happy</option>
              <option>Jealous</option>
              <option>Loved</option>
              <option>Neutral</option>
              <option>Murderous</option>
              <option>Pain</option>
              <option>Panic</option>
              <option>Paranoid</option>
              <option>Peace</option>
              <option>Pride</option>
              <option>Rage</option>
              <option>Rejection</option>
              <option>Revenge</option>
              <option>Sad</option>
              <option>Scared</option>
              <option>Terrified</option>
              <option>Trapped</option>
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
              onChange={handleInputChange}>
              <option>Location</option>
              <option>None</option>
              <option>Abyss</option>
              <option>Amusement Park</option>
              <option>Backyard</option>
              <option>Bathroom</option>
              <option>Beach</option>
              <option>Bathtub</option>
              <option>Bus</option>
              <option>Building</option>
              <option>Campus</option>
              <option>Church</option>
              <option>Classroom</option>
              <option>College</option>
              <option>Darkness</option>
              <option>Elevator</option>
              <option>Forest</option>
              <option>Fortress</option>
              <option>Game Show</option>
              <option>Hallway</option>
              <option>Hills</option>
              <option>Home</option>
              <option>Hotel</option>
              <option>House</option>
              <option>Hut</option>
              <option>Ledge</option>
              <option>Mall</option>
              <option>Maze</option>
              <option>Mountain</option>
              <option>Numbers</option>
              <option>Obstacle Course</option>
              <option>Ocean</option>
              <option>Outside</option>
              <option>Post-Apocalypse</option>
              <option>River</option>
              <option>Road</option>
              <option>Salon</option>
              <option>Ship</option>
              <option>Skatepark</option>
              <option>Space</option>
              <option>Stairs</option>
              <option>Staircase</option>
              <option>Store</option>
              <option>Sun</option>
              <option>Titanic</option>
              <option>Trail</option>
              <option>Underwater</option>
              <option>University</option>
              <option>Void</option>
              <option>Woods</option>
            </Input>
          </FormGroup>

          <FormGroup>
            <Input
              className="input-text"
              name='object'
              id='object'
              value={dream.object}
              type='select'
              onChange={handleInputChange}>
              <option>Object</option>
              <option>None</option>
              <option>Abyss</option>
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
              <option>Axe</option>
              <option>Backyard</option>
              <option>Balloon</option>
              <option>Bathroom</option>
              <option>Bathtub</option>
              <option>Bed</option>
              <option>Beach</option>
              <option>Blood</option>
              <option>Blanket</option>
              <option>Bird</option>
              <option>Bridge</option>
              <option>Building</option>
              <option>Bus</option>
              <option>Buzzer</option>
              <option>Campus</option>
              <option>Canoe</option>
              <option>Car</option>
              <option>Casket</option>
              <option>Chair</option>
              <option>Church</option>
              <option>Classmates</option>
              <option>Computer</option>
              <option>Desk</option>
              <option>Dinosaur</option>
              <option>Dirt</option>
              <option>Door</option>
              <option>Elevator</option>
              <option>Eyes</option>
              <option>Exam</option>
              <option>Fire</option>
              <option>Forest</option>
              <option>Fortress</option>
              <option>Ghost</option>
              <option>Graduation</option>
              <option>Grass</option>
              <option>Gun</option>
              <option>Hallway</option>
              <option>Hair</option>
              <option>Horse</option>
              <option>Hills</option>
              <option>Homework</option>
              <option>House</option>
              <option>Hotel</option>
              <option>Hut</option>
              <option>Ledge</option>
              <option>Library</option>
              <option>Machine</option>
              <option>Mall</option>
              <option>Maze</option>
              <option>Monolith</option>
              <option>Mountain</option>
              <option>Murder</option>
              <option>Murderous</option>
              <option>Numbers</option>
              <option>Obstacle</option>
              <option>Ocean</option>
              <option>Path</option>
              <option>Projector</option>
              <option>Raptor</option>
              <option>Road</option>
              <option>Rock</option>
              <option>Rocks</option>
              <option>River</option>
              <option>Robot</option>
              <option>Shark</option>
              <option>Ship</option>
              <option>Shopping Cart</option>
              <option>Skateboard</option>
              <option>Stairs</option>
              <option>Staircase</option>
              <option>Stone</option>
              <option>Store</option>
              <option>Sun</option>
              <option>Teacher</option>
              <option>Teeth</option>
              <option>Toilet</option>
              <option>Tiger</option>
              <option>Titanic</option>
              <option>Tooth</option>
              <option>Trail</option>
              <option>Tsumani</option>
              <option>Turkey</option>
              <option>Underwear</option>
              <option>Wall</option>
              <option>Water</option>
              <option>Window</option>
              <option>Woods</option>
            </Input>
          </FormGroup>

          <FormGroup>
            <Input
              className="input-text"
              name='action'
              id='action'
              value={dream.action}
              type="select"
              onChange={handleInputChange}>
              <option>Action</option>
              <option>None</option>
              <option>Balancing</option>
              <option>Going To The Bathroom</option>
              <option>Bitten</option>
              <option>Breathless</option>
              <option>Chased</option>
              <option>Climbing</option>
              <option>Digging</option>
              <option>Driving</option>
              <option>Escaping</option>
              <option>Exiting</option>
              <option>Falling</option>
              <option>Floating</option>
              <option>Flying</option>
              <option>Fighting</option>
              <option>Hiking</option>
              <option>Looting</option>
              <option>Out Of Breath</option>
              <option>Panicking</option>
              <option>Playing</option>
              <option>Murdering</option>
              <option>Naked</option>
              <option>Reaching</option>
              <option>Running</option>
              <option>Searching</option>
              <option>Shopping</option>
              <option>Skating</option>
              <option>Sleeping</option>
              <option>Standing</option>
              <option>Stumbling</option>
              <option>Swimming</option>
              <option>Sweating</option>
              <option>Sweat</option>
              <option>Talking</option>
              <option>Training</option>
              <option>Typing</option>
              <option>Urinating</option>
              <option>Waiting</option>
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
              onChange={handleInputChange}>
              <option>Color</option>
              <option>None</option>
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
              name='allTags'
              id='allTags'
              value={dream.allTags}
              type="select"
              onChange={handleInputChange}>
               <option>Additonal Tags</option>
              <option>None</option>
              <option>Abyss</option>
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
              <option>Abyss</option>
              <option>Amusement Park</option>
              <option>Amber</option>
              <option>Axe</option>
              <option>Backyard</option>
              <option>Balloon</option>
              <option>Bathroom</option>
              <option>Bed</option>
              <option>Beach</option>
              <option>Blanket</option>
              <option>Blood</option>
              <option>Backyard</option>
              <option>Bathroom</option>
              <option>Bathtub</option>
              <option>Beach</option>
              <option>Bus</option>
              <option>Building</option>
              <option>Bird</option>
              <option>Bridge</option>
              <option>Building</option>
              <option>Bus</option>
              <option>Buzzer</option>
              <option>Beige</option>
              <option>Black</option>
              <option>Blue</option>
              <option>Brown</option>
              <option>Balancing</option>
              <option>Going To The Bathroom</option>
              <option>Bitten</option>
              <option>Breathless</option>
              <option>Chased</option>
              <option>Climbing</option>
              <option>Campus</option>
              <option>Canoe</option>
              <option>Car</option>
              <option>Casket</option>
              <option>Chair</option>
              <option>Church</option>
              <option>Classmates</option>
              <option>Computer</option>
              <option>Campus</option>
              <option>Church</option>
              <option>Classroom</option>
              <option>College</option>
              <option>Darkness</option>
              <option>Desk</option>
              <option>Dinosaur</option>
              <option>Dirt</option>
              <option>Door</option>
              <option>Digging</option>
              <option>Driving</option>
              <option>Escaping</option>
              <option>Exiting</option>
              <option>Elevator</option>
              <option>Eyes</option>
              <option>Exam</option>
              <option>Elevator</option>
              <option>Forest</option>
              <option>Fortress</option>
              <option>Fire</option>
              <option>Forest</option>
              <option>Fortress</option>
              <option>Falling</option>
              <option>Floating</option>
              <option>Flying</option>
              <option>Fighting</option>
              <option>Floresent</option>
              <option>Fosphorescent</option>
              <option>Gold</option>
              <option>Grey</option>
              <option>Green</option>
              <option>Ghost</option>
              <option>Graduation</option>
              <option>Grass</option>
              <option>Gun</option>
              <option>Game Show</option>
              <option>Hiking</option>
              <option>Hills</option>
              <option>Home</option>
              <option>House</option>
              <option>Hut</option>
              <option>Hallway</option>
              <option>Hair</option>
              <option>Horse</option>
              <option>Hills</option>
              <option>Homework</option>
              <option>Hotel</option>
              <option>House</option>
              <option>Hut</option>
              <option>Ledge</option>
              <option>Library</option>
              <option>Machine</option>
              <option>Mall</option>
              <option>Maze</option>
              <option>Monolith</option>
              <option>Mountain</option>
              <option>Numbers</option>
              <option>Obstacle</option>
              <option>Ocean</option>
              <option>Path</option>
              <option>Projector</option>
              <option>Raptor</option>
              <option>Road</option>
              <option>Rock</option>
              <option>Rocks</option>
              <option>River</option>
              <option>Robot</option>
              <option>Shark</option>
              <option>Ship</option>
              <option>Shopping Cart</option>
              <option>Skateboard</option>
              <option>Stairs</option>
              <option>Staircase</option>
              <option>Stone</option>
              <option>Store</option>
              <option>Sun</option>
              <option>Teacher</option>
              <option>Teeth</option>
              <option>Toilet</option>
              <option>Tiger</option>
              <option>Titanic</option>
              <option>Tooth</option>
              <option>Trail</option>
              <option>Tsumani</option>
              <option>Turkey</option>
              <option>Underwear</option>
              <option>Wall</option>
              <option>Water</option>
              <option>Window</option>
              <option>Woods</option>
              <option>Ledge</option>
              <option>Mall</option>
              <option>Mountain</option>
              <option>Multicolor</option>
              <option>Neon</option>
              <option>Naked</option>
              <option>Obstacle Course</option>
              <option>Ocean</option>
              <option>Outside</option>
              <option>Out Of Breath</option>
              <option>Orange</option>
              <option>Purple</option>
              <option>Panicking</option>
              <option>Playing</option>
              <option>Pink</option>
              <option>Post-Apocalypse</option>
              <option>River</option>
              <option>Red</option>
              <option>Road</option>
              <option>Reaching</option>
              <option>Running</option>
              <option>Searching</option>
              <option>Shopping</option>
              <option>Skating</option>
              <option>Sleeping</option>
              <option>Standing</option>
              <option>Stumbling</option>
              <option>Swimming</option>
              <option>Sweating</option>
              <option>Sweat</option>
              <option>Salon</option>
              <option>Ship</option>
              <option>Skatepark</option>
              <option>Space</option>
              <option>Stairs</option>
              <option>Staircase</option>
              <option>Store</option>
              <option>Sun</option>
              <option>Talking</option>
              <option>Training</option>
              <option>Typing</option>
              <option>Titanic</option>
              <option>Trail</option>
              <option>Urinating</option>
              <option>Underwater</option>
              <option>University</option>
              <option>Void</option>
              <option>Waiting</option>
              <option>Walking</option>
              <option>Watching</option>
              <option>White</option>
              <option>Yellow</option>
              <option>Looting</option>
            </Input>
          </FormGroup>

          <FormGroup>
            <Input
              className="input-text"
              name='addDetails'
              id='addDetails'
              value={dream.addDetails}
              type='textarea'
              placeholder='Additional Details . . .'
              onChange={handleInputChange} />
          </FormGroup>

          <FormGroup>
            <Input
              className="input-text"
              name='realization'
              id='realization'
              value={dream.realization}
              type='textarea'
              placeholder='Realizations . . .'
              onChange={handleInputChange} />
          </FormGroup>
        </CardBody>
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
  object: PropTypes.string,
  action: PropTypes.string,
  color: PropTypes.string,
  allTags: PropTypes.string,
  addDetails: PropTypes.string,
  realization: PropTypes.string,
  firebaseKey: PropTypes.string,
  user: PropTypes.any
};

export default DreamForm;
