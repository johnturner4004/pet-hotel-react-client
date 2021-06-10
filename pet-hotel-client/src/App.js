import './App.css';
import {HashRouter as Router, Route} from 'react-router-dom';
import TempHome from './TempHome/TempHome';
import GetPets from './GetPets/GetPets';



function App() {
  return (
      <Router>
        <Route exact path='/' to='/home'>
          <TempHome />
        </Route>
        <Route exact path='/pet-list'>
          <GetPets />
        </Route>
        
      </Router>

    
  );
}

export default App;
