import './App.css';
import {HashRouter as Router, Route, Redirect} from 'react-router-dom';
import Home from './Home/Home';
import GetPets from './GetPets/GetPets';



function App() {
  return (
      <Router>
        <Redirect exact from='/' to='home' />
          <Router>
            <Home />
          </Router>
        <Route exact path='/pet-list'>
          <GetPets />
        </Route>
        
      </Router>

    
  );
}

export default App;
