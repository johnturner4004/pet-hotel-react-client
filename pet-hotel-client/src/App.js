import './App.css';
import {HashRouter as Router, Route} from 'react-router-dom';
import Home from './Home/Home';
import GetPets from './GetPets/GetPets';



function App() {
  return (
      <Router>
        <Route exact='/' to='home'>
          <Home />
        </Route>
        <Route exact path='/pet-list'>
          <GetPets />
        </Route>
        
      </Router>

    
  );
}

export default App;
