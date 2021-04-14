import './App.css';
import {BrowserRouter as Router} from 'react-router-dom';
import Home from './pages';
import {HomeBackground} from './HomeElements';

function App() {
  return (
    <>
    <Router>
      <HomeBackground >
        <Home />
      </HomeBackground>      
    </Router>
    </>
  );
}

export default App;