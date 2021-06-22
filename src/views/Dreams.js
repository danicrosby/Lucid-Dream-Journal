import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';
import DreamCard from '../components/DreamCard';
import { getDreams } from '../helpers/data/DreamData';

function Dreams({ user }) {
  const [dreams, setDreams] = useState([]);

  useEffect(() => {
    getDreams().then((dreamsArray) => setDreams(dreamsArray));
  }, []);

  return (
    <div>
      <div className="dream-container">
      <center>
        <Link className="nav-link mt-3 mb-3" to="/add-dream">
          <Fab><AddIcon style={{ color: 'purple' }} /></Fab>
        </Link>
      </center>
      <div className="dream-card-container">
        {dreams.map((dreamInfo) => (
          <DreamCard
            key={dreamInfo.firebaseKey}
            firebaseKey={dreamInfo.firebaseKey}
            name={dreamInfo.name}
            entry={dreamInfo.entry}
            date={dreamInfo.date}
            dreamType={dreamInfo.dreamType}
            emotion={dreamInfo.emotion}
            people={dreamInfo.people}
            place={dreamInfo.place}
            thing={dreamInfo.thing}
            action={dreamInfo.action}
            color={dreamInfo.color}
            followUp={dreamInfo.followUp}
            realization={dreamInfo.realization}
            setDreams={setDreams}
            user={user}
          />
        ))}
      </div>
      </div>
    </div>
  );
}

Dreams.propTypes = {
  dreams: PropTypes.array,
  setDreams: PropTypes.func,
  user: PropTypes.any
};

export default Dreams;
