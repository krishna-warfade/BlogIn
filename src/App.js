import Navbar from './Navbar';
import Home from './HomePage';
import Create from './Create';
import BlogDetails from './BlogDetails'; //importing BlogDetails component to display individual blog details
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom'; //for routing
import NotFound from './NotFound';
import { useEffect } from 'react';
import useLocalStorage from "./hooks/useLocalStorage";
import './theme.css';

function App() {
  const [theme, setTheme] = useLocalStorage("theme", "light");

  useEffect(() => {
    document.body.className = theme;
  }, [theme]);

  const toggleTheme = () => {
    setTheme(prev => (prev === "light" ? "dark" : "light"));
  };
  return (
    <Router>
      <div className="App">
          <Navbar toggleTheme={toggleTheme} theme={theme} />
            <div className="Content">
                <Switch>
                  <Route exact path='/'>
                    <Home /> {/* Home component will be rendered at the root path */}
                  </Route>
                  <Route path='/create'>
                    <Create />
                  </Route>
                  <Route path='/blogs/:id'>
                    <BlogDetails /> {/* BlogDetails component will be rendered at the /blogs/:id path */}
                  </Route>
                  <Route path='*'> {/* Catch-all route for unmatched paths*/}
                    <NotFound /> {/* NotFound component will be rendered for any unmatched routes */}
                  </Route>
                </Switch>
            </div>
      </div>
   </Router>
  );
}

export default App;
