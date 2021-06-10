import './App.css';
import {HashRouter as Router, Route} from 'react-router-dom'
import Home from './Home/Home'
import AddPet from './AddPet/AddPet.jsx';

function App() {
  return (
      <Router>
        <Route exact='/' to='home'>
          <Home />
        </Route>
        <Route exact='/addPet'>
          <AddPet />
        </Route>
      </Router>

    
  );
}

export default App;
