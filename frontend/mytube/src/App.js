import './App.css';
import Header from './Header'
import Sidebar from './Sidebar'
import Videos from './Videos'
import Signin from './Signin'
import Signup from './Signup'
import {BrowserRouter as Router,Switch,Route} from 'react-router-dom';

function App() {
  return (
    <div className="app">
      <Router>
      <Header />
        <Switch >
          <Route path="/signin">
            <div className="switch">
          <Sidebar />
          <Signin />
          </div>
          </Route>
          <Route path="/signup">
            <div className="switch">
          <Sidebar />
          <Signup />
          </div>
          </Route>
        <Route path="/">
        
      <div className="app_page">
        <Sidebar />
        <Videos />
      </div>
        </Route>
        </Switch>
        </Router>
       </div>
  );
}

export default App;
