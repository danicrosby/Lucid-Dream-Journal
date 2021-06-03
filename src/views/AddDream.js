import React from 'react';
import PropTypes from 'prop-types';
import DreamForm from '../components/DreamForm';

function addDream({ setDreams }) {
  return (
    <div>
      <DreamForm
        formTitle='Add Dream'
        setDreams={setDreams}
      />
    </div>
  );
}

addDream.propTypes = {
  setDreams: PropTypes.func.isRequired
};

export default addDream;
