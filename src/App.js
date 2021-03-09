import '@fortawesome/fontawesome-free/css/all.min.css';
import {
  BrowserRouter as Router, Route, Switch,
} from 'react-router-dom';
import Navbar from './components/navbar';
import Home from './components/home';
import Login from './components/login';
import Signup from './components/signup';
import Addcourse from './components/addcourse';
import Coursecontainer from './containers/coursecontainer';
import Courseinfo from './components/courseinfo';

const App = () => (
  <Router>
    <div className="App">
      <Navbar />
      <Switch>
        <Route exac path="/home" component={Home} />
        <Route exac path="/login" component={Login} />
        <Route exac path="/signup" component={Signup} />
        <Route exac path="/addcourse" component={Addcourse} />
        <Route exac path="/courses" component={Coursecontainer} />
        <Route exac path="/courseinfo" component={Courseinfo} />
      </Switch>
    </div>
  </Router>
);

export default App;
