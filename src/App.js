import '@fortawesome/fontawesome-free/css/all.min.css';
import {
  BrowserRouter as Router, Route, Switch,
} from 'react-router-dom';
import Navbar from './components/navbar';
import Home from './components/home';
import Login from './components/login';
import Signup from './components/signup';

const App = () => (
  <Router>
    <div className="App">
      <Navbar />
      <Switch>
        <Route exac path="/home" component={Home} />
        <Route exac path="/login" component={Login} />
        <Route exac path="/signup" component={Signup} />
      </Switch>
    </div>
  </Router>
);

export default App;
