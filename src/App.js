import Navbar from './Navbar';
import Home from './HomePage';
import Create from './Create';
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom'; //for routing

function App() {
  return (
    <Router>
      <div className="App">
          <Navbar />
            <div className="Content">
                <Switch>
                  <Route exact path='/'>
                    <Home /> {/* Home component will be rendered at the root path */}
                  </Route>
                  <Route path='/create'>
                    <Create /> {/* Create component will be rendered at the /create path */}
                  </Route>
                </Switch>
            </div>
      </div>
   </Router>
  );
}

export default App;
