import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import './App.css';
import ListUser from './components/ListUser';
import CreateUser from './components/CreateUser';

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
     <Routes>
      <Route index element={<ListUser/>}></Route>
      <Route index  path="user/create" element={<CreateUser/>}></Route>
     </Routes>
     </BrowserRouter>

    </div>
  );
}

export default App;
