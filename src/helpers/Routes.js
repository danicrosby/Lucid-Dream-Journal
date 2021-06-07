import React from 'react';
import { Route, Switch } from 'react-router-dom';
import PropTypes from 'prop-types';
import { Container } from 'reactstrap';
import AddDream from '../views/AddDream';
import Dreams from '../views/Dreams';
import SingleDream from '../views/SingleDream';
import Welcome from '../views/Welcome';
import Education from '../views/Education';
import RealityChecks from '../views/RealityChecks';
import Techniques from '../views/Techniques';
import Calming from '../views/Calming';
import Settings from '../views/Settings';
import Footer from '../components/Footer';

export default function Routes({ dreams, setDreams }) {
  return (
    <Container className="routes-container">
      <Switch>

        <Route exact path='/' component={Welcome} />
        <Route path="/education" component={Education} />
        <Route path="/reality-checks" component={RealityChecks} />
        <Route path="/techniques" component={Techniques} />
        <Route path="/calming" component={Calming} />
        <Route path="/settings" component={Settings} />

        <Route
          exact path='/dreams'
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
      <Footer />
    </Container>
  );
}

Routes.propTypes = {
  dreams: PropTypes.array.isRequired,
  setDreams: PropTypes.func.isRequired
};

// I want to redirect when delete single card. Card is deleting but page breaks becuase it's not there
