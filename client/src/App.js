import './App.css';
import Home from './components/Home/Home';
import LandingPage from './components/LandingPage/LandingPage';
import { Route } from 'react-router-dom';
import DogDetail from './components/DogDetail/DogDetail';

function App() {
    return (
    <div className="App">
      
      <Route exact path="/" component={LandingPage}/>
      <Route exact path="/home" component={Home}/>
      <Route path='/detail/:name' component={DogDetail}/>
      
    </div>
    
  );
}

export default App;
