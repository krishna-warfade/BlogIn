import Navbar from './Navbar';
import Home from './HomePage';
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom'; //for routing

function App() {
  return (
   <div className="App">
    <Navbar />
    <div className="Content">
    <Home />
    </div>
   </div>
  );
}

export default App;
