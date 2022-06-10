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
    <>
      <center>
        <Link className="nav-link add-dream-btn-link" to="/add-dream">
          <Fab className="add-dream-btn" size="small" color="dark"><AddIcon style={{ color: 'purple' }} /></Fab>
        </Link>
      </center>
      <div className="dream-bank-container">
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
            object={dreamInfo.object}
            action={dreamInfo.action}
            color={dreamInfo.color}
            addDetails={dreamInfo.addDetails}
            allTags={dreamInfo.allTags}
            realization={dreamInfo.realization}
            setDreams={setDreams}
            user={user}
          />
        ))}
      </div>
    </>
  );
}

Dreams.propTypes = {
  dreams: PropTypes.array,
  setDreams: PropTypes.func,
  user: PropTypes.func
};

export default Dreams;
