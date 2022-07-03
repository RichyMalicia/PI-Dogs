import './App.css';
import Home from './components/Home/Home';
import LandingPage from './components/LandingPage/LandingPage';
import { Route } from 'react-router-dom';
import DogDetail from './components/DogDetail/DogDetail';
import DogCreate from './components/DogCreate/DogCreate';

function App() {
    return (
    <div className="App">
      
      <Route exact path="/" component={LandingPage}/>
      <Route exact path="/home" component={Home}/>
      <Route exact path='/createDog' component={DogCreate}/>
      <Route path='/detail/:id' component={DogDetail}/>
      
    </div>
    
  );
}

export default App;
