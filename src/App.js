import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import Main from './Main';
import Nf from './Nf';

function App() {
  return (
    <div className="App">
     <Router>
      <Switch>
        <Route exact path="/">
            <Main/>
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
