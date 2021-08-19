import './App.css';
import Coordinates from './components/Coordinates';
import { BrowserRouter as Router } from 'react-router-dom'

function App() {
  return (
    <Router>
      <div className="App">
        <Coordinates />
      </div>
    </Router>
  );
}

export default App;