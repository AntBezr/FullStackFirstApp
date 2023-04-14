import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import './App.css';

function App() {
  return (
    <div className="App">
     <h5> full stack app</h5>
     <BrowserRouter>
     <nav>
      <ul>
        <li>
          <Link to="/">List Users</Link>
        </li>
        <li>
          <Link to="user/create">Create Users</Link>
        </li>
      </ul>
     </nav>
     </BrowserRouter>

    </div>
  );
}

export default App;
