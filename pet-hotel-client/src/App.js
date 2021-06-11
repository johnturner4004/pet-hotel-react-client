import './App.css';
import {HashRouter as Router, Route, Redirect} from 'react-router-dom';
import Home from './Home/Home';
import GetPets from './GetPets/GetPets';
import RegisterOwner from './RegisterOwner/RegisterOwner';



function App() {
  return (
      <Router>
        <Redirect exact from='/' to='/home' />
          <Router>
            <Home />
          </Router>
        <Route exact path='/pet-list'>
          <GetPets />
        </Route>
        <Route exact path='/owners'>
          <RegisterOwner />
        </Route>
        
      </Router>

    
  );
}

export default App;
