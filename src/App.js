import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { useContext } from 'react';
import { GlobalContext } from './global'; 
import './App.css';
import Home from './Home';
import Nf from './Nf';
import History from './History';
import Navbar from './Navbar';
import Main from './Main';

function App() {
  const {dmode, setDmode} = useContext(GlobalContext)
  return (
    <div className={`App${dmode ? 'dark-mode' : ''}`}>
     <Router>
      
      <Switch>
      <Route exact path="/">
            <Main />
        </Route>
        <Route exact path="/home">
            <Navbar/>
            <Home/>
        </Route>
        <Route exact path = "/history">
          <Navbar/>
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
