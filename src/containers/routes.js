import {
  BrowserRouter as Router, Route, Switch, Redirect,
} from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Home from '../components/home';
import Header from '../components/header';
import Login from '../components/login';
import Signup from '../components/signup';
import Addcourse from '../components/addcourse';
import Coursecontainer from './coursecontainer';
import Singlecourse from '../components/singlecourse';
import Progress from './reportcont';

const Routes = ({ loggedin }) => {
  return;
  (<Router>
    <div className="routes">
      <Header />
      <Switch>
        <Route exact path="/">
          <Redirect to="/login" />
        </Route>
        <Route exac path="/home" component={Home} />
        <Route exac path="/addcourse" component={Addcourse} />
        <Route exac path="/courses/:id" component={Singlecourse} />
        <Route exac path="/courses" component={Coursecontainer} />
        <Route exac path="/progress" component={Progress} />
        <Route exac path="/login" component={Login} />
        <Route exac path="/signup" component={Signup} />
      </Switch>
    </div>
  </Router>
  );
};

Routes.propTypes = {
  loggedin: PropTypes.bool.isRequired,
};

const mapStateToProps = state => ({
  loggedin: state.user.loggedin,
});

export default connect(mapStateToProps, null)(Routes);
