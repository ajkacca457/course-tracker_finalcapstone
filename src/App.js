import '@fortawesome/fontawesome-free/css/all.min.css';
import {
  BrowserRouter as Router, Route, Switch, Redirect,
} from 'react-router-dom';
import Home from './components/home';
import Header from './components/header';
import Login from './components/login';
import Signup from './components/signup';
import Addcourse from './components/addcourse';
import Coursecontainer from './containers/coursecontainer';
import Singlecourse from './components/singlecourse';
import Progress from './containers/reportcont';
import Protected from './components/protected';

const App = () => (
  <Router>
    <div className="App">
      <Header />
      <Switch>
        <Route exact path="/">
          <Redirect to="/login" />
        </Route>
        <Route exac path="/login" component={Login} />
        <Route exac path="/signup" component={Signup} />
        <Route exac path="/home">
          <Protected Cmp={Home} />
        </Route>
        <Route exac path="/addcourse">
          <Protected Cmp={Addcourse} />
        </Route>

        <Route exac path="/courses/:id">
          <Protected Cmp={Singlecourse} />
        </Route>

        <Route exac path="/courses">
          <Protected Cmp={Coursecontainer} />
        </Route>

        <Route exac path="/progress">
          <Protected Cmp={Progress} />
        </Route>

      </Switch>
    </div>
  </Router>
);

export default App;
