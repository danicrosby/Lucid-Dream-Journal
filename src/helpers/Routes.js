import React from 'react';
import { Route, Switch } from 'react-router-dom';
import PropTypes from 'prop-types';
import AddDream from '../views/AddFormView';
import Welcome from '../views/WelcomeView';
import Dreams from '../views/DreamsView';
import SingleDream from '../views/SingleCardView';

export default function Routes({ dreams, setDreams }) {
  return (
    <div>
      <Switch>
        <Route exact path='/' component={Welcome} />
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
