import React from 'react';
import PropTypes from 'prop-types';

export default function SingleDreamCard({ children, dream }) {
  return (
    <div>
      <h1>Dreams: {dream.name }</h1>
        {children}
      <footer>Footer</footer>
    </div>
  );
}

SingleDreamCard.propTypes = {
  children: PropTypes.any,
  dream: PropTypes.object
};
