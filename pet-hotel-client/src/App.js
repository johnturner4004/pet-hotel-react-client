import './App.css';
import {HashRouter as Router, Route, Link} from 'react-router-dom'
import Home from './Home/Home'

function App() {
  return (
      <Router>
        <Route exact='/' to='home'>
          <Home />
        </Route>
      </Router>

    
  );
}

export default App;
