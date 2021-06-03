import React from 'react';
import PropTypes from 'prop-types';
import DreamCard from '../components/DreamCard';

function Dreams({ dreams, setDreams }) {
  return (
    <>
      <div className="card-container">
        {dreams.map((dreamInfo) => (
          <DreamCard
            key={dreamInfo.firebaseKey}
            firebaseKey={dreamInfo.firebaseKey}
            name={dreamInfo.name}
            entry={dreamInfo.entry}
            setDreams={setDreams}
          />
        ))}
      </div>
    </>
  );
}

Dreams.propTypes = {
  dreams: PropTypes.array.isRequired,
  setDreams: PropTypes.func.isRequired
};

export default Dreams;
