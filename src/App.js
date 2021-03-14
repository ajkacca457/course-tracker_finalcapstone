import '@fortawesome/fontawesome-free/css/all.min.css';
import {
  BrowserRouter as Router, Route, Switch, Redirect,
} from 'react-router-dom';
import Navbar from './components/navbar';
import Home from './components/home';
import Login from './components/login';
import Signup from './components/signup';
import Addcourse from './components/addcourse';
import Coursecontainer from './containers/coursecontainer';
import Singlecourse from './components/singlecourse';

const App = () => (
  <Router>
    <div className="App">
      <Navbar />
      <Switch>
        <Route exact path="/">
          <Redirect to="/login" />
        </Route>
        <Route exac path="/home" component={Home} />
        <Route exac path="/login" component={Login} />
        <Route exac path="/signup" component={Signup} />
        <Route exac path="/addcourse" component={Addcourse} />
        <Route exac path="/courses/:id" component={Singlecourse} />
        <Route exac path="/courses" component={Coursecontainer} />
      </Switch>
    </div>
  </Router>
);

export default App;
