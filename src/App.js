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

const App = () => (
  <Router>
    <div className="App">
      <Header />
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
        <Route exac path="/progress" component={Progress} />
      </Switch>
    </div>
  </Router>
);

export default App;
