import { useState } from 'react';
import './App.css';
import First from './Pages/FirstPage/First';
import Second from './Pages/SecondPage/Second';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect,
} from 'react-router-dom';

function App() {
  const [page, setPage] = useState(true);
  return (
    <div className="App">
      {page ? <First setPage={setPage} /> : <Second setPage={setPage} />}
    </div>
  );
}

export default App;
// {page ? <First /> : <Second />}
