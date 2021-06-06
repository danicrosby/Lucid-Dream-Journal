import React from 'react';
import { Route, Switch } from 'react-router-dom';
import PropTypes from 'prop-types';
import AddDream from '../views/AddDream';
import Welcome from '../views/Welcome';
import Dreams from '../views/Dreams';
import SingleDream from '../views/SingleDream';

export default function Routes({ dreams, setDreams }) {
  return (
    <div className="routes-container">
      <Switch>
        <Route exact path='/' component={Welcome} />
        <Route
          exact
          path='/dreams'
          component={() => <Dreams dreams={dreams} setDreams={setDreams} />}
        />
        <Route
          path='/dreams/:firebaseKey'
          component={() => <SingleDream dreams={dreams} setDreams={setDreams} />}
        />
        <Route
          path='/add-dream'
          component={() => <AddDream setDreams={setDreams} />}
        />
      </Switch>
    </div>
  );
}

Routes.propTypes = {
  dreams: PropTypes.array.isRequired,
  setDreams: PropTypes.func.isRequired
};

// I want to redirect when delete single card. Card is deleting but page breaks becuase it's not there
