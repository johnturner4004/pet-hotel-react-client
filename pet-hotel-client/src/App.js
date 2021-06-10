import logo from './logo.svg';
import './App.css';
import {HashRouter as Router, Route, Link} from 'react-router-dom'
import TempHome from './TempHome/TempHome'

function App() {
  return (
      <Router>
        <Route exact='/' to='home'>
          <TempHome />
        </Route>
      </Router>

    
  );
}

export default App;
