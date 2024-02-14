import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import Main from './Main';
import Nf from './Nf';
import History from './History';
import Navbar from './Navbar';

function App() {
  return (
    <div className="App">
     <Router>
      <Navbar/>
      <Switch>
        <Route exact path="/">
            <Main/>
        </Route>
        <Route exact path = "/history">
          <History/>
        </Route>
        <Route path="*">
            <Nf/>
        </Route>
      </Switch>
     </Router>
    </div>
  );
}

export default App;
