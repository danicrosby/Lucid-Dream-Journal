import React from 'react';
import { Route, Switch } from 'react-router-dom';
import PropTypes from 'prop-types';
import AddDream from '../views/AddDream';
import Dreams from '../views/Dreams';
import SingleDream from '../views/SingleDream';
import Welcome from '../views/Welcome';
import Reality from '../views/Reality';
import Lucid from '../views/Lucid';
import Calm from '../views/Calm';
import Stats from '../views/Stats';

export default function Routes({ user, setDreams }) {
  return (
    <>
      <Switch>
        <Route
          exact path="/"
          component={() => <Welcome
          user={user} />} />

        <Route
          path="/reality-checks"
          component={() => <Reality
          user={user} />} />

        <Route
          path="/lucid-checks"
          component={() => <Lucid
          user={user} />} />

        <Route
          path="/calm-checks"
          component={() => <Calm
          user={user} />} />

        <Route
          path="/stats"
          component={() => <Stats
          user={user} />} />

        <Route
          exact path='/dreams'
          component={() => <Dreams
          user={user} />} />

        <Route
          path='/dreams/:firebaseKey'
          component={() => <SingleDream
          user={user} />} />

        <Route
          path='/add-dream'
          component={() => <AddDream
          setDreams={setDreams}
          user={user} />} />
      </Switch>
    </>
  );
}

Routes.propTypes = {
  dreams: PropTypes.array.isRequired,
  setDreams: PropTypes.func.isRequired,
  user: PropTypes.any,
};
