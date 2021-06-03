import React from 'react';
import { Route, Switch } from 'react-router-dom';
import PropTypes from 'prop-types';
import addDream from '../views/AddDream';
import Home from '../views/Home';
import Dreams from '../views/Dreams';
import SingleDream from '../views/SingleDream';
import NotFound from '../views/NotFound';

export default function Routes({ dreams, setDreams }) {
  return (
    <div>
      <Switch>
        <Route exact path='/' component={Home} />
        <Route
          exact
          path='/dreams'
          component={() => <Dreams dreams={dreams} setDreams={setDreams} />}
        />
        <Route
          path='/dreams/:firebaseKey'
          component={SingleDream}
        />
        <Route
          path='/add-dream'
          component={() => <addDream setDreams={setDreams} />}
        />
        <Route path='*' component={NotFound} />
      </Switch>
    </div>
  );
}

Routes.propTypes = {
  dreams: PropTypes.array.isRequired,
  setDreams: PropTypes.func.isRequired
};
